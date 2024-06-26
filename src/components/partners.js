import React, {useEffect, useState} from 'react';
import '../css/partners.css'; // Импорт CSS стилей
import SvgHome from '../assetsImage/assets/house.svg';
import vk from '../assetsImage/assets/icons8-вконтакте.svg';
import tg from '../assetsImage/assets/icons8-телеграмма-app.svg';
import { Link } from 'react-router-dom';
import Simposium from '../assetsImage/assets_news/Bezymyannyy.png'
import RenolitDTA from '../assetsImage/assets_news/08.04.png'
import CompMc from '../assetsImage/assets_news/COMP_MC.png'
import Kaluga from '../assetsImage/assets_news/Конференция_в_Калуге.jpg'
import Document1 from '../documents/Пользовательское_соглашение_fuchs.docx'
import Document2 from '../documents/Политика_конфиденциальности_для_сайта.docx'






const News = () => {

    const backgroundImages = [
        `url(${Simposium})`,
        `url(${RenolitDTA})`,
        `url(${CompMc})`,
        `url(${Kaluga})`,
        "url('assets_news/RENOLIN UNISYN OL.jpg')",
        "url('assets_news/COMP MC.png')",
        // Добавьте сколько угодно изображений, соответствующих количеству контейнеров
    ];

    useEffect(() => {
        // Получаем все элементы с классом product-card-list-line-entity-card
        const cards = document.querySelectorAll(".product-card-list-line-entity-card");

        // Проходим по каждому элементу и устанавливаем задний фон
        cards.forEach((card, index) => {
            card.style.backgroundImage = backgroundImages[index];
        });
    }, []);


    return (
        <main>
        <div className="contact-info-section2">
          <div className="contact-section-with-products">
            <div className="svg-container">
            <a href=""><Link to="/fuchs-oil"><img src={SvgHome} alt=""/></Link></a>
            </div>
            <div className="svg-container1">
              <svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="clip2_203_98" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" fill="white" transform="translate(-0.29290000000000305, 0)" />
                  </clipPath>
                </defs>
                <g id="::before" data-node-id="203:107" xmlns="http://www.w3.org/2000/svg">
                  <g id="next.svg fill" data-node-id="203:108" clip-path="url(#clip2_203_98)">
                    <g id="next.svg" data-node-id="203:109">
                      <path id="Vector_2" data-node-id="203:110" d="M9.7071,7l5,5l-5,5" stroke="#90979C" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <p className="contacts-info-heading"><a href=""><Link to="/partners">Партнерам</Link></a></p>
          </div>
        </div>
          <div className="contacts_info">
            <div className="contact-info-container-vk-tele">
                <h2 className="contact-info-heading1">Партнерам</h2>
              <div className="contact-info-display-style1">
              </div>
            </div>
            <div className="address-info-section">
              <div className="info-box">
                <p className="title-heading">Компания ООО "FUCHS-OIL" рада приветствовать своих партнеров и приглашает к сотрудничеству новых, расширяя свой бизнес в России, тем самым предлагая взаимовыгодное партнерство всем заинтересованным компаниям, занятых в сфере сбыта смазочных и сопутствующих материалов и/или смежных сегментах рынка.</p>
                <div className="info-box-blocks">
                    <div className="info-box-block"><button>Статус партнера</button></div>
                    <div className="info-box-block"><button>Политика сотрудничества</button></div>
                    <div className="info-box-block"><button>Сертификаты</button></div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-partners">
            <h2>Не нашли, что искали?</h2>
            <h3>Свяжитесь с нами и обсудим - как мы можем быть полезными друг другу!</h3>
            <form action="#">
              <div className="form-group">
                <input type="text" id="fio" name="fio" className="form-control" placeholder="ФИО*" required/>
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" className="form-control" placeholder="E-mail*" required/>
              </div>
              <div className="form-group">
                <textarea id="text" name="text" className="form-control" placeholder="Текст"></textarea>
              </div>
              <div className="button_text_submit">
                <div className="form-confirmation-section">
                <p className="user-consent-message-container">Нажимая на кнопку «Отправить», я подтверждаю ознакомление с <a href={Document1} download className="user-consent-text-markup">Пользовательским соглашением</a>и даю согласие на обработку <a href={Document2} className="user-consent-text-markup">Персональных данных</a>.</p>
                </div>
                <button type="submit" className="btn btn-primary">Отправить</button>
              </div>
              <script src="js/contacts.js" defer></script>
            </form>
          </div> 
          <div className="address-info-section-adress">
              <div className="info-box-adress">
                <h3 className="title-heading-adress">г. Пермь</h3>
                <p>Адрес: <a href=""> Пермь, ул. Пожарского 67, офис 6</a></p>
                <p>Телефон:<a href=""> +7 888 777-88-55</a></p>
                <p>E-mail: <a href="mailto:info-klg@fuchs-oil.ru"> info-klg@fuchs-oil.ru</a></p>
              </div>
            </div>           
      </main>

    )
}

export default News;