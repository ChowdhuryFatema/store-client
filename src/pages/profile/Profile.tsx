
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
        <div className="flex justify-center items-center h-[50vh]">
            <div>
                <h1>Profile</h1>
                <div className="w-40 h-40 rounded-full border-4 border-orange-500">
                    <img 
                    className="w-40 h-[153px] rounded-full object-cover !p-1" 
                    src={me?.image ? me?.image : profileImg} alt="" />
                </div>
                <p>{me.name}</p>
                <p> {me.email}</p>
                <p> {me.role}</p>
            </div>
        </div>
    );
};

export default Profile;
