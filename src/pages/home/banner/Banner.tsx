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
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
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

  console.log(instanceRef)

  return (
    <div>
      <div ref={sliderRef} className="fader">
        {images.map((src, idx) => (
          <div key={idx}>
            <div className="bg-black w-full h-screen absolute z-10 opacity-10"></div>
            <div className="text-white absolute z-30 flex justify-center items-center w-full h-[40vh]">
              <div className="text-center">
                <h1 className="text-7xl">This is Banner Content</h1>
                <p>This is des</p>
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
