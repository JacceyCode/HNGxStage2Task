import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 1200 ? setShowTopBtn(true) : setShowTopBtn(false);
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="relative">
      {showTopBtn && (
        <FaAngleUp
          className="fixed bottom-2 right-2 z-10 h-16 w-16 animate-bounce cursor-pointer rounded-full bg-red-700 hover:bg-black hover:text-red-700"
          onClick={goToTop}
        />
      )}
    </section>
  );
}

export default ScrollToTop;
