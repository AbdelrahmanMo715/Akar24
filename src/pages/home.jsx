import { Helmet } from "react-helmet-async"
import Blog from "../components/HomeSections/Blog.jsx"
import Categories from "../components/HomeSections/Categories.jsx"
import HomeHero from "../components/HomeSections/HomeHero.jsx"
import Services from "../components/HomeSections/Services.jsx"
import VideoSection from "../components/HomeSections/VideoSection.jsx"
import { t } from "i18next"

function Home() {
  return (
    <div className="bg-white dark:bg-dark-bg p-3 md:p-7">
      <Helmet>
          <title>{t("Akar24")}</title>
          <meta name="description" content={t('home.hero_title')} />
        </Helmet>
       <HomeHero/>
       <VideoSection/>
       <Services/>
       <Categories/>
       <Blog/>
    </div>
  )
}

export default Home
