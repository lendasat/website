import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function HowItWorksLender() {
  useGSAP(() => {
    gsap.from(".how-it-works", {
      opacity: 0,
      translateY: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".how-it-works",
        start: "top 70%",
      },
      ease: "back.out",
    });
  }, []);

  return (
    <section id={"how-it-works"} className={""}>
      <div className="lg:space-y-14 space-y-20 w-full bg-[#F3EDFD] rounded-xl p-7 pt-4">
        <div className="text-center">
          <h3 className="pt-10 mb-5 text-center slope">
            <span className="text-primary">Peer-to-peer</span> lending done right
          </h3>
          <p className="text-secondary">
            It's never been easier to lend cash or stable coins to bitcoiners.
          </p>
        </div>

        <div className="grid grid-cols-8 gap-0 items-center">
          <div className="col-span-2">
            <LendingStep
              title="Chose or offer a loan"
              description="Chose a loan to invest in or create loan offers with your terms."
            />
          </div>
          <ArrowRight className="justify-self-center text-gray-500 col-span-1" size={20} />
          <div className="col-span-2">
            <LendingStep
              title="Transfer funds"
              description="Transfer funds once a borrower locked up their bitcoin collateral."
            />
          </div>
          <ArrowRight className="justify-self-center text-gray-500 col-span-1" size={20} />
          <div className="col-span-2">
            <LendingStep
              title="Monitor and earn"
              description="Earn interest on fixed investment terms and monitor the collateral being secured."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface LendingStepProps {
  title: string;
  description: string;
}

const LendingStep = ({ title, description }: LendingStepProps) => (
  <div className="flex flex-col items-start">
    <h3 className="text-lg mb-1 text-primary font-bold">{title}</h3>
    <p className="text-secondary">{description}</p>
  </div>
);
