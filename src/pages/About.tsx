import { FaUsers, FaGlobe, FaLightbulb, FaHandshake, FaRocket } from "react-icons/fa";

const AboutUs = () => {
    return (
        <section className="w-[90%] max-w-[1400px] !px-5 !mx-auto !py-20">
            <div className="py-20 px-8 md:px-16">
                <div className="max-w-7xl !mx-auto text-center">
                    <h2 className="text-5xl font-bold text-gray-800">About Us</h2>
                    <p className="mt-6 text-lg text-gray-600 max-w-4xl !mx-auto">
                        We are a passionate team dedicated to delivering high-quality solutions
                        to our clients. Our goal is to innovate, inspire, and create impactful
                        experiences through technology and collaboration. We believe in fostering
                        strong relationships, continuous learning, and making a lasting impact.
                    </p>
                </div>

                <div className="!mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto">
                    <div className="bg-white !p-8 rounded-2xl shadow-lg text-center">
                        <FaHandshake className="text-purple-500 text-6xl !mx-auto" />
                        <h3 className="!mt-6 text-2xl font-semibold">Our Commitment</h3>
                        <p className="!mt-4 text-gray-600 text-lg">
                            We are dedicated to building long-term relationships with our clients,
                            fostering trust, and ensuring mutual success in every project.
                        </p>
                    </div>

                    <div className="bg-white !p-8 rounded-2xl shadow-lg text-center">
                        <FaRocket className="text-red-500 text-6xl !mx-auto" />
                        <h3 className="!mt-6 text-2xl font-semibold">Our Future</h3>
                        <p className="!mt-4 text-gray-600 text-lg">
                            Embracing cutting-edge technology and continuous learning,
                            we are ready to take on future challenges and create groundbreaking solutions.
                        </p>
                    </div>
                </div>

                <div className="!mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto">
                    <div className="bg-white !p-8 rounded-2xl shadow-lg text-center">
                        <FaUsers className="text-blue-500 text-6xl !mx-auto" />
                        <h3 className="!mt-6 text-2xl font-semibold">Our Team</h3>
                        <p className="!mt-4 text-gray-600 text-lg">
                            A group of creative minds working together to bring ideas to life,
                            ensuring collaboration and excellence in everything we do.
                        </p>
                    </div>

                    <div className="bg-white !p-8 rounded-2xl shadow-lg text-center">
                        <FaGlobe className="text-green-500 text-6xl !mx-auto" />
                        <h3 className="!mt-6 text-2xl font-semibold">Our Vision</h3>
                        <p className="!mt-4 text-gray-600 text-lg">
                            Striving to make a global impact through innovation and technology,
                            pushing boundaries to create a better future for all.
                        </p>
                    </div>

                    <div className="bg-white !p-8 rounded-2xl shadow-lg text-center">
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
