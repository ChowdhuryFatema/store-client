import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { verifyToken } from "../utils/verifyToken";


const Login = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { register, handleSubmit } = useForm({
        defaultValues: {
            id: 'A-0001',
            password: 'admin123'
        }
    });

    const [login, { error }] = useLoginMutation();

    // console.log("data => ", data)
    console.log("error => ", error)

    const onSubmit = async (data: FieldValues) => {
        // console.log(data)
       const toastId = toast.loading('Logging in')


        try {
            const userInfo = {
                id: data.id,
                password: data.password,
            }

            const res = await login(userInfo).unwrap();

            const user = verifyToken(res.data.accessToken) as TUser;

            dispatch(setUser({ user: user, token: res.data.accessToken }));
            toast.success('Logged in', {id: toastId, duration: 2000})
            navigate(`/${user.role}/dashboard`)

        } catch (error) {
            toast.error('Something went wrong', {id: toastId})
        }

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="id">ID: </label>
                <input type="text" id="id" {...register('id')} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" {...register('password')} />
            </div>
            <Button htmlType="submit">Login</Button>
        </form>
    );
};

export default Login;