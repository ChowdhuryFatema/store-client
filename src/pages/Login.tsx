import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { verifyToken } from "../utils/verifyToken";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";


const Login = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    // const { register, handleSubmit } = ({
    //     defaultValues: {
    //         id: 'A-0001',
    //         password: 'admin123'
    //     }
    // });

    const defaultValues = {
        email: 'admin@example.com',
        password: 'adminsecurepassword'
    }

    const [login, { error }] = useLoginMutation();

    // console.log("data => ", data)
    console.log("error => ", error)

    const onSubmit = async (data: FieldValues) => {
        console.log(data)
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
            if (user.role === 'admin') {
                navigate(`/${user.role}/dashboard`)
            } else {
                navigate(`/store/home`)
            }

        } catch (error) {
            toast.error('Something went wrong', { id: toastId })
        }

    }

    return (
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
            <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
                <PHInput type='text' name='email' label="Email" />
                <PHInput type='text' name='password' label="Password" />
                <Button htmlType="submit">Login</Button>
            </PHForm>
        </Row>
    );
};

export default Login;