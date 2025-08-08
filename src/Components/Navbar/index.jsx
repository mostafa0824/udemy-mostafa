import { useContext, useState } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

export default function Navbar() {
  const { token, handleToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inp, setInp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = inp.trim();
    if (query) navigate(`/found`, { state: query });
    setInp("");
  };
  return (
  <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
  <div className="container mx-auto px-4 py-3 font-medium flex flex-wrap md:flex-nowrap items-center justify-between md:justify-around gap-3">
    
    {/* Left: Logo + Categories */}
    <div className="flex items-center gap-5 md:gap-10 flex-shrink-0">
      <img
        onClick={() => navigate("/")}
        className="cursor-pointer w-20 md:w-auto"
        src="/assets/image/logo-udemy.svg"
        alt="Udemy Logo"
      />
      <Link to={"/category"}>
        <button className="hidden md:block text-sm text-black hover:text-purple-700 cursor-pointer">
          courses
        </button>
      </Link>
    </div>

    {/* Center: Search bar */}
    <div className="ml-30 w-full md:w-auto order-2 md:order-none">
      <form onSubmit={handleSubmit} className="relative w-full md:w-[500px]">
        <input
          value={inp}
          onChange={(e) => setInp(e.target.value)}
          type="text"
          placeholder="Search for anything"
          className="w-full border border-gray-300 rounded-full pl-12 pr-10 py-2 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
          type="submit">
          <FaSearch className="cursor-pointer hover:text-purple-900"/>
        </button>
      </form>
    </div>

    {/* Right: Actions */}
    <div className="hidden md:flex items-center gap-6 text-sm flex-shrink-0">
      <Link className="hover:text-purple-700">Plans & Pricing</Link>
      <Link className="hover:text-purple-700">Udemy Business</Link>
      <Link className="hover:text-purple-700">Teach on Udemy</Link>
      <Link to={"/cart/id"} className="text-gray-600 hover:text-purple-700 text-lg">
        <FaShoppingCart />
      </Link>

      {token ? (
        <button
          onClick={() => handleToken(null)}
          className="ring-1 ring-purple-700 rounded-lg text-red-700 hover:bg-red-100 w-20 h-10 font-bold cursor-pointer">
          Logout
        </button>
      ) : (
        <Link
          to={"/login"}
          className="ring-1 ring-purple-700 rounded-lg text-purple-700 hover:bg-purple-100 w-20 h-10 font-bold flex items-center justify-center cursor-pointer">
          Log in
        </Link>
      )}

      {!token && (
        <Link
          to={"/signUp"}
          className="bg-purple-700 text-white rounded-lg hover:bg-purple-600 w-20 h-10 font-bold flex items-center justify-center">
          Sign up
        </Link>
      )}

      <a className="ring-1 p-3 rounded-lg" href="">
        <GrLanguage size={"15px"} />
      </a>
    </div>

    {/* Mobile menu button */}
    <button
      className="md:hidden text-2xl text-gray-700 order-1 ml-auto"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
      {mobileMenuOpen ? <FaTimes /> : <FaBars />}
    </button>
  </div>

  {/* Mobile menu */}
  {mobileMenuOpen && (
    <div className="md:hidden px-4 pb-4 border-t space-y-3">
      <Link to={"/category"} className="block py-2">courses</Link>
      <Link className="block py-2">Udemy Business</Link>
      <Link className="block py-2">Teach on Udemy</Link>
      <Link to={"/cart/id"} className="block py-2">Cart</Link>

      {token ? (
        <button
          onClick={() => handleToken(null)}
          className="text-red-700 font-bold">
          Logout
        </button>
      ) : (
        <Link to={"/login"} className="block py-2">
          Log in
        </Link>
      )}
      {!token && (
        <Link
          to={"/signUp"}
          className="block py-2 text-purple-600 font-semibold">
          Sign up
        </Link>
      )}
    </div>
  )}
</nav>


  );
}
