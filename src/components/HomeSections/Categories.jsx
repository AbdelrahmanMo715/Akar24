import Title from "../Title/Title"
import CategoryImg1 from "../../assets/عقارات01.png";
import CategoryImg2 from "../../assets/عقارات02.png";
import CategoryImg3 from "../../assets/عقارات03.png";
import CategoryImg4 from "../../assets/عقارات04.png";
import CategoryImg5 from "../../assets/عقارات05.png";
import CategoryImg6 from "../../assets/عقارات06.png";
import { t } from "i18next";
function Categories() {
    const categories = [
        { name: t("home.categories.Exhibitions"), imgSrc: CategoryImg1 },
        { name: t('home.categories.Offices'), imgSrc: CategoryImg2 },
        { name: t("home.categories.Villas & palaces"), imgSrc: CategoryImg3 },
        { name: t("home.categories.Agricultural land"), imgSrc: CategoryImg4 },
        { name: t('home.categories.Buildings'), imgSrc: CategoryImg5 },
        { name: t('home.categories.Apartments'), imgSrc: CategoryImg6 },
      ];
  return (
    <div className="mb-5 pt-4">
      <Title h2={t('home.categories.title')} p="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم "/>
      <div className="container py-8 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-3xl shadow-md h-[320px] ${
              (index === 2 || index === 3) ? 'lg:col-span-2' : ''
            }`}
          >
            <img
              src={category.imgSrc}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-opacity-60 text-4xl font-semibold p-4 text-right w-full">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Categories
