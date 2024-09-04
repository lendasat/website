import { GoArrowUpRight } from 'react-icons/go';
import Bitcoin from './../assets/icons/bitcoin.png';
import Icon from './../assets/icons/icon.png';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);
export const Banner = () => {

    useGSAP(() => {
        const handleAfterLoading = () => {
            gsap.from('.icon', {
                translateY: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                delay: 0.3,
                ease: 'power3.inOut'
            })
            gsap.from('.heading', {
                translateY: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: 'power3.inOut'
            })

        }

        window.onload = handleAfterLoading
    }, [])
    return (
        <section className='pt-48'>
            <div className="text-center">
                <div className=" flex items-center justify-center gap-3">
                    <img className='h-10 w-auto icon' src={Bitcoin} alt="Icon" />
                    <img className='h-10 w-auto icon' src={Icon} alt="Icon" />
                </div>
                <h1 className='mb-14 heading'>
                    Generate interest <br />
                    through bitcoin-backed loans
                </h1>
                <p className='text-base md:text-xl lg:text-2xl text-[#595959] heading'>Lendasat lets you take instant loans to pay Lightning invoices. No need to sell your Bitcoin.</p>
                <div className="flex items-center justify-center gap-4 mt-8">
                    <Link to="#subscribe" className='text-white flex items-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-black transition-colors ease-linear duration-300 heading'>
                        <span>Try It</span> <GoArrowUpRight className='arrow_movement' />
                    </Link>
                    <Link to="#how_it_works" className='text-[#2E1B52] flex items-center gap-2 px-8 py-4 rounded-full bg-[#F3F3F3] hover:bg-[#4E2E8D] hover:text-white transition-colors ease-linear duration-300 heading'>
                        <span>Learn More</span> <GoArrowUpRight className='arrow_movement' />
                    </Link>
                </div>
            </div>
        </section>
    )
}
