
import { useGetMeQuery } from "../../redux/features/auth/authApi";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hook";
import profileImg from "../../assets/icons/profile.jpg";

const Profile = () => {
    const user = useAppSelector(selectCurrentUser);

    const { data, isLoading, error } = useGetMeQuery(user?.email, { skip: !user });

    const me = data?.data;

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading profile</div>;
    }

    // console.log("Profile Data:", data);

    return (

        <div className="text-white text-center !space-y-2">
            <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full border-4 border-orange-500">
                    <img
                        className="w-20 h-[73px] rounded-full object-cover !p-1"
                        src={me?.image ? me?.image : profileImg} alt="" />
                </div>
            </div>
            <p>Name: {me.name}</p>
            <p>Email: {me.email}</p>
        </div>
    );
};

export default Profile;
