import React, { useStateб  } from 'react';
import { useSpring, animated } from 'react-spring';
import HeaderIndex from './components/header_index';
import Index from './components/index';
import Footer from './components/footer'
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import Contacts from './components/contacts'
import Header from './components/header'
import Catalog from './components/catalog/catalog'
import News from './components/news/news'
import News1 from './components/news/news_1'
import Partners from './components/partners'
import KorpPolitic from './components/politik_confidens'
import TransportVnedorojnaya from './components/catalog/transport_vnedorojnaya'
import About from './components/about'
import MotorMasla from './components/catalog/motor_masla'
import IndustrialMaterial from './components/catalog/industrialnye_smazochnie_materials'
import News2 from './components/news/news_2'
import News3 from './components/news/news_3'
import News4 from './components/news/news_4'
import News5 from './components/news/news_5'
import News6 from './components/news/news_6'






const App = () => {

    const contentProps = useSpring({
        opacity: 1,
        from: { opacity: 0, color: 'black', width: '100%' },
        config: { duration: 1000 },
      });

    return (
      <Router>
        <Routes>
        <Route path="/" element={<Navigate to="/index" />} />
          <Route
            path="/index"
            element={
                          <>
              <animated.div style={contentProps}>
                <HeaderIndex />
                <Index />
              </animated.div>
            </>
            }
          />
          <Route
            path="/contacts"
            element={
              <>
                <Header />
                <Contacts />
              </>
            }
          />
                 <Route
                    path="/catalog"
                    element={
                        <>
                            <Header />
                            <Catalog />
                        </>
                    }
                />
                     <Route
                    path="/catalog/transport_vnedorojnaya"
                    element={
                        <>
                            <Header /> 
                            <TransportVnedorojnaya />
                        </>
                    }
                />
                                     <Route
                    path="/catalog/industrial_smasochnie_materials"
                    element={
                        <>
                            <Header /> 
                            <IndustrialMaterial />
                        </>
                    }
                />
                    <Route
                    path="/catalog/transport_vnedorojnaya/motor_masla"
                    element={
                        <>
                            <Header /> 
                            <MotorMasla />
                        </>
                    }
                />
          <Route
            path="/news"
            element={
              <>
                <Header />
                <News />
              </>
            }
          />
            <Route
            path="/news/news_1"
            element={
              <>
                <Header />
                <News1 />
              </>
            }
          />
             <Route
            path="/news/news_2"
            element={
              <>
                <Header />
                <News2 />
              </>
            }
          />
             <Route
            path="/news/news_3"
            element={
              <>
                <Header />
                <News3 />
              </>
            }
          />
             <Route
            path="/news/news_4"
            element={
              <>
                <Header />
                <News4 />
              </>
            }
          />
            <Route
            path="/news/news_5"
            element={
              <>
                <Header />
                <News5 />
              </>
            }
          />
             <Route
            path="/news/news_6"
            element={
              <>
                <Header />
                <News6 />
              </>
            }
          />
          <Route
            path="/partners"
            element={
              <>
                <Header />
                <Partners />
              </>
            }
          />
          <Route
            path="/corpolitic"
            element={
              <>
                <Header />
                <KorpPolitic />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header />
                <About />
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    );
  };
  
  export default App;
