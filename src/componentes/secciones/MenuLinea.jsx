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
            <NavLink
              to="/"
              className="relative block py-2 px-4 text-sm lg:text-base font-bold  md:text-JisaCyan text-black hover:text-JisaGris"
            >
              Inicio
            </NavLink>
            <MenuHeader menu={menu} />
            <NavLink
              to="/nosotros"
              className="relative block py-2 px-4 text-sm lg:text-base font-bold  md:text-JisaCyan text-black hover:text-JisaGris"
            >
              Sobre Nosotros
            </NavLink>
            <NavLink
              to="/carrito"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center md:text-white text-JisaCyan"
            >
              <div className="absolute w-10">
                <CartIcon size={16} />
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2">
                  20
                </div>
              </div>
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default MainMenu;
