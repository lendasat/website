import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Contact() {
  useGSAP(() => {
    gsap.from(".news", {
      opacity: 0,
      translateY: 50,
      duration: 1,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".news",
        start: "top 80%",
      },
      ease: "back.out",
    });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center pt-36" id="subscribe">
      <div className="py-14 lg:pl-20 md:pl-14 text-center">
        <h3 className="news">
          <span className="text-primary">Lendasat</span> - the bitcoin way to earn interest
        </h3>
        <p className="news md:text-lg my-5">
          Risk-minimized, transparent, 24/7 customer support
        </p>
        <div>
          <Link
            to="mailto:office@lendasat.com"
            className="text-white pay hover:bg-black transition-colors ease-linear duration-300 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary mt-10"
          >
            <span>Get in touch</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
