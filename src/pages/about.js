import React from "react";
import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Layouts from "../components/Layouts";
import ProfilePic from "../../public/images/profile/Headshot2 (2).jpg";
import Image from "next/image";
const about = () => {
  return (
    <>
      <Head>
        <title>Jacky| About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layouts className="pt-16">
          <AnimatedText text="Did you know?" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-4 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                Hello! I'm Jacky 😃 I'm a Fullstack Developer who loves design
                and technology. I have a passion for developing aesthetically
                pleasing and intuitive applications. In my spare time, I love to
                rock climb 🧗 and spend time with my dog Toshi 🐕
              </p>
            </div>
            <div className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />

              <Image
                src={ProfilePic}
                alt="jacky"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div>
              {/* <div>
                <span>50+</span>
              </div> */}
            </div>
          </div>
        </Layouts>
      </main>
    </>
  );
};
export default about;