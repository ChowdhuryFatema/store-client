
import { Modal, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import PHForm from "../../components/form/PHForm";
import PHInput from "../../components/form/PHInput";
import BtnPrimary from "../../components/ui/button/BtnPrimary";
import { useChangePasswordMutation } from "../../redux/features/auth/authApi";

type TChangePasswordModalProps = {
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
};

const ChangePasswordModal = ({ setIsModalOpen, isModalOpen }: TChangePasswordModalProps) => {
    const [changePassword] = useChangePasswordMutation(); // ✅ Correctly calling the mutation hook

    const defaultValues = {
        email: "admin@example.com",
        password: "adminsecurepassword",
    };

    const onSubmit = async (data: FieldValues) => {

        const toastId = toast.loading("Updating password...");

        try {
            const userInfo = {
                oldPassword: data.oldPassword,
                newPassword: data.newPassword,
            };

            // ✅ Correctly calling the mutation
            await changePassword(userInfo).unwrap();

            toast.success("Password changed successfully", { id: toastId, duration: 2000 });
            setIsModalOpen(false); // ✅ Close modal after success
        } catch (error) {
            toast.error("Something went wrong", { id: toastId });
        }
    };

    return (
        <Modal
            width={300}
            title="Change Password"
            open={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
            footer={null} // ✅ Removes default footer buttons
        >
            <Row>
                <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
                    <PHInput style={{ width: "250px" }} type="password" name="oldPassword" label="Current Password" />
                    <PHInput style={{ width: "250px" }} type="password" name="newPassword" label="New Password" />
                    <BtnPrimary btnText="Change Password" htmlType="submit" />
                </PHForm>
            </Row>
        </Modal>
    );
};

export default ChangePasswordModal;
