import Banner from "./banner/Banner";
import Feature from "./feature/Feature";
import Offer from "./offer/Offer";
// import bike1 from "./../../assets/images/bike1.webp";
// import bike2 from "./../../assets/images/bike2.jpg";
// import bike3 from "./../../assets/images/bike3.webp";


const Home = () => {
    return (
        <div>
            <Banner />
            <div className="w-[90%] max-w-[1400px] px-5 !mx-auto">
                <Offer />
                <Feature />
            </div>

        </div>
    );
};

export default Home;