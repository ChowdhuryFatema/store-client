import { EnvironmentOutlined, MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
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
import { useGetMeQuery } from "../redux/features/auth/authApi";
import LanguageSwitcher from "./LanguageSwitcher";

export const navLinks = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/all-product",
    label: "Bikes",
  },
  {
    path: "/recent",
    label: "Recent",
  },
  {
    path: "/about-us",
    label: "About Us",
  },
  {
    path: "/contact-us",
    label: "Contact",
  },
];

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const cartData = useAppSelector((state) => state.cart);

  console.log("cartData?.items", cartData?.items);

  const user = useAppSelector(selectCurrentUser);
  const { data } = useGetMeQuery(user?.email, { skip: !user });

  const me = data?.data;

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
    <div className="h-[105px]">
      <div className="fixed w-full top-0 left-0 z-50">
        <div className="bg-[#131921] !py-2">
          <div className="w-[90%] max-w-[1400px] px-5 !mx-auto">
            <div className="text-white flex justify-between">
              <div className="flex gap-1 items-center">
                <EnvironmentOutlined
                  style={{ fontSize: "16px", color: "white" }}
                />
                <h2 className="text-white !mt-2">Bangladesh</h2>
              </div>
              <div className="flex gap-5 items-center">
                <div className="hidden md:block">
                  <LanguageSwitcher />
                </div>
                <div className="hidden md:block">
                  <p>Return & Order</p>
                </div>
                <p>Hello, {user ? " " + me?.name : " sign in"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white !shadow-xl border-b border-orange-300">
          <nav className="navbar flex justify-between items-center w-[90%] max-w-[1400px] px-5 !mx-auto">
            <div className="mobile-menu md:hidden flex" onClick={showDrawer}>
              <MenuOutlined className="text-xl" />
            </div>
            <Drawer
              title="Menu"
              placement="left"
              onClose={closeDrawer}
              open={visible}
              onClick={closeDrawer}
            >
              <div className="!space-y-3">
                {navLinks.map((nav) => (
                  <NavLink
                    style={{ color: "#8c8c8c" }}
                    className="!hover:text-orange-500 font-bold !px-5 block text-lg"
                    key={nav.label}
                    to={nav.path}
                  >
                    {nav.label}
                  </NavLink>
                ))}
              </div>
            </Drawer>

            <Link to="/">
              <h2 className="font-bold text-2xl flex items-center !mt-2 cursor-pointer text-black">
                <span className="text-orange-500">P</span>edal
                <img
                  className="w-10 h-10 object-cover !mx-1"
                  src={logo}
                  alt=""
                />
                <span className="text-orange-500">P</span>ulse
              </h2>
            </Link>

            <div className="hidden md:flex">
              {navLinks.map((nav) => (
                <NavLink
                  style={{ color: "black" }}
                  className="!hover:text-orange-500 font-bold !px-5"
                  key={nav.label}
                  to={nav.path}
                >
                  {nav.label}
                </NavLink>
              ))}
            </div>
            <div className="flex items-center">
              <div className="relative">
                <div className="absolute -top-3 right-2">
                  {cartData?.items?.length > 0 ? (
                    <span className="text-sm font-bold text-orange-500">
                      {cartData?.items?.reduce(
                        (acc, item) => acc + item.quantity,
                        0
                      ) ?? 0}
                    </span>
                  ) : (
                    <span className="text-sm font-bold text-orange-500">0</span>
                  )}
                </div>

                <PiShoppingCartSimpleLight
                  onClick={showCartDrawer}
                  className="text-3xl"
                />
              </div>
              <CartDrawer onClose={onClose} open={open} />
              <div className="!ml-5">
                {user ? (
                  <ProfileAvatar />
                ) : (
                  <div className="!space-x-2 flex">
                    <div className="hidden md:flex">
                      <Link to="/register">
                        <BtnPrimary btnText="Sign Up" />
                      </Link>
                    </div>
                    <Link to="/login">
                      <BtnSecondary btnText="Sign In" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
