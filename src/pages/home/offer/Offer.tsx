import OfferCard from "./OfferCard";
import bike from "./../../../assets/images/bikes.png";

const Offer = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="max-w-4xl mx-auto !mb-10">
                    <h2 className="merienda text-center font-semibold text-3xl md:text-4xl lg:text-5xl text-orange-500" data-aos="fade-down" data-aos-duration="500">Best Offer</h2>
                    <p className="text-center"  data-aos="fade-down" data-aos-duration="500" data-aos-delay="500">Don’t miss out on our exclusive offers! We’re bringing you the best deals on top-quality bikes and accessories. Whether you're upgrading your ride or buying your first bike, now is the perfect time to shop. Enjoy incredible discounts, free shipping, and much more. Hurry, these offers won’t last long—grab yours today and ride away with unbeatable savings!</p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 items-center">
                <div className="col-auto lg:col-span-3 pr-10">
                    <img className="p-5" src={bike} alt="" />
                </div>
                <div className="col-auto lg:col-span-2">
                    <OfferCard />
                </div>
            </div>
        </div>
    );
};

export default Offer;