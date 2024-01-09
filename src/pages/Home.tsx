import { useContext } from "react";
import Nav from "../components/Nav";
import Context from "../Context/Context";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home: React.FC = () => {
  const {} = useContext(Context);

  return (
    <div className="App py-20 ">
      <div className="">
        <Header />
      </div>
      <div className=" border border-gray-800 mt-10">
        <Nav />
      </div>
      <div className="flex flex-col items-center mt-10 mx-12">
        <h1 className="text-4xl font-bold mb-4">Explore the Galaxy!</h1>
        <p className="text-lg mb-4">
          In a galaxy far, far away, the epic tale of Star Wars unfolds,
          captivating audiences with its timeless storytelling, iconic
          characters, and intergalactic adventures. Created by George Lucas, the
          Star Wars universe has become a cultural phenomenon since the release
          of the first film in 1977.
        </p>
        <p className="text-lg mb-4">
          Jedi knights, Sith lords, smugglers, and droids populate a rich and
          diverse galaxy, where the Force binds everything together. From the
          desert planet of Tatooine to the icy landscapes of Hoth, each location
          tells a unique story, offering a glimpse into the vastness of the Star
          Wars universe.
        </p>
        <p className="text-lg mb-4">
          The struggle between the forces of good and evil is at the heart of
          Star Wars. The heroic Rebel Alliance faces off against the tyrannical
          Galactic Empire, led by the menacing Darth Vader. Lightsabers clash,
          starships soar through space, and epic battles unfold as the fate of
          the galaxy hangs in the balance.
        </p>
        <p className="text-lg mb-4">
          Star Wars is more than just a series of films; it's a cultural
          touchstone that has inspired generations of fans. The Force has become
          a symbol of hope, resilience, and the eternal struggle between right
          and wrong. Memorable characters like Luke Skywalker, Princess Leia,
          and Han Solo have left an indelible mark on popular culture.
        </p>
        <p className="text-lg mb-4">
          Whether you're a seasoned Jedi Master or a newcomer to the saga,
          there's always a new adventure waiting in the Star Wars universe. From
          the Skywalker saga to standalone stories like Rogue One and Solo, the
          galaxy continues to expand, offering endless possibilities and
          captivating narratives.
        </p>
      </div>
      <div className="flex justify-center">
        <Link to="/starships">
          <button className="bg-teal-700 rounded-md text-white p-3 font-bold text-lg mb-10 ring-1 ring-teal-700 hover:bg-white hover:text-teal-700">
            Explore the Galaxy
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
