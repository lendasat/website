import Mobile from './../assets/images/mobile_half.png';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function HowItWorks() {

    useGSAP(() => {

        gsap.from('.slope', {
            opacity: 0,
            translateY: 50,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".slope",
                start: "top 70%",
            },
            ease: 'back.out'
        })
    }, [])

    return (
        <section>
            <div className="max-w-6xl">
                <h3 className='pt-10 mb-10 text-center slope'>How it Works</h3>

                <div className='grid lg:grid-cols-2 gap-10 px-6 md:px-10 lg:px-12 pt-12 how_it_works rounded-3xl md:rounded-[33px]'>
                    <div className='flex flex-col items-start justify-between'>
                        <div>
                            <span className='bg-[#ECE4FC] slope inline-block py-1 px-3 rounded-full text-lg'>How it works</span>
                            <h4 className='mb-10 slope'>Immediate loans <br /> backed by <span className="text-primary">
                                Bitcoin <br /> collateral</span></h4>
                            <p className='slope md:text-xl'>Lendasat makes borrowing super easy.</p>
                        </div>
                        <div className="mt-20 slope">
                            <img src={Mobile} alt="Mobile Screen" className='object-contain object-center h-full w-full' />
                        </div>
                    </div>
                    <div className="space-y-5 pb-10">
                        {
                            Steps.map((items, idx) => {
                                return (
                                    <div className="slope md:px-8 px-6 pt-8 pb-12 bg-white rounded-2xl" key={idx}>
                                        <span className='inline-block py-1.5 px-4 rounded-full border border-[#7545D4] bg-[#ECE4FC] text-primary md:text-sm text-xs'>Step {idx + 1}</span>
                                        <h5 className='mb-6 max-w-sm'>{items.title}</h5>
                                        <p className='text-sm md:text-base'>{items.content}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}



const Steps = [
    {
        title: 'Give us your Lightning invoice',
        content: 'Paste a BOLT 11 invoice you want us to pay. It can be for a giftcard (Bitrefill), a utility bill (Livingroom of Satoshi), or for cash (with Strike).'
    },
    {
        title: 'Lock up your Bitcoin collateral',
        content: 'Lock up your Bitcoin collateral into a smart contract using Lightning. The amount depends on your selected Loan To Value (LTV) ratio.'
    },
    {
        title: 'Get the goods',
        content: 'We pay your invoice and you get what you want. After you pay back the loan, you get back your Bitcoin collateral on Lightning.'
    },
]