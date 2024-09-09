import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img1 from "../../assets/heroImg1.png";
import Img2 from "../../assets/heroImg2.png"
import Img3 from "../../assets/heroImg3.png"
import { t } from "i18next";
function HomeHero() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500

  };
  return (
    <div className='container relative'>
    <div className="slider-container my-0 ">
    <Slider {...settings} className="" >
      <div >
        <img src={Img1} />
      </div>
      <div >
      <img src={Img2} />
      </div>
      <div >
      <img src={Img3} />
      </div>
    </Slider>
  </div>
  <div className="w-[90%] md:w-[57%] z-[333] absolute text-center md:text-start right-[50%] md:right-20 translate-x-[50%] md:translate-x-0 h-[100%] md:h-auto top-0 md:top-[25%] p-2 lg:pl-8 rounded-2xl bg-[#E5F2FF80] dark:bg-[#1A1A1A80] flex flex-col justify-center">
        <h1 className="font-semibold text-[20px] sm:text-[50px] lg:text-[80px] text-light-lg-title dark:text-dark-lg-title">{t('home.hero_title')}</h1>
        <p className="font-medium text-sm sm:text-[22px] lg:text-[24px] text-light-text dark:text-white leading-7">هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله.</p>
  </div>
    </div>
  )
}

export default HomeHero
