import Banner from "./banner/Banner";
import FAQ from "./FAQ/FAQ";
import Feature from "./feature/Feature";
import GallerySlider from "./Gallery/GallerySlider";
import Offer from "./offer/Offer";
import ParallaxOverlay from "./ParallaxOverlay/ParallaxOverlay";


const Home = () => {
    return (
        <div className="!bg-white">
            <Banner />
            <div className="w-[90%] max-w-[1400px] px-5 !mx-auto">
                <div className="!my-10 md:!my-20">
                    <Offer />
                </div>

                <div className="!my-10 md:!my-20">
                    <Feature />
                </div>
                <div className="!my-10 md:!my-20">
                    <ParallaxOverlay />
                </div>
                <div className="!my-10 md:!my-20 hidden lg:block">
                    <GallerySlider />
                </div>
              
                <div className="!my-10 md:!my-20">
                    <FAQ />
                </div>
            </div>
        </div>
    );
};

export default Home;