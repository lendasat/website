import { GoArrowUpRight } from 'react-icons/go';
import Payout from './../assets/images/payout.png';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Payouts() {

    useGSAP(() => {

        gsap.from('.pay', {
            opacity: 0,
            translateY: 50,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".pay",
                start: "top 70%",
            },
            ease: 'back.out'
        })
    }, [])
    return (
        <section>
            <div
                className='grid items-center md:grid-cols-2 gap-10 md:gap-5 w-full max-w-6xl'>
                <div className='how_it_works pay rounded-3xl xl:rounded-[50px] overflow-hidden w-full pt-12 px-10 flex items-center justify-center'>
                    <img src={Payout} alt="Mobile App" className='h-full w-full max-w-sm object-contain object-bottom' />
                </div>
                <div className='flex items-center justify-center h-full pt-20 pb-32'>
                    <div>
                        <div className="pl-6">
                            <ul className='list-disc text-black space-y-2 md:text-base lg:text-lg max-w-[300px]'>
                                <li className='pay'>Invest on your terms</li>
                                <li className='pay'> Market-driven rates up to 20% APY</li>
                                <li className='pay'>Flexible terms from 1-24 months</li>
                                <li className='pay'>Low risk with LTV of min 50%</li>
                            </ul>
                        </div>
                        <Link to="#subscribe" className='text-white pay hover:bg-black transition-colors ease-linear duration-300 flex items-center gap-2 px-8 py-4 rounded-full bg-primary mt-10 w-fit'>
                            <span className='lg:text-base text-sm'>Get early access</span> <GoArrowUpRight />
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}
