
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Scroll to top on page refresh
    window.scrollTo(0, 0);
  }, []);
};

export default useScrollToTop;
