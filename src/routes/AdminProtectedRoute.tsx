import { ReactNode } from "react";
import { logout, selectCurrentUser, useCurrentToken } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hook";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const AdminProtectedRoute = ({ children }: { children: ReactNode }) => {

    const user = useAppSelector(selectCurrentUser);
    const token = useAppSelector(useCurrentToken);

    const dispatch = useDispatch();

    console.log(user)

    if (user?.role !== 'admin') {
        dispatch(logout())
    }

    if (!token) {
        return <Navigate to="/login" replace={true} />
    }

    if (user?.role === 'admin') {
        return children
    }


};

export default AdminProtectedRoute;