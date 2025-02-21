import { useState } from "react";
import BtnPrimary from "../components/ui/button/BtnPrimary";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="w-[90%] max-w-[1400px] px-5 !mx-auto !my-20">
      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left - Contact Info */}
        <div data-aos="zoom-in" data-aos-duration="500">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="!mt-4 text-gray-600">
            Have any questions? Feel free to reach out to us. We're here to help!
          </p>
          <div className="!mt-6 !space-y-4">
            <p><strong>Email:</strong> fatemachowdhury318@gmail.com</p>
            <p><strong>Phone:</strong> +123 456 7890</p>
            <p><strong>Address:</strong> 123 Main Street, City, Country</p>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div data-aos="zoom-in" data-aos-duration="500">
          <h2 className="text-2xl font-bold !mb-4">Send us a message</h2>
          <form onSubmit={handleSubmit} className="!space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full !p-3 border rounded outline-0"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full !p-3 border rounded outline-0"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full !p-3 border rounded outline-0"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <BtnPrimary 
            // type="submit" 
            // className="w-full !p-3 bg-blue-600 text-white font-bold rounded"
             btnText=" Send Message" />
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
  );
}
export default Contact