import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/features/products/products.api";
import { useAppDispatch } from "../../redux/hook";
import { addToCart } from "../../redux/features/cart/cartSlice";
import BtnPrimary from "../../components/ui/button/BtnPrimary";
import BtnSecondary from "../../components/ui/button/BtnSecondary";
import { ExclamationCircleOutlined } from "@ant-design/icons";

// Helper function to render stars
const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
        <>
            {[...Array(fullStars)].map((_, index) => (
                <span key={`full-${index}`} className="text-yellow-500 text-3xl">★</span>
            ))}
            {[...Array(emptyStars)].map((_, index) => (
                <span key={`empty-${index}`} className="text-gray-300 text-3xl">★</span>
            ))}
        </>
    );
};

const ProductDetails = () => {
    const { productId } = useParams();
    const { data, isLoading, error } = useGetSingleProductQuery(productId ?? "");
    const dispatch = useAppDispatch();
    const product = data?.data;

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching product details</div>;

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

    return (
        <div>
            <div className="bg-white" style={{ padding: '24px' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <div>
                        <img src={product?.image} alt={product?.name} />
                    </div>
                    <div>
                        <h1 className="text-2xl text-orange-500">{product?.name}</h1>
                        <p>Brand: {product?.brand}</p>
                        <p>Price: ${product?.price}</p>
                        <p>Model: {product?.model}</p>
                        <p>In Stock: {product?.quantity}</p>
                        <p>Category: {product?.category}</p>
                        <p>Description: {product?.description}</p>

                        {/* Render the rating as stars */}
                        <p>Rating: {renderStars(product?.rating)}</p>


                        {
                            product?.quantity <= 0 ?
                                <p className="text-red-500">
                                    <ExclamationCircleOutlined style={{ color: "red", marginRight: 5 }} />
                                    Product Out of stock
                                </p> :
                                <div>
                                    <span className="!mr-3">
                                        <BtnPrimary btnText="Buy Now" />
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
    );
};

export default ProductDetails;
