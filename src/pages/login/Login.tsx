import { Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hook";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { verifyToken } from "../../utils/verifyToken";
import PHForm from "../../components/form/PHForm";
import PHInput from "../../components/form/PHInput";
import BtnPrimary from "../../components/ui/button/BtnPrimary";
import bike1 from "../../assets/images/banner1.jpg";


const Login = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [login] = useLoginMutation();


    const onSubmit = async (data: FieldValues) => {
   
        const toastId = toast.loading('Logging in')


        try {
            const userInfo = {
                email: data.email,
                password: data.password,
            }

            const res = await login(userInfo).unwrap();

            const user = verifyToken(res.data.accessToken) as TUser;

            dispatch(setUser({ user: user, token: res.data.accessToken }));
            toast.success('Logged in', { id: toastId, duration: 2000 })
            // if (user.role === 'admin') {
            //     navigate(`/${user.role}/dashboard`)
            // } else {
            // }

            navigate(`/`)
        } catch (error) {
            toast.error('Something went wrong', { id: toastId })
        }

    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 items-center h-screen">
            <div className="col-span-2 !my-5">
                <div className="flex flex-col items-center !px-5 !md:px-10">
                    <div>
                        <h2 className="text-orange-500 text-2xl !font-semibold">Sign In</h2>
                    </div>
                    <Row>
                        <PHForm onSubmit={onSubmit}>
                            <PHInput style={{ width: "280px" }} type='text' name='email' label="Email" />
                            <PHInput style={{ width: "280px" }} type='text' name='password' label="Password" />
                            <BtnPrimary btnText="Sign In" htmlType="submit" />
                            <div className="flex !mt-5">
                                <p>Do not have an account? &nbsp;</p>
                                <Link to="/register">
                                    <span className="text-orange-500">Sign Up</span>
                                </Link>
                            </div>
                        </PHForm>
                    </Row>
                </div>
            </div>
            <div className="col-span-3 !md:ml-10 hidden lg:block">
                <img className="w-full h-screen object-cover" src={bike1} alt="" />
            </div>
        </div>
    );
};

export default Login;