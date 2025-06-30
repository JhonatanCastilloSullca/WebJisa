import { useCart } from "../contexts/CartContext";
import CartWizard from "../componentes/CartWizard";

const Cart = () => {
    const { cartItems } = useCart();

    const totalItems = cartItems.reduce((acc, tour) => acc + tour.cantidad, 0);

    const subtotal = cartItems.reduce(
        (acc, tour) => acc + tour.cantidad * parseFloat(tour.precio),
        0
    ).toFixed(2);

    const impuestos = (subtotal * 0.18).toFixed(2);

    const totalPrice = (parseFloat(subtotal) + parseFloat(impuestos)).toFixed(2);

    return (
        <div className="relative inset-1 w-full max-w-7xl mx-auto md:mt-48 mb-12 py-4">
            <CartWizard
                tours={cartItems}
                totalItems={totalItems}
                subtotal={subtotal}
                impuestos={impuestos}
                totalPrice={totalPrice}
            />
        </div>
    );
};

export default Cart;
