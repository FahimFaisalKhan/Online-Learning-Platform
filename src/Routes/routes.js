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
import Blog from "../Pages/Blog/Blog";
import SignInPage from "../Pages/SignInPage/SignInPage";
import SignUnPage from "../Pages/SignUpPage/SignUpPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

// Here are all the routes :
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<MainLayout></MainLayout>}
      errorElement={<ErrorPage></ErrorPage>}
    >
      <Route
        path="/"
        element={<Home></Home>}
        loader={async () => {
          return fetch("https://asignment-10-server.vercel.app/allCourses");
        }}
      />
      <Route
        path="home"
        element={<Home></Home>}
        loader={async () => {
          return fetch("https://asignment-10-server.vercel.app/allCourses");
        }}
      />
      <Route
        path="courses"
        element={<Courses></Courses>}
        loader={async () => {
          return fetch("https://asignment-10-server.vercel.app/allCourses");
        }}
      />
      <Route path="blog" element={<Blog></Blog>} />
      <Route
        path="/:id"
        element={<Course></Course>}
        loader={async ({ params }) => {
          return fetch(`https://asignment-10-server.vercel.app/${params.id}`);
        }}
      ></Route>
      {/* This is protected route for only logged in users */}
      <Route
        path="checkout/:id"
        element={
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        }
        loader={async ({ params }) => {
          return fetch(`https://asignment-10-server.vercel.app/${params.id}`);
        }}
      ></Route>
      <Route path="signin" element={<SignInPage></SignInPage>}></Route>
      <Route path="signup" element={<SignUnPage></SignUnPage>}></Route>
    </Route>
  )
);
