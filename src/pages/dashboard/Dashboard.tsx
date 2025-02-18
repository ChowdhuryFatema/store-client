import { useState } from "react";
import { Layout, Menu } from "antd";
import {
    DashboardOutlined,
} from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hook";
import SettingsDropdown from "../../components/SettingsDropdown";
import ChangePasswordModal from "../changePassword/ChangePassword";
import Profile from "../profile/Profile";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileVisible, setMobileVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const user = useAppSelector(selectCurrentUser);
    console.log(setMobileVisible)

    const toggleSidebar = () => setCollapsed(!collapsed);
    // const toggleMobileSidebar = () => setMobileVisible(!mobileVisible);

    return (
        <Layout style={{ minHeight: "100vh" }}>
            {/* Sidebar for larger screens */}
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={toggleSidebar}
                breakpoint="lg"
                collapsedWidth="0"
                style={{ display: mobileVisible ? "none" : "block", marginTop: "-50px" }}
            >
                <div style={{ height: 42, background: "#001529", margin: 16 }} />
                <Profile />
                <div className="flex flex-col justify-between h-[65vh] !mt-5">
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                        <Menu.Item key="1" icon={<DashboardOutlined />}>
                            <Link to="/dashboard">Dashboard</Link>
                        </Menu.Item>
                        {
                            user?.role === "admin" && (
                                <>
                                    <Menu.Item key="2" icon={<DashboardOutlined />}>
                                        <Link to="/dashboard/create-product">Create product</Link>
                                    </Menu.Item>
                                    <Menu.Item key="3" icon={<DashboardOutlined />}>
                                        <Link to="/dashboard/product-management">Product Management</Link>
                                    </Menu.Item>
                                    <Menu.Item key="4" icon={<DashboardOutlined />}>
                                        <Link to="/dashboard/orders">Order</Link>
                                    </Menu.Item>
                                    <hr />
                                    <Menu.Item key="5" icon={<DashboardOutlined />}>
                                        <Link to="/">Home</Link>
                                    </Menu.Item>
                                    <Menu.Item key="6" icon={<DashboardOutlined />}>
                                        <Link to="/all-product">Bikes</Link>
                                    </Menu.Item>
                                    <Menu.Item key="7" icon={<DashboardOutlined />}>
                                        <Link to="/orders">Orders</Link>
                                    </Menu.Item>
                                </>

                            )
                        }
                        {
                            user?.role === "user" && (
                                <>
                                    <Menu.Item key="3" icon={<DashboardOutlined />}>
                                        <Link to="/all-product">Bikes</Link>
                                    </Menu.Item>
                                    <Menu.Item key="4" icon={<DashboardOutlined />}>
                                        <Link to="/">Home</Link>
                                    </Menu.Item>
                                </>
                            )
                        }
                    </Menu>

                    <div>
                        <SettingsDropdown setIsModalOpen={setIsModalOpen} />
                    </div>
                </div>
            </Sider>

            {/* Drawer for mobile */}
            {/* <Drawer
        title="Menu"
        placement="left"
        closable
        onClose={toggleMobileSidebar}
        visible={mobileVisible}
        bodyStyle={{ padding: 0 }}
      >
        <Menu mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>Dashboard</Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>Users</Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>Settings</Menu.Item>
        </Menu>
      </Drawer> */}

            <Layout>
                <Header style={{ background: "#001529", padding: "0 8px" }}>

                </Header>
                <Content>
                    <Outlet />
                    <ChangePasswordModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
                </Content>
            </Layout>
        </Layout>
    );
};

export default Dashboard;
