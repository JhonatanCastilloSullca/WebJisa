import { NavLink } from "react-router-dom";
import MenuHeader from "../MenuHeader";
import CartIcon from "../../assets/icons/CartIcon";

function MenuIntern({ dataGeneral, menuOpen, menu = [] }) {
  const header = dataGeneral?.header || [];
  return (
    <div
      className={`flex flex-col md:flex-row md:bg-white bg-white text-JisaCyan md:text-JisaCyan w-full transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden md:flex"
        }`}
    >
      <div className="w-full max-w-7xl mx-auto">
        <nav className="text-gray-900">
          <div className="container mx-auto flex md:flex-row flex-col md:justify-center justify-start uppercase">
            <NavLink
              to="/"
              className="relative block py-2 px-4 text-sm lg:text-base font-semibold md:text-black text-black hover:text-JisaCyan uppercase"
            >
              Inicio
            </NavLink>
            <MenuHeader menu={menu} />
            <NavLink
              to="/nosotros"
              className="relative block py-2 px-4 text-sm lg:text-base font-semibold md:text-black text-black hover:text-JisaCyan uppercase"
            >
              Sobre Nosotros
            </NavLink>
            <NavLink
              to={header.enlace}
              className="bg-JisaCyan text-white rounded-xl text-center flex px-6 md:font-medium font-bold md:text-base text-xl py-1 items-center"
            >
              {header.boton_accion}
            </NavLink>
            <NavLink
              to="/carrito"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center md:text-JisaCyan text-JisaCyan"
            >
              <div className="absolute w-10">
                <CartIcon size={16} />
                <div className="absolute right-2  inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-4 -end-2">
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

export default MenuIntern;
