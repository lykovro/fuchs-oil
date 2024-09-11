import React from 'react';
import '../css/footer.css'; // Импорт CSS стилей
import vk from '../assetsImage/assets/icons8-вконтакте.svg'
import tg from '../assetsImage/assets/icons8-телеграмма-app.svg'
import youtube from '../assetsImage/assets/icons8-youtube-play.svg'
import copyright from '../assetsImage/assets/img_18_2_f4d569.png'
import { Link } from 'react-router-dom';




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
                            <p className="contact-info-style"><Link to="/catalog/motor_masla">Моторные масла</Link></p>
                            <p className="contact-info-style"><Link to="/catalog/transmission_oils">Трансмиссионные масла</Link></p>
                            <p className="contact-info-style"><Link to="/catalog/anticorrosion_compounds">Антикоррозионные составы</Link></p>
                            <p className="contact-info-style"><Link to="/catalog/cooling_lubricants">Смазочно-охлаждающие жидкости (СОЖ)</Link></p>
                            <p className="contact-info-style"><Link to="/catalog/fire_resistant_hydraulic_oils">Огнестойкие и гидравлические масла</Link></p>
                            <p className="contact-info-style"><Link to="/catalog/cleaners_flush_compounds">Очистители и промывочные составы</Link></p>
                        </div>
                    </div>
                    <div className="product-info-container1">
                        <h3 className="product-title-style">Компания</h3>
                        <div className="product-title-info">
                            <p className="contact-info-style"><Link to="/about">О компании</Link></p>
                            <p className="contact-info-style"><Link to="/partners">Партнерам</Link></p>
                            <p className="contact-info-style"><Link to="/news">Новости</Link></p>
                            <p className="contact-info-style"><Link to="/contacts">Контакты</Link></p>
                            <p className="contact-info-style"><lINK to="/corpolitic">Корпоративные политики</lINK></p>
                        </div>
                    </div>
                    <div className="product-info-container1">
                        <p className="product-title-style">Решения по отраслям</p>
                        <div className="product-title-info">
                            <p className="contact-info-style"><Link to="/solution/mattalurgia_machine">Металлургия и Машиностроение</Link></p>
                            <p className="contact-info-style"><Link to="/solution/khimicheskaya_promyshlennost">Химическая и горнодобывающая промышленность</Link></p>
                            <p className="contact-info-style"><Link to="/solution/selskoe_khozyaystvo">Сельское хозяйство</Link></p>
                            <p className="contact-info-style"><Link to="/solution/kommercheskiy_transport">Коммерческий транспорт</Link></p>
                            <p className="contact-info-style"><Link to="/solution/legkovoy_avtotransport">Легковой автотранспорт</Link></p>
                            <p className="contact-info-style"><Link to="/solution/promyshlennost_stroitelnykh_materialov">Строительная промышленность</Link></p>
                            <p className="contact-info-style"><Link to="/solution/derevoobrabatyvayushchaya_promyshlennost">Деревообрабатывающая промышленность</Link></p>
                            <p className="contact-info-style"><Link to="/solution/energetika">Энергетика</Link></p>
                        </div>
                    </div>
                </div>
                <div className="footer_under_group">
                    <div className="main-content-container">
                        <div className="main-content-container-left">
                            <div className='main-content-container-left-logo'>
                                <div className="flex-container-with-padding">
                                    <a href=""><img src={vk} alt="" /></a>
                                    <a href=""><img src={tg} alt="" /></a>
                                    <a href=""><img src={youtube} alt="" /></a>
                                </div>
                                <div className="company-copyright-section">
                                    <a href=""><Link to="/"><img src={copyright} className="copyright-logo" alt="" /></Link></a>
                                    <p className="copyright-text-display-style">2024 © ООО «FUCHS-OIL»</p>
                                </div>
                            </div>
                            <p className="informational-text-style">Все цены, указанные на сайте приведены как справочная информация и не являются<br />публичной офертой, определяемой положениями статьи 437 Гражданского кодекса<br />Российской Федерации и могут быть изменены в любое время без предупреждения.</p>
                        </div> 
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
