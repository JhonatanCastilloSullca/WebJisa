export const buildWppLink = (phone, message) => {
  const num = String(phone).replace(/[^\d]/g, "");   // solo dígitos
  const txt = encodeURIComponent(message || "");
  // wa.me respeta ?text= en móvil y desktop (redirige a Web/Escritorio/App)
  return `https://wa.me/${num}?text=${txt}`;
};