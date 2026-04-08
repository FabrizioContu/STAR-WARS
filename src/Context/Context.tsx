import { type Starship } from "../types.d";
import { useEffect, useState, createContext, ReactNode } from "react";

import swLogo from "../assets/swLogo.png";

interface FormData {
  email: string;
  password: string;
}

export const Context = createContext<{
  starships: Starship[];
  setStarships: React.Dispatch<React.SetStateAction<Starship[]>>;
  showDetails: (starship: Starship) => void;
  selectedStarship: Starship | null;
  setSelectedStarship: React.Dispatch<React.SetStateAction<Starship | null>>;
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
  showDetails: () => {},
  selectedStarship: null,
  setSelectedStarship: () => {},
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

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [selectedStarship, setSelectedStarship] = useState<Starship | null>(null);
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
      setStarships((prev) => {
        const existingUrls = new Set(prev.map((s) => s.url));
        const newShips = data.results.filter((s: Starship) => !existingUrls.has(s.url));
        return prev.concat(newShips);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStarships(currentPage);
  }, [currentPage]);

  const showDetails = (starship: Starship) => {
    setSelectedStarship(starship);
  };

  return (
    <Context.Provider
      value={{
        starships,
        setStarships,
        showDetails,
        selectedStarship,
        setSelectedStarship,
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
