
import { Collapse } from 'antd';
import { useState } from 'react';

const { Panel } = Collapse;

const FAQSection = () => {
  const [activeKey, setActiveKey] = useState([]);

  const handleChange = (key: any) => {
    setActiveKey(key);
  };

  return (
    <div className="px-5">
      <div className="flex justify-center items-center">
        <div className="max-w-4xl mx-auto !mb-10">
          <h2  data-aos="fade-down" data-aos-duration="500" className="merienda text-center font-semibold text-3xl md:text-4xl lg:text-5xl  text-orange-500">Frequently Asked Questions</h2>
          <p  data-aos="fade-down" data-aos-duration="500" data-aos-delay="500" className="text-center">Have questions? We've got answers! Explore our frequently asked questions to find helpful information about our products, shipping, returns, and more. If you don't find what you're looking for, feel free to reach out to our support team for further assistance.!</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* FAQ Section */}
        <div className="bg-white shadow rounded-lg p-6" data-aos="zoom-in" data-aos-duration="500">
          <Collapse
            activeKey={activeKey}
            onChange={handleChange}
            accordion
            className="bg-white"
          >
            <Panel header="What types of bikes do you sell?" key="1">
              <p className="text-lg text-gray-700">
                We offer a wide range of bikes including mountain bikes, road bikes, hybrid bikes, and electric
                bikes. Whether you're an avid cyclist or a beginner, we have something for everyone!
              </p>
            </Panel>
            <Panel header="How do I choose the right bike for me?" key="2">
              <p className="text-lg text-gray-700">
                Choosing the right bike depends on your needs and riding style. Mountain bikes are great for off-road
                trails, road bikes are designed for smooth, fast rides, and hybrid bikes are perfect for both city commutes
                and leisurely rides. If you’re unsure, feel free to reach out to our team for advice based on your preferences.
              </p>
            </Panel>
            <Panel header="What sizes of bikes are available?" key="3">
              <p className="text-lg text-gray-700">
                We offer bikes in various sizes to accommodate riders of all ages and heights. Our sizing guide on each
                product page can help you determine the best fit. If you're still uncertain, we can assist you in choosing
                the right size based on your measurements.
              </p>
            </Panel>
            <Panel header="Do you offer bike repairs and maintenance?" key="4">
              <p className="text-lg text-gray-700">
                Yes, we provide bike repair and maintenance services at our store. From simple tune-ups to more complex
                repairs, our experienced technicians are here to ensure your bike is in top condition.
              </p>
            </Panel>
            <Panel header="How do I maintain my bike?" key="5">
              <p className="text-lg text-gray-700">
                Regular maintenance is key to keeping your bike in good shape. We recommend checking the tire pressure,
                cleaning the chain, and lubricating moving parts regularly. You can also bring your bike to our store for
                a professional tune-up!
              </p>
            </Panel>
            <Panel header="What warranty do you offer on bikes?" key="6">
              <p className="text-lg text-gray-700">
                We offer warranties on all our bikes. The duration of the warranty depends on the bike model and the
                manufacturer. Please refer to the product page for specific warranty details or contact our customer
                service for more information.
              </p>
            </Panel>
            <Panel header="Do you offer bike accessories?" key="7">
              <p className="text-lg text-gray-700">
                Yes! We carry a wide variety of bike accessories, including helmets, lights, locks, water bottles, and more.
                Check out our accessories section for all your cycling needs.
              </p>
            </Panel>
          </Collapse>
        </div>

        {/* Another Content Section (Example) */}
        <div className="bg-gray-50 !p-6 rounded-lg shadow border border-gray-300" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="100">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Bike of the Month</h3>
          <p className="text-sm lg:text-lg text-gray-700 mb-4">
            Introducing our latest bike model, the <strong>Mountain Pro 2025</strong>. Designed for serious mountain
            biking enthusiasts, this bike features a lightweight frame, advanced suspension, and top-tier gears for the
            ultimate off-road experience. Perfect for tackling rugged trails and challenging terrains.
          </p>
          <p className="text-sm lg:text-lg text-gray-700">
            Ready to take on new adventures? Come visit us and test ride the Mountain Pro 2025 today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
