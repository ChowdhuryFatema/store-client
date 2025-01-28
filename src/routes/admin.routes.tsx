
import ProtectedRoute from "../components/layout/ProtectedRoute";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Home from "../pages/home/Home";
import AllProduct from "../pages/product/AllProduct";

export const adminPaths = [
    // {
    //     name: "Home",
    //     path: "home",
    //     element: <Home />,
    // },
    // {
    //     name: "All Product",
    //     path: "all-product",
    //     element: <AllProduct />,
    // },
    {
        name: "Dashboard",
        path: "dashboard",
        element: <ProtectedRoute><AdminDashboard /></ProtectedRoute>,
    },
    {
        name: "Academic Management",
        children: [
            // {
            //     name: "Create A. Semester",
            //     path: "create-academic-semester",
            //     element: <CreateAcademicSemester />,
            // },
            // {
            //     name: "Academic Semester",
            //     path: "academic-semester",
            //     element: <AcademicSemester />,
            // },
        ]
    },
    {
        name: "User Management",
        children: [
            // {
            //     name: "Create Admin",
            //     path: "create-admin",
            //     element: <CreateAdmin />,
            // },
            // {
            //     name: "Create Faculty",
            //     path: "create-faculty",
            //     element: <CreateFaculty />,
            // },
            // {
            //     path: "student-data/:studentId",
            //     element: <StudentDetails />,
            // },
        ]
    },
]

