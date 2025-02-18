import Banner from "./banner/Banner";
import Feature from "./feature/Feature";
import Offer from "./offer/Offer";
import ParallaxOverlay from "./ParallaxOverlay/ParallaxOverlay";


const Home = () => {
    return (
        <div>
            <Banner />
            <div className="w-[90%] max-w-[1400px] px-5 !mx-auto">
                <div className="!my-20">
                    <Offer />
                </div>
                <div className="!my-20">
                    <ParallaxOverlay />
                </div>
                <div className="!my-20">
                    <Feature />
                </div>

            </div>

        </div>
    );
};

export default Home;