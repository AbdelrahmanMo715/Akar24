import HeroMore from "../components/Heros/HeroMore"
import Title from "../components/Title/Title"
import programHero from "../assets/programs.png";
import videoEx from "../assets/Shooting-Aspire-Vero-16-Sapphire-Banner.mp4";
import { t } from "i18next";
import { useEffect } from "react";
import AkarProgram from "../components/Program/AkarProgram";
import IntroVideo from "../components/Video/IntroVideo";
import { Helmet } from "react-helmet-async";

function Program() {
  useEffect(()=>{
    scrollTo(0,0)
  },[])
  return (
    <div className="bg-white dark:bg-dark-bg lg:p-7">
        <Helmet>
          <title>{t("Akar24")}  |  {t("navLinks.Aqar 24 Program")}</title>
          <meta name="description" content={t('program.hero_title')} />
        </Helmet>
      <HeroMore 
        title={t("program.hero_title")}
        description="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله.     "
        isImgRight={false}
        imageSrc={programHero}
        isTextCenter={true}
      />
   <div className="py-7 container mt-5">
        <Title
        h2={t('program.section_title')}
            p="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم "
        
        />

    <div className="mx-auto my-10">

      <AkarProgram/>

     </div>

    <IntroVideo
        title={t("Introductory video.title")} 
        description="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم "
        videoSource={videoEx}
    />
    </div>
  </div>
  )
}

export default Program
