import { useState } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  DashboardOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { navLinks } from "../../components/Navbar";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileVisible, setMobileVisible] = useState(false);

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
        style={{ display: mobileVisible ? "none" : "block", marginTop: "-60px" }}
      >
        <div style={{ height: 64, background: "#001529", margin: 16 }} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
           <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DashboardOutlined />}>
           <Link to="/">Home</Link>
          </Menu.Item>
          {/* <Menu.Item key="2" icon={<UserOutlined />}>Users</Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>Settings</Menu.Item> */}
        </Menu>
        <div>
          {
            navLinks.map((nav) => (
              <Link className="!text-white block" key={nav.label} to={nav.path}>
                {nav.label}
              </Link>
            ))
          }
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
        <Header style={{ background: "red", padding: "0 16px", display: "flex", alignItems: "center" }}>

        </Header>
        <Content>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>Admin Dashboard Content</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
