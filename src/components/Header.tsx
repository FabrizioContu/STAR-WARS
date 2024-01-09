import { useContext } from "react";
import Context from "../Context/Context";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Header: React.FC = () => {
  const { swLogo, isLoggedIn, setIsLoggedIn } = useContext(Context);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="flex justify-between">
      <div className=" social text-white ms-10">
        <ul className="flex">
          <li className="m-1 py-2">
            <a href="">
              <FaFacebook />
            </a>
          </li>
          <li className="m-1 py-2">
            <a href="">
              <FaInstagram />
            </a>
          </li>
          <li className="m-1 py-2">
            <a href="">
              <FaTwitter />
            </a>
          </li>
          <li className="m-1 py-2">
            <a href="">
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>
      <div className="Logo mb-20">
        <img className="h-30 w-60  " src={swLogo} alt="" />
      </div>
      <div className="registration me-10 flex">
        {isLoggedIn ? (
          <div onClick={handleLogout} className="font-bold text-white">
            <Link to="/">LOGOUT</Link>
          </div>
        ) : (
          <>
            <div className="font-bold text-white">
              <Link to="/login">
                <button className="">LOGIN</button>
              </Link>
            </div>
            <div className="font-bold text-white mx-3">
              <Link to="/register">
                <button className="">SIGN UP</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
