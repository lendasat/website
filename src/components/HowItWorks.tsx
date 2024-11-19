import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function HowItWorks() {
  useGSAP(() => {
    gsap.from(".slope", {
      opacity: 0,
      translateY: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".slope",
        start: "top 70%",
      },
      ease: "back.out",
    });
  }, []);

  return (
    <section id={"how-it-works"}>
      <div className="max-w-6xl">
        <h3 className="pt-10 mb-10 text-center slope">How it Works</h3>

        <div className="grid lg:grid-cols-2 gap-10 px-6 md:px-10 lg:px-12 pt-12 how_it_works rounded-3xl md:rounded-[33px]">
          <div className="flex flex-col items-start justify-between">
            <div>
              <span className="bg-[#ECE4FC] slope inline-block py-1 px-3 rounded-full text-lg">How it works</span>
              <h4 className="mb-10 slope">
                <span className="text-primary">Bitcoin-collateralized</span> loans <br />
              </h4>
              <p className="slope md:text-xl">
                No rehypothecation, no KYC, no credit checks. You put up bitcoin as a collateral and receive a stable
                coins loan.
              </p>
              <div className="flex flex-col sm:flex-row gap-1 mt-5">
                <Link
                  to="#subscribe"
                  className="w-full sm:w-auto text-white flex gap-2 px-8 py-1 rounded-full bg-primary hover:bg-black transition-colors ease-linear duration-300 heading"
                >
                  <span>Try It</span> <GoArrowUpRight className="arrow_movement" />
                </Link>
              </div>
            </div>
            <div className="mt-20 slope">
            </div>
          </div>
          <div className="space-y-5 pb-10">
            {Steps.map((items, idx) => {
              return (
                <div className="slope md:px-8 px-6 pt-8 pb-12 bg-white rounded-2xl" key={idx}>
                  <span className="inline-block py-1.5 px-4 rounded-full border border-[#7545D4] bg-[#ECE4FC] text-primary md:text-sm text-xs">
                    Step {idx + 1}
                  </span>
                  <h5 className="mb-6 max-w-sm">{items.title}</h5>
                  <p className="text-sm md:text-base">{items.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const Steps = [
  {
    title: "Request a loan",
    content:
      "Pick your preferred loan terms from a list of offers or post your own loan request. We will find you the right match.",
  },
  {
    title: "Lock up your Bitcoin collateral",
    content:
      "Lock up your Bitcoin collateral into a smart contract. The amount depends on your selected Loan To Value (LTV) ratio.",
  },
  {
    title: "Receive the funds",
    content:
      "The lender will transfer the stable coins to a from you selected address. Fully trustless and without intermediaries.",
  },
];
