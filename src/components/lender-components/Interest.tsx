import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { GrLineChart, GrPieChart } from "react-icons/gr";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Interest() {
  useGSAP(() => {
    gsap.from(".int", {
      translateY: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".int",
        start: "top 80%",
      },
      ease: "power3.inOut",
    });
  }, []);
  return (
    <section>
      <div className="max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="mb-3 int">
            The <span className="text-primary">bitcoin-way</span> to earn interest
          </h3>
          <p className="md:text-lg int lg:text-xl text-sm">
            One platform to manage your loans, monitor the collateral and to invest in bitcoin-backed products.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-10">
          {InterestDeals.map((items, idx) => {
            return (
              <div
                className={`pt-12 px-6 md:px-8 int xl:px-10 ${
                  idx == 1 ? "bg-[#EDEBFE]" : "bg-[#F3F3F3]"
                } rounded-3xl min-h-[400px] pb-10 md:min-h-[450px]`}
                key={idx}
              >
                {items.img}
                <div className="h-32">
                  <h4 className={`mb-6 ${idx == 1 ? "text-primary" : "text-black]"} max-w-xs`}>{items.title}</h4>
                </div>
                <p className="text-lg xl:text-xl max-w-[260px]">{items.deal}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const InterestDeals = [
  {
    title: "Transparent and secure",
    img: (
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.06)",
          borderRadius: "20%",
          padding: "12px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GrPieChart style={{ color: "#623AB0" }} size="32px" />
      </div>
    ),
    deal:
      "The bitcoin collateral is locked on-chain and visible 24/7. The contracts are immune to manipulation, rehypothecation or theft.",
  },
  {
    title: "Liquidity risk minimized ",
    img: (
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.06)",
          borderRadius: "20%",
          padding: "12px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaFileInvoiceDollar style={{ color: "#623AB0" }} size="32px" />
      </div>
    ),
    deal:
      "Your investment is always secured by bitcoin collateral exceeding its value and watched by an automatic liquidation engine.",
  },
  {
    title: "High yield",
    img: (
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.06)",
          borderRadius: "20%",
          padding: "12px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GrLineChart style={{ color: "#623AB0" }} size="32px" />
      </div>
    ),
    deal:
      "Despite a very low risk profile, our loans offer higher returns than traditional fixed-term products.its value and watched by an automatic liquidation engine.",
  },
];
