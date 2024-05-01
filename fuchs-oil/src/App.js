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


const App = () => {
 
  return (
<Router>
            <Routes>
                <Route
                    path="/index"
                    element={
                        <>
                            <HeaderIndex /> {/* Шапка для Index */}
                            <Index />
                        </>
                    }
                />
                <Route
                    path="/contacts"
                    element={
                        <>
                            <Header /> {/* Шапка для Contacts и других страниц */}
                            <Contacts />
                        </>
                    }
                />
                 <Route
                    path="/catalog"
                    element={
                        <>
                            <Header /> {/* Шапка для Contacts и других страниц */}
                            <Catalog />
                        </>
                    }
                />
                     <Route
                    path="/catalog/transport_vnedorojnaya"
                    element={
                        <>
                            <Header /> {/* Шапка для Contacts и других страниц */}
                            <TransportVnedorojnaya />
                        </>
                    }
                />


                    <Route
                    path="/news"
                    element={
                        <>
                            <Header /> {/* Шапка для Contacts и других страниц */}
                            <News />
                        </>
                    }
                />
                    <Route
                    path="/partners"
                    element={
                        <>
                            <Header /> {/* Шапка для Contacts и других страниц */}
                            <Partners />
                        </>
                    }
                />
                    <Route
                    path="/corpolitic"
                    element={
                        <>
                            <Header /> {/* Шапка для Contacts и других страниц */}
                            <KorpPolitic />
                        </>
                    }
                />
            </Routes>
            <Footer /> 
        </Router>
    );
};
export default App;
