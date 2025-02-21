import { useState, useEffect } from "react";
import { useGetAllProductsQuery } from "../../../redux/features/products/products.api";
import { Link } from "react-router-dom";
import BtnPrimary from "../../../components/ui/button/BtnPrimary";
import { TProduct } from "../../../types/product.type";
import { renderStars } from "../../products/SingleProduct";

export default function OfferCard() {
    const initialTime = 365 * 24 * 60 * 60; // 10 days in seconds
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [selectedColor, setSelectedColor] = useState("blue");
    const { data: products } = useGetAllProductsQuery(undefined);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    // Convert seconds into days, hours, minutes, and seconds
    //   const days = Math.floor(timeLeft / (24 * 60 * 60));
    const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
    const seconds = timeLeft % 60;

    return (
        <div className="rounded-lg p-6 md:w-96 !mx-au">
            {/* Countdown Timer */}
            <div className="flex gap-5 !mb-4 !pb-4 border-b border-gray-300">
                <div className="text-center !p-2 border rounded-t-lg rounded-r-lg w-16">
                    <p className="text-lg font-semibold">{hours}</p>
                    <p className="text-xs">Hours</p>
                </div>
                <div className="text-center !p-2 border rounded-t-lg rounded-r-lg w-16">
                    <p className="text-lg font-semibold">{minutes}</p>
                    <p className="text-xs">Minutes</p>
                </div>
                <div className="text-center !p-2 border rounded-t-lg rounded-r-lg w-16">
                    <p className="text-lg font-semibold">{seconds}</p>
                    <p className="text-xs">Seconds</p>
                </div>
            </div>

            {
                products?.data?.slice(0, 1).map((product: TProduct) => (

                    <div>
                        <h1 className="text-xl">{product.name}</h1>
                        <div className="flex justify-between items-center">
                            <p>{renderStars(product.rating)}</p>
                            <p>In Stock: {product.quantity}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-red-500 font-bold text-2xl">${product.price}</p>
                            <p>Model: {product.model}</p>
                        </div>
                        <div className="flex items-center !mt-2 border-y border-gray-300 justify-between !py-2">
                            <div className="flex items-center justify-between">
                                <span className="!mr-2 text-gray-600">Color:</span>
                                <div className="flex gap-1">
                                    {["blue", "orange", "purple", "red", "gray"].map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-3 h-3 rounded-full ${selectedColor === color ? "border-black" : "border-transparent"
                                                }`}
                                            style={{ backgroundColor: color }}
                                        ></button>
                                    ))}
                                </div>

                            </div>
                            <p>Category: {product.category}</p>
                        </div>
                        <div className="!mt-5 flex">
                            <Link to={`/all-product/${product._id}`}>
                                <BtnPrimary btnText="View Details" />
                            </Link>
                        </div>
                    </div>
                ))
            }



        </div>
    );
}
