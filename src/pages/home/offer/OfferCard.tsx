import { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";

export default function OfferCard() {
    const initialTime = 365 * 24 * 60 * 60; // 10 days in seconds
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [selectedColor, setSelectedColor] = useState("blue");

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
        <div className="rounded-lg p-6 w-96">
            {/* Countdown Timer */}
            <div className="flex justify-center space-x-4 mb-4">
                {/* <div className="text-center p-2 border rounded-lg w-16">
          <p className="text-lg font-semibold">{days}</p>
          <p className="text-xs">Days</p>
        </div> */}
                <div className="text-center p-2 border rounded-lg w-16">
                    <p className="text-lg font-semibold">{hours}</p>
                    <p className="text-xs">Hours</p>
                </div>
                <div className="text-center p-2 border rounded-lg w-16">
                    <p className="text-lg font-semibold">{minutes}</p>
                    <p className="text-xs">Minutes</p>
                </div>
                <div className="text-center p-2 border rounded-lg w-16">
                    <p className="text-lg font-semibold">{seconds}</p>
                    <p className="text-xs">Seconds</p>
                </div>
            </div>

            {/* Product Name */}
            <h2 className="text-lg font-semibold">Propel Advanced Pro Frameset</h2>

            {/* Rating */}
            <div className="flex mb-2">
                {Array(4)
                    .fill("")
                    .map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                <span className="text-gray-400 text-xl">★</span>
            </div>

            {/* Price */}
            <p className="text-2xl font-bold text-red-500">$2,290.00</p>

            {/* Color Selection & Stock */}
            <div className="flex items-center justify-between mt-3">
                <div className="flex items-center">
                    <span className="mr-2 text-gray-600">Color:</span>
                    <div className="flex space-x-2">
                        {["blue", "orange", "purple", "red", "gray"].map((color) => (
                            <button
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                className={`w-5 h-5 rounded-full border-2 ${selectedColor === color ? "border-black" : "border-transparent"
                                    }`}
                                style={{ backgroundColor: color }}
                            ></button>
                        ))}
                    </div>
                </div>
                <p className="text-gray-600">In stock: <span className="font-semibold">10</span></p>
            </div>

            {/* Buttons */}
            <div className="flex items-center space-x-4 mt-4">
                <button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded flex items-center justify-center">
                    🛒 ADD TO CART
                </button>
                <button className="flex-1 border border-gray-400 hover:border-black text-gray-700 py-2 rounded flex items-center justify-center">
                    <FaRegHeart className="mr-2" /> ADD TO WISHLIST
                </button>
            </div>
        </div>
    );
}
