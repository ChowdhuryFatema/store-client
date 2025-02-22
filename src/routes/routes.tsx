import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import AllProduct from "../pages/products/AllProduct";
import ProductDetails from "../pages/products/ProductDetails";
import { routeGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { userPaths } from "./user.routes";
import VerifyOrder from "../pages/order/VerifyOrder";
import AllOrder from "../pages/order/AllOrder";
import Register from "../pages/register/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import CreateProduct from "../pages/products/CreateProduct";
import AdminProtectedRoute from "./AdminProtectedRoute";
import ProductManagement from "../pages/admin/ProductManagement";
import UpdateProduct from "../pages/products/UpdateProduct";
import ProtectedRoute from "./ProtectedRoute";
import About from "../pages/About";
import Contact from "../pages/Contact";
import DashboardManage from "../pages/dashboard/DashboardManage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "all-product",
                element: <AllProduct />,
            },
            {
                path: "all-product/:productId",
                element: <ProductDetails />,
            },
            {
                path: 'order-verify',
                element: <VerifyOrder />
            },
            {
                path: 'about-us',
                element: <About />
            },
            {
                path: 'contact-us',
                element: <Contact />
            },
        ]
    },
    {
        path: '/admin',
        element: <App />,
        children: routeGenerator(adminPaths),
    },
    {
        path: '/store',
        element: <App />,
        children: routeGenerator(userPaths),
    },
    { path: 'login', element: <Login /> },
    { path: 'register', element: <Register /> },
    {
        // name: "Dashboard",
        path: "dashboard",
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
        children: [
            {
                path: "/dashboard",
                element: <DashboardManage />,
            },
            {
                path: "create-product",
                element: <AdminProtectedRoute><CreateProduct /></AdminProtectedRoute>,
            },
            {
                // name: "Create Product",
                path: "product-management",
                element: <AdminProtectedRoute><ProductManagement /></AdminProtectedRoute>,
            },
            {
                // name: "Create Product",
                path: "update-product/:productId",
                element: <AdminProtectedRoute><UpdateProduct /></AdminProtectedRoute>,
            },
            {
                path: 'orders',
                element: <AllOrder />
            },
        ]

    },
])

export default router;