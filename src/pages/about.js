import React from "react";
import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Layouts from "../components/Layouts";

const about = () => {
  return (
    <>
      <Head>
        <title>Jacky| About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layouts className="pt-16"></Layouts>
        <AnimatedText text="Did you know?" />
        <div className="grid w-full grid-cols-8 gap-16">
          <div className="col-span-3 flex flex-col items-start justify-start">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
              Biography
            </h2>
            Hello! I'm Jacky 😃 I'm a Fullstack Developer who loves design and technology. I have a passion for developing aesthetically pleasing and intuitive applications. In my spare time, I love to rock climb 🧗 and spend time with my dog Toshi 🐕
          </div>
        </div>
      </main>
      
    </>
  );
};
export default about;
