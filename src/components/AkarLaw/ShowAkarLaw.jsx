
function ShowAkarLaw({ title, description, image, Features , isTitleLeft }) {
  return (
    <div className={`flex flex-col-reverse  ${isTitleLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center justify-between gap-8 mt-12`}>
    {/* Title, Description, and Image Section */}
    <div className={`md:w-1/2 md:h-[500px] flex flex-col text-start border border-[#E0DEF7] dark:border-[#100D36] bg-[#F7F7FD] dark:bg-[#121212] rounded-lg p-4 ${isTitleLeft ? 'order-2 md:order-1 ' : 'order-1 md:order-2 '}`}>
      <h2 className="text-3xl text-light-lg-title dark:text-dark-lg-title font-bold mb-4">{title}</h2>
      <div className="flex">
      <p className="mb-8 text-xl font-normal text-light-gray-color dark:text-white">{description}</p>
      <img src={image} alt="Akar Law" className="w-[65%] hidden  lg:block mr-auto" />
      </div>
    </div>

    {/* Features Section */}
    <div className="md:w-1/2 md:h-[500px] grid grid-cols-1 sm:grid-cols-2 gap-6">
      {Features.map((item, index) => (
        <div key={index} className=" p-4 rounded-lg h-full">
          <div className="text-blue-500 text-3xl mb-2">
            {item.icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-light-blue dark:text-dark-blue mb-2">{item.name}</h3>
            <p className="font-normal text-light-gray-color dark:text-white">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ShowAkarLaw
