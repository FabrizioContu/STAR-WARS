import React from "react";
import { useParams } from "react-router-dom";
import StarshipDetail from "../components/StarshipDetail";
import Pilots from "../components/Pilots";
import { useContext } from "react";
import Context from "../Context/Context";
import Header from "./Header";
import Nav from "./Nav";

const StarshipDetailWrapper: React.FC = () => {
  const { id } = useParams();
  const { starships } = useContext(Context);
  const selectedStarship = starships.find(
    (starship) => starship.url.split("/").slice(-2, -1)[0] === id
  );

  if (!selectedStarship) {
    return <div>Error 404</div>;
  }

  const background = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  return (
    <div className="App py-20">
      <Header />
      <div className="border border-gray-800">
        <Nav />
      </div>
      <div
        className="flex-col bg-cover bg-zinc-950"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="">
          <StarshipDetail starship={selectedStarship} />
          <div>
            <Pilots starship={selectedStarship} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarshipDetailWrapper;
