import { Link } from "react-router-dom";
import bikeImg from "./../../assets/images/banner4.jpg";
import { useGetAllProductsQuery } from "../../redux/features/products/products.api";
import SingleProductSkeleton from "../products/SingleProductSkeleton";
import { TProduct } from "../../types/product.type";
import SingleProduct from "../products/SingleProduct";

const RecentViewedProducts = () => {
  const { data: products, isLoading } = useGetAllProductsQuery(undefined);

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative w-full h-[40vh]">
        <img
          src={bikeImg}
          alt="Home"
          className="object-cover z-0 w-full h-[40vh]"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 z-20 text-center">
          <h1 className="text-2xl md:text-5xl text-white font-bold">
            Recent Viewed Products
          </h1>
          <div className="!text-white mt-5 flex justify-center items-center gap-2 !text-sm lg:text-xl">
            <Link to="/">
              <span className="!text-white">Home</span>
            </Link>
            <span>/</span>
            <span className="text-gray-300">Recent</span>
          </div>
        </div>
      </div>

      <div className="w-[90%] max-w-[1400px] px-5 !mx-auto !my-10">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {Array.from({ length: 9 }).map((_, index) => (
              <SingleProductSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products?.data?.slice(0, 3).map((product: TProduct) => (
              <SingleProduct key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentViewedProducts;
