import { t } from "i18next";
import blogImg from "../../assets/blogImg.png";
function LatestArticles() {
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
  return (
    <>
    <h2 className="text-3xl font-medium text-light-blue dark:text-dark-blue my-10">{t("Articles.latest_articles")}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:h-[512px] mx-auto py-4 mt-5 ">
      
            {/* Right Articles (Two Articles) */}
            <div className="grid grid-rows-2 col-span-2 gap-4">
              {blogs.slice(1, 3).map((blog, index) => (
                <div key={index} className=" rounded-lg border dark:border-[#181A21] flex flex-col md:flex-row gap-3">
                  <img
                    src={blog.imgSrc}
                    alt={blog.title}
                    className=" h-full w-full md:w-1/2 object-cover rounded-lg"
                  />
                  <div className="mt-4 text-gray-400 flex-1">
                    <p className="text-[#6941C6] font-semibold">{blog.date}</p>
                    <h2 className="text-light-lg-title dark:text-dark-lg-title text-2xl font-medium mt-2">{blog.title}</h2>
                    <p className="mt-2 text-light-gray-color dark:text-dark-gray-color text-xl leading-relaxed ">
                      {blog.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

             {/* Left Article (First Article) */}
             <div className="col-span-2 p-2 border dark:border-[#181A21] rounded-lg">
             <img
               src={blogs[0].imgSrc}
               alt={blogs[0].title}
               className="w-full h-64 object-cover rounded-lg"
             />
             <div className="mt-4 text-gray-400">
               <p className="text-[#6941C6] font-semibold">{blogs[0].date}</p>
               <h2 className="text-light-lg-title dark:text-dark-lg-title text-2xl font-medium mt-2">{blogs[0].title}</h2>
               <p className="mt-2 text-light-gray-color dark:text-dark-gray-color text-xl leading-relaxed">
                 {blogs[0].description}
               </p>
             </div>
           </div>
          </div>
      
    </>
  )
}

export default LatestArticles
