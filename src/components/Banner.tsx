import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP);
export const Banner = () => {
  useGSAP(() => {
    window.onload = () => {
      gsap.from(".icon", {
        translateY: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.3,
        ease: "power3.inOut",
      });
      gsap.from(".heading", {
        translateY: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.inOut",
      });
    };
  }, []);
  return (
    <section className="min-h-screen flex items-center justify-center bg-blue-100 pt-30 px-4 pb-4">
      <div className="w-[95vw] h-[95vh] border-purple-200 rounded-3xl flex items-center justify-center bg-opacity-95 shadow-lg">
        <div className="text-center max-w-4xl w-full mx-auto p-4">
          <h1 className="mb-14 heading text-4xl md:text-5xl lg:text-6xl font-bold">
            You've hodled enough.<br />
            <span className="text-primary">Start living, pay later.</span>
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-[#595959] heading mb-8">
            Borrow against your Bitcoin in a secure and non-custodial way. <br />
            Never. Sell. Your. Bitcoin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              to="#subscribe"
              className="w-full sm:w-auto text-white flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-black transition-colors ease-linear duration-300 heading"
            >
              <span>Try It</span> <GoArrowUpRight className="arrow_movement" />
            </Link>
            <Link
              to="#how-it-works"
              className="w-full sm:w-auto text-[#2E1B52] flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#F3F3F3] hover:bg-[#4E2E8D] hover:text-white transition-colors ease-linear duration-300 heading"
            >
              <span>Learn More</span> <GoArrowUpRight className="arrow_movement" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
