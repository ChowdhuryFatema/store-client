import { Link } from "react-router-dom";
import { TProduct } from "../../types/product.type";

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
                <img src={product?.image} alt="" />
                <p>Brand: {product.brand}</p>
                <p>Price: ${product.price}</p>
                <p>Model: {product.model}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Category: {product.category}</p>
                <p>In Stock: {product.inStock === true ? 'Yes' : 'No' }</p>

                <Link to={`/store/all-product/${product._id}`}>
                    <button>View Details</button>
                </Link>
                
            </div>
        </div>
    );
};

export default SingleProduct;