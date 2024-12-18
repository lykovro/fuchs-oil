import React from 'react';
import '../css/footer.css'; // Импорт CSS стилей
import vk from '../assetsImage/assets/icons8-вконтакте.svg'
import tg from '../assetsImage/assets/icons8-телеграмма-app.svg'
import dzen from '../assetsImage/assets/icons8-yandex-zen.svg'
import youtube from '../assetsImage/assets/icons8-youtube-play.svg'
import copyright from '../assetsImage/assets/svg-editor-image.png'
import copyright_mobile from '../assetsImage/assets/svg-editor-image.png'
import { Link } from 'react-router-dom';


const vk_link = 'https://vk.com/permmaslafuchs'
const tg_link = 'https://t.me/permmaslafuchs'
const youtube_link = 'https://www.youtube.com/channel/UCK39EITAlqHIqDk7ilunH-g/featured'
const dzen_link = 'https://dzen.ru/a/YnvKxe3iUDJy42vJ?sid=171127712520241434'


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
                                <p className="contact-info-style_1"><a href="tel:+7 922 386-63-60">+7 922 386-63-60</a></p>
                                <p className="contact-info-style_1"><a href="tel:+79223216360">+7 922 321-63-60</a></p>
                            </div>
                            <div className="contact-details-section">
                                <h3 className="contact-info-heading">Адрес</h3>
                                <p className="contact-info-style_1"><a href="https://yandex.ru/maps/org/fuchs/22794557065/?ll=56.153051%2C57.918200&z=12">Пермь,<br />Промышленная, 110И<br />10:00-18:00</a></p>
                            </div>
                            <div className="contact-details-section">
                                <p className="contact-info-heading">Почта</p>
                                <p className="contact-info-style_1"><a href="mailto:nossa-sa@mail.ru">nossa-sm@mail.ru</a></p>
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
                            <p className="contact-info-style"><Link to="/catalog/antifreeze">Масла для направляющих скольжения</Link></p>
                            <p className="contact-info-style"><Link to="/catalog/cleaners_flush_compounds">Очистители и промывочные составы</Link></p>
                            <p className="contact-info-style"><Link to="/catalog/metalworking_oils">Масла для обработки металлов</Link></p>
                            <p className="contact-info-style"><Link to="/catalog/pressure_casting_compounds">Составы для обработки давлением и литья</Link></p>
                            <p className="contact-info-style"><Link to="/catalog/plastic_lubricants">Пластичные смазки</Link></p>
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
                                    <a href={vk_link} target="_blank"><img src={vk} alt="" /></a>
                                    <a href={tg_link} target="_blank"><img src={tg} alt="" /></a>
                                    <a href={youtube_link} target="_blank"><img src={youtube} alt="" /></a>
                                    <a href={dzen_link} target="_blank"><img src={dzen} alt="" /></a>
                                </div>
                                <div className="company-copyright-section">
                                    <a href=""><Link to="/fuchs-oil"><img src={copyright} className="copyright-logo" alt="" /><img src={copyright_mobile} className="copyright-logo_mob" alt="" /></Link></a>
                                    <p className="copyright-text-display-style">2024 © ООО «НОССА»</p>
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
