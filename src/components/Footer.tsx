import { FaTwitter } from 'react-icons/fa';
import Lendasat from './../assets/images/lendasat.png';
import { FaDiscord, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='px-10 md:px-16 lg:px-24 md:py-28 py-16 md:flex justify-between items-start space-y-4 md:space-y-0'>
            <div className="flex flex-col justify-between items-start md:min-h-[280px] gap-6">
                <img src={Lendasat} alt="Company Logo" className='h-5 w-auto' />
                <div className=" flex items-center gap-4 text-2xl text-[#404040]">
                    <Link to="https://x.com/lendasat">
                        <FaTwitter />
                    </Link>
                    <Link to="">
                        <FaDiscord />
                    </Link>
                    <Link to="">
                        <FaYoutube />
                    </Link>
                </div>
            </div>
            <div className="">
                <h6 className='font-monument text-base mb-7'>Company</h6>

                <div className="text-[#404040] text-sm md:text-base flex flex-col items-start gap-4" >
                    <Link to="" >
                        About
                    </Link>
                    <Link to="">
                        Terms
                    </Link>
                    <Link to="">
                        Privacy
                    </Link>
                    <Link to="">
                        Brand
                    </Link>
                    <Link to="">
                        Press Kit
                    </Link>
                    <Link to="">
                        Contact Us
                    </Link>
                </div>
            </div>
        </footer>
    )
}
