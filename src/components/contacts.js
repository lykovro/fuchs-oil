import React, { useEffect, useState } from 'react';
import '../css/contacts.css'; // Импорт CSS стилей
import vk from '../assetsImage/assets/icons8-вконтакте.svg';
import tg from '../assetsImage/assets/icons8-телеграмма-app.svg';
import SvgHome from '../assetsImage/assets/house.svg';
import { Link } from 'react-router-dom';
import Document1 from '../documents/Пользовательское_соглашение_fuchs.docx';
import Document2 from '../documents/Политика_конфиденциальности_для_сайта.docx';
import emailjs from 'emailjs-com';

const Contacts = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;
    script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A1123d3f19331e94eb31a2832f6ee8e20f6587674f1d1743f4cbf517bc3c85ad8&amp;width=600&amp;height=503&amp;lang=ru_RU&amp;scroll=true';

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
  const [success, setSuccess] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: 'Менеджер Fuchs', // Имя получателя, если нужно, можно динамически установить
      from_name: fio, // Отправитель (например, ваше ФИО)
      message: text, // Сообщение
      reply_to: email // Ответ на email
    };

    emailjs.send('service_wrl8th7', 'template_u8q3865', templateParams, 'zPbJMJ7F2DRG_z8Uc')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Сообщение отправлено успешно!');
      window.location.reload(); // Перезагрузка страницы
    }, (error) => {
      console.error('FAILED...', error);
      alert('Ошибка при отправке сообщения');
    });
  };

  const vk_link = 'https://vk.com/permmaslafuchs'
const tg_link = 'https://t.me/permmaslafuchs'
const youtube_link = 'https://www.youtube.com/channel/UCK39EITAlqHIqDk7ilunH-g/featured'

  return (
    <main className="">
      <div className="contact-info-section2">
        <div className="contact-section-with-products">
          <div className="svg-container">
            <Link to="/fuchs-oil"><img src={SvgHome} alt="Home"/></Link>
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
          <p className="contacts-info-heading"><a href="#">Контакты</a></p>
        </div>
      </div>
      <div className="contacts_info">
        <div className="contact-info-container-vk-tele">
          <h2 className="contact-info-heading1">Наши контакты</h2>
          <div className="contact-info-display-style1">
            <a href={vk_link}><img src={vk} alt="VK"/></a>
            <a href={tg_link}><img src={tg} alt="Telegram"/></a>
          </div>
        </div>
        <div className="address-info-section">
          <div className="info-box">
            <h3 className="title-heading"><b>г. Пермь</b></h3>
            <p>Адрес: <a href="#">Промышленная, 110И</a></p>
            <p>Телефон: <a href="tel:+79223866360">+7 922 386-63-60  </a><a href="tel:+79223216360">+7 922 321-63-60</a></p>
            <p>E-mail: <a href="mailto:info-klg@fuchs-oil.ru">nossa-sm@mail.ru</a></p>
          </div>
        </div>
      </div>
      <div id="map-container" className="vertical-spacer"></div>
      <div className="container">
        <h2>Связаться с нами</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              id="fio"
              type="text"
              value={fio}
              placeholder="ФИО*"
              onChange={(e) => setFio(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              id="email"
              type="email"
              value={email}
              placeholder="E-mail*"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="text"
              value={text}
              placeholder="Текст"
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          <div className="button_text_submit">
            <div className="form-confirmation-section">
              <p className="user-consent-message-container">
                Нажимая на кнопку «Отправить», я подтверждаю ознакомление с <a href={Document1} download className="user-consent-text-markup">Пользовательским соглашением</a> и даю согласие на обработку <a href={Document2} download className="user-consent-text-markup">Персональных данных</a>.
              </p>
            </div>
            <button type="submit" className="btn btn-primary">Отправить</button>
          </div>
        </form>
      </div>            
    </main>
  );
}

export default Contacts;
