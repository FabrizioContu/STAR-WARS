import "./App.css";
import StarshipsList from "./pages/StarshipsList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import StarshipDetailWrapper from "./components/StarshipDetailWrapper";

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starships" element={<StarshipsList />} />
          <Route path="/starships/:id" element={<StarshipDetailWrapper />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="*" element={<div>Error 404</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
