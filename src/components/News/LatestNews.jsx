import newsImg from "../../assets/newsImg.png";
function LatestNews() {
    const newsData = [
        {
          image: newsImg, 
          title: 'مميزات سوق عقار السعودية',
          description: ' هذا النص يتم استبداله هذا النص يتم استبداله هذا النص. هذا النص يتم استبداله هذا النص يتم استبداله هذا النص...',
          date: '23 ثلاثاء'
        },
        {
          image: newsImg,
          title: 'مميزات سوق عقار السعودية',
          description: ' هذا النص يتم استبداله هذا النص يتم استبداله هذا النص. هذا النص يتم استبداله هذا النص يتم استبداله هذا النص...',
          date: '23 ثلاثاء'
        },
        {
          image: newsImg,
          title: 'مميزات سوق عقار السعودية',
          description: ' هذا النص يتم استبداله هذا النص يتم استبداله هذا النص. هذا النص يتم استبداله هذا النص يتم استبداله هذا النص...',
          date: '23 ثلاثاء'
        },
        {
            image: newsImg,
            title: 'مميزات سوق عقار السعودية',
            description: 'هذا النص يتم استبداله هذا النص يتم استبداله هذا النص. هذا النص يتم استبداله هذا النص يتم استبداله هذا النص...',
            date: '23 ثلاثاء'
          },
          {
            image: newsImg,
            title: 'مميزات سوق عقار السعودية',
            description: 'هذا النص يتم استبداله هذا النص يتم استبداله هذا النص. هذا النص يتم استبداله هذا النص يتم استبداله هذا النص...',
            date: '23 ثلاثاء'
          },
          {
            image: newsImg,
            title: 'مميزات سوق عقار السعودية',
            description: 'هذا النص يتم استبداله هذا النص يتم استبداله هذا النص. هذا النص يتم استبداله هذا النص يتم استبداله هذا النص...',
            date: '23 ثلاثاء'
          },
      ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 mt-5">
                {newsData.map((news, index) => (
                  <div key={index} className="relative bg-white dark:bg-dark-bg dark:shadow-md dark:shadow-gray-800 shadow-md rounded-lg overflow-hidden">
                    <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
                    <div className="p-4 text-center">
                      <h2 className="text-2xl font-medium text-light-lg-title dark:text-dark-lg-title">{news.title}</h2>
                      <p className="text-light-gray-color dark:text-dark-gray-color text-xl mt-2">{news.description}</p>
                    </div>
                    <div className="absolute w-[41px] h-[53px] top-0 right-2 lg:right-6 text-center text-[20px] font-medium bg-white dark:bg-dark-bg shadow-sm shadow-[#00000040] text-light-gray-color dark:text-dark-gray-color text-sm p-2 rounded-b-lg">
                      {news.date}
                    </div>
                  </div>
                ))}
              </div>
  )
}

export default LatestNews
