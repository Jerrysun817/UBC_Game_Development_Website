import { SiAdobeillustrator } from "react-icons/si";

import Button from "../../components/Button/Button";  

export const HomePage = () => {
  return (
    <main className="w-full h-full overflow-hidden relative flex flex-col">
      <section className="h-5/6 flex flex-col items-center gap-6">
        <h1 className="
        w-full
        h-full
        md:text-6xl
        xl:w-2/3
        text-4xl
        font-extrabold
        mb-4
        text-center 
        p-5
        md:mt-20
        ">
          Grow Games With Us From The Ground Up
        </h1>

        <p className="text-center w-2/3 p-5 md:w-1/2">
          We bring together artists, programmers, writers, and musicians to make
          games! No previous experience required, you can join a team and start
          working on a game with other budding developers!
        </p>

        <p className="mt-5 w-2/3 text-center md:w-1/2">
          Keep an eye on our discord for the sign up forms, which will be going up
          after our Launch Party!
        </p>

        <Button className="bg-green m-auto mt-10 mb-40">Join our Discord Server</Button>
      </section>
      <section className="flex flex-col items-center w-full bg-white h-auto py-10 gap-8">
        <h2 className="text-black font-bold text-2xl">With The Support of:</h2>

        <div className="flex flex-col md:flex-row gap-10">
          <SiAdobeillustrator className="text-black text-5xl"/>
          <SiAdobeillustrator className="text-black text-5xl"/>
          <SiAdobeillustrator className="text-black text-5xl"/>
          <SiAdobeillustrator className="text-black text-5xl"/>
          <SiAdobeillustrator className="text-black text-5xl"/>
        </div>
        
      </section>

      <section>

      </section>
    </main>
  );
};
