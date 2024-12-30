import { type Starship, Pilots } from "../types.d";
import { useEffect, useState, createContext, ReactNode } from "react";

import swLogo from "../assets/swLogo.png";

export const Context = createContext<{
  starships: Starship[];
  setStarships: React.Dispatch<React.SetStateAction<Starship[]>>;
  pilots: Pilots[];
  setPilots: React.Dispatch<React.SetStateAction<Pilots[]>>;
  showDetails: (starship: Starship) => void;
  selectedStarship: Starship | null;
  setSelectedStarship: React.Dispatch<React.SetStateAction<Starship | null>>;
  selectedPilot: Pilots | null;
  setSelectedPilot: React.Dispatch<React.SetStateAction<Pilots | null>>;
  swLogo: string;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}>({
  starships: [],
  setStarships: () => {},
  pilots: [],
  setPilots: () => {},
  showDetails: () => {},
  selectedStarship: null,
  setSelectedStarship: () => {},
  selectedPilot: null,
  setSelectedPilot: () => {},
  swLogo: "",
  currentPage: 1,
  setCurrentPage: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  formData: {
    email: "",
    password: "",
  },
  setFormData: () => {},
});

interface ContextProviderProps {
  children: ReactNode;
}
interface FormData {
  email: string;
  password: string;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [pilots, setPilots] = useState<Pilots[]>([]);
  const [selectedStarship, setSelectedStarship] = useState<Starship | null>(
    null
  );
  const [selectedPilot, setSelectedPilot] = useState<Pilots | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const fetchStarships = async (page: number) => {
    try {
      const response = await fetch(
        `https://swapi.py4e.com/api/starships/?page=${page}`
      );
      const data = await response.json();
      setStarships((prevResult) => prevResult.concat(data.results));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPilots = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people");
      const data = await response.json();
      setPilots(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStarships(currentPage);
    fetchPilots();
  }, [currentPage]);

  const showDetails = (starship: Starship) => {
    setSelectedStarship(starship);
  };

  return (
    <Context.Provider
      value={{
        starships,
        setStarships,
        pilots,
        setPilots,
        showDetails,
        selectedStarship,
        setSelectedStarship,
        selectedPilot,
        setSelectedPilot,
        swLogo,
        currentPage,
        setCurrentPage,
        isLoggedIn,
        setIsLoggedIn,
        formData,
        setFormData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
