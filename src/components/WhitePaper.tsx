import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function WhitePaper() {
  useGSAP(() => {
    gsap.from(".whitepaper", {
      opacity: 0,
      translateY: 50,
      duration: 1,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".whitepaper",
        start: "top 80%",
      },
      ease: "back.out",
    });
  }, []);

  return (
    <section id="whitepaper">
      <div className="max-w-6xl">
        <div className="grid lg:grid-cols-1 gap-10 px-6 md:px-10 lg:px-12 pt-12 how_it_works rounded-3xl md:rounded-[33px]">
          <div className="flex flex-col items-start justify-between">
            <div>
              <h4 className="mb-10">
                Self-custodial loans powered by <span className="text-primary">Discreet Log Contracts</span>
              </h4>
              <p className="md:text-xl">
                Built with Discreet Log Contracts (DLCs), you stay in control of your funds at all times. An oblivious
                oracle attests to the market price at loan termination, allowing all parties to enforce the terms of the
                loan contract unilaterally.
              </p>
              <div className="flex justify-center sm:flex-row gap-1 mt-5 mb-10">
                <Link
                  to="https://whitepaper.lendasat.com/lendasat-whitepaper.pdf"
                  target={"_blank"}
                  className="w-full sm:w-auto text-white flex gap-2 px-8 py-4 rounded-full bg-primary hover:bg-black transition-colors ease-linear duration-300 heading"
                >
                  <span className="lg:text-base text-sm">Read the whitepaper</span>{" "}
                  <GoArrowUpRight className="arrow_movement" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className="justify-start pt-10" id="whitepaper">
    //   <div className="bg-indigo-800 p-8 rounded-lg shadow-lg w-full text-center">
    //     <div className="max-w-4xl mx-auto">
    //       <h3 className={`text-4xl font-bold mb-4`}>
    //         Self-custodial loans powered by DLCs
    //       </h3>
    //       <p className="mb-6 font-bold">
    //         Built with DLCs, you stay in control of your funds at all times. An oblivious oracle attests to the market price at loan termination, allowing all parties to enforce the terms of the loan contract unilaterally.
    //       </p>
    //       <div className="flex justify-center">
    //         <Link
    //           to="https://whitepaper.lendasat.com/lendasat-whitepaper.pdf"
    //           target={"_blank"}
    //           className="w-full sm:w-auto text-[#2E1B52] flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#F3F3F3] hover:bg-[#4E2E8D] hover:text-white transition-colors ease-linear duration-300 heading"
    //         >
    //           <span>Whitepaper</span> <GoArrowUpRight className="arrow_movement" />
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
