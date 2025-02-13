import { Link } from "react-router-dom";
import { TProduct } from "../../types/product.type";
import BtnPrimary from "../../components/ui/button/BtnPrimary";

type TProductProps = {
    product: TProduct;
}


// {
//     "_id": "6798fbccb07eb2ff785347fd",
//     "name": "TrailBlazer Pro",
//     "brand": "Trek",
//     "price": 44000,
//     "model": "test",
//     "quantity": 28,
//     "inStock": true,
//     "createdAt": "2024-11-20T12:10:45.563Z",
//     "updatedAt": "2025-01-28T15:47:24.290Z"
// },

const SingleProduct = ({ product }: TProductProps) => {

    console.log("product", product)

   

    return (
        <div className="bg-white rounded-2xl shadow" style={{padding: '24px'}}>
            <h1 className="text-2xl text-red-500">{product.name}</h1>
            <div>
                {/* <img src="" alt="" /> */}
                <img className="h-[200px] p-5" src={product?.image} alt="" />
                <p>Brand: {product.brand}</p>
                <p>Price: ${product.price}</p>
                <p>Model: {product.model}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Category: {product.category}</p>
                <p>In Stock: {product.inStock === true ? 'Yes' : 'No' }</p>

                <Link to={`/all-product/${product._id}`}>
                {/* <BtnPrimary btnText="">View Details</BtnPrimary> */}
                    <button>View Details</button>
                </Link>
                <BtnPrimary btnText="View Details" />
            </div>
        </div>
    );
};

export default SingleProduct;