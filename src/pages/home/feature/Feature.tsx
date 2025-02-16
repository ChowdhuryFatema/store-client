import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../../redux/features/products/products.api";
import { TProduct } from "../../../types/product.type";
import SingleProduct from "../../products/SingleProduct";
import BtnSecondary from "../../../components/ui/button/BtnSecondary";

const Feature = () => {
    const { data: products } = useGetAllProductsQuery(undefined);

    return (
        <div>
            <div>
                <h2 className="text-4xl text-center !mb-10">Featured</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {products?.data?.slice(0, 8).map((product: TProduct) => <SingleProduct key={product._id} product={product} />)}
            </div>
            <div className="flex justify-center items-center !mt-10">
                <Link to="/all-product">
                    <BtnSecondary btnText="View All" />
                </Link>
            </div>
        </div>
    );
};

export default Feature;