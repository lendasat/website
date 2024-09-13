import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaDiscord } from "react-icons/fa6";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function NewsLetter() {
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
    <section className="justify-start pt-36" id="subscribe">
      <div className="py-14 lg:pl-20 md:pl-14 w-full md:w-fit">
        <h3 className="news">
          Sign-up for early access
        </h3>
        <p className="news md:text-lg my-5">
          To sign-up for early access, please join our discord group.
        </p>
        <div className="flex sm:flex-row gap-1 mt-5 mb-10">
          <Link
            to="https://discord.gg/kyxqWFKMCF"
            target={"_blank"}
            className="w-full sm:w-auto text-white flex gap-2 px-8 py-4 rounded-full bg-primary hover:bg-black transition-colors ease-linear duration-300 heading"
          >
            <span className="lg:text-base text-sm">Join our discord</span> <FaDiscord size={"22px"} />
          </Link>
        </div>
      </div>
    </section>
  );
}
