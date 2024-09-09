
function FinancingTextImg({ imageSrc, title, list, listType = 'ul', isImgLeft = true }) {
    const ListTag = listType === 'ol' ? 'ol' : 'ul';

  return (
    <div
      className={`flex flex-col ${isImgLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-6 mt-14`}
    >
      <img
        src={imageSrc}
        alt={title}
        className={`w-full md:w-1/2 rounded-lg`}
      />
      <div className="w-full md:w-1/2">
        <h2 className="text-xl md:text-2xl font-semibold text-light-lg-title dark:text-dark-lg-title mb-4 relative after:content-[''] after:block after:w-[90px] after:h-[2px] after:bg-light-blue after:mt-2 after:mx-0">
          {title}
        </h2>
        <ListTag className={`list-inside ${listType === "ul" ? "list-disc" : "list-decimal"}  text-gray-600`}>
          {list?.map((item, index) => (
            <li key={index} className="mb-2 font-medium text-[20px]">
              {item}
            </li>
          ))}
        </ListTag>
      </div>
    </div>
  )
}

export default FinancingTextImg
