import React, { useState } from 'react';
import HeaderIndex from './components/header_index';
import Index from './components/index';
import Footer from './components/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacts from './components/contacts'
import Header from './components/header'
import Catalog from './components/catalog'
import News from './components/news'
import Partners from './components/partners'
import KorpPolitic from './components/politik_confidens'
import TransportVnedorojnaya from './components/transport_vnedorojnaya'
import About from './components/about'


const App = () => {
 
  return (
<Router>
            <Routes>
                <Route
                    path="/index"
                    element={
                        <>
                            <HeaderIndex /> 
                            <Index />
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
                    path="/news"
                    element={
                        <>
                            <Header />
                            <News />
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
