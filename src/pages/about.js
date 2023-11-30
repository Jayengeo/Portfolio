import React from "react";
import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Layouts from "../components/Layouts";
import About4 from "../../public/images/profile/Completed steps-pana.png";
import About2 from "../../public/images/profile/Construction costs-pana.png";
import About1 from "../../public/images/profile/Webinar-pana.png";
import About3 from "../../public/images/profile/Telecommuting-pana.png";
import Image from "next/image";
import Skills from "../components/Skills";
import TransitionEffect from "../components/TransitionEffect";
import Carousel from "../components/Carousel.js";

const slides = [
  {
    img: About1,
    par: "Hello! My name is Jacky, I'm a Fullstack Developer who has a passion for developing aesthetic and intuitive web applications.",
  },
  {
    img: About2,
    par: "Before I started my coding journey, I was in the architecture field.",
  },
  {
    img: About3,
    par: "Upon graduating, I had the opportunity to work for a remote tech startup...",
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
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layouts className="pt-8">
          <AnimatedText
            text="A little bit about me"
            className="mb-8 lg:!text-7x1 sm:!text-6xl xs:!text-4xl sm:mb-4"
          />
          <div className="flex justify-center ">
            <div className="max-w-lg relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Carousel>
                {slides.map((bio, index) => (
                  <div key={index}>
                    <Image className="" src={bio.img} alt={`Slide ${index}`} />
                    <p className=" text-base font-medium md:text-sm sm:text-xs absolute top-1 left-0 z-10 p-">
                      {bio.par}
                    </p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <Skills />
        </Layouts>
      </main>
    </>
  );
};
export default about;
