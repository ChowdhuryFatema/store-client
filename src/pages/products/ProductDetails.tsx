import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/features/products/products.api";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { addToCart } from "../../redux/features/cart/cartSlice";
import BtnPrimary from "../../components/ui/button/BtnPrimary";
import BtnSecondary from "../../components/ui/button/BtnSecondary";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useCreateOrderMutation } from "../../redux/features/order/order.api";
import { useEffect } from "react";
import { toast } from "sonner";
import LoadingSpinner from "../../components/LoadingSpinner";

// Helper function to render stars
const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
        <>
            {[...Array(fullStars)].map((_, index) => (
                <span key={`full-${index}`} className="text-yellow-500 text-2xl">★</span>
            ))}
            {[...Array(emptyStars)].map((_, index) => (
                <span key={`empty-${index}`} className="text-gray-300 text-2xl">★</span>
            ))}
        </>
    );
};

const ProductDetails = () => {
    const { productId } = useParams();
    const { data: pro, isLoading: dIsLoading, error } = useGetSingleProductQuery(productId ?? "");
    const dispatch = useAppDispatch();
    const product = pro?.data;
    console.log("product", product)

    // const cartData = useAppSelector((state) => state.cart);
    const user = useAppSelector(selectCurrentUser);
    const navigate = useNavigate();
    // console.log("cartDataaa", cartData.items)

    const [createOrder, { isLoading, isSuccess, data, isError }] = useCreateOrderMutation();

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>Error fetching product details</div>;

    const handleAddToCart = () => {
        if (!product) return;

        dispatch(
            addToCart({
                product: product._id,
                name: product.name,
                price: product.price,
                quantity: 1,
                stock: product.quantity,
                image: product.image,
            })
        );

        console.log("Product added to cart");
    };

    const handlePlaceOrder = async () => {

        const productData = {
            product: product._id,
            name: product.name,
            price: product.price,
            quantity: 1,
            stock: product.quantity,
            image: product.image,
        }

        if (user) {
            await createOrder({ products: [productData] })
        } else {
            navigate("/login")
        }
    };

    const toastId = "cart";

    useEffect(() => {
        if (isLoading) toast.loading("Processing...", { id: toastId });
        if (isSuccess) {
            toast.success("Order placed successfully", { id: toastId })
            if (data?.data) {
                window.location.href = data?.data;
            }
        }
        if (isError) toast.error(JSON.stringify(error), { id: toastId })
    }, [data?.data, data?.message, error, isError, isLoading, isSuccess])

    if (dIsLoading) return <LoadingSpinner />

    return (
        <div>
            <div className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center !mb-10">
                    <div>
                        <img src={product?.image} alt={product?.name} />
                    </div>
                    <div className="!space-y-3 !p-5">
                        <h1 className="text-2xl text-orange-500">{product?.name}</h1>
                        <p>Description: {product?.description}</p>

                        {/* Render the rating as stars */}
                        <p>{renderStars(product?.rating)}</p>

                        <div className="!space-y-2">
                            <p>Brand: {product?.brand}</p>
                            <p>Price: ${product?.price}</p>
                            <p>Model: {product?.model}</p>
                            <p>In Stock: {product?.quantity}</p>
                            <p>Category: {product?.category}</p>
                        </div>


                        <div className="!pt-2">
                            {
                                product?.quantity <= 0 ?
                                    <p className="text-red-500">
                                        <ExclamationCircleOutlined style={{ color: "red", marginRight: 5 }} />
                                        Product Out of stock
                                    </p> :
                                    <div>
                                        <span className="!mr-3">
                                            <BtnPrimary onClick={handlePlaceOrder} btnText="Buy Now" />
                                        </span>
                                        <BtnSecondary
                                            btnText="Add to cart"
                                            onClick={handleAddToCart} />
                                    </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
