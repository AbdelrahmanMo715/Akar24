import programImage1 from "../../assets/programimage1.png"
import programImage2 from "../../assets/programImage2.png"
import { RiPentagonLine } from "react-icons/ri";
import { t } from "i18next";
function AkarProgram() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

      {/* Right Side with Text and List */}
      <div className="flex flex-col p-4 rounded-lg">
        <h1 className="text-3xl  lg:text-5xl  font-medium text-start text-light-sm-title dark:text-dark-sm-title">{t('program.section_title')}</h1>
        <p className="text-start lg:text-xl text-light-text dark:text-white mt-4">
          هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم
          استبداله هذا النص يتم استبداله هذا النص يتم استبداله.
        </p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center gap-5 text-start shadow-md rounded-lg mb-4 h-[120px]  p-4">
            <div>
                <RiPentagonLine className="w-8 h-8 text-[#4361EE] dark:text-[#5A76F0]"/>
            </div>
            <div>
                <h4 className="text-start text-light-sm-title dark:text-dark-sm-title mb-2 font-medium">{t('program.section_title')}</h4>
                <p className="ml-2  text-light-text dark:text-white">هذا النص يتم استبداله هذا النص يتم استبداله.</p>
            </div>
           
          </li>
          <li className="flex items-center gap-5 text-start shadow-md rounded-lg mb-4 h-[120px]  p-4">
          <div>
          <RiPentagonLine className="w-8 h-8 text-[#4361EE] dark:text-[#5A76F0]"/>
      </div>
      <div>
          <h4 className="text-start text-light-sm-title dark:text-dark-sm-title mb-2 font-medium">{t('program.section_title')}</h4>
          <p className="ml-2  text-light-text dark:text-white">هذا النص يتم استبداله هذا النص يتم استبداله.</p>
      </div>
          </li>
          <li className="flex items-center gap-5 text-start shadow-md rounded-lg mb-4 h-[120px]  p-4">
            
          <div>
          <RiPentagonLine className="w-8 h-8 text-[#4361EE] dark:text-[#5A76F0]"/>
      </div>
      <div>
          <h4 className="text-start text-light-sm-title dark:text-dark-sm-title mb-2 font-medium">{t('program.section_title')}</h4>
          <p className="ml-2  text-light-text dark:text-white">هذا النص يتم استبداله هذا النص يتم استبداله.</p>
      </div>
          </li>
        </ul>
      </div>

      {/* Left Side with Images */}
      <div className="grid grid-rows-2 grid-cols-2 gap-4">
        {/* First Image */}
        <div className="row-span-1">
          <img
            src={programImage1}
            alt="First"
            className="w-full h-full object-cover rounded-lg "
          />
        </div>
        {/* Second Image (Takes Two Rows) */}
        <div className="row-span-2">
          <img
            src={programImage2}
            alt="Second"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Third Image */}
        <div className="row-span-1">
          <img
            src={programImage1}
             alt="Third"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

    </div>
  )
}

export default AkarProgram
