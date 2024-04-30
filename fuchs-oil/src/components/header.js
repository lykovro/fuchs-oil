import React from 'react';
import './Header.css'; // Импорт CSS стилей

const Header = () => {
    return (
        <header className="corporate-info-container1">
            <div className="corporate-section">
                <div className="company-info-container">
                    <div className="header-navigation-bar">
                        <div className="corporate-info-container">
                            <div className="vertical-section-with-products">
                                <div className="company-info-logo">
                                    <div className="company-news-section">
                                        <p className="company-info-styles"><a href="">О компании</a></p>
                                        <p className="company-info-styles"><a href="">Новости</a></p>
                                        <p className="company-info-styles"><a href="">Партнерам</a></p>
                                        <p className="company-info-styles"><a href="">Корпоративные политики</a></p>
                                        <p className="company-info-styles"><a href="">Контакты</a></p>
                                    </div>
                                    <div className="logo_button_input">
                                        <div className="logo_button">
                                            <a href=""><img src={require('./assets/img_2_728_d81a07.png')} className="banner-image" alt="" /></a>
                                            <div className="button_product">
                                                <form action="">
                                                    <button>
                                                        <p>Продукты</p>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="product-input-container_search">
                                            <form className="search" action="#0">
                                                <input id="searchInput" className="field" name="search" type="text" placeholder="Введите название продукта" required />
                                                <button type="submit" className="search_button"><img src={require('./assets_contacts/search-svgrepo-com.svg')} alt="" /></button>
                                                {/* Ваш скрипт из contacts.js не нужно вставлять здесь */}
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