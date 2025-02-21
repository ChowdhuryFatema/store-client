import { FaUsers, FaGlobe, FaLightbulb, FaHandshake, FaRocket } from "react-icons/fa";

const AboutUs = () => {
    return (
        <section className="w-[90%] max-w-[1400px] !px-5 !mx-auto !py-10 md:!py-16">
            <div className="py-20 px-8 md:px-16">
                <div className="flex justify-center items-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 data-aos="fade-down" data-aos-duration="500" className="merienda text-center font-semibold text-3xl md:text-4xl lg:text-5xl text-orange-500">About Us</h2>
                        <p data-aos="fade-down" data-aos-duration="500" data-aos-delay="500" className="text-center">  We are a passionate team dedicated to delivering high-quality solutions
                            to our clients. Our goal is to innovate, inspire, and create impactful
                            experiences through technology and collaboration. We believe in fostering
                            strong relationships, continuous learning, and making a lasting impact.</p>
                    </div>
                </div>

                <div className="!mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto">
                    <div data-aos="zoom-in" data-aos-duration="500" className="bg-white !p-8 rounded-2xl shadow text-center border border-gray-300">
                        <FaHandshake className="text-purple-500 text-6xl !mx-auto" />
                        <h3 className="!mt-6 text-2xl font-semibold">Our Commitment</h3>
                        <p className="!mt-4 text-gray-600 text-lg">
                            We are dedicated to building long-term relationships with our clients,
                            fostering trust, and ensuring mutual success in every project.
                        </p>
                    </div>

                    <div data-aos="zoom-in" data-aos-duration="500" className="bg-white !p-8 rounded-2xl shadow text-center border border-gray-300">
                        <FaRocket className="text-red-500 text-6xl !mx-auto" />
                        <h3 className="!mt-6 text-2xl font-semibold">Our Future</h3>
                        <p className="!mt-4 text-gray-600 text-lg">
                            Embracing cutting-edge technology and continuous learning,
                            we are ready to take on future challenges and create groundbreaking solutions.
                        </p>
                    </div>
                </div>

                <div className="!mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto">
                    <div data-aos="zoom-in" data-aos-duration="500" className="bg-white !p-8 rounded-2xl shadow text-center border border-gray-300">
                        <FaUsers className="text-blue-500 text-6xl !mx-auto" />
                        <h3 className="!mt-6 text-2xl font-semibold">Our Team</h3>
                        <p className="!mt-4 text-gray-600 text-lg">
                            A group of creative minds working together to bring ideas to life,
                            ensuring collaboration and excellence in everything we do.
                        </p>
                    </div>

                    <div data-aos="zoom-in" data-aos-duration="500" className="bg-white !p-8 rounded-2xl shadow text-center border border-gray-300">
                        <FaGlobe className="text-green-500 text-6xl !mx-auto" />
                        <h3 className="!mt-6 text-2xl font-semibold">Our Vision</h3>
                        <p className="!mt-4 text-gray-600 text-lg">
                            Striving to make a global impact through innovation and technology,
                            pushing boundaries to create a better future for all.
                        </p>
                    </div>

                    <div data-aos="zoom-in" data-aos-duration="500" className="bg-white !p-8 rounded-2xl shadow text-center border border-gray-300">
                        <FaLightbulb className="text-yellow-500 text-6xl !mx-auto" />
                        <h3 className="!mt-6 text-2xl font-semibold">Our Values</h3>
                        <p className="!mt-4 text-gray-600 text-lg">
                            Integrity, creativity, and excellence drive everything we do,
                            shaping a culture of trust, innovation, and success.
                        </p>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default AboutUs;
