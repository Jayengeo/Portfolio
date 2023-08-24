import React from "react";
import Head from "next/head";
import Layouts from "@/components/Layouts";
import AnimatedText from "@/components/AnimatedText";

const projects = () => {
  return (
    <>
      <Head>
        <title>Jacky| Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main>
        <Layouts>
          <AnimatedText text="Check this out" />
        </Layouts>
      </main>
    </>
  );
};

export default projects;
