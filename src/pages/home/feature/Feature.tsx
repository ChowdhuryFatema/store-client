import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../../redux/features/products/products.api";
import { TProduct } from "../../../types/product.type";
import SingleProduct from "../../products/SingleProduct";
import BtnSecondary from "../../../components/ui/button/BtnSecondary";
import LoadingSpinner from "../../../components/LoadingSpinner";

const Feature = () => {
    const { data: products, isLoading } = useGetAllProductsQuery(undefined);
     if(isLoading) return <LoadingSpinner />

    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="max-w-4xl mx-auto !mb-10">
                    <h2  data-aos="fade-down" data-aos-duration="500" className="merienda text-center font-semibold text-3xl md:text-4xl lg:text-5xl text-orange-500">Featured</h2>
                    <p  data-aos="fade-down" data-aos-duration="500" data-aos-delay="500" className="text-center">Check out our top picks—featured bikes and accessories that combine performance and style. Perfect for every rider, these selections are designed to elevate your experience!</p>
                </div>
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