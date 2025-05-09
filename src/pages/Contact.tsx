import { useState } from "react";
import BtnPrimary from "../components/ui/button/BtnPrimary";
import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import bikeImg from "./../assets/images/banner4.jpg";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted!");
  };

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
            Contact Us
          </h1>
          <div className="!text-white mt-5 flex justify-center items-center gap-2 !text-sm lg:text-xl">
            <Link to="/">
              <span className="!text-white">Home</span>
            </Link>
            <span>/</span>
            <span className="text-gray-300">Contact Us</span>
          </div>
        </div>
      </div>
      <div className="w-[90%] max-w-[1400px] px-5 !mx-auto !my-20">
        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Contact Info */}
          <div data-aos="zoom-in" data-aos-duration="500">
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <p className="!mt-4 text-gray-600">
              Have any questions? Feel free to reach out to us. We're here to
              help!
            </p>
            <div className="!mt-6 !space-y-4">
              <p>
                <strong>Email:</strong> fatemachowdhury318@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +123 456 7890
              </p>
              <p>
                <strong>Address:</strong> Fatikchari, Chittagong, Bangladesh
              </p>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div data-aos="zoom-in" data-aos-duration="500">
            <h2 className="text-2xl font-bold !mb-4">Send us a message</h2>
            <form onSubmit={handleSubmit} className="!space-y-4">
              <Input
                name="name"
                placeholder="Your Name"
                size="large"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                size="large"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <TextArea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <BtnPrimary btnText="Send Message" />
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold !my-5">Find us on the map</h2>
          <iframe
            className="w-full h-72 rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.835874878953!2d-122.08424968469268!3d37.4219997798225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba0f9b6f17d3%3A0xf450b8fd7c4538e5!2sGoogleplex!5e0!3m2!1sen!2sus!4v1611700584004!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}
export default Contact;
