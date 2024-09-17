import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import '../css/header_index.css'; 
import banner from '../assetsImage/assets/img_2_728_d81a07.png';
import searchIcon from '../assetsImage/assets/search-svgrepo-com.svg';
import mainImage1 from '../assetsImage/assets/metalurgiya-glavnaya.jpg'; 
import mainImage2 from '../assetsImage/assets/chemical.jpg';
import mainImage3 from '../assetsImage/assets/new.jpg'; 
import mainImage4 from '../assetsImage/assets/new (1).jpg';
import mainImage5 from '../assetsImage/assets/white_sedan_driving_on_the_highway_accross_the_forest_01.jpg';
import mainImage6 from '../assetsImage/assets/stroitelnaya_p2.jpg';
import products from './data/products';
import logomobile from '../assetsImage/assets/fuchs_mobile.png'

const HeaderIndex = () => {
  const [placeholder, setPlaceholder] = useState('Введите название продукта');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [mainImage, setMainImage] = useState(mainImage1);
  const [transition, setTransition] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null); // Ref for the search container

  const handleFocus = () => setPlaceholder('');
  const handleBlur = (e) => {
    if (!e.target.value) setPlaceholder('Введите название продукта');
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      switch (mainImage) {
        case mainImage1: changeImage(mainImage2); break;
        case mainImage2: changeImage(mainImage3); break;
        case mainImage3: changeImage(mainImage4); break;
        case mainImage4: changeImage(mainImage5); break;
        case mainImage5: changeImage(mainImage6); break;
        case mainImage6: changeImage(mainImage1); break;
        default: break;
      }
    }, 6000);

    return () => clearInterval(intervalId);
  }, [mainImage]);

  const changeImage = (newImage) => {
    setTransition(true);
    setTimeout(() => {
      setMainImage(newImage);
      setTransition(false);
    }, 300);
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

        results.push(...matchedItems);
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
                    <p className="company-info-styles"><Link to="/corpolitic">Корпоративные политики</Link></p>
                    <p className="company-info-styles"><Link to="/contacts">Контакты</Link></p>
                  </div>
                  <button className="menu-toggle-button" onClick={toggleMenu}>
                    {menuOpen ? '✕' : '☰'}
                  </button>
                  <Link><img src={logomobile} className="banner-image_adaptiv" alt="Banner"/></Link>
                  <div className="logo_button_input">
                    <div className="logo_button">
                      <Link to="/fuchs-oil"><img src={banner} className="banner-image" alt="Banner"/></Link>
                      <div className={`fullscreen-menu ${menuOpen ? 'open' : ''}`}>
                        <nav className="menu-links">
                          <Link to="/about" className="menu-item" onClick={toggleMenu}>О компании</Link>
                          <Link to="/news" className="menu-item" onClick={toggleMenu}>Новости</Link>
                          <Link to="/partners" className="menu-item" onClick={toggleMenu}>Партнерам</Link>
                          <Link to="/corpolitic" className="menu-item" onClick={toggleMenu}>Корпоративные политики</Link>
                          <Link to="/contacts" className="menu-item" onClick={toggleMenu}>Контакты</Link>
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
                                <Link to={`/catalog/${item.id}`}>{item.name}</Link>
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
                      <p className="industry-description"><a href="tel:+7 888 777-88-55">+7 888 777-88-55</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="partner-info-section">
                <div className="industrial-product-categories-container">
                  <Link to="/solution/mattalurgia_machine">
                    <div id="image_header_1" className="industrial-text-block" onMouseEnter={() => changeImage(mainImage1)}><p>Металлургия и Машиностроение</p></div>
                  </Link>
                  <Link to="/solution/khimicheskaya_promyshlennost">
                    <div id="image_header_2" className="industrial-text-block" onMouseEnter={() => changeImage(mainImage2)}><p>Химическая и горнодобывающая промышленность</p></div>
                  </Link>
                  <Link to="/solution/selskoe_khozyaystvo">
                    <div id="image_header_3" className="industrial-text-block" onMouseEnter={() => changeImage(mainImage3)}><p>Сельское хозяйство</p></div>
                  </Link>
                  <Link to="/solution/kommercheskiy_transport">
                    <div id="image_header_4" className="industrial-text-block" onMouseEnter={() => changeImage(mainImage4)}><p>Коммерческий транспорт</p></div>
                  </Link>
                  <Link to="/solution/legkovoy_avtotransport">
                    <div id="image_header_5" className="industrial-text-block" onMouseEnter={() => changeImage(mainImage5)}><p>Легковой автотранспорт</p></div>
                  </Link>
                  <Link to="/solution/promyshlennost_stroitelnykh_materialov">
                    <div id="image_header_6" className="industrial-text-block" onMouseEnter={() => changeImage(mainImage6)}><p>Строительная промышленность</p></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="company-info-layout">
        <img id="header_image" src={mainImage} alt="Default Image"                 
        style={{
                    transition: transition ? 'opacity 0.3s ease-in-out' : '',
                    opacity: transition ? '0' : '1',
                }} />
      </div>
    </header>
  );
}

export default HeaderIndex;
