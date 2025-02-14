
import { MenuOutlined } from "@ant-design/icons";
import { Menu, Drawer } from "antd";
import "antd/dist/reset.css";
import { useState } from "react";
import CartDrawer from "./CartDrawer";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../redux/features/auth/authSlice";
import BtnPrimary from "./ui/button/BtnPrimary";

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

    const showCartDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className="bg-[#131921] !p-2">
                asdfasdf
            </div>
            <nav className="navbar flex w-full justify-between items-center !p-4 bg-white">
                <div className="logo">MyLogo</div>
                <div className="hidden md:flex">
                    {
                        navLinks.map((nav) => (
                            <Link className="!text-black !hover:text-orange-500 font-bold !px-5" key={nav.label} to={nav.path}>
                                {nav.label}
                            </Link>
                        ))
                    }

                </div>
                <div className="flex items-center gap-4">
                    <PiShoppingCartSimpleLight onClick={showCartDrawer} className='text-white text-3xl' />
                    <CartDrawer onClose={onClose} open={open} />
                    {/* <Button onClick={handleLogout}>Logout</Button> */}
                    <BtnPrimary onClick={handleLogout} btnText="Logout" />
                    <div>
                        <div className="mobile-menu md:hidden flex" onClick={showDrawer}>
                            <MenuOutlined className="!text-white text-2xl" />
                        </div>
                        <Drawer title="Menu" placement="right" onClose={closeDrawer} open={visible}>
                            <Menu mode="vertical" selectable={false}>
                                <Menu.Item key="1">Home</Menu.Item>
                                <Menu.Item key="2">About</Menu.Item>
                                <Menu.Item key="3">Services</Menu.Item>
                                <Menu.Item key="4">Contact</Menu.Item>
                            </Menu>
                        </Drawer>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
