// import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import StudentRegister from "./Pages/Register/StudentRegister";
import Join from "./Pages/join/Join";
import CollegeReg from "./Pages/Register/CollegeReg";
import AlumniReg from "./Pages/Register/AlumniReg";
import RecruiterReg from "./Pages/Register/RecruiterReg";
import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";
import UserHome from "./Pages/userHome/UserHome";
import Profile from "./Pages/profile/Profile";
import FileHome from "./Pages/Files/FileHome/FileHome";
import AddFile from "./Pages/Files/AddFile/AddFile";
import Resources from "./Pages/Resources/Resources";
import CourseMaterials from "./Pages/Resources/CourseMaterials";
import FindCollege from "./Pages/FindCollege/FindCollege";
import Sidebar from "./components/Sidebar/Sidebar";
import AdminSidebar from "./components/Admin/AdminSidebar/AdminSidebar";
import AdminViewColleges from "./components/Admin/AdminViewColleges/AdminViewColleges";
import AdminViewUsers from "./components/Admin/AdminViewUsers/AdminViewUsers";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import CollegeLeftbar from "./components/College/CollegeLeftbar/CollegeLeftbar";
import CollegeRightbar from "./components/College/CollegeRightbar/CollegeRightbar";
import Cover from "./components/College/Cover/Cover";
import CollegeViewUsers from "./components/College/CollegeViewUsers/CollegeViewUsers";
import CollegeDashboard from "./components/College/CollegeDashboard/CollegeDashboard";
import CollegePost from "./components/College/CollegePost/CollegePost";
import CollegePlacements from "./components/College/CollegePlacements/CollegePlacements";
import ProfileAbout from "./components/College/ProfileAbout/ProfileAbout"
import AdminPost from "./components/Admin/AdminPost/AdminPost";

// import Filter from "./components/filter/Filter";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";
import "./style.scss";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Sem1 from "./Pages/Resources/Sem1";
import FileFolder from "./components/File-Folder/FileFolder";
import { blue } from "@mui/material/colors";
import zIndex from "@mui/material/styles/zIndex";
import { AuthContext } from "./context/authContext";
import CollegeProfile from "./Pages/CollegeProfile/CollegeProfile";
import ProfileAlumni from "./components/College/ProfileAlumni/ProfileAlumni";
import Posts from "./components/Posts/Posts";
import Collegescroller from "./Pages/CollegeScroller/Collegescroller";
import AddResources from "./components/Admin/AddResourses/AddResources";
import Issues from "./Pages/Issues/Issues";

function App() {
  const { currentUser } = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{ flex: 7 }}>
            <Outlet />
          </div>
          {/* <Rightbar /> */}
        </div>
      </div>
    );
  };

  const AdminLayout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <div style={{ display: "flex" }}>
          <AdminSidebar />
          <div style={{ flex: 7,backgroundColor: "whitesmoke" }}>
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  const CollegeLayout = () => {
    useEffect(() => {}, []);

    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        {/* <Navbar/> */}
        <Cover />
        <div style={{ display: "flex" }}>
          <CollegeLeftbar />
          <div style={{ flex: 8 }}>
            <Outlet />
          </div>
          {/* <CollegeRightbar/> */}
        </div>
      </div>
    );
  };

  const CollegeProfileLayout = () => {
    useEffect(() => {}, []);

    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        
        <CollegeProfile />
        <Outlet />
          
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!(currentUser?.type == "users")) {
      return <Navigate to="/" />;
    }

    return children;
  };

  const AdminProtectedRoute = ({ children }) => {
    if (!(currentUser?.type == "admin")) {
      return <Navigate to="/" />;
    }

    return children;
  };

  const CollegeProtectedRoute = ({ children }) => {
    if (!(currentUser?.type == "colleges")) {
      return <Navigate to="/" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/studentReg",
      element: <StudentRegister />,
    },
    {
      path: "/collegeReg",
      element: <CollegeReg />,
    },
    {
      path: "/alumniReg",
      element: <AlumniReg />,
    },
    {
      path: "/recruiterReg",
      element: <RecruiterReg />,
    },
    {
      path: "/join",
      element: <Join />,
    },
    {
      path: "/fileHome",
      element: <FileHome />,
    },
    {
      path: "/add-file",
      element: <AddFile />,
    },
    {
      path: "/issues",
      element: <Issues/>,
    },
    {
      path: "/resources",
      element: <Resources />,
    },
    {
      path: "/file-folder",
      element: <FileFolder />,
    },
    {
      path: "/course-materials",
      element: <CourseMaterials />,
    },
    {
      path: "/course-materials/sem-1",
      element: <Sem1 />,
    },
    {
      path: "/find-college",
      element: <FindCollege />,
    },
    {
      path: "/college/:id",
      element: <CollegeProfile />,
    },
    {
      path: "/sidebar",
      element: <Sidebar />,
    },
    {
      path: "/user-home",
      element: <Layout />,
      children: [
        {
          path: "/user-home",
          element: (
            // <ProtectedRoute>
              <UserHome />
            // </ProtectedRoute>
          ),
        },
        {
          path: "/user-home/profile/:id",
          element: <Profile />,
        },
        {
          path: "/user-home/college/:id",
          element: <Collegescroller />,
        },
        
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin",
          element: (
            <AdminProtectedRoute>
              <Dashboard />
            </AdminProtectedRoute>
          ),
        },
        {
          path: "/admin/view-college",
          element: <AdminViewColleges />,
        },
        {
          path: "/admin/view-users",
          element: <AdminViewUsers />,
        },
        {
          path: "/admin/posts",
          element: <AdminPost />,
        },
        {
          path: "/admin/resources",
          element: <AddResources />,
        },
      ],
    },
    {
      path: "/college",
      element: <CollegeLayout />,
      children: [
        {
          path: "/college",
          element: (
            <CollegeProtectedRoute>
              <CollegeDashboard />
            </CollegeProtectedRoute>
          ),
        },
        {
          path: "/college/view-users",
          element: (
          <CollegeProtectedRoute>
          <CollegeViewUsers />
          </CollegeProtectedRoute>
          ),
        },
        {
          path: "/college/posts",
          element:(
            <CollegeProtectedRoute>
              <CollegePost/>
            </CollegeProtectedRoute>
          ),
          
        },
        {
          path: "/college/placements",
          element:(
            <CollegeProtectedRoute>
              <CollegePlacements/>
            </CollegeProtectedRoute>
          ),
          
        },
      ],
    },
    {
      path: "/college-profile",
      element: <CollegeProfileLayout />,
      children: [
        {
          path: "/college-profile",
          element: (
            <ProfileAbout/>
          ),
        },
        {
          path: "/college-profile/placements",
          element: (
            <CollegePlacements/>
          ),
        },
        {
          path: "/college-profile/alumni",
          element: (
            <ProfileAlumni/>
          ),
        },
        {
          path: "/college-profile/posts",
          element: (
            <Posts/>
          ),
        },
        
      ],
    },
  ]);

  return (
    <div className="App w-100">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
