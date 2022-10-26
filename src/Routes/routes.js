import { Checkbox } from "react-daisyui";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Checkout from "../Pages/Checkout/Checkout";
import Course from "../Pages/CourseDetail/Course";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import SignInPage from "../Pages/SignInPage/SignInPage";
import SignUnPage from "../Pages/SignUpPage/SignUpPage";

// You can do this:
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout></MainLayout>}>
      <Route
        path="/"
        element={<Home></Home>}
        loader={() => fetch("/allCourses")}
      />
      <Route
        path="home"
        element={<Home></Home>}
        loader={() => fetch("/allCourses")}
      />
      <Route
        path="courses"
        element={<Courses></Courses>}
        loader={() => fetch("/allCourses")}
      />
      <Route
        path="/:id"
        element={<Course></Course>}
        loader={({ params }) => fetch(`/${params.id}`)}
      ></Route>
      <Route
        path="checkout/:id"
        element={<Checkout></Checkout>}
        loader={({ params }) => fetch(`/${params.id}`)}
      ></Route>
      <Route path="signin" element={<SignInPage></SignInPage>}></Route>
      <Route path="signup" element={<SignUnPage></SignUnPage>}></Route>
    </Route>
  )
);
