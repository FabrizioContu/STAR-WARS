import "./App.css";
import StarshipsList from "./pages/StarshipsList";
import Context, { ContextProvider } from "./Context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

import { useContext } from "react";

function App(): JSX.Element {
  const { isLoggedIn } = useContext(Context);
  console.log("isLoggedIn:", isLoggedIn);

  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/starships" element={<StarshipsList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="*" element={<div>Error 404</div>} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
