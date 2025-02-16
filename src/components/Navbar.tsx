
import { EnvironmentOutlined, MenuOutlined } from "@ant-design/icons";
import { Menu, Drawer } from "antd";
import "antd/dist/reset.css";
import { useState } from "react";
import CartDrawer from "./CartDrawer";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import logo from "./../assets/icons/logo.png";
import { useAppSelector } from "../redux/hook";
import ProfileAvatar from "./ProfileAvatar";
import BtnPrimary from "./ui/button/BtnPrimary";
import BtnSecondary from "./ui/button/BtnSecondary";

export const navLinks = [
    {
        path: "/",
        label: "Home",
    },
    {
        path: "/all-product",
        label: "Bikes",
    },
    // {
    //     path: "/dashboard",
    //     label: "Dashboard",
    // },

]

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    const cartData = useAppSelector((state) => state.cart);

    const user = useAppSelector(selectCurrentUser);
    // const { data, isLoading, error } = useGetMeQuery(user?.email, { skip: !user });

    // const me = data?.data;
    // console.log("me", me)

    const showDrawer = () => {
        setVisible(true);
    };

    const closeDrawer = () => {
        setVisible(false);
    };



    const [open, setOpen] = useState(false);

    const showCartDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className="bg-[#131921] !py-2">
                <div className="w-[90%] max-w-[1400px] px-5 !mx-auto">
                    <div className="text-white flex justify-between">
                        <div className="flex gap-1 items-center">
                            <EnvironmentOutlined style={{ fontSize: "16px", color: "white" }} />
                            <h2 className="text-white">Bangladesh</h2>
                        </div>
                        <div>
                        </div>
                        <div>
                            {user?.email}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white !shadow-xl border-b border-orange-300">
                <nav className="navbar flex justify-between items-center w-[90%] max-w-[1400px] px-5 !mx-auto">


                    <div className="mobile-menu md:hidden flex" onClick={showDrawer}>
                        <MenuOutlined className="text-xl" />
                    </div>
                    <Drawer title="Menu" placement="left" onClose={closeDrawer} open={visible}>
                        <Menu mode="vertical" selectable={false}>
                            <Menu.Item key="1">Home</Menu.Item>
                            <Menu.Item key="2">About</Menu.Item>
                            <Menu.Item key="3">Services</Menu.Item>
                            <Menu.Item key="4">Contact</Menu.Item>
                        </Menu>
                    </Drawer>


                    <Link to="/">
                        <h2 className="font-bold text-2xl flex items-center !mt-2 cursor-pointer text-black">
                            <span className="text-orange-500">P</span>edal
                            <img className="w-10 h-10 object-cover !mx-1" src={logo} alt="" />
                            <span className="text-orange-500">P</span>ulse
                        </h2>
                    </Link>


                    <div className="hidden md:flex">
                        {
                            navLinks.map((nav) => (
                                <NavLink style={{ color: "black" }} className="!hover:text-orange-500 font-bold !px-5" key={nav.label} to={nav.path}>
                                    {nav.label}
                                </NavLink>
                            ))
                        }

                    </div>
                    <div className="flex items-center">
                        <div className="relative">
                            <div className="absolute -top-3 right-2">
                                {cartData?.items?.length > 0 ? (
                                    cartData.items.map((item) => (
                                        <span className="text-sm font-bold text-orange-500">
                                            {item.quantity ?? "0"}
                                        </span>
                                    ))
                                ) : (
                                    <span className="text-sm font-bold text-orange-500">
                                        0
                                    </span>
                                )}
                            </div>

                            <PiShoppingCartSimpleLight onClick={showCartDrawer} className='text-3xl' />
                        </div>
                        <CartDrawer onClose={onClose} open={open} />
                        <div className="!ml-5">
                            {
                                user ?
                                    <ProfileAvatar /> :
                                    <div className="!space-x-2">
                                        <Link to="/register">
                                            <BtnPrimary btnText="Sign Up" />
                                        </Link>
                                        <Link to="/login">
                                            <BtnSecondary btnText="Sign In" />
                                        </Link>
                                    </div>
                            }
                        </div>

                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
