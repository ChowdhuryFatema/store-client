import { Form, Input, Row } from "antd";
import { Controller, FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useRegisterMutation } from "../../redux/features/auth/authApi";
import PHForm from "../../components/form/PHForm";
import PHInput from "../../components/form/PHInput";
import BtnPrimary from "../../components/ui/button/BtnPrimary";
import bike1 from "../../assets/images/banner1.jpg";
import { FaArrowLeftLong } from "react-icons/fa6";

const Register = () => {
  const navigate = useNavigate();

  const [register] = useRegisterMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");

    try {
      const ImgData = new FormData();
      ImgData.append("image", data.image);

      // Upload image and wait for response
      const imgUploadResponse = await fetch(
        "https://api.imgbb.com/1/upload?key=bf1c0909112d55ed03dd5922aefee45c",
        {
          method: "POST",
          body: ImgData,
        }
      );

      const imgUploadData = await imgUploadResponse.json();
      const uploadedImgURL = imgUploadData?.data?.display_url;

      // if (!uploadedImgURL) {
      //     throw new Error("Image upload failed");
      // }

      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
        image: uploadedImgURL ? uploadedImgURL : "null",
        role: "user",
      };

      await register(userInfo);

      toast.success("User registered successfully", {
        id: toastId,
        duration: 2000,
      });
      navigate(`/login`);
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
      console.log("error", error);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 items-center h-screen">
      <div className="col-span-2 !py-5">
        <div className="flex flex-col items-center !px-5 !md:px-10">
          <Link to={"/"}>
            <button className="flex items-center gap-2 cursor-pointer !mb-5 !text-sm">
              <FaArrowLeftLong /> Back Home
            </button>
          </Link>
          <div className="text-center !mb-5">
            <h2 className="text-2xl !font-semibold">
              Hi, Get Started Now 👋
            </h2>
            <p className="text-sm">
              Enter details to create your Trek Tales account
            </p>
          </div>
          <Row>
            <PHForm onSubmit={onSubmit}>
              <PHInput
                style={{ width: "320px" }}
                type="text"
                name="name"
                label="Name"
              />
              <PHInput
                style={{ width: "320px" }}
                type="text"
                name="email"
                label="Email"
              />
              <PHInput
                style={{ width: "320px" }}
                type="password"
                name="password"
                label="Password"
              />
              <Controller
                name="image"
                render={({
                  field: { onChange, value, ...field },
                  fieldState: { error },
                }) => (
                  <Form.Item label="Picture">
                    <Input
                      type="file"
                      value={value?.fileName}
                      {...field}
                      onChange={(e) => onChange(e.target.files?.[0])}
                    />
                    {error && (
                      <small style={{ color: "red" }}>{error.message}</small>
                    )}
                  </Form.Item>
                )}
              />
              <div className="!pt-4">
                <BtnPrimary btnText="Sign Up" htmlType="submit" />
              </div>
              <div className="flex !mt-5">
                <p>Already have an account? &nbsp;</p>
                <Link to="/login">
                  {" "}
                  <span className="text-orange-500">Sign In</span>
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

export default Register;
