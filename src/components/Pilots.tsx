import React, { useEffect, useState } from "react";
import { Starship, Pilots as PilotType } from "../types.d";

interface Props {
  starship: Starship;
}

const Pilots: React.FC<Props> = ({ starship }) => {
  const [pilots, setPilots] = useState<PilotType[]>([]);

  useEffect(() => {
    if (starship.pilots.length === 0) return;
    Promise.all(starship.pilots.map((url) => fetch(url).then((r) => r.json()))).then(
      setPilots
    );
  }, [starship.url]);

  if (starship.pilots.length === 0) return null;

  return (
    <div>
      <div className="w-9/12 my-5 ms-36">
        <h2 className="border-y border-gray-500 py-4 px-2 font-bold text-white mb-5">
          PILOTS
        </h2>
        <div className="flex">
          {pilots.map((pilot) => {
            const pilotId = pilot.url.split("/").slice(-2, -1)[0];
            const pilotImageURL = `https://starwars-visualguide.com/assets/img/characters/${pilotId}.jpg`;
            const pilotPlaceholder = `https://placehold.co/288x320/1a1a2e/FFE81F?text=${encodeURIComponent(pilot.name)}`;
            return (
              <div key={pilotId} className="me-4">
                <div className="text-center bg-neutral-800 flex-col rounded-md">
                  <img
                    src={pilotImageURL}
                    alt={`Avatar of ${pilot.name}`}
                    className="w-72 h-80 border-b border-red-400 rounded-t-md object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = pilotPlaceholder;
                    }}
                  />
                  <p className="py-3 font-semibold">{pilot.name.toLocaleUpperCase()}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pilots;
