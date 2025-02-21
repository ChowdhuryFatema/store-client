import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { Checkbox, Form, Input } from "antd";
import { toast } from "sonner";
import { useAddProductMutation } from "../../redux/features/products/products.api";
import PHInput from "../../components/form/PHInput";
import PHForm from "../../components/form/PHForm";
import { TResponse } from "../../types";
import { TProduct } from "../../types/product.type";
import BtnPrimary from "../../components/ui/button/BtnPrimary";
import { productSchema } from "./ProductSchema";
import { zodResolver } from '@hookform/resolvers/zod';


const CreateProduct = () => {

    const [addProduct] = useAddProductMutation();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Creating...");

        try {
            // Create FormData
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

            if (!uploadedImgURL) {
                throw new Error("Image upload failed");
            }

            // setImgURL(uploadedImgURL);

            // Prepare product data
            const productData = {
                name: data.name,
                brand: data.brand,
                price: data.price,
                quantity: data.quantity,
                image: uploadedImgURL, 
                category: data.category,
                model: data.model,
                rating: Number(data.rating),
                inStock: data.inStock,
            };

            console.log("productData", productData);

            // Call the API after image upload is done
            const res = await addProduct(productData) as TResponse<TProduct>;

            console.log("res", res);

            if (res.error) {
                toast.error(res.error.data.message, { id: toastId });
            } else {
                toast.success("Product Created Successfully", { id: toastId });
            }
        } catch (error) {
            toast.error("Something went wrong", { id: toastId });
        }
    };

    return (
        <div className="!p-10 bg-gray-50">
            <h2 className="text-center text-orange-500 font-semibold text-4xl">Create Product</h2>
            <PHForm onSubmit={onSubmit} resolver={zodResolver(productSchema)}
            >

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <PHInput label="Name" name="name" type="text" />
                    <PHInput label="Brand" name="brand" type="text" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <PHInput label="Price" name="price" type="text" />
                    <PHInput label="Rating" name="rating" type="text" />


                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <PHInput label="Quantity" name="quantity" type="text" />
                    <Controller
                        name="image"
                        render={({ field: { onChange, value, ...field }, fieldState: { error } }) => (
                            <Form.Item label="Picture">
                                <Input
                                    type="file"
                                    value={value?.fileName}
                                    {...field}
                                    onChange={(e) => onChange(e.target.files?.[0])} />
                                {error && <small style={{ color: 'red' }}>{error.message}</small>}
                            </Form.Item>
                        )}
                    />

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <PHInput label="Category" name="category" type="text" />
                    <PHInput label="Model" name="model" type="text" />
                </div>
                <Controller
                    name="inStock"
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <Form.Item className="flex items-center gap-2">
                            <Checkbox
                                checked={value === true}
                                onChange={(e) => onChange(e.target.checked ? true : false)}
                            >
                                In Stock
                            </Checkbox><br />
                            {error && <small style={{ color: 'red' }}>{error.message}</small>}
                        </Form.Item>
                    )}
                />

                <BtnPrimary htmlType="submit" btnText="Submit" />
            </PHForm>
        </div>
    );
};

export default CreateProduct;