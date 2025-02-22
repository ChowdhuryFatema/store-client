import * as React from "react";
import "./Banner.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import banner1 from "./../../../assets/images/banner1.jpg";
import banner2 from "./../../../assets/images/banner2.jpg";
import banner3 from "./../../../assets/images/banner3.webp";
import banner4 from "./../../../assets/images/banner4.jpg";
import banner5 from "./../../../assets/images/banner5.jpg";
import banner6 from "./../../../assets/images/banner6.jpg";
import banner7 from "./../../../assets/images/banner7.jpg";
import banner8 from "./../../../assets/images/banner8.webp";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

const images = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
];

const animation = { duration: 1000, easing: (t: number) => t };

function Banner() {
  const [opacities, setOpacities] = React.useState<number[]>([]);
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: images.length,
    loop: true,
    created(s) {
      setTimeout(() => {
        s.moveToIdx(s.track.details.abs + 1, true, animation);
      }, 5000); // 2 minutes
    },
    animationEnded(s) {
      setTimeout(() => {
        s.moveToIdx(s.track.details.abs + 1, true, animation);
      }, 5000); // 2 minutes
    },
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map((slide) => slide.portion);
      setOpacities(new_opacities);
    },
  });


  return (
    <div>
      <div ref={sliderRef} className="fader">
        {images.map((src, idx) => (
          <div key={idx}>
            <div className="bg-black w-full h-screen absolute z-10 opacity-10"></div>
            <div className="text-white absolute z-30 flex justify-center items-center w-full h-[60vh]">
              <div className="text-center lg:w-3xl !px-5 !py-5">
                <h2 className="text-3xl md:text-4xl lg:text-5xl" data-aos="fade-down" data-aos-duration="500">Pedal Your Way to   <span className='text-orange-500 !pt-5'>Freedom</span> </h2>
                <p data-aos="fade-down" data-aos-duration="500" data-aos-delay="500">
                  Discover the ultimate biking experience with our top-quality collection of bicycles, from rugged mountain bikes to sleek city rides. Whether you're a casual rider or a cycling enthusiast, we have the perfect bike to match your adventure. Shop now and hit the road with confidence!
                </p>
                <div className="flex justify-center items-center !mt-6 !px-5"  data-aos="fade-down" data-aos-duration="500" data-aos-delay="1000">
                  <Input
                    placeholder="Search for bikes, accessories, and more..."
                    prefix={<SearchOutlined className="text-gray-500 text-xl" />}
                    className="w-full max-w-xl h-10 text-lg rounded-full border-2 border-orange-500 px-6 shadow-md focus:border-orange-600"
                  />
                </div>
              </div>
            </div>
            <div className="fader__slide" style={{ opacity: opacities[idx] }}>
              <img src={src} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
