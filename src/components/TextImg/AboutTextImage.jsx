
function AboutTextImage({ title, textList, imageSrc, isImageLeft = false,imageWidth = "50%",hasBG }) {
  return (
    <div className={`flex flex-col md:flex-row ${isImageLeft ? 'md:flex-row-reverse' : ''} items-center gap-10 my-12 ${hasBG ? "bg-light-sm-bg dark:bg-dark-sm-bg" : ""} `}>
      
      {/* Text Section */}
      <div className={`md:w-${isImageLeft ? '1/2' : '1/2'} p-4`}>
        <h2 className="text-2xl md:text-3xl font-medium text-light-lg-title dark:text-dark-lg-title mb-4 relative after:content-[''] after:block after:w-[40px] after:h-[2px] after:bg-light-blue after:mt-2 after:mx-0">{title}</h2>
        <ul className="list-disc space-y-2 pl-5">
          {textList.map((text, index) => (
            <li key={index} className="list-inside text-light-gray-color dark:text-dark-gray-color md:text-lg px-4">{text}</li>
          ))}
        </ul>
      </div>

      {/* Image Section */}
      <div 
        className="relative md:w-1/2" 

      >
        <img 
        style={{ width: imageWidth }}
          src={imageSrc} 
          alt="About" 
          className="w-full h-auto object-cover rounded-lg" 
        />
      </div>
      
    </div>
  )
}

export default AboutTextImage
