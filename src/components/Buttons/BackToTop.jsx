import { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight / 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
         className="fixed right-9 bottom-9 w-10 h-10 rounded-full text-2xl bg-light-blue text-white dark:bg-dark-blue shadow-sm flex justify-center items-center"
        >
          <IoArrowUp/>
        </button>
      )}
    </>
  )
}

export default BackToTop
