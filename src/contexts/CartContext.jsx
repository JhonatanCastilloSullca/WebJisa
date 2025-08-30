import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (tour) => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const fecha = tomorrow.toISOString().split('T')[0];

    setCartItems((prevItems) => {
      const exists = prevItems.some(item => item.slug === tour.slug);
      if (exists) return prevItems;
      return [
        ...prevItems,
        {
          id: tour.id,
          slug: tour.slug,
          titulo: tour.titulo,
          imageUrl: tour.foto_principal,
          resumen: tour.resumen,
          precio: tour.precio,
          fecha,
          cantidad: 1,
          title: tour.titulo,
          location: tour.ubicaciones?.[0]?.nombre || "Ubicación no disponible",
          duration: `${tour.itinerarios?.length || 1} días`,
          difficulty: tour.tipo_categoria?.nombre || "No especificado",
          groupSize: 12,
          transport: "Incluido",
          date: fecha
        }
      ];
    });
  };

  const removeFromCart = (slug) => {
    setCartItems((prevItems) => prevItems.filter(item => item.slug !== slug));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
