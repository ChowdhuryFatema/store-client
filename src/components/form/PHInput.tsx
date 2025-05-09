/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, useFormContext } from "react-hook-form";
import { Form, Input } from "antd";

type TInputProps = {
    type: string;
    name: string;
    label?: string;
    style?: any;
}

const PHInput = ({ type, name, label, ...otherProps }: TInputProps) => {
    const { control } = useFormContext(); // Get control from form context

    return (
        <Controller
            name={name}
            control={control} // Add this
            render={({ field, fieldState: { error } }) => (
                <Form.Item label={label}>
                    <Input {...otherProps} {...field} type={type} id={name} size="large" />
                    {error && <small style={{ color: 'red' }}>{error.message}</small>}
                </Form.Item>
            )}
        />
    );
};

export default PHInput;
