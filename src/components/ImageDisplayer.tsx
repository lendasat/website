import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ImageDisplayer(props: { src: string }) {
    useGSAP(() => {

        gsap.to('.desktop', {
            rotateX: 0,
            translateZ: 0,
            scrollTrigger: {
                trigger: ".desktop",
                start: "top bottom",
                end: "top 30%",
                scrub: true,
            },
            ease: "sine.inOut",
        })
    }, [])
    return (
        <section className="desktop pt-10">
            <img
                src={props.src}
                alt="Desktop image"
                className='h-full w-full object-contain object-center' />
        </section>
    )
}
