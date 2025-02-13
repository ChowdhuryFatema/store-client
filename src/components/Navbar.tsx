
import { MenuOutlined } from "@ant-design/icons";
import { Menu, Drawer, Button } from "antd";
import "antd/dist/reset.css";
// import "./styles.css"; 
import { useState } from "react";
import CartDrawer from "./CartDrawer";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../redux/features/auth/authSlice";
// import { useAppSelector } from "../redux/hook";

export const navLinks = [
    {
        path: "/",
        label: "Home",
    },
    {
        path: "/all-product",
        label: "Products",
    },
    {
        path: "/dashboard",
        label: "Dashboard",
    },

]

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const user = useAppSelector(selectCurrentUser);

    const showDrawer = () => {
        setVisible(true);
    };

    const closeDrawer = () => {
        setVisible(false);
    };

    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    const [open, setOpen] = useState(false);

    // const showDrawer = () => {
    //     setOpen(true);
    // };

    const onClose = () => {
        setOpen(false);
    };



    return (
        <nav className="navbar flex w-full justify-between items-center px-4 bg-gray-200">



            <div className="logo">MyLogo</div>
            <div className="hidden md:flex">
                {/* <Menu mode="horizontal" selectable={false}>
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">About</Menu.Item>
                    <Menu.Item key="3">Services</Menu.Item>
                    <Menu.Item key="4">Contact</Menu.Item>
                </Menu> */}
                {
                    navLinks.map((nav) => (
                        <Link className="!text-white !px-5" key={nav.label} to={nav.path}>
                            {nav.label}
                        </Link>
                    ))
                }

            </div>
            <div>
                <PiShoppingCartSimpleLight onClick={showDrawer} className='text-white text-3xl' />
                <CartDrawer onClose={onClose} open={open} />
                <Button onClick={handleLogout}>Logout</Button>
            </div>   <div className="mobile-menu md:hidden flex" onClick={showDrawer}>
                <MenuOutlined />
            </div>
            <Drawer title="Menu" placement="right" onClose={closeDrawer} open={visible}>
                <Menu mode="vertical" selectable={false}>
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">About</Menu.Item>
                    <Menu.Item key="3">Services</Menu.Item>
                    <Menu.Item key="4">Contact</Menu.Item>
                </Menu>
            </Drawer>


        </nav>
    );
};

export default Navbar;
