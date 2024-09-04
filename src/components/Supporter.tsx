import Marquee from "@/components/magicui/marquee";
import Descript from './../assets/icons/descript.png';
import Grammaly from './../assets/icons/gramaly.png';
import Intercom from './../assets/icons/itercom.png';
import Notion from './../assets/icons/notion.png';
import Unsplash from './../assets/icons/unsplash.png';

const Row = [Unsplash, Notion, Intercom, Descript, Grammaly]

export default function Supporter() {
    return (
        <section>
            <div className=" flex items-center justify-center flex-col">
                <h3 className={`max-w-sm text-2xl md:text-3xl text-center font-monument mb-5 md:mb-10`}>
                    Supported By:
                </h3>
                <div className="relative flex py-5 md:py-8 lg:py-10 flex-col items-center justify-center overflow-hidden lg:max-w-4xl w-screen ">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {Row.map((support) => (
                            <img src={support} alt="Logo" className="h-5 md:h-8 lg:h-10 w-auto ml-5 md:ml-8 lg:ml-10" />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
                </div>
            </div>
        </section>
    )
}
