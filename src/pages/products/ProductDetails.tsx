import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/features/products/products.api";


const ProductDetails = () => {

    const { productId } = useParams();
    const { data } = useGetSingleProductQuery(productId ?? "");
    console.log(productId)
    console.log("pppppp", data)

    return (
        <div>
            <h1>{data?.data?.name}</h1>
            <button>Buy Now</button>
        </div>
    );
};

export default ProductDetails;