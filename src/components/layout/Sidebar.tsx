import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { userPaths } from "../../routes/user.routes";

const { Sider } = Layout;

const userRole = {
    ADMIN: "admin",
    USER: "user",
}

const Sidebar = () => {

    const user = useAppSelector(selectCurrentUser);

    let sidebarItems;

    switch (user!?.role) {
        case userRole.ADMIN:
            sidebarItems = sidebarItemsGenerator(adminPaths, 'admin')
            break
        // case userRole.USER:
        //     sidebarItems = sidebarItemsGenerator(userPaths, 'store')
        //     break
        default:
            sidebarItems = sidebarItemsGenerator(userPaths, 'store')
    }

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div style={{ color: "white", textAlign: 'center', padding: '20px 0px' }}>
                <h1>PH Uni</h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
        </Sider>
    );
};

export default Sidebar;