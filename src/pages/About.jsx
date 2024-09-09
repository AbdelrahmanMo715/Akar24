import HeroMore from "../components/Heros/HeroMore"
import aboutHero from "../assets/aboutHero.png";
import Title from "../components/Title/Title";
import { t } from "i18next";
import { useEffect } from "react";
import Vision from "../components/AboutSections/Vision";
import Goals from "../components/AboutSections/Goals";
import Principles from "../components/AboutSections/Principles";
import { Helmet } from "react-helmet-async";
function About() {

  useEffect(()=>{
    scrollTo(0,0)
  },[])
  return (
    <div className="bg-white dark:bg-dark-bg lg:p-7">
            <Helmet>
            <title>{t("Akar24")}  |  {t("navLinks.Who we are")}</title>
            <meta name="description" content={t('home.hero_title')} />
          </Helmet>
            <HeroMore 
            title={t("about.hero_title")}
            description="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله.  هذا النص يتم استبداله هذا النص يتم استبداله. هذا النص يتم استبداله هذا النص يتم استبداله.   "
            isImgRight={false}
            imageSrc={aboutHero}
            isTextCenter={false}
            />
            <div className="py-7 container mt-5">
            <Title
             h2={t("about.section_title")}
                p="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم "
            
            />
            
            <Vision/>
            <Goals/>
            <Principles/>

        
            </div>
        
    </div>
  )
}

export default About
