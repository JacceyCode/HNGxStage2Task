import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 1000 ? setShowTopBtn(true) : setShowTopBtn(false);
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showTopBtn && (
        <FaArrowUpLong
          className="fixed bottom-2 right-2 z-10 mx-auto h-10 w-10 animate-bounce cursor-pointer rounded-xl bg-black p-2 text-white hover:text-red-700"
          onClick={goToTop}
        />
      )}
    </>
  );
}

export default ScrollToTop;
