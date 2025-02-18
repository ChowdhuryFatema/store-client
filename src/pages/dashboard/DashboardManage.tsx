import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hook";
import EcommerceDashboard from "./EcommerceDashboard";
import UserDashboard from "./UserDashboard";



const DashboardManage = () => {

    const user = useAppSelector(selectCurrentUser);

    return (
        <div>
            {user?.role === "admin" && (
                <EcommerceDashboard />
            )}
            {user?.role === "user" && (
                <UserDashboard />
            )}
        </div>
    );
};

export default DashboardManage;