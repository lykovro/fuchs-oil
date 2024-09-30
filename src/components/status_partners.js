import React, {useEffect, useState} from 'react';
import '../css/status_partners.css'; // Импорт CSS стилей
import { Link } from 'react-router-dom';
import SvgHome from '../assetsImage/assets/house.svg';


const StatusPartners = () => {

    


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
                <p className="contacts-info-heading"><a href=""><Link to="/partners/status_partner">Статус партнера</Link></a></p>
            </div>
        </div>
        <div className="contacts_info">
            <div className="contact-info-container-vk-tele">
                <h2 className="contact-info-heading1">Статус партнера</h2>
              <div className="contact-info-display-style1">
              </div>
            </div>
          </div>
            <div className="container-status-partners">
                <div className="content-status-section">
                    <div className="content-status">
                        <h3>Кандидатом на получение статуса Партнера компании FUCHS в России может стать организация, отвечающая следующим требованиям:</h3>
                        <ul className="requirements-status-list">
                            <li>Лояльна к торговой марке, строго выполняет обязательства, следует политическим установкам в области территориальных ограничений и др.</li>
                            <li>Обеспечивает выполнение планов продаж и достижение максимальных количественных и качественных показателей реализации смазочных материалов ООО «ФУКС ОЙЛ» в регионе ответственности.</li>
                            <li>Имеет опыт продаж масел, смазок и прочих товаров технического назначения на региональном рынке не менее 3 лет.</li>
                            <li>Имеет  достаточные ресурсы для финансирования своего бизнеса.</li>
                            <li>Имеет собственный, либо арендованный склад и иные складские сооружения, обеспечивающие надежность хранения и защищенные от погодных воздействий.<br></br></li>
                            <li>Имеет транспортные средства, позволяющие Партнеру поставлять, распространять и продавать продукцию своим клиентам.</li>
                            <li>Содержит достаточный по численности квалифицированный офисный, торговый обслуживающий и прочий персонал.</li>
                        </ul>
                    </div>
                    <div className="content-status">
                        <h3>Процесс рассмотрения организаций на присвоение статуса Партнера проходит в 4 этапа:</h3>
                        <ul className="requirements-status-list_list">
                            <li><h4>1 этап</h4>
                            <p>Компании, выразившие готовность и желание стать Партнером ООО «ФУКС ОЙЛ», должны представить соответствующий запрос на эл. адрес: <br></br>
                                 <a href="mailto:nossa-sa@mail.ru"> nossa-sa@mail.ru</a>. <br></br> Каждая заявка рассматривается в течение 5 рабочих дней с даты его поступления.</p>
                          </li>
                            <li><h4>2 этап</h4> <p> В адрес заинтересованной компании направляется анкета потенциального Партнера ООО «ФУКС ОЙЛ». Срок рассмотрения анкеты - 5 рабочих дней.</p></li>
                            <li><h4>3 этап</h4> <p> Компаниям, прошедшим предварительный отбор, необходимо представить в адрес ООО «ФУКС ОЙЛ» на рассмотрение Пакет документов для оценки финансового состояния компании.</p></li>
                            <li><h4>4 этап</h4> <p> С организациями, прошедшими отбор на присвоение статуса Партнера, компания ООО «ФУКС ОЙЛ» подписывает договор поставки фирменных смазочных материалов «FUCHS».</p></li>
                        </ul>
                    </div>
                </div>
            </div>
      </main>

    )
}

export default StatusPartners;