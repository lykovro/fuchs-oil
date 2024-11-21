import React, { useState, useRef, useEffect } from 'react';
import '../css/header.css'; 
import banner from '../assetsImage/assets/svg-editor-image.png';
import banner_2 from '../assetsImage/assets/Лого-FUCHS.png';
import search from '../assetsImage/assets/search-svgrepo-com.svg';
import { Link, useNavigate } from 'react-router-dom';
import products from './data/products';
import logomobile from '../assetsImage/assets/svg-editor-image.png'
import logomobile2 from '../assetsImage/assets/fuchs_mobile.png'


const Header = () => {
    const [placeholder, setPlaceholder] = useState('Введите название продукта');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const searchRef = useRef(null);
    const navigate = useNavigate();

    const handleFocus = () => setPlaceholder('');
    const handleBlur = (e) => {
        if (!e.target.value) setPlaceholder('Введите название продукта');
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
    
        if (query.length > 0) {
            const results = [];
    
            Object.keys(products).forEach((categoryKey) => {
                const category = products[categoryKey];
                const matchedItems = category.items.filter(item => 
                    item.name.toLowerCase().includes(query)
                );
    
                matchedItems.forEach(item => {
                    results.push({ ...item, category: categoryKey });
                });
            });
    
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?query=${searchQuery}`);
    };

    const handleClickOutside = (e) => {
        if (searchRef.current && !searchRef.current.contains(e.target)) {
            setSearchResults([]);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
  setMenuOpen(!menuOpen);
};

useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}, [menuOpen]);

    return (
        <header className="corporate-info-container1">
            <div className="corporate-section">
                <div className="company-info-container">
                    <div className="header-navigation-bar">
                        <div className="corporate-info-container">
                        <div className="vertical-section-with-products">
                <div className="company-info-logo">
                  <div className="company-news-section">
                    <p className="company-info-styles"><Link to="/about">О компании</Link></p>
                    <p className="company-info-styles"><Link to="/news">Новости</Link></p>
                    <p className="company-info-styles"><Link to="/partners">Партнерам</Link></p>
                    <p className="company-info-styles"><Link to="/contacts">Контакты</Link></p>
                  </div>
                  <button className="menu-toggle-button" onClick={toggleMenu}>
                    {menuOpen ? '✕' : '☰'}
                  </button>
                  <Link to="/"><img src={logomobile} className="banner-image_adaptiv" alt="Banner"/></Link>
                  
                  <div className="logo_button_input">
                    <div className="logo_button">
                    <Link to="/"><img src={banner} className="banner-image_2" alt="Banner"/></Link>
               
               <div className ="logo_text_right">
                 <p>Смазочные материалы</p>
               </div>
           
               <Link to="https://www.fuchs-oil.ru/" target="_blank"><img src={banner_2} className="banner-image" alt="Banner"/></Link>                      
                      <div className={`fullscreen-menu ${menuOpen ? 'open' : ''}`}>
                      <div className='fullscreen-image'>
                        <Link to="/"><img src={logomobile} className="fullscreen-menu_banner-image_adaptiv"  alt="Banner"/></Link>
                        <Link to="https://www.fuchs-oil.ru/"><img src={logomobile2} className="fullscreen-menu_banner-image_adaptiv_2"  alt="Banner"/></Link>
                      </div>
                        <nav className="menu-links">
                        <Link to="/catalog" className="menu-item" onClick={toggleMenu}>Каталог</Link>
                        <div className='fullscreen-menu-transport-section-section'></div>
                          <Link to="/about" className="menu-item" onClick={toggleMenu}>О компании</Link>
                          <div className='fullscreen-menu-transport-section-section'></div>
                          <Link to="/news" className="menu-item" onClick={toggleMenu}>Новости</Link>
                          <div className='fullscreen-menu-transport-section-section'></div>
                          <Link to="/partners" className="menu-item" onClick={toggleMenu}>Партнерам</Link>
                          
                          
                          <div className='fullscreen-menu-transport-section-section'></div>
                          <Link to="/contacts" className="menu-item" onClick={toggleMenu}>Контакты</Link>
                          <div className='fullscreen-menu-transport-section-section'></div>
                        </nav>
                      </div>
                      <div className="button_product">
                        <form action="">
                          <Link to="/catalog">
                            <button>
                              <p>Продукты</p>
                            </button>
                          </Link>
                        </form>
                      </div>
                    </div>
                    <div className="product-input-container_search" ref={searchRef}>
                      <form className="search" onSubmit={handleSearchSubmit}>
                        <input 
                          id="searchInput" 
                          className="field" 
                          name="search" 
                          type="text" 
                          placeholder={placeholder} 
                          onFocus={handleFocus} 
                          onBlur={handleBlur} 
                          onChange={handleSearch}
                          value={searchQuery}
                          autoComplete="off"
                        />
                        <button type="submit" className="search_button"></button>
                      </form>
                      {searchResults.length > 0 && (
                        <div className="search-results-dropdown">
                          <ul>
                            {searchResults.map((item, index) => (
                              <li key={index}>
                                <Link to={`/catalog/${item.category}/${item.id}`}>{item.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="column-layout-container">
                  <div className="hierarchical-text-container">
                    <div className="vertical-section-aside">
                      <p className="industry-description"><a href="tel:+7 922 386-63-60">+7 922 386-63-60</a></p>
                      <p className="industry-description"><a href="tel:+79223216360">+7 922 321-63-60</a></p>
                    </div>
                  </div>
                </div>
              </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
