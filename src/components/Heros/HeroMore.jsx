
function HeroMore({ imageSrc, title,description, isImgRight = true, isTextCenter }) {

  return (
    <div
      className={`flex flex-col ${isImgRight ? 'md:flex-row' : 'md:flex-row-reverse'} ${isTextCenter ? "items-center" : "items-start"} gap-6  lg:mt-6 mb-20`}
    >
    <div className="w-full md:w-1/2">
    <img
        src={imageSrc}
        alt={title}
        className="w-full rounded-lg"
      />
    
    </div>
      
      <div className="w-full md:[100%-484px] mx-0 md:mx-10">
        <h2 className={`w-full lg:w-[580px] text-3xl md:text-6xl lg:text-[80px] text-center md:text-start font-semibold  text-light-lg-title dark:text-dark-lg-title mb-6 `}>
          {title}
        </h2>
       <p className={`text-lg md:text-xl lg:2xl text-center md:text-start font-medium text-light-lg-title dark:text-dark-lg-title mb-6 `}>{description}</p>
      </div>
    </div>
  )
}

export default HeroMore
