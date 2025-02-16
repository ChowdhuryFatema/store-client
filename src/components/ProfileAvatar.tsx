import { useState } from "react";
import { Avatar, Dropdown, Menu } from "antd";
import { SettingOutlined, DashboardOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useAppSelector } from "../redux/hook";
import { logout, selectCurrentUser } from "../redux/features/auth/authSlice";
import { useGetMeQuery } from "../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import profileImg from "../assets/icons/profile.jpg";



const ProfileAvatar = () => {
    const user = useAppSelector(selectCurrentUser);
    const { data, isLoading, error } = useGetMeQuery(user?.email, { skip: !user });

    const me = data?.data;
    console.log("me", me)
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    const menu = (
        <Menu className="w-48 p-2 bg-white shadow-lg rounded-lg">
            <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
                <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            {/* <Menu.Item key="settings" icon={<SettingOutlined />}>
                <Link to="/settings">Settings</Link>
            </Menu.Item> */}
            <Menu.Item className="!text-orange-500" key="logout" icon={<LogoutOutlined />}>
                <button onClick={handleLogout}>Logout</button>
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
                    src={me?.image ? me?.image : profileImg} alt=""
                    icon={!me?.image && <UserOutlined />}
                />
            </div>
        </Dropdown>
    );
};

export default ProfileAvatar;
