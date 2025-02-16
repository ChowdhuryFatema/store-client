import { Layout, Menu } from "antd";
import { HomeOutlined, SettingOutlined } from "@ant-design/icons";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useState, useEffect } from "react";
import { userPaths } from "../../routes/user.routes";
import { ShoppingOutlined } from "@ant-design/icons";
import { TSidebarItem } from "../../types";

const { Sider } = Layout;

const userRole = {
    ADMIN: "admin",
    USER: "user",
};

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(true);
    // const [isMobile, setIsMobile] = useState(false);

    const user = useAppSelector(selectCurrentUser);

    // Function to assign icons based on menu item keys
    const getMenuIcon = (key: string) => {
        switch (key) {
            case "Dashboard":
            // return <HomeOutlined className="!text-white !text-7xl mr-6" />;
            case "Home":
                return <HomeOutlined className="!text-white !text-3xl !pr-2" />;
            case "All Product":
                return <ShoppingOutlined className="!text-white !text-3xl !pr-2" />;
            case "settings":
                return <SettingOutlined />;
            default:
                return null;
        }
    };

    let sidebarItems: TSidebarItem[] = [];
    switch (user?.role) {
        case userRole.ADMIN:
            sidebarItems = sidebarItemsGenerator(adminPaths, "admin").map((item) => ({
                key: item.key,
                label: item.label,
                icon: getMenuIcon(item.key),
                children: item.children ? item.children.map(child => ({
                    key: child.key,
                    label: child.label,
                    icon: getMenuIcon(child.key)
                })) : undefined
            }));
            break;
        case userRole.USER:
            sidebarItems = sidebarItemsGenerator(userPaths, "store").map(item => ({
                key: item.key,
                label: item.label,
                icon: getMenuIcon(item.key),
                children: item.children ? item.children.map(child => ({
                    key: child.key,
                    label: child.label,
                    icon: getMenuIcon(child.key)
                })) : undefined
            }));
            break;
        default:
            sidebarItems = [];
            break;
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                // setIsMobile(true);
                setCollapsed(true);
            } else {
                // setIsMobile(false);
                setCollapsed(true);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Sider
            style={{ backgroundColor: "#3F0B40", position: "sticky", top: "0", left: "0" }}

            breakpoint="lg"
            // collapsedWidth={isMobile ? 0 : 70}
            collapsedWidth={0}
            collapsible
            collapsed={collapsed}
            onCollapse={(c) => setCollapsed(c)}
        >
            <div style={{ color: "white", textAlign: "center", padding: "20px 0px" }}>
                <h1>PH Uni</h1>
            </div>
            <Menu
                style={{ backgroundColor: "#3F0B40", color: "#ffffff" }}
                mode="inline"
                defaultSelectedKeys={["4"]}
                // itemStyle={{ backgroundColor: "red" }} 
                items={sidebarItems} // Icons added correctly
            />
        </Sider>
    );
};

export default Sidebar;
