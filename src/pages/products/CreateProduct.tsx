import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Flex, Form, Input } from "antd";
import { toast } from "sonner";
import { useAddProductMutation } from "../../redux/features/products/products.api";
import PHInput from "../../components/form/PHInput";
import PHForm from "../../components/form/PHForm";
import PHSelect from "../../components/form/PHSelect";
import { TResponse } from "../../types";
import { TProduct } from "../../types/product.type";

const stockOption = [
    {
        label: "true",
        value: "true",
    },
    {
        label: "false",
        value: "false",
    }
]


const CreateProduct = () => {

    const [addProduct] = useAddProductMutation();
    // const [imgURL, setImgURL] = useState("");

    // const onSubmit: SubmitHandler<FieldValues> = async (data) => {

    //     const toastId = toast.loading("Creating...")

    //     console.log("imgUlr", imgURL)



    //     try {




    //         const ImgData = new FormData();
    //         ImgData.append("image", data.image)


    //         fetch("https://api.imgbb.com/1/upload?key=bf1c0909112d55ed03dd5922aefee45c", {
    //             method: "POST",
    //             body: ImgData
    //         }).then(res => res.json())
    //             .then(data => setImgURL(data?.data?.display_url));


    //         const productData = {
    //             name: data.name,
    //             brand: data.brand,
    //             price: data.price,
    //             quantity: data.quantity,
    //             image: imgURL,
    //             category: data.category,
    //             model: data.model,
    //             inStock: data.inStock,
    //         }


    //         console.log(productData)
    //         const res = await addProduct(productData) as TResponse<TProduct>;
    //         console.log("res", res)

    //         if (res.error) {
    //             toast.error(res.error.data.message, { id: toastId })
    //         }
    //         else {
    //             toast.success("Academic Semester Created Successfully", { id: toastId })
    //         }

    //     } catch (error) {
    //         toast.error('Something went wrong', { id: toastId })
    //     }
    // }



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
                image: uploadedImgURL, // Use the uploaded image URL directly
                category: data.category,
                model: data.model,
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
        <Flex align="center" justify="center">
            <Col span={12}>
                <PHForm onSubmit={onSubmit}
                // resolver={zodResolver(academicSemesterSchema)}
                >

                    <PHInput label="Name" name="name" type="text" />
                    <PHInput label="brand" name="brand" type="text" />
                    <PHInput label="price" name="price" type="text" />
                    <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <Controller
                            name="image"
                            render={({ field: { onChange, value, ...field } }) => (
                                <Form.Item label="Picture">
                                    <Input
                                        type="file"
                                        value={value?.fileName}
                                        {...field}
                                        onChange={(e) => onChange(e.target.files?.[0])} />
                                </Form.Item>
                            )}
                        />
                    </Col>
                    <PHInput label="quantity" name="quantity" type="text" />
                    <PHInput label="Category" name="category" type="text" />
                    <PHInput label="model" name="model" type="text" />
                    <PHSelect label="Stock" name="inStock" options={stockOption} />
                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default CreateProduct;