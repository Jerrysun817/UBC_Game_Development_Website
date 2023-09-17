import Button from "../../components/Button/Button";

export const HomePage = () => {
  return (
    <main className="">
      <section className="h-screen flex flex-col items-center">
        <h1 className="
        lg:text-7xl
        md:text-6xl
        xl:w-2/3
        text-4xl
        font-extrabold
        mb-4
        text-center 
        p-5
        mt-20
        ">
          Grow Games With Us From The Ground Up
        </h1>

        <p className="text-center w-2/3 p-5">
          We bring together artists, programmers, writers, and musicians to make
          games! No previous experience required, you can join a team and start
          working on a game with other budding developers!
        </p>

        <p className="mt-5 w-2/3 text-center">
          Keep an eye on our discord for the sign up forms, which will be going up
          after our Launch Party!
        </p>

        <Button className="bg-green m-auto my-10">Join our Discord Server</Button>
      </section>
      <section >
        <div className="bg-white text-black">Test</div>
      </section>
    </main>
  );
};
