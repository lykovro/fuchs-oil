import React from 'react';
import './footer.css'; // Импорт CSS стилей

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-group">
                <div className="footer_group_selection">
                    <div className="product-info-container1">
                        <h3 className="contact-header-text-style">Контакты</h3>
                        <div className="product-title-info">
                            <div className="contact-info-container">
                                <p className="contact-info-heading">Телефон</p>
                                <p className="contact-info-style_1"><a href="tel:8 888 777-88-55">8 888 777-88-55</a></p>
                            </div>
                            <div className="contact-details-section">
                                <h3 className="contact-info-heading">Адрес</h3>
                                <p className="contact-info-style_1"><a href="https://yandex.ru/maps/50/perm/house/promyshlennaya_ulitsa_11/YU8YdwRlQUYOQFttfXV0d3RnYw==/?ll=56.156737%2C57.953125&z=12.85">Пермь,<br />Промышленная, 11 <br />08:00-00:00</a></p>
                            </div>
                            <div className="contact-details-section">
                                <p className="contact-info-heading">Почта</p>
                                <p className="contact-info-style_1"><a href="mailto:fuchsoil@fuchs.oi">fuchsoil@fuchs.oi</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="product-info-container1">
                        <h3 className="product-title-style">Продукты</h3>
                        <div className="product-title-info">
                            <p className="contact-info-style"><a href="">Транспорт и внедорожная техника</a></p>
                            <p className="contact-info-style"><a href="">Индустриальные смазочные материалы</a></p>
                        </div>
                    </div>
                    <div className="product-info-container1">
                        <h3 className="product-title-style">Компания</h3>
                        <div className="product-title-info">
                            <p className="contact-info-style"><a href="">О компании</a></p>
                            <p className="contact-info-style"><a href="">История компании</a></p>
                            <p className="contact-info-style"><a href="">Новости</a></p>
                            <p className="contact-info-style"><a href="">Контакты</a></p>
                            <p className="contact-info-style"><a href="">Предложить помещение в аренду</a></p>
                        </div>
                    </div>
                    <div className="product-info-container1">
                        <p className="product-title-style">Материалы</p>
                        <div className="product-title-info">
                            <p className="contact-info-style"><a href="">Список</a></p>
                            <p className="contact-info-style"><a href="">Для СМИ</a></p>
                            <p className="contact-info-style"><a href="">Политика обработки ПД</a></p>
                            <p className="contact-info-style"><a href="">Гарантии</a></p>
                        </div>
                    </div>
                </div>
                <div className="footer_under_group">
                    <div className="main-content-container">
                        <div className="main-content-container-left">
                            <div className="flex-container-with-padding">
                                <a href=""><img src="assets/icons8-вконтакте.svg" alt="" /></a>
                                <a href=""><img src="assets/icons8-телеграмма-app.svg" alt="" /></a>
                                <a href=""><img src="assets/icons8-youtube-play.svg" alt="" /></a>
                            </div>
                            <p className="informational-text-style">Все цены, указанные на сайте приведены как справочная информация и не являются<br />публичной офертой, определяемой положениями статьи 437 Гражданского кодекса<br />Российской Федерации и могут быть изменены в любое время без предупреждения.</p>
                        </div>
                        <div className="main-content-container-right">
                            <div className="company-copyright-section">
                                <a href=""><img src="assets/img_18_2_f4d569.png" className="copyright-logo" alt="" /></a>
                                <p className="copyright-text-display-style">2024 © ООО «FUCHS-OIL»</p>
                            </div>
                            <p className="personal-data-policy-text-style"><a href="">Политика обработки персональных данных</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
