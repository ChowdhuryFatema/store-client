import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/features/products/products.api";
import { useAppDispatch } from "../../redux/hook";
import { addToCart } from "../../redux/features/cart/cartSlice";


const ProductDetails = () => {

    const { productId } = useParams();
    const { data } = useGetSingleProductQuery(productId ?? "");
    const product = data?.data;
    const dispatch = useAppDispatch();
    console.log(productId)
    console.log("pppppp", data)
    console.log("product", product)

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

        console.log("hello")
    };

    return (
        <div>
            <h1>{data?.data?.name}</h1>
            <button>Buy Now</button>
            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
    );
};

export default ProductDetails;