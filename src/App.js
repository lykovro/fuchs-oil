import React, { useState, useEffect   } from 'react';
import { useSpring, animated } from 'react-spring';
import Footer from './components/footer'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate   } from 'react-router-dom';
import ScrollToTopButton from './components/ScrollToTopButton'; 
import routesData from './routesData'


const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};

const App = () => {
  const [routes] = useState(routesData);
  const contentProps = useSpring({
    opacity: 1,
    from: { opacity: 0, color: 'black', width: '100%' },
    config: { duration: 1000 },
  });

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <>
                <route.header />
                <animated.main style={contentProps}>
                  <route.component />
                </animated.main>
              </>
            }
          />
        ))}
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </Router>
  );
};

export default App;