import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP);
export default function ForLenders() {
  useGSAP(() => {
    const handleAfterLoading = () => {
      gsap.from(".icon", {
        translateY: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.3,
        ease: "power3.inOut",
      });
    };

    window.onload = handleAfterLoading;
  }, []);
  return (
    <section className="pt-60">
      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <span className="bg-[#F3EDFD] icon inline-block px-4 py-1 md:text-base lg:text-xl rounded-full text-primary ">
            For Lenders
          </span>
          <h1 className="mb-7 text-left icon xl:text-[50px] xl:leading-[1.2] lg:text-4xl md:text-3xl">
            Earn interest with <br className="hidden lg:block" /> <span className="text-primary">bitcoin-secured</span>
            {" "}
            loans
          </h1>
        </div>
        <div className="flex flex-col items-start gap-5">
          <p className="text-base icon md:text-lg lg:text-xl text-[#595959]">
            Whether fiat or stable coins. At Lendasat you can earn more with your money.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="#subscribe"
              className="text-white icon flex items-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-black transition-colors ease-linear duration-300"
            >
              <span>Get In touch</span> <GoArrowUpRight className="arrow_movement" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
