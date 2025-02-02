import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useRegisterMutation } from "../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";


const Register = () => {

    const navigate = useNavigate();

    const defaultValues = {
        "name": "Admin User",
        "email": "user@example.com",
        "password": "user123",
    }

    const [register, { error }] = useRegisterMutation();

    // console.log("data => ", data)
    console.log("error => ", error)

    const onSubmit = async (data: FieldValues) => {
        console.log(data)
        const toastId = toast.loading('Logging in')


        try {
            const userInfo = {
                name: data.name,
                email: data.email,
                password: data.password,
                role: 'user',
            }

            await register(userInfo)

            toast.success('User registered successfully', { id: toastId, duration: 2000 })
            navigate(`/login`)


        } catch (error) {
            toast.error('Something went wrong', { id: toastId })

            console.log("err", error)
        }

    }

    return (
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
            <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
                <PHInput type='text' name='name' label="Name" />
                <PHInput type='text' name='email' label="Email" />
                <PHInput type='text' name='password' label="Password" />
                <Button htmlType="submit">Sign Up</Button>
            </PHForm>
        </Row>
    );
};

export default Register;