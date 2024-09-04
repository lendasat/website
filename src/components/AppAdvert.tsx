import { GoArrowUpRight } from 'react-icons/go';
import Triangle from './../assets/icons/traiangle.png';
import MobileApp from './../assets/images/mobile_app.png';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AppAdvert() {
    useGSAP(() => {

        gsap.from('.event', {
            translateY: 200,
            opacity: 0,
            duration: 1,
            stagger: 0.05,
            scrollTrigger: {
                trigger: ".event",
                start: "top 80%",
            },
            ease: "power1.out",
        })
        gsap.from('.event_two', {
            translateY: 200,
            opacity: 0,
            duration: 1,
            stagger: 0.05,
            scrollTrigger: {
                trigger: ".event_two",
                start: "top 80%",
            },
            ease: "power1.out",
        })
        gsap.from('.event_one', {
            translateY: 200,
            opacity: 0,
            duration: 1,
            stagger: 0.05,
            scrollTrigger: {
                trigger: ".event_one",
                start: "top 80%",
            },
            ease: "power1.out",
        })
    }, [])

    return (
        <section id='features'>
            <div className='lg:space-y-14 space-y-20 w-full'>
                {
                    PremiumContent.map((items, idx) => {
                        return (
                            <div
                                key={idx}
                                className='grid items-center md:grid-cols-2 gap-10 md:gap-5'>
                                <div className={`flex items-center ${idx == 1 && 'md:order-2'} justify-center h-full`}>
                                    <div>
                                        <img src={Triangle} alt="Icon" className={`mb-8 ${idx == 0 ? 'event_one' : ''} ${idx == 2 ? 'event_two' : ''} ${idx == 1 ? 'event' : ''} h-12 w-auto`} />
                                        <span className={`bg-[#F3EDFD] ${idx == 0 ? 'event_one' : ''} ${idx == 2 ? 'event_two' : ''} ${idx == 1 ? 'event' : ''} inline-block px-4 py-1 md:text-base lg:text-xl rounded-full text-primary`}>{items.detail}</span>
                                        <h3 className={`max-w-sm ${idx == 1 ? 'event' : ''} ${idx == 2 ? 'event_two' : ''} ${idx == 0 ? 'lg:pt-12 lg:pb-16 py-10 event_one' : 'py-8 lg:py-12'} lg:text-[40px] md:text-3xl`}>
                                            {items.catchPhrase}
                                        </h3>
                                        <div className="pl-6">
                                            <ul className='list-disc text-secondary space-y-2 md:text-base lg:text-lg max-w-[300px]'>
                                                {
                                                    items.options.map((item, index) => {
                                                        return (
                                                            <li className={`${idx == 0 ? 'event_one' : ''} ${idx == 2 ? 'event_two' : ''} ${idx == 1 ? 'event' : ''}`} key={index}>{item}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <Link to={items.url} className={`text-[#2E1B52] ${idx == 0 ? 'event_one' : ''} ${idx == 2 ? 'event_two' : ''} ${idx == 1 ? 'event' : ''} w-fit flex items-center gap-2 px-8 py-4 rounded-full bg-[#F3F3F3] mt-10 hover:bg-[#4E2E8D] hover:text-white transition-colors ease-linear duration-300`}>
                                            <span className='lg:text-base text-sm'>Learn More</span> <GoArrowUpRight className='arrow_movement' />
                                        </Link>
                                    </div>
                                </div>
                                <div className={`rounded-3xl ${idx == 0 ? 'event_one' : ''} ${idx == 2 ? 'event_two' : ''} xl:rounded-[50px] overflow-hidden w-full pt-10 ${idx == 1 ? 'event md:order-1 gradient_bg' : 'gradient_bg_one'} flex items-center justify-center`}>
                                    <img src={items.src} alt="Mobile App" className='h-full w-full object-contain object-bottom' />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}



const PremiumContent = [
    {
        detail: 'Your terms. Your keys. Your coins.',
        catchPhrase: 'Stay in control.',
        url: '#subscribe',
        src: MobileApp,
        options: [
            'Built on Bitcoin',
            'Secured by Discreet Log Contracts (DLCs)',
            'No counterparty risk',
        ],
    },
    {
        detail: "Friends don't let friends sell bitcoin.",
        catchPhrase: <span>Don't sell your <span className='text-primary'>Bitcoin</span></span>,
        url: '#subscribe',
        src: MobileApp,
        options: [
            'Maintain long-term exposure to Bitcoin',
            'Peer-to-peer and trustless',
            'No sell, no capital gains',
            'Instant cashflow for your bitcoin - pay your LN invoice instantly',
        ],
    },
    {
        detail: 'Not just fast. Instant',
        catchPhrase: 'Pay back when you want.',
        url: '#subscribe',
        src: MobileApp,
        options: [
            'Pay back your loan via Lightning',
            'Receive your collateral back on Lightning',
            'Trustless loan payback',
        ],
    },
]