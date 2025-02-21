
import { useGetMeQuery } from "../../redux/features/auth/authApi";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hook";
import profileImg from "../../assets/icons/profile.jpg";

const Profile = ({ collapsed }: {collapsed: boolean}) => {
    const user = useAppSelector(selectCurrentUser);
    const { data, isLoading, error } = useGetMeQuery(user?.email, { skip: !user });
    const me = data?.data;

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading profile</div>;

    return (
        <div className={`text-white text-center transition-all duration-300 ${collapsed ? "hidden" : "block"} !space-y-2`}>
            <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full border-4 border-orange-500 overflow-hidden">
                    <img
                        className="w-full h-full rounded-full object-cover p-1"
                        src={me?.image ? me?.image : profileImg} alt="Profile"
                    />
                </div>
            </div>
            <p className="text-sm font-semibold">{me?.name}</p>
            <p className="text-xs">{me?.email}</p>
        </div>
    );
};

export default Profile;

