import { NavLink } from "react-router-dom";
import MenuHeader from "../MenuHeader";
import CartIcon from "../../assets/icons/CartIcon";
import { useCart } from "../../contexts/CartContext";

function MenuIntern({ dataGeneral, menuOpen, menu = [] }) {
  const { cartItems } = useCart();
  const header = dataGeneral?.header || {};

  return (
    <div className={`${menuOpen ? "block" : "hidden md:flex"}`}>
      {/* BARRA TURQUESA */}
      <div id="menubar" className="w-full bg-JisaCyan relative">
        <div className="mx-auto md:max-w-5xl px-2">
          <nav className="flex items-center justify-between">
            {/* Menú centrado */}
            <div className="flex-1 flex justify-center">
              <MenuHeader menu={menu} />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MenuIntern;
