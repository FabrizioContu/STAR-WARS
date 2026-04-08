import React, { useContext } from "react";

import Context from "../Context/Context";
import Nav from "../components/Nav";
import Header from "../components/Header";

import { Link } from "react-router-dom";

const StarshipList: React.FC = () => {
  const { starships, currentPage, setCurrentPage } = useContext(Context);

  return (
    <div>
      <div className="App pt-20">
        <Header />
        <div className="border border-gray-800">
          <Nav />
        </div>

        {starships.map((starship) => {
          const urlId = starship.url.split("/").slice(-2, -1)[0];
          return (
            <div key={starship.url} className="bg-zinc-900 py-3 px-2 mb-4 cursor-pointer mx-72 mt-5">
              <Link to={`/starships/${urlId}`}>
                <h1>{starship.name.toUpperCase()}</h1>
                <p>{starship.model}</p>
              </Link>
            </div>
          );
        })}

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
