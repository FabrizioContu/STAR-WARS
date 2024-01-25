import React, { useContext } from "react";
import StarshipDetail from "../components/StarshipDetail";
import Context from "../Context/Context";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Pilots from "../components/Pilots";
import { Link } from "react-router-dom";

const StarshipList: React.FC = () => {
  const {
    pilots,
    starships,
    selectedStarship,
    setSelectedStarship,
    currentPage,
    setCurrentPage,
  } = useContext(Context);
  console.log(starships);
  console.log(pilots);
  return (
    <div>
      <div className="App py-20">
        <Header />
        <div className="border border-gray-800">
          <Nav />
        </div>
        {selectedStarship && (
          <div className="flex-col">
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
        )}

        {starships.map((starship) => (
          <div className="bg-zinc-900 py-2 px-2 mb-4 cursor-pointer mx-72 mt-5">
            <Link
              key={starship.MGLT}
              to={`/starships/${starship.MGLT}`}
              className=""
            >
              <h1>{starship.name.toUpperCase()}</h1>
              <p>{starship.model}</p>
            </Link>
          </div>
        ))}

        <div className="flex justify-center">
          <button
            className=" text-gray-400"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            View more...
          </button>
        </div>
      </div>
    </div>
  );
};

export default StarshipList;
