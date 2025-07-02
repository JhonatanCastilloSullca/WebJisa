import { NavLink } from "react-router-dom";
import MenuHeader from "../MenuHeader";
import CartIcon from "../../assets/icons/CartIcon";

function MainMenu({ menuOpen, menu = [] }) {
  return (
    <div
      className={`flex flex-col md:flex-row md:bg-JisaCyan bg-white text-JisaCyan md:text-white w-full transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden md:flex"
        }`}
    >
      <div className="w-full max-w-7xl mx-auto">
        <nav className="text-gray-900">
          <div className="container mx-auto flex md:flex-row flex-col md:justify-center justify-start uppercase">
            <MenuHeader menu={menu} />
            {/* <NavLink
              to="/nosotros"
              className="relative block py-2 px-4 text-sm lg:text-base font-bold  md:text-JisaCyan text-black hover:text-JisaGris"
            >
              Sobre Jisa
            </NavLink> */}

          </div>
        </nav>
      </div>
    </div>
  );
}

export default MainMenu;
