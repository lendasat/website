import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useGSAP } from "@gsap/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm } from "react-hook-form";
import { z } from "zod";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const formSchema = z.object({
  email: z.string(),
});

export default function NewsLetter() {
  useGSAP(() => {
    gsap.from(".news", {
      opacity: 0,
      translateY: 50,
      duration: 1,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".news",
        start: "top 80%",
      },
      ease: "back.out",
    });
  }, []);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const encodedBody = encode({ "form-name": "contact", ...values });
    console.log(`Posting ${encodedBody}`);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodedBody
    })
        .then(() => alert("Successfully signed up!"))
        .catch(error => alert(error));
  }

  return (
    <section className="justify-start pt-36" id="subscribe">
      <div className="py-14 lg:pl-20 md:pl-14 w-full md:w-fit">
        <h3 className="news">
          Sign up for early access
        </h3>
        <p className="news md:text-lg my-5">
          Enter your Email, X.com handle or NPub to be among the first to try out Lendasat.
        </p>
        <div>
          <Form {...form} >
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3 md:space-y-0 md:flex items-start gap-3 md:w-[400px]"
                netlify netlify-honeypot="bot-field" hidden
            >
              <FormField
                  control={form.control}
                  name="email"
                  render={({field}) => (
                      <FormItem className="flex-grow news">
                        <FormControl>
                          <Input
                              placeholder="Enter email"
                              {...field}
                              className="bg-[#E8E8E8] focus-visible:ring-0 border-0 rounded-full placeholder:text-secondary text-secondary pl-5 h-12 min-w-lg"
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                  )}
              />
              <input type="hidden" name="form-name" value="contact"/>
              <Button
                  type="submit"
                  className="news text-white flex items-center gap-2 h-12 px-5 rounded-full bg-[#4E2E8D] w-fit"
              >
                <span>Get early access</span>
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
