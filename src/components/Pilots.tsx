import React, { useContext } from "react";
import { Pilots as PilotsType, Starship } from "../types.d";
import Context from "../Context/Context";

interface Props {
  starship: Starship; // Asegúrate de importar Starship desde tu types.d
  onClose: () => void;
}

const Pilots: React.FC<Props> = ({ starship }) => {
  const { pilots } = useContext(Context);

  return (
    <div>
      <div className="w-9/12 my-5 ms-36">
        <h2 className="border-y border-gray-600 py-4 px-2 font-bold text-white mb-5">
          PILOTS
        </h2>

        <div className="flex">
          {starship.pilots.map((pilotUrl) => {
            const pilotId = pilotUrl.split("/").slice(-2, -1)[0];
            const pilot = pilots.find((p) => p.url.includes(pilotId));
            const pilotImageURL = `https://starwars-visualguide.com/assets/img/characters/${pilotId}.jpg`;

            return (
              <div key={pilotId}>
                {pilot && (
                  <div className="me-4">
                    <div className="text-center bg-neutral-800 flex-col rounded-md">
                      <img
                        src={pilotImageURL}
                        alt={`Avatar of ${pilot.name}`}
                        className="w-72 h-96 border-b border-red-400 rounded-t-md"
                      />

                      <p className="py-3 font-semibold">
                        {pilot.name.toLocaleUpperCase()}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pilots;
