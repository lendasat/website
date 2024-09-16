import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Lendasat from "./../assets/images/lendasat.svg";

export default function Footer() {
  return (
    <footer className="px-10 md:px-16 lg:px-24 md:py-28 py-16 md:flex justify-between items-start space-y-4 md:space-y-0">
      <div className="flex flex-col justify-between items-start md:min-h-[280px] gap-6">
        <img src={Lendasat} alt="Company Logo" className="h-5 w-auto" />
        <div className=" flex items-center gap-4 text-2xl text-[#404040]">
          <Link to="https://x.com/lendasat" target={"_blank"}>
            <FaTwitter />
          </Link>
          <Link to="https://discord.gg/kyxqWFKMCF" target={"_blank"}>
            <FaDiscord />
          </Link>
          <Link to="">
            <FaGithub to={"https://github.com/lendasat"} target={"_blank"} />
          </Link>
        </div>
      </div>
      <div className="">
        <h6 className="font-monument text-base mb-7">Resources</h6>

        <div className="text-[#404040] text-sm md:text-base flex flex-col items-start gap-4">
          <Link to="">
            Terms
          </Link>
          <Link to="">
            Privacy
          </Link>
          <Link to="mailto:office@lendasat.com">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
