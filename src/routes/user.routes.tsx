import Home from "../pages/home/Home";
import AllProduct from "../pages/products/AllProduct";
import ProductDetails from "../pages/products/ProductDetails";

export const userPaths = [
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
    
]

