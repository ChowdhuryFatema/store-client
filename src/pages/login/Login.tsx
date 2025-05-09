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
import clsx from "clsx";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

type CredentialType = "user" | "admin";

const Login = () => {
  const [credential, setCredential] = useState<CredentialType>("user");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");

    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      // if (user.role === 'admin') {
      //     navigate(`/${user.role}/dashboard`)
      // } else {
      // }

      navigate(`/`);
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
      console.log(error);
    }
  };

  const credentialsData: Record<
    CredentialType,
    { email: string; password: string }
  > = {
    user: {
      email: "fatema@gmail.com",
      password: "Fatema123",
    },
    admin: {
      email: "admin@gmail.com",
      password: "Admin123",
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 items-center h-screen">
      <div className="col-span-2 !my-5">
        <div className="flex flex-col items-center !px-5 !md:px-10">
          <Link to={"/"}>
            <button className="flex items-center gap-2 cursor-pointer !mb-5 !text-sm">
              <FaArrowLeftLong /> Back Home
            </button>
          </Link>
          <div>
            <h2 className="text-xl !font-semibold">Welcome Back Man! 👋</h2>
            <p className="text-sm text-center">Enter Login Details</p>
          </div>
          <div className="flex justify-center gap-2 !my-5">
            <button
              onClick={() => setCredential("user")}
              className={clsx(
                credential === "user" && "bg-orange-500 !text-white",
                "hover:bg-orange-500 hover:!text-white !text-[12px] !px-4 !py-2 rounded border border-gray-300"
              )}
            >
              User Credentials
            </button>
            <button
              onClick={() => setCredential("admin")}
              className={clsx(
                credential === "admin" && "bg-orange-500 !text-white",
                "hover:bg-orange-500 hover:!text-white !text-[12px] !px-4 !py-2 rounded border border-gray-300"
              )}
            >
              Admin Credentials
            </button>
          </div>
          <Row>
            <PHForm
              onSubmit={onSubmit}
              defaultValues={credentialsData[credential]}
            >
              <PHInput
                style={{ width: "300px" }}
                type="text"
                name="email"
                label="Email"
              />
              <PHInput
                style={{ width: "300px" }}
                type="password"
                name="password"
                label="Password"
              />
              <div className="!pt-4">
                <BtnPrimary btnText="Sign In" htmlType="submit" />
              </div>
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
