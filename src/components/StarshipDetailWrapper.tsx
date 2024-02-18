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
  const { starships, setSelectedStarship } = useContext(Context);
  const selectedStarship = starships.find((starship) => starship.MGLT === id);
  const background =
    "https://starwars-visualguide.com/assets/img/starships/9.jpg";
  if (!selectedStarship) {
    return <div>Error 404</div>;
  }

  return (
    <div className="App py-20">
      <Header />
      <div className="border border-gray-800">
        <Nav />
      </div>
      <div
        className="flex-col bg-cover"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="">
          <StarshipDetail
            starship={selectedStarship}
            onClose={() => setSelectedStarship(null)}
          />
          <div>
            <Pilots
              starship={selectedStarship}
              onClose={() => setSelectedStarship(null)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarshipDetailWrapper;
