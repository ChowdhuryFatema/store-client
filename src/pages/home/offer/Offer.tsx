import OfferCard from "./OfferCard";
import bike from "./../../../assets/images/bikes.png";

const Offer = () => {
    return (
        <div>
            <div className="grid grid-cols-5 gap-20 items-center">
                <div className="col-span-3 pr-10">
                    <img className="p-5" src={bike} alt="" />
                </div>
                <div className="col-span-2">
                    <OfferCard />
                </div>
            </div>
        </div>
    );
};

export default Offer;