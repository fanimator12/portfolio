import { useEffect } from "react";
import { useLocation } from "react-router-dom";
 
function ScrollToTop({children}: any) {
  const { pathname } = useLocation();
 
  useEffect(() => {
    if (pathname != "/" ) 
    // window.scrollTo(0, 0);
    window.scrollTo({
          top: 1000,
          behavior: 'smooth'
        });
  }, [pathname]);

  return children;
}
 
export default ScrollToTop;