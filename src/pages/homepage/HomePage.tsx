import Button from "../../components/Button/Button";

export const HomePage = () => {
  return (
    <main className="flex flex-col justify-center align-middle">
      <h1 className="text-5xl font-extrabold mb-4">Grow Games With Us From The Ground Up</h1>

      <p>We bring together artists, programmers, writers, and musicians to make games! No previous experience required, you can join a team and start working on a game with other budding developers! 
        Keep an eye on our discord for the sign up forms, which will be going up after our Launch Party!
      </p>

      <Button className="bg-green m-auto">Join our Discord Server</Button>
    </main>
  );
};
