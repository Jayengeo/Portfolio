import React from "react";
import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Layouts from "../components/Layouts";
import About4 from "../../public/images/profile/Mind map-pana.png";
import About2 from "../../public/images/profile/Construction costs-pana.png";
import About1 from "../../public/images/profile/Webinar-pana.png";
import About3 from "../../public/images/profile/Telecommuting-pana.png";
import Image from "next/image";
import Skills from "../components/Skills";
import TransitionEffect from "../components/TransitionEffect";
import Carousel from "../components/Carousel.js";

const Biography = ({ summary, img }) => {
  return (
    <>
      <Image
        src={img}
        alt="jacky"
        className="col-span-5 h-50% xl:col-span-4 md:col-span-8 "
        priority
      />
      <p className="flex items-center col-span-5 font-medium text-2xl xl:col-span-4 md:col-span-8">
        {summary}
      </p>
    </>
  );
};

const slides = [
  {"img":About1,"par":"hello"},
  {"img":About2,"par":"hello"},
  {"img":About3,"par":"hello"},
  {"img":About4,"par":"hello"},
];

const about = () => {
  return (
    <>
      <Head>
        <title>Jacky| About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layouts className="pt-16">
          <AnimatedText
            text="A little bit about me"
            className="mb-16 lg:!text-7x1 sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="flex justify-center max-w-lg">
            <Carousel>
              {slides.map((bio,index) => (
                <Image key={index} src={bio.img} alt={`Slide ${index}`} />
            
              ))}
            </Carousel>
          </div>
          {/* <Biography
            summary="Hello! My name is Jacky, Im a Fullstack Developer who has a
                passion for developing aesthetic and intuitive web appications"
            img={About1}
            side={"right"}
          />
          <Biography
            summary="I have a background in architecture and construction management while in post secondary I
              got some hands on experience working for organizations such as
              Mattamy Homes as a purchaser and as a assitant project manager
              with the city of mississauga"
            img={About2}
          />
          <Biography
            summary="Upon graduating, I had the oportunity to work for a remote
              techstart where I worked in tech sales, later transitioning to a
              client success manager"
            img={About3}
          />
          <Biography
            summary=" I originally studied architecture while in post secondary and
              got some hands on experience working for organizations such as
              Mattamy Homes as a purchaser and as a assitant project manager
              with the city of mississauga"
            img={About4}
          />

          <Skills /> */}
        </Layouts>
      </main>
    </>
  );
};
export default about;
