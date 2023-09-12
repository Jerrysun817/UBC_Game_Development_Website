import Button from "../../components/Button/Button";

export const HomePage = () => {
  return (
    <main className="flex flex-col justify-center content-center items-center">
      <h1 className="text-6xl font-extrabold mb-4 text-center w-2/3 p-5 mt-20">Grow Games With Us <br /> From The Ground Up</h1>

      <p className="text-center w-2/3 p-5">We bring together artists, programmers, writers, and musicians to make games! No<br/> previous experience required, you can join a team and start working on a game<br/> with other budding developers!<br /> 
      </p>

      <p className="mt-5">Keep an eye on our discord for the sign up forms, which will be going up after our Launch Party!</p>

      <Button className="bg-green m-auto my-10">Join our Discord Server</Button>
    </main>
  );
};
