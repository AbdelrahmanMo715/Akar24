import HeroBack from "../components/Heros/HeroBack"
import Title from "../components/Title/Title"
import HeroImg from "../assets/AuctionHero.png";
import AuctionList from "../components/Auction/AuctionList";
import { useEffect } from "react";
import { t } from "i18next";
import { Helmet } from "react-helmet-async";
function Auction() {
    useEffect(()=>{
      scrollTo(0,0)
    },[])
  return (
    <div className="bg-white dark:bg-dark-bg lg:p-7">
        <Helmet>
          <title>{t("Akar24")}  |  {t("navLinks.Auctions")}</title>
          <meta name="description" content={t('auction.hero_title')} />
        </Helmet>
    <HeroBack 
    title={t("auction.hero_title")}
    description="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله."
    isTextStart={true}
    imgSrc={HeroImg}
    />
    <div className="py-7 container mt-5">
            <Title 
                h2={t('auction.section_title')}
                p="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم "
            />

          <AuctionList/>
    </div>
      
    </div>
  )
}

export default Auction
