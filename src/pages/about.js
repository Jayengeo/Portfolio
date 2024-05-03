import React from "react";
import Head from "next/head";
import Layouts from "../components/Layouts";
import AnimatedText from "../components/AnimatedText";
import Carousel from "../components/Carousel";
import Skills from "../components/Skills";
import TransitionEffect from "../components/TransitionEffect";
import Image from "next/image";

const slides = [
  {
    img: "/images/profile/Webinar-pana.png",
    par: "Hello! My name is Jacky, I'm a Fullstack Developer who has a passion for developing aesthetic and intuitive web applications. I've had the opportunity to work and collaborate on a viri",
  },
  {
    img: "/images/profile/Construction costs-pana.png",
    par: "Before I started my coding journey, I worked and studied in the architecture and contrstruction industry.",
  },
  {
    img: "/images/profile/Telecommuting-pana.png",
    par: "During COVID-19 I decided to change career paths, I had the opportunity to work for a remote tech startup where I discovered my passion for coding",
  },
];

const about = () => {
  return (
    <>
      <Head>
        <title>Jacky | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light min-h-screen">
        <Layouts className="pt-2">
          <AnimatedText
            text="A little bit about me🔎
            "
            className="mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-4"
          />
          <div className="flex justify-center">
            <div className="relative h-1/2 rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light">
              <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Carousel slides={slides}></Carousel>
            </div>
          </div>
          <Skills />
        </Layouts>
      </main>
    </>
  );
};

export default about;
