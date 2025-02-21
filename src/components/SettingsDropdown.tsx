import { useState } from "react";
import { Dropdown, Menu } from "antd";
import { SettingOutlined, LockOutlined, LogoutOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/features/auth/authSlice";

type TChangePasswordModalProps = {
    setIsModalOpen: (isOpen: boolean) => void;
};

const SettingsDropdown = ({ setIsModalOpen }: TChangePasswordModalProps) => {
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    }

    const menu = (
        <Menu className="w-48 p-2 bg-white shadow-lg rounded-lg">
            <Menu.Item key="change-password" icon={<LockOutlined />}>

                <button onClick={() => setIsModalOpen(true)} className="!cursor-pointer">Change Password</button>

            </Menu.Item>
            <Menu.Item  onClick={handleLogout} className="!text-orange-500 !cursor-pointer" key="logout" icon={<LogoutOutlined />}>
                <button className="!cursor-pointer">Logout</button>
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
            <button className="cursor-pointer !text-white !ml-6">
                <SettingOutlined className="!text-white !mr-2" />
                Settings
            </button>
        </Dropdown>
    );
};

export default SettingsDropdown;
