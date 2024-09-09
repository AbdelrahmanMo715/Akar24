import HeroBack from "../components/Heros/HeroBack"
import heroImg from "../assets/heroImg2.png";
import Title from "../components/Title/Title";
import { t } from "i18next";
import { useEffect } from "react";
import LatestNews from "../components/News/LatestNews";
import { Helmet } from "react-helmet-async";
function News() {
      useEffect(()=>{
        scrollTo(0,0)
      },[])
  return (
        <div className="bg-white dark:bg-dark-bg">
        <Helmet>
          <title>{t("Akar24")}  |  {t("navLinks.News")}</title>
          <meta name="description" content={t('news.hero_title')} />
        </Helmet>
        <HeroBack
            title={t("news.hero_title")}
            description="هنا النص يتم استبداله هنا النص يتم استبداله هنا النص يتم استبداله هنا النص يتم استبداله هنا النص يتم استبداله هنا النص يتم استبداله."
            isTextStart={true} 
            imgSrc={heroImg}
      />

        <div className="container py-10">
                <Title h2={t('news.section_title')}
                p="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم "
                />
                <LatestNews/>
        </div>
          
        </div>
  )
}

export default News
