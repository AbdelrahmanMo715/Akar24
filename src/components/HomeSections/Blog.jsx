import Title from "../Title/Title"
import blogImg from "../../assets/blogImg.png";
import { t } from "i18next";
function Blog() {
  const blogs = [
    {
      title: 'ميزات سوق عقار السعودية',
      imgSrc: blogImg,
      description: 'هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله...',
    },
    
    {
      title: 'كيفية اختيار سكن مناسب',
      imgSrc: blogImg,
      description: 'هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله...',
    },
    {
      title: 'كيف طريقة الربح من العقارات',
      imgSrc: blogImg,
      description: 'هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله...',
    },
    
    {
      title: 'استثمار الأدوات',
      imgSrc: blogImg, // Replace with actual image paths
      description: 'هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله...',
    },
  ];
  return (
    <div className="container">
    <Title h2={t('home.blog.title')} p="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم "/>
    <div className=" mx-auto py-4 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white dark:bg-dark-bg rounded-lg shadow-md dark:shadow-gray-800 overflow-hidden lg:h-[407px]">
            <img src={blog.imgSrc} alt={blog.title} className="w-full h-48 md:h-50 object-cover" />
            <div className="p-4 text-center">
              <h2 className="text-2xl font-medium mb-2 text-light-lg-title dark:text-dark-lg-title ">{blog.title}</h2>
              <p className="text-light-gray-color dark:text-dark-gray-color font-normal text-xl">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Blog
