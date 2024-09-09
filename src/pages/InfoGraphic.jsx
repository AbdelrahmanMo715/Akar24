import HeroMore from "../components/Heros/HeroMore"
import HeroGraphic from "../assets/infograaphic.png"
import Title from "../components/Title/Title"
import videoEx from "../assets/vedio.png";
import { t } from "i18next";
import { useEffect } from "react";
import IntroVideo from "../components/Video/IntroVideo";
import { Helmet } from "react-helmet-async";

function InfoGraphic() {
  useEffect(()=>{
    scrollTo(0,0)
  },[])
  return (
    <div className="bg-white dark:bg-dark-bg lg:p-7">
    <Helmet>
          <title>{t("Akar24")}  |  {t("navLinks.Infographic")}</title>
          <meta name="description" content={t('InfoGraphic.hero_title')} />
        </Helmet>
    <HeroMore 
        title={t("InfoGraphic.hero_title")}
        description="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله.     "
        isImgRight={true}
        imageSrc={HeroGraphic}
        isTextCenter={true}
    />
    <div className="py-7 container mt-5">
    <IntroVideo
        title={t("Introductory video.title")} 
        description="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم "
        videoSource={videoEx}
   />
    </div>

</div>
  )
}

export default InfoGraphic
