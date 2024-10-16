const Home = () => {
  interface Person {
    name: string;
    age: number;
  }

  const perosn: Person = {
    name: "Level",
    age: 32,
  };

  console.log(perosn);

  return (
    <section>
      <h1 className="text-red-500">Hello Home Page</h1>
    </section>
  );
};

export default Home;
