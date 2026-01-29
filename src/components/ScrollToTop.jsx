import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTop } from "../utils/scrollUtils";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Usar função otimizada que evita reflow forçado
    // requestAnimationFrame garante que o DOM está pronto antes de fazer scroll
    scrollToTop('auto'); // 'auto' é mais rápido que 'smooth' para mudanças de rota
  }, [pathname]);

  return null;
};

export default ScrollToTop;
