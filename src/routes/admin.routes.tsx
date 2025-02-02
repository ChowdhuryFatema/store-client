import AdminDashboard from "../pages/admin/AdminDashboard";
import Home from "../pages/home/Home";
import AllProduct from "../pages/products/AllProduct";
import CreateProduct from "../pages/products/CreateProduct";
import ProductDetails from "../pages/products/ProductDetails";
import AdminProtectedRoute from "./AdminProtectedRoute";

export const adminPaths = [
    {
        name: "Home",
        path: "home",
        element: <Home />,
    },
    {
        name: "All Product",
        path: "all-product",
        element: <AllProduct />,
    },
    {
        path: "all-product/:productId",
        element: <ProductDetails />,
    },
    {
        name: "Dashboard",
        path: "dashboard",
        element: <AdminProtectedRoute><AdminDashboard /></AdminProtectedRoute>,
            
    },
    {
        name: "Create Product",
        path: "create-product",
        element: <AdminProtectedRoute><CreateProduct /></AdminProtectedRoute>,
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

