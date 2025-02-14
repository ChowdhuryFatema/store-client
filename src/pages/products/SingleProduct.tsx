import { Link } from "react-router-dom";
import { TProduct } from "../../types/product.type";
import BtnPrimary from "../../components/ui/button/BtnPrimary";

type TProductProps = {
    product: TProduct;
}

// Helper function to render stars
export const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    // Render full stars, empty stars, and half stars if needed
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

const SingleProduct = ({ product }: TProductProps) => {
    console.log("product", product);

    return (
        <div className="bg-white rounded-2xl shadow border border-orange-100">
            <div className="!px-5">
                <img className="w-full h-[230px]" src={product?.image} alt="" />
            </div>
            <div className="!p-5 border-t border-orange-100">
                <h1 className="text-xl">{product.name}</h1>
                <div className="flex justify-between items-center">
                    <p className="text-red-500 font-bold text-2xl">${product.price}</p>
                    <p>Model: {product.model}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>{renderStars(product.rating)}</p>
                    <p>In Stock: {product.quantity}</p>
                </div>

                <div className="!mt-5">
                    <Link to={`/all-product/${product._id}`}>
                        <BtnPrimary btnText="View Details" />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default SingleProduct;
