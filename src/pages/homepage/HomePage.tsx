import { SiAdobeillustrator } from "react-icons/si";

import Button from "../../components/Button/Button";  

export const HomePage = () => {
  return (
    <main className="w-full h-full overflow-hidden relative flex flex-col">

      {/* HERO SECTION START*/}
      <section className="h-5/6 flex flex-col items-center gap-6">
        <h1 className="
        w-full
        h-full
        md:text-7xl
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

        <p className="text-center w-2/3 p-5 md:w-1/2 opacity-60">
          We bring together artists, programmers, writers, and musicians to make
          games! No previous experience required, you can join a team and start
          working on a game with other budding developers!
        </p>

        <p className="mt-3 w-2/3 text-center md:w-1/2 opacity-60">
          Keep an eye on our discord for the sign up forms, which will be going up
          after our Launch Party!
        </p>

        <Button className="bg-green m-auto mt-10 mb-40 px-6">Join our Discord Server</Button>
      </section>
      {/* HERO SECTION END */}
      {/* SPONSOR SECTION START*/}

      <section className="flex flex-col items-center w-full bg-white h-auto py-20 gap-10">
        <h2 className="text-black font-bold text-2xl">With The Support of:</h2>

        <div className="flex flex-col md:flex-row gap-10">
          <SiAdobeillustrator className="text-black text-5xl"/>
          <SiAdobeillustrator className="text-black text-5xl"/>
          <SiAdobeillustrator className="text-black text-5xl"/>
          <SiAdobeillustrator className="text-black text-5xl"/>
          <SiAdobeillustrator className="text-black text-5xl"/>
        </div>
        
      </section>
      {/* SPONSOR SECTION END */}
      {/* LIST SECTION START */}
      <section className="p-14 lg:p-20 flex flex-col gap-20">
        <div className="flex flex-col lg:flex-row-reverse gap-10">
          <img src="https://placehold.co/600x400" alt="placeholder image" loading="lazy" className="rounded-xl"/>
          <div>
            <h3 className="font-bold text-4xl mb-5">Create Lasting Friendships</h3>
            <p className="opacity-60 lg:w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus feugiat eros eu pulvinar. Aliquam blandit ultricies elementum. Integer mauris dolor, dapibus eu diam sed, iaculis varius quam.</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          <img src="https://placehold.co/600x400" alt="placeholder image" loading="lazy" className="rounded-xl"/>
          <div>
            <h3 className="font-bold text-4xl mb-5">Create Lasting Friendships</h3>
            <p className="opacity-60 lg:w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus feugiat eros eu pulvinar. Aliquam blandit ultricies elementum. Integer mauris dolor, dapibus eu diam sed, iaculis varius quam.</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse gap-10">
          <img src="https://placehold.co/600x400" alt="placeholder image" loading="lazy" className="rounded-xl"/>
          <div>
            <h3 className="font-bold text-4xl mb-5">Create Lasting Friendships</h3>
            <p className="opacity-60 lg:w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus feugiat eros eu pulvinar. Aliquam blandit ultricies elementum. Integer mauris dolor, dapibus eu diam sed, iaculis varius quam.</p>
          </div>
        </div>
      </section>
      {/* LIST SECTION END */}
      {/* GAME RECOMMENDATION SECTION END*/}
      <section>
        <div>nothing yet lol</div>
      </section>
      {/* GAME RECOMMENDATION SECTION END*/}

    </main>
  );
};
