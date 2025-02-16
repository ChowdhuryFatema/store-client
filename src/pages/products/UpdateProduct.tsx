import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { Checkbox, Form, Input } from "antd";
import { toast } from "sonner";
import { useGetSingleProductQuery, useUpdateProductMutation } from "../../redux/features/products/products.api";
import PHInput from "../../components/form/PHInput";
import PHForm from "../../components/form/PHForm";
import { TResponse } from "../../types";
import { TProduct } from "../../types/product.type";
import BtnPrimary from "../../components/ui/button/BtnPrimary";
import { productUpdateSchema } from "./ProductSchema";
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from "react-router-dom";


const UpdateProduct = () => {

    const [updateProduct, {isLoading: uIsLoading}] = useUpdateProductMutation();
    const { productId } = useParams();
    const { data, isLoading, refetch  } = useGetSingleProductQuery(productId)

    const product = data?.data

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log("Updating product with ID:", productId);
        const toastId = toast.loading("Updating...");
    
        try {
            let uploadedImgURL = product?.image; // Use existing image by default
    
            if (data.image && data.image instanceof File) {
                const ImgData = new FormData();
                ImgData.append("image", data.image);
    
                const imgUploadResponse = await fetch(
                    "https://api.imgbb.com/1/upload?key=bf1c0909112d55ed03dd5922aefee45c",
                    {
                        method: "POST",
                        body: ImgData,
                    }
                );
    
                const imgUploadData = await imgUploadResponse.json();
                uploadedImgURL = imgUploadData?.data?.display_url;
    
                if (!uploadedImgURL) {
                    throw new Error("Image upload failed");
                }
            }
    
            const updatedProductData = {
                name: data.name || product?.name,
                brand: data.brand || product?.brand,
                price: data.price || product?.price,
                quantity: data.quantity || product?.quantity,
                image: uploadedImgURL,
                category: data.category || product?.category,
                model: data.model || product?.model,
                rating: Number(data.rating) || product?.rating,
                inStock: data.inStock ?? product?.inStock,
            };
    
            console.log("Sending updated data:", updatedProductData);
    
            const res = await updateProduct({ id: productId, productData: updatedProductData }) as TResponse<TProduct>;
    
            if (res.error) {
                toast.error(res.error.data.message, { id: toastId });
            } else {
                toast.success("Product Updated Successfully", { id: toastId });
    
                // 🔄 Refetch the updated data
                await refetch(); 
                window.location.reload();
    
                // 🔄 Reset form values with the updated data
                // reset(updatedProductData);
            }
        } catch (error) {
            toast.error("Something went wrong", { id: toastId });
        }
    };

    return (
        <div>
            {
                isLoading || uIsLoading ? "Loading" :
                    <div className="!p-10">
                        <h2>Update Product</h2>
                        <PHForm onSubmit={onSubmit}
                            defaultValues={product}
                            resolver={zodResolver(productUpdateSchema)}
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
                                            checked={value}
                                            onChange={(e) => onChange(e.target.checked)}
                                        >
                                            In Stock
                                        </Checkbox>
                                        {error && <small style={{ color: 'red' }}>{error.message}</small>}
                                    </Form.Item>
                                )}
                            />

                            <BtnPrimary htmlType="submit" btnText="Update" />
                        </PHForm>
                    </div>
            }
        </div>

    );
};

export default UpdateProduct;