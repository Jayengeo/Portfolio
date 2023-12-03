import Head from "next/head";
import Layouts from "../components/Layouts";
import TransitionEffect from "../components/TransitionEffect";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import contact from "../../public/images/profile/Completed steps-pana.png";
import AnimatedText from "../components/AnimatedText";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bbt19ta",
        "template_3cqxspt",
        form.current,
        "_Mdd6LqYXsZ5u2vKa"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Head>
        <title>Jacky | Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light 2xl:">
        <Layouts className="pt-0 md:pt-16 sm:pt-8">
          <AnimatedText
            text="Let's get in touch!"
            className="mt-6 mb-8 lg:!text-7x1 sm:!text-6xl xs:!text-4xl sm:mb-4"
          />
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-4/5 md:w-1/2">
              <Image
                src={contact}
                alt="jacky"
                className="w-full h-auto"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <form onSubmit={sendEmail} className="w-400 rounded-br-2x1 rounded-3xl border border-solid border-dark bg-light p-8 ">
              <label className="mt-4 ">Name</label>
              <input
                type="text"
                name="user_name"
                className="w-full rounded-br-2x1 rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6 dark:bg-dark dark:border-light mb-4"
              />
              

              <label className="mt-4">Email</label>
              <input
                type="email"
                name="user_email"
                className="w-full rounded-br-2x1 rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6 dark:bg-dark dark:border-light mb-4"
              />

              <label className="mt-4">Message</label>
              <textarea
                name="message"
                className="w-full rounded-br-2x1 rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light mb-4"
              />
              <div className="flex flex-col items-center">
                <input
                  type="submit"
                  value="Send"
                  className=" mt-2 p-4 cursor-pointer rounded-br-2x1 rounded-3xl border border-solid border-dark dark:border-light "
                />
              </div>
            </form>
          </div>
        </Layouts>
      </main>
    </>
  );
};

export default Contact;
