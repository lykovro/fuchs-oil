import React, {useState} from 'react';
import '../css/header.css'; // Импорт CSS стилей
import banner from '../assetsImage/assets/img_2_728_d81a07.png';
import search from '../assetsImage/assets/search-svgrepo-com.svg';
import { Link } from 'react-router-dom';



const Header = () => {

    const [placeholder, setPlaceholder] = useState('Введите название продукта');

    const handleFocus = () => {
        setPlaceholder('');
    };
  
    const handleBlur = (e) => {
        if (!e.target.value) {
            setPlaceholder('Введите название продукта');
        }
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
                                    <p className="company-info-styles"><a href=""><Link to="/about">О компании</Link></a></p>
                                        <p className="company-info-styles"><a href=""><Link to="/news">Новости</Link></a></p>
                                        <p className="company-info-styles"><a href=""><Link to="/partners">Партнерам</Link></a></p>
                                        <p className="company-info-styles"><a href=""><Link to="/corpolitic">Корпоративные политики</Link></a></p>
                                        <p className="company-info-styles"><a href=""><Link to="/contacts">Контакты</Link></a></p>
                                    </div>
                                    <div className="logo_button_input">
                                        <div className="logo_button">
                                        <a href=""><Link to="/index"><img src={banner} className="banner-image" /></Link></a>
                                            <div className="button_product">
                                                <form action="">
                                                <Link to="/catalog">
                                                    <button>
                                                    <p>
                                                        Продукты
                                                    </p>
                                                    </button>
                                                </Link>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="product-input-container_search">
                                            <form className="search" action="#0">
                                                <input id="searchInput" className="field" name="search" type="text" placeholder={placeholder} onFocus={handleFocus} onBlur={handleBlur} />
                                                <button type="submit" className="search_button"></button>
                                            </form>
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
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;