import { Link } from "react-router-dom";
import { TProduct } from "../../types/product.type";
import BtnPrimary from "../../components/ui/button/BtnPrimary";

type TProductProps = {
  product: TProduct;
};

// Helper function to render stars
export const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  // Render full stars, empty stars, and half stars if needed
  return (
    <>
      {[...Array(fullStars)]?.map((_, index) => (
        <span key={`full-${index}`} className="text-yellow-500 text-2xl">
          ★
        </span>
      ))}
      {[...Array(emptyStars)]?.map((_, index) => (
        <span key={`empty-${index}`} className="text-gray-300 text-2xl">
          ★
        </span>
      ))}
    </>
  );
};

const SingleProductListView = ({ product }: TProductProps) => {
  return (
    <div
      className="!mb-5 bg-white rounded-2xl shadow border border-gray-300 relative grid grid-cols-3"
      data-aos="zoom-in"
      data-aos-duration="500"
    >
      <div className="rounded-2xl flex justify-center items-center">
        <img
          className="w-[300px] h-[220px] rounded-2xl object-cover"
          src={product?.image}
          alt=""
        />
      </div>
      <div className="!px-5 !py-3 border-t border-orange-100 col-span-2">
        <h1 className="text-xl">{product.name}</h1>
        <div className="flex justify-between items-center flex-wrap">
          <p className="text-red-500 font-bold text-2xl">${product?.price}</p>
          <p>Model: {product?.model}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>{renderStars(product?.rating)}</p>
          <p>In Stock: {product?.quantity}</p>
        </div>
        <p className="!py-2">{product?.description}</p>
        <div className="h-[56px]">
          <div className="absolute bottom-5 right-5">
            <Link to={`/all-product/${product?._id}`}>
              <BtnPrimary btnText="View Details" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductListView;
