
function Title({h2,p}) {
  return (
    <div className="text-center">
      <h2 className="text-[30px] md:text-[38px] lg:text-[48px] text-light-sm-title dark:text-dark-sm-title font-medium">{h2}</h2>
      <p className="text-[17px] md:text-[18px] lg:text-[20px] text-light-text dark:text-white w-full md:w-[700px] mx-auto font-normal">{p}</p>
    </div>
  )
}

export default Title
