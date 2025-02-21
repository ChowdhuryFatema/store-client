
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./GallerySlider.css"
import sliderImg1 from '../../../assets/images/banner8.webp';
import sliderImg2 from '../../../assets/images/banner3.webp';
import sliderImg3 from '../../../assets/images/banner2.jpg';
import sliderImg4 from '../../../assets/images/banner5.jpg';
import sliderImg5 from '../../../assets/images/banner1.jpg';
import sliderImg6 from '../../../assets/images/banner2.jpg';
import sliderImg7 from '../../../assets/images/banner3.webp';
import sliderImg8 from '../../../assets/images/banner4.jpg';
import sliderImg9 from '../../../assets/images/banner5.jpg';
import sliderImg10 from '../../../assets/images/banner1.jpg';

const carousel = (slider: any) => {
  const z = 760
  function rotate() {
    const deg = 400 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on("created", () => {
    const deg = 400 / slider.slides.length
    slider.slides.forEach((element: any, idx: number) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
}

export default function GallerySlider() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  )

  return (

    <div className="mt-5 md:mt-28 md:px-12 px-5">

      <div className="flex justify-center items-center">
        <div className="max-w-4xl mx-auto !mb-10">
          <h2 className="merienda text-center font-semibold text-3xl md:text-4xl lg:text-5xl text-orange-500" data-aos="fade-down" data-aos-duration="500">Gallery</h2>
          {/* <p className="text-center">Don’t miss out on our exclusive offers! We’re bringing you the best deals on top-quality bikes and accessories. Whether you're upgrading your ride or buying your first bike, now is the perfect time to shop. Enjoy incredible discounts, free shipping, and much more. Hurry, these offers won’t last long—grab yours today and ride away with unbeatable savings!</p> */}
        </div>
      </div>

      <div className="wrapper !py-20">
        <div className="scene">
          <div className="carousel keen-slider" ref={sliderRef}>
            <div className="carousel__cell number-slide1">
              <img className="rounded-xl w-[500px] h-[300px] shadow shadow-orange-200" src={sliderImg1} alt="" />
            </div>
            <div className="carousel__cell number-slide2">
              <img className="rounded-xl w-[800px] h-[350px] shadow shadow-orange-200" src={sliderImg2} alt="" />
            </div>
            <div className="carousel__cell number-slide3">
              <img className="rounded-xl w-[800px] h-[350px] shadow shadow-orange-200" src={sliderImg3} alt="" />
            </div>
            <div className="carousel__cell number-slide4">
              <img className="rounded-xl w-[800px] h-[350px] shadow shadow-orange-200" src={sliderImg4} alt="" />
            </div>
            <div className="carousel__cell number-slide5">
              <img className="rounded-xl w-[800px] h-[350px] shadow shadow-orange-200" src={sliderImg5} alt="" />
            </div>
            <div className="carousel__cell number-slide6">
              <img className="rounded-xl w-[800px] h-[350px] shadow shadow-orange-200" src={sliderImg6} alt="" />
            </div>
            <div className="carousel__cell number-slide7">
              <img className="rounded-xl w-[800px] h-[350px] shadow shadow-orange-200" src={sliderImg7} alt="" />
            </div>
            <div className="carousel__cell number-slide8">
              <img className="rounded-xl w-[800px] h-[350px] shadow shadow-orange-200" src={sliderImg8} alt="" />
            </div>
            <div className="carousel__cell number-slide7">
              <img className="rounded-xl w-[800px] h-[350px] shadow shadow-orange-200" src={sliderImg9} alt="" />
            </div>
            <div className="carousel__cell number-slide8">
              <img className="rounded-xl w-[800px] h-[350px] shadow shadow-orange-200" src={sliderImg10} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="max-w-4xl mx-auto !mb-10">
          {/* <h2 className="merienda text-center font-semibold text-3xl md:text-4xl lg:text-5xl text-orange-500">Gallery</h2> */}
          <div className="!mt-10">
            <p className="text-center">Don’t miss out on our exclusive offers! We’re bringing you the best deals on top-quality bikes and accessories. Whether you're upgrading your ride or buying your first bike, now is the perfect time to shop. Enjoy incredible discounts, free shipping, and much more. Hurry, these offers won’t last long—grab yours today and ride away with unbeatable savings!</p><br /><br />
            <p className="text-center">Don’t miss out on our exclusive offers! We’re bringing you the best deals on top-quality bikes and accessories. Whether you're upgrading your ride or buying your first bike, now is the perfect time to shop. Enjoy incredible discounts, free shipping, and much more. Hurry, these offers won’t last long—grab yours today and ride away with unbeatable savings!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
