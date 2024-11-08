import { useGSAP } from "@gsap/react";
import { ExclamationTriangleIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import { Button, Callout } from "@radix-ui/themes";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChangeEvent, FormEvent, useState } from "react";
import { FaDiscord } from "react-icons/fa6";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface WaitlistResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

const joinWaitlist = async (email: string): Promise<WaitlistResponse> => {
  try {
    const response = await fetch("https://waitinglist.lendasat.com/join-waitlist ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const waitlistResponse = await response.json();
    console.log(`Response ${JSON.stringify(waitlistResponse)}`);
    if (!response.ok) {
      throw new Error(`${waitlistResponse.error}`);
    }

    return waitlistResponse;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Failed to join waitlist");
  }
};

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

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChanged = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const email = e.target.value;
    setEmail(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError("");
      setSuccess("");
      const response = await joinWaitlist(email);
      console.log(`${JSON.stringify(response, null, 2)}`);
      setSuccess(`${response.message}`);
    } catch (error) {
      console.error(`${error}`);
      setError(`${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="justify-start pt-36" id="subscribe">
      <div className="py-14 lg:pl-20 md:pl-14 w-full md:w-fit">
        <h3 className="news">
          Sign-up for early access
        </h3>
        <p className="news md:text-lg my-5">
          To sign-up for early access, please join our waiting list and discord group.
        </p>

        <div>
          <form
            name="waitinglist"
            method="POST"
            className="flex sm:flex-row gap-2 items-center mt-5 mb-10"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleEmailChanged}
              required
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-gray-300 text-sm"
            />
            <Button
              type="submit"
              size={"4"}
              className="w-full sm:w-auto text-white flex gap-2 px-8 py-4 rounded-full bg-primary hover:bg-black transition-colors ease-linear duration-300 heading"
              loading={isLoading}
            >
              Join Waiting List
            </Button>
            <span className="text-gray-500 text-sm mx-2">and</span>
            <Link
              to="https://discord.gg/kyxqWFKMCF"
              target={"_blank"}
              className="w-full sm:w-auto text-white flex gap-2 px-8 py-3 rounded-full bg-secondary hover:bg-black transition-colors ease-linear duration-300 heading"
            >
              <span className="lg:text-base text-sm">Join our discord</span> <FaDiscord size={"22px"} />
            </Link>
          </form>
        </div>
        {error && (
          <Callout.Root color="red" role="alert">
            <Callout.Icon>
              <ExclamationTriangleIcon />
            </Callout.Icon>
            <Callout.Text>
              {error}
            </Callout.Text>
          </Callout.Root>
        )}
        {success && (
          <Callout.Root color="green">
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              {success}
            </Callout.Text>
          </Callout.Root>
        )}
      </div>
    </section>
  );
}
