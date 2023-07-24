import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import CourseDetails from "../Pages/Home/Courses/CourseDetailCard";
import Profile from "../Pages/Profile/Profile";
import Error from "../Pages/Shared/Error/Error";
import AdmissionSelect from "../Pages/Admission/AdmissionSelect";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        // errorElement: <Error />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/colleges",
        element: <Colleges />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/admission/select/:id",
        element: <AdmissionSelect />,
      },
      {
        path: "/myCollege",
        element: <MyCollege />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/coursedetail/:id",
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: '/error',
        element: <Error />
      },
    ],
  },
]);
