import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="flex justify-center items-center">
        <div className="border border-gray-800 py-4 px-4 font-bold active:border-b-2">
          <NavLink to="/">HOME</NavLink>
        </div>
        <div className="border border-gray-800 py-4 px-2 font-bold active:border-b-2">
          <NavLink to="/starships">STARSHIPS</NavLink>
        </div>
      </nav>
    </>
  );
}

export default Nav;
