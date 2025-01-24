import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
    type: string;
    name: string;
    label?: string;
}

const PHInput = ({ type, name, label }: TInputProps) => {

    return (
        <Controller
            name={name}
            render={({ field }) => (
                <Form.Item label={label}>
                    <Input {...field} type={type} id={name} size="large" />
                </Form.Item>
            )}
        />
    )
};

export default PHInput;