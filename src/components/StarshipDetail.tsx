import React from "react";
import { Starship } from "../types.d";

interface Props {
  starship: Starship;
}

const StarshipDetail: React.FC<Props> = ({ starship }) => {
  const starshipId = starship.url.split("/").slice(-2, -1)[0];
  const starshipImageUrl = `https://starwars-visualguide.com/assets/img/starships/${starshipId}.jpg`;
  const placeholder = `https://placehold.co/384x320/1a1a2e/FFE81F?text=${encodeURIComponent(starship.name)}`;

  return (
    <div>
      <div className="">
        <div className="w-9/12 my-5 ms-36">
          <div className="border-y border-gray-600 py-4 px-2 font-bold text-white mb-5">
            STARSHIPS
          </div>
          <div className="flex">
            <img
              className="w-96 rounded-s-md object-cover"
              src={starshipImageUrl}
              alt={starship.name}
              onError={(e) => { (e.target as HTMLImageElement).src = placeholder; }}
            />

            <div className="bg-neutral-800 font-mono text-xs text-gray-300 grid gap-2 px-4 py-3 border-s border-red-400 rounded-e-md">
              <h2 className="font-bold">{starship.name.toUpperCase()}</h2>
              <p className="pb-4">
                {starship.model} — {starship.starship_class}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <p>Capacity: {starship.cargo_capacity}</p>
                <p>Length: {starship.length} meters</p>
                <p>Manufacturer: {starship.manufacturer}</p>
                <p>Speed: {starship.max_atmosphering_speed} /hour</p>
                <p>Passengers: {starship.passengers}</p>
                <p>Crew: {starship.crew}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarshipDetail;
