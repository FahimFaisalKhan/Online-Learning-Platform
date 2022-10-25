import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";

// You can do this:
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout></MainLayout>}>
      <Route path="/" element={<Home></Home>} />
      <Route path="home" element={<Home></Home>} />
    </Route>
  )
);
