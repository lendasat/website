import { FaXTwitter } from 'react-icons/fa6';
import TeamMember from './../assets/images/lucas.png';
import TeamMember1 from './../assets/images/phillip.png';
import TeamMember2 from './../assets/images/richie.png';
import TeamMember3 from './../assets/images/science.png';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Team() {
    useGSAP(() => {

        gsap.from('.members', {
            opacity: 0,
            translateY: 50,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".members",
                start: "top 70%",
            },
            ease: 'back.out'
        })
    }, [])

    return (
        <section>
            <div className="w-full max-w-6xl">
                <h3 className='pt-10 mb-16 text-center'>Meet the team</h3>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-5 gap-10 items-end">
                    <div className="bg-[#ECE4FC] members w-full px-12 pt-8 pb-11 xl:min-h-[450px] min-h-[400px] flex flex-col justify-between rounded-3xl">
                        <div>
                            <h4 className='mb-7 xl:text-4xl text-3xl'>Our Fantastic <br />Team</h4>
                            <p className="text-black xl:text-base text-sm">We offer diverse roles <br /> and opportunities for our employees. <br />Interested in joining our team? Check <br /> out our current openings:</p>
                        </div>

                        <Link to="" className="text-sm font-medium bg-white inline-block px-5 rounded-3xl w-fit font-monument hover:bg-black transition-colors ease-linear duration-300 hover:text-white">
                            <span className="mb-3.5 inline-block">Join our team</span>
                        </Link>
                    </div>
                    {
                        TeamList.map((items, index) => {
                            return (
                                <div key={index}>
                                    <div className="members w-fit max-w-sm mx-auto">

                                        <img src={items.src} alt="Team Member" className='h-full w-full max-w-sm object-conver object-bottom' />
                                        <div className="pl-5 space-y-2">
                                            <div className=" flex items-baseline justify-between">
                                                <h5>{items.title}</h5>
                                                <Link to={items.twitterHash}>
                                                    <FaXTwitter />
                                                </Link>
                                            </div>
                                            <p className='text-lg text-black'>{items.position}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

const TeamList = [
    {
        src: TeamMember,
        title: 'Lucas',
        position: 'Head of Research',
        twitterHash: 'https://www.x.com/@10101_lucas'
    },
    {
        src: TeamMember1,
        title: 'Philipp',
        position: 'CEO',
        twitterHash: 'https://www.x.com/@bonomat'
    },
    {
        src: TeamMember2,
        title: 'Richie',
        position: 'Head of Engineering and Product',
        twitterHash: 'https://www.x.com/@richardholzeis'
    },
    {
        src: TeamMember3,
        title: 'Science Genial',
        position: 'Head of Marketing and PR\n',
        twitterHash: 'https://www.x.com/sxbt_science_genial'
    },
]