
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { GoArrowUpRight } from "react-icons/go"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP, ScrollTrigger);

const formSchema = z.object({
    email: z.string().email(),
})


export default function NewsLetter() {
    useGSAP(() => {

        gsap.from('.news', {
            opacity: 0,
            translateY: 50,
            duration: 1,
            stagger: 0.15,
            scrollTrigger: {
                trigger: ".news",
                start: "top 80%",
            },
            ease: 'back.out'
        })
    }, [])

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <section className="justify-start pt-36" id="subscribe">
            <div className="py-14 lg:pl-20 md:pl-14 w-full md:w-fit">
                <h3 className="news">Sign up for early <br />access</h3>
                <p className='news md:text-lg my-5'>Enter your Email, X.com handle or NPub to be <br /> among the first to try out Lendasat.</p>
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 md:space-y-0 md:flex items-start gap-3 md:w-[400px]">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="flex-grow news">
                                        <FormControl>
                                            <Input placeholder="Enter email" {...field}
                                                className="bg-[#E8E8E8] focus-visible:ring-0 border-0 rounded-full placeholder:text-secondary text-secondary pl-5 h-12 min-w-lg" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className='news text-white flex items-center gap-2 h-12 px-5 rounded-full bg-[#4E2E8D] w-fit'>
                                <span>Get early access</span>
                                <GoArrowUpRight />
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    )
}
