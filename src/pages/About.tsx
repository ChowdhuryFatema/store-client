import {
  FaUsers,
  FaGlobe,
  FaLightbulb,
  FaHandshake,
  FaRocket,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import bikeImg from "./../assets/images/banner4.jpg";

const AboutUs = () => {
  return (
    <>
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
           About Us
          </h1>
          <div className="!text-white mt-5 flex justify-center items-center gap-2 !text-sm lg:text-xl">
            <Link to="/">
              <span className="!text-white">Home</span>
            </Link>
            <span>/</span>
            <span className="text-gray-300">About Us</span>
          </div>
        </div>
      </div>
      <div className="w-[90%] max-w-[1400px] !px-5 !mx-auto !py-10 md:!py-16">
        <div className="py-20 px-8 md:px-16">
          <div className="!mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto">
            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              className="bg-white !p-8 rounded-2xl shadow text-center border border-gray-300"
            >
              <FaHandshake className="text-purple-500 text-6xl !mx-auto" />
              <h3 className="!mt-6 text-2xl font-semibold">Our Commitment</h3>
              <p className="!mt-4 text-gray-600 text-lg">
                We are dedicated to building long-term relationships with our
                clients, fostering trust, and ensuring mutual success in every
                project.
              </p>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              className="bg-white !p-8 rounded-2xl shadow text-center border border-gray-300"
            >
              <FaRocket className="text-red-500 text-6xl !mx-auto" />
              <h3 className="!mt-6 text-2xl font-semibold">Our Future</h3>
              <p className="!mt-4 text-gray-600 text-lg">
                Embracing cutting-edge technology and continuous learning, we
                are ready to take on future challenges and create groundbreaking
                solutions.
              </p>
            </div>
          </div>

          <div className="!mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto">
            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              className="bg-white !p-8 rounded-2xl shadow text-center border border-gray-300"
            >
              <FaUsers className="text-blue-500 text-6xl !mx-auto" />
              <h3 className="!mt-6 text-2xl font-semibold">Our Team</h3>
              <p className="!mt-4 text-gray-600 text-lg">
                A group of creative minds working together to bring ideas to
                life, ensuring collaboration and excellence in everything we do.
              </p>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              className="bg-white !p-8 rounded-2xl shadow text-center border border-gray-300"
            >
              <FaGlobe className="text-green-500 text-6xl !mx-auto" />
              <h3 className="!mt-6 text-2xl font-semibold">Our Vision</h3>
              <p className="!mt-4 text-gray-600 text-lg">
                Striving to make a global impact through innovation and
                technology, pushing boundaries to create a better future for
                all.
              </p>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              className="bg-white !p-8 rounded-2xl shadow text-center border border-gray-300"
            >
              <FaLightbulb className="text-yellow-500 text-6xl !mx-auto" />
              <h3 className="!mt-6 text-2xl font-semibold">Our Values</h3>
              <p className="!mt-4 text-gray-600 text-lg">
                Integrity, creativity, and excellence drive everything we do,
                shaping a culture of trust, innovation, and success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
