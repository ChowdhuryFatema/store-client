import { useState } from "react";
import { Avatar, Dropdown, Menu } from "antd";
import { DashboardOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useAppSelector } from "../redux/hook";
import { logout, selectCurrentUser } from "../redux/features/auth/authSlice";
import { useGetMeQuery } from "../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import profileImg from "../assets/icons/profile.jpg";



const ProfileAvatar = () => {
    const user = useAppSelector(selectCurrentUser);
    const { data } = useGetMeQuery(user?.email, { skip: !user });

    const me = data?.data;
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
    }

    const menu = (
        <Menu className="w-48 p-2 bg-white shadow-lg rounded-lg">
            <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
                <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            {/* <Menu.Item key="settings" icon={<SettingOutlined />}>
                <Link to="/settings">Settings</Link>
            </Menu.Item> */}
            <Menu.Item className="!text-orange-500 !cursor-pointer" key="logout" icon={<LogoutOutlined />}>
                <button className="!cursor-pointer" onClick={handleLogout}>Logout</button>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown
            overlay={menu}
            trigger={["click"]}
            open={open}
            onOpenChange={setOpen}
            overlayClassName="rounded-lg"
        >
            <div className="border-2 border-orange-500 rounded-full">
                <Avatar
                    className="cursor-pointer border-2 border-orange-500"
                    size={40}
                    src={me?.image !== "null" ? me?.image : profileImg} alt=""
                    icon={!me?.image && <UserOutlined />}
                />
            </div>
        </Dropdown>
    );
};

export default ProfileAvatar;
