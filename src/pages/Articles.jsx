import HeroMore from "../components/Heros/HeroMore"
import Title from "../components/Title/Title"
import articlesHero from "../assets/articles.png";
import blogImg from "../assets/blogImg.png";
import { useEffect } from "react";
import { t } from "i18next";
import LatestArticles from "../components/Articles/LatestArticles";
import AllArticles from "../components/Articles/AllArticles";
import { Helmet } from "react-helmet-async";

function Articles() {
  const blogs = [
    {
      title: 'ميزات سوق عقار السعودية',
      imgSrc: blogImg,
      description: 'هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله...',
      date: 'All Safe• 19 Jan 2022',
    },
    
    {
      title: 'كيفية اختيار سكن مناسب',
      imgSrc: blogImg,
      description: 'هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله...',
      date: 'All Safe• 19 Jan 2022',
    },
    {
      title: 'كيف طريقة الربح من العقارات',
      imgSrc: blogImg,
      description: 'هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله...',
      date: 'All Safe• 19 Jan 2022',
    },
    
    {
      title: 'استثمار الأدوات',
      imgSrc: blogImg, // Replace with actual image paths
      description: 'هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله...',
      date: 'All Safe• 19 Jan 2022',
    },
  ];
  useEffect(()=>{
    scrollTo(0,0)
  },[])
  return (
    <div className="bg-white dark:bg-dark-bg lg:p-7">
            <Helmet>
            <title>{t("Akar24")}  |  {t("navLinks.Articles")}</title>
            <meta name="description" content={t('Articles.hero_title')} />
          </Helmet>
            <HeroMore 
            title={t("Articles.hero_title")}
            description="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله.     "
            isImgRight={true}
            imageSrc={articlesHero}
            isTextCenter={true}
            />
            <div className="py-7 container mt-5">
            <Title
             h2={t("Articles.section_title")}
                p="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم "
            
            />

            <LatestArticles/>
          
             <AllArticles/>
        
            </div>
        
    </div>
  )
}

export default Articles
