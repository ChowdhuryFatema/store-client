import { useGetAllProductsQuery } from "../../../redux/features/products/products.api";
import { TProduct } from "../../../types/product.type";
import SingleProduct from "../../products/SingleProduct";

const Feature = () => {
    const { data: products } = useGetAllProductsQuery(undefined);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {products?.data?.slice(0, 4).map((product: TProduct) => <SingleProduct key={product._id} product={product} />)}
            </div>
        </div>
    );
};

export default Feature;