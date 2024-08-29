import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import routesData from './routesData';

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};

const AnimatedContent = ({ children }) => {
  const contentProps = useSpring({
    opacity: 1,
    from: { opacity: 0, color: 'black', width: '100%' },
    config: { duration: 1000 },
  });

  return <animated.main style={contentProps}>{children}</animated.main>;
};

const AppRoutes = ({ routes }) => (
  <Routes>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        element={
          <>
            <route.header />
            <AnimatedContent>
              <route.component />
            </AnimatedContent>
          </>
        }
      />
    ))}
  </Routes>
);

const App = () => {
  const [routes] = useState(routesData);

  return (
    <Router>
      <ScrollToTop />
      <AppRoutes routes={routes} />
      <ScrollToTopButton />
      <Footer />
    </Router>
  );
};

export default App;