import React, {useEffect, useState} from 'react';
import '../css/contacts.css'; // Импорт CSS стилей
import vk from '../assetsImage/assets/icons8-вконтакте.svg'
import tg from '../assetsImage/assets/icons8-телеграмма-app.svg'
import SvgHome from '../assetsImage/assets/house.svg'
import { Link } from 'react-router-dom';





const Contacts = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;
    script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A1123d3f19331e94eb31a2832f6ee8e20f6587674f1d1743f4cbf517bc3c85ad8&width=1058&height=444&lang=ru_RU&scroll=true';

    const container = document.getElementById('map-container');
    container.appendChild(script);

    return () => {
      if (container.contains(script)) {
        container.removeChild(script);
    }
    };
}, []);

  const [fio, setFio] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const handleFocus = (setState, placeholder) => () => {
      setState('');
      setSearchInput(placeholder);
  };

  const handleBlur = (setState, placeholder) => (e) => {
      if (!e.target.value) {
          setState(placeholder);
          setSearchInput('Введите название продукта');
      }
  }; 

    return (
        <main className="">
        <div className="contact-info-section2">
          <div className="contact-section-with-products">
            <div className="svg-container">
            <a href=""><Link to="/"><img src={SvgHome} alt=""/></Link></a>
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
            <p className="contacts-info-heading"><a href="">Контакты</a></p>
          </div>
        </div>
          <div className="contacts_info">
            <div className="contact-info-container-vk-tele">
                <h2 className="contact-info-heading1">Наши контакты</h2>
              <div className="contact-info-display-style1">
                <a href=""><img src={vk} /></a>
                <a href=""><img src={tg} /></a>
              </div>
            </div>
            <div className="address-info-section">
              <div className="info-box">
                <h3 className="title-heading">г. Пермь</h3>
                <p>Адрес: <a href=""> Пермь, ул. Пожарского 67, офис 6</a></p>
                <p>Телефон:<a href=""> +7 888 777-88-55</a></p>
                <p>E-mail: <a href="mailto:info-klg@fuchs-oil.ru"> info-klg@fuchs-oil.ru</a></p>
              </div>
            </div>
          </div>
          <div id="map-container" className="vertical-spacer" />
          <div className="container">
            <h2>Связаться c нами</h2>
            <form action="#">
              <div className="form-group">
                <input className="form-control" 
                                id="fio"
                                type="text"
                                value={fio}
                                placeholder="ФИО*"
                                onFocus={handleFocus(setFio, 'ФИО*')}
                                onBlur={handleBlur(setFio, 'ФИО*')}
                                onChange={(e) => setFio(e.target.value)}
                                />
              </div>
              <div className="form-group">
                <input className="form-control"
                                id="email"
                                type="email"
                                value={email}
                                placeholder="E-mail*"
                                onFocus={handleFocus(setEmail, 'E-mail*')}
                                onBlur={handleBlur(setEmail, 'E-mail*')}
                                onChange={(e) => setEmail(e.target.value)}
                                />
              </div>
              <div className="form-group">
                <textarea className="form-control"  
                id="text"
                type="text"
                value={text}
                placeholder="Текст"
                onFocus={handleFocus(setText, 'Текст')}
                onBlur={handleBlur(setText, 'Текст')}
                onChange={(e) => setText(e.target.value)}
                ></textarea>
              </div>
              <div className="button_text_submit">
                <div className="form-confirmation-section">
                  <p className="user-consent-message-container">Нажимая на кнопку «Отправить», я подтверждаю ознакомление с <a href="https://www.fuchs-oil.ru/politika-bezopasnosti/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5_%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5_fuchs.docx" className="user-consent-text-markup">Пользовательским соглашением</a> и даю согласие на обработку <a href="https://www.fuchs-oil.ru/politika-bezopasnosti/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8_%D0%B4%D0%BB%D1%8F_%D1%81%D0%B0%D0%B9%D1%82%D0%B0.docx" className="user-consent-text-markup">Персональных данных</a>.</p>
                </div>
                <button type="submit" className="btn btn-primary">Отправить</button>
              </div>
            </form>
          </div>            
      </main>
    )
}

export default Contacts;