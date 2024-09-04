import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);
export default function ForLenders() {
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
        }

        window.onload = handleAfterLoading
    }, [])
    return (
        <section className='pt-60'>
            <div className="grid md:grid-cols-2 gap-3">
                <div>
                    <span className='bg-[#F3EDFD] icon inline-block px-4 py-1 md:text-base lg:text-xl rounded-full text-primary '>For Lenders</span>
                    <h1 className='mb-7 text-left icon xl:text-[50px] xl:leading-[1.2] lg:text-4xl md:text-3xl'>
                        Earn returns by securing <br className='hidden lg:block' /> <span className="text-primary">loans with Bitcoin</span>
                    </h1>
                </div>
                <div className='flex flex-col items-start gap-5'>
                    <p className='text-base icon md:text-lg lg:text-xl text-[#595959]'>Lendasat lets you take instant loans to pay Lightning invoices. No need to sell your Bitcoin.</p>
                    <div className="flex items-center justify-center gap-4">
                        <Link to="#subscribe" className='text-white icon flex items-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-black transition-colors ease-linear duration-300'>
                            <span>Try It</span> <GoArrowUpRight className='arrow_movement' />
                        </Link>
                        <Link to="#how_it_works" className='text-[#2E1B52] flex icon items-center gap-2 px-8 py-4 rounded-full bg-[#F3F3F3] hover:bg-[#4E2E8D] hover:text-white transition-colors ease-linear duration-300'>
                            <span>Learn More</span> <GoArrowUpRight className='arrow_movement' />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
