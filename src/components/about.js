import React, {useEffect, useState, useRef } from 'react';
import '../css/about.css'; // Импорт CSS стилей
import SvgHome from '../assetsImage/assets/house.svg';

import { Link } from 'react-router-dom';

import photo_1 from "../assetsImage/assets_about/1.jpg"
import photo_2 from "../assetsImage/assets_about/2.jpg"
import photo_3 from "../assetsImage/assets_about/3.jpg"
import photo_4 from "../assetsImage/assets_about/4.jpg"
import photo_5 from "../assetsImage/assets_about/5.jpg"
import photo_6 from "../assetsImage/assets_about/6.jpg"
import photo_7 from "../assetsImage/assets_about/7.jpg"
import photo_8 from "../assetsImage/assets_about/8.jpg"
import photo_9 from "../assetsImage/assets_about/9.jpg"
import photo_10 from "../assetsImage/assets_about/10.jpg"
import photo_11 from "../assetsImage/assets_about/11.jpg"
import photo_12 from "../assetsImage/assets_about/12.jpg"
import photo_13 from "../assetsImage/assets_about/13.jpg"
import photo_14 from "../assetsImage/assets_about/14.jpg"
import photo_15 from "../assetsImage/assets_about/15.jpg"
import photo_16 from "../assetsImage/assets_about/16.jpg"
import photo_17 from "../assetsImage/assets_about/17.jpg"
import photo_18 from "../assetsImage/assets_about/18.jpg"
import photo_19 from "../assetsImage/assets_about/19.jpg"
import photo_20 from "../assetsImage/assets_about/20.jpg"
import photo_21 from "../assetsImage/assets_about/21.jpg"

import cert from '../assetsImage/assets_about/certificat.jpg';
import Popup from './pages/about_popup.js';
import { directionsData } from './data/directionsData';







const About = () => {

    const [selectedDirection, setSelectedDirection] = useState(null);

  const handleClick = (direction) => {
    setSelectedDirection(direction);
  };

  const handleClose = () => {
    setSelectedDirection(null);
  };

    const backgroundImages = [
        `url(${photo_1})`,
        `url(${photo_2})`,
        `url(${photo_3 })`,
        `url(${photo_4})`,
        `url(${photo_5})`,
        `url(${photo_6})`,
        `url(${photo_7 })`,
        `url(${photo_8})`,
        `url(${photo_9})`,
        `url(${photo_10})`,
        `url(${photo_11 })`,
        `url(${photo_12})`,
        `url(${photo_13})`,
        `url(${photo_14})`,
        `url(${photo_15 })`,
        `url(${photo_16})`,
        `url(${photo_17})`,
        `url(${photo_18})`,
        `url(${photo_19 })`,
        `url(${photo_20})`,
        `url(${photo_21})`,

    ];

    useEffect(() => {
        
        const cards = document.querySelectorAll(".about_chronical_block_pic");

        
        cards.forEach((card, index) => {
            card.style.backgroundImage = backgroundImages[index];
        });
    }, []);

    const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleWheelScroll = (e) => {
      if (container) {
        container.scrollLeft += e.deltaY;
        e.preventDefault(); // Предотвращаем прокрутку всей страницы
      }
    };

    if (container) {
      container.addEventListener('wheel', handleWheelScroll, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheelScroll);
      }
    };
  }, []);


  const directionsData = [
    { title: 'Автомобильные смазочные материалы', description: ['Информация о автомобильных смазочных материалах...', 'Информация о автомобильных смазочных материалах...', 'Информация о автомобильных смазочных материалах...']},
    { title: 'Промышленные смазочные материалы', description: 'Информация о промышленных смазочных материалах...' },
    { title: 'Консистентные смазки', description: 'Информация о консистентных смазках...' },
    { title: 'Смазочные материалы для обработки металлов', description: 'Информация о смазочных материалах для обработки металлов...' },
    { title: 'Смазочные материалы для специальных условий применения', description: 'Информация о смазочных материалах для специальных условий...' },
    { title: 'Услуги', description: 'Информация об услугах...' },
];

  
    

    return (
        <main>
            <div className="product-section-with-images-navigation">
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
                    <p className="product-title-text-style-navigation"><a href=""><Link to="/about">О компании</Link></a></p>
            </div> 
            <div className="about_header">            
                <div className="about_header_head">  
                    <h2>ООО «НОССА» является прямым коммерческим  партнером ООО «ФУКС ОИЛ» (дочернего подразделения FUCHS SE) на территории Пермского края.  
                    </h2>
                </div>
            </div>
            <div className='about_title_cert'>
                <img src={cert} alt="Certificat"/>
            </div>
            <div className='about_title'>
                <h2>
                    Решения от крупнейшего в мире независимого производителя смазочных материалов
                </h2>
                <div className="about_text">   
                    <p className="super-brief-statement">
                        <span><span className="cosmic-highlight">FUCHS</span> — это основанная в Германии глобальная группа компаний, которая уже в течение более чем 90 лет занимается разработкой, производством и сбытом смазочных материалов практически для всех областей применения и отраслей промышленности.</span>
                        <br></br><span>В составе группы <span className="cosmic-highlight">FUCHS</span> насчитывается около 60 компаний и 6000 сотрудников по всему миру, в том числе в России в г. Калуга, а сама группа <span className="cosmic-highlight">FUCHS</span> является мировым лидером среди независимых производителей смазочных материалов.</span>
                    </p>
                 </div>
     
            </div>
            <div className='about_title'>
                <h2>
                   Программа продукции компании FUCHS включает в себя более 10 000 продуктов и сопутствующих услуг в шести ключевых категориях
                </h2>
                <div className="about-content-status-ul">
                    <ul className="about-requirements-status-list-partners">
                        {directionsData.slice(0, 3).map((direction) => (
                        <li key={direction.title} onClick={() => handleClick(direction)}>
                            {direction.title}
                        </li>
                        ))}
                    </ul>
                    <ul className="about-requirements-status-list-partners">
                        {directionsData.slice(3).map((direction) => (
                        <li key={direction.title} onClick={() => handleClick(direction)}>
                            {direction.title}
                        </li>
                        ))}
                    </ul>

                    {selectedDirection && (
                        <Popup
                        title={selectedDirection.title}
                        description={selectedDirection.description}
                        onClose={handleClose}
                        />
                    )}
    </div>
     
            </div>
            <div className='about_title'>
                <div className="about_text">   
                    <p className="super-brief-statement">
                        <span>В тесном сотрудничестве со своими заказчиками группа компаний <span className="cosmic-highlight">FUCHS</span> разрабатывает комплексные инновационные и индивидуальные решения для самых различных областей применения.</span>
                        <br></br><span>Производимые группой компаний <span className="cosmic-highlight">FUCHS</span> смазочные материалы известны своими высокими характеристиками, экологичностью, безопасностью и надежностью, эффективностью применения и экономичностью.</span>
                    </p>
                 </div>
     
            </div>

            <div className='about_title'>
                <div className="about_text">   
                    <h3 className="super-brief-statement">
                        <span className='super_about_text'><b>Продукция группы компаний FUCHS основана на принципе: технология, которая окупается.</b></span> 
                    </h3>
                 </div>
     
            </div>
            
            {/* <div className='about_title'>
                <h2>
                     Миссия компании
                </h2>
                <div className="about_blocks">
                    <div className="about_block">
                        <img src={lubricants} className="about_block_pic"/>
                        <div className="about_block_text">
                            <p>
                               В центре внимания – <b>смазочные материалы</b> и сопутствующие продукты
                            </p>
                        </div>
                    </div>
                    <div className="about_block">
                        <img src={Rectangle} className="about_block_pic"/>
                        <div className="about_block_text">
                            <p>
                                FUCHS - <b>главный технологический партнер</b> в сфере смазочных материалов
                            </p>
                        </div>
                    </div>
                    <div className="about_block">
                        <img src={Rectangle2} className="about_block_pic"/>
                        <div className="about_block_text">
                             <p>
                                Наши сотрудники – <b>основа и ключевая составляющая</b> нашего успеха
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about_chronical'>
                <h2>
                    Хронология успеха
                </h2>
                        <div className='about_chronical_blocks' ref={containerRef}>
                            <div className='about_chronical_block'>
                                <img className='about_chronical_block_pic'/>
                                <div className='about_chronical_block_text'>
                                    <h3>
                                    1990 год
                                    </h3>
                                    <p>
                                    Организация СП "Фукс Янос"
                                    </p>
                                </div>
                            </div>
                            <div className='about_chronical_block'>
                            <img className='about_chronical_block_pic'/>
                                <div className='about_chronical_block_text'>
                                    <h3>
                                    1994 год
                                    </h3>
                                    <p>
                                    Реорганизация СП «Фукс Янос» в ТОО «Фукс Янос»
                                    </p>
                                </div>
                            </div>
                            <div className='about_chronical_block'>
                                <div className='about_chronical_block_pic'>
                                </div>
                                <div className='about_chronical_block_text'>
                                    <h3>
                                    1998 год
                                    </h3>
                                    <p>
                                    Концерн FUCHS становится единственным учредителем ООО «ФУКС ОЙЛ» - единственное российское предприятие концерна FUCHS в России.
                                    </p>
                                </div>
                            </div>
                            <div className='about_chronical_block'>
                                <div className='about_chronical_block_pic'>
                                </div>
                                <div className='about_chronical_block_text'>
                                    <h3>
                                    1999-2000 года
                                    </h3>
                                    <p>
                                    Строительство и ввод в эксплуатацию опытного производства в г. Ярославль
                                    </p>
                                </div>
                            </div>
                            <div className='about_chronical_block'>
                                <div className='about_chronical_block_pic'>
                                </div>
                                <div className='about_chronical_block_text'>
                                    <h3>
                                    2009 год
                                    </h3>
                                    <p>
                                    Успешный запуск производства новой линии смазочных материалов FUCHS в России, г. Ярославль
                                    </p>
                                </div>
                            </div>
                            <div className='about_chronical_block'>
                                <div className='about_chronical_block_pic'>
                                </div>
                                <div className='about_chronical_block_text'>
                                    <h3>
                                    2010 год
                                    </h3>
                                    <p>
                                    Покупка бизнеса пищевых смазочных материалов Shell CASSIDA  Международной группой компаний FUCHS
                                    </p>
                                </div>
                            </div>
                            <div className='about_chronical_block'>
                                <div className='about_chronical_block_pic'>
                                </div>
                                <div className='about_chronical_block_text'>
                                    <h3>
                                    2011 год
                                    </h3>
                                    <p>
                                    Торжественная церемония закладки первого камня Завода по производству смазочных и сопутствующих материалов концерна FUCHS
                                    </p>
                                </div>
                            </div>
                            <div className='about_chronical_block'>
                                <div className='about_chronical_block_pic'>
                                </div>
                                <div className='about_chronical_block_text'>
                                    <h3>
                                    2013 год
                                    </h3>
                                    <p>
                                    Открытие Завода по производству смазочных и сопутствующих материалов концерна FUCHS в России, г. Калуга
                                    </p>
                                </div>
                            </div>
                            <div className='about_chronical_block'>
                                <div className='about_chronical_block_pic'>
                                </div>
                                <div className='about_chronical_block_text'>
                                    <h3>
                                    2014 год
                                    </h3>
                                    <p>
                                    Гармонизация продуктовой линейки моторных масел на Заводе по производству смазочных и сопутствующих материалов FUCHS в г. Калуга
                                    </p>
                                </div>
                            </div>
                            <div className='about_chronical_block'>
                                <div className='about_chronical_block_pic'>
                                </div>
                                <div className='about_chronical_block_text'>
                                    <h3>
                                    2014 год
                                    </h3>
                                    <p>
                                    Создание Web-сервиса "Дистрибьютор-online" для партнеров компании FUCHS  в России
                                    </p>
                                </div>
                            </div>
                            <div className='about_chronical_block'>
                                <div className='about_chronical_block_pic'>
                                </div>
                                <div className='about_chronical_block_text'>
                                    <h3>
                                    2014 год
                                    </h3>
                                    <p>
                                    Volkswagen Group Award 2014 для группы компаний FUCHS
                                    </p>
                                </div>
                            </div>
                            <div className='about_chronical_block'>
                                <div className='about_chronical_block_pic'>
                                </div>
                                <div className='about_chronical_block_text'>
                                    <h3>
                                    2015 год
                                    </h3>
                                    <p>
                                    Экскурсии на производство
                                    </p>
                                </div>
                            </div>
                            <div className='about_chronical_block'>
                                <div className='about_chronical_block_pic'>
                                </div>
                                <div className='about_chronical_block_text'>
                                    <h3>
                                    2015 год
                                    </h3>
                                    <p>
                                    Новая Фасовка
                                    </p>
                                </div>
                            </div>
                            <div className='about_chronical_block'>
                                <div className='about_chronical_block_pic'>
                                </div>
                                <div className='about_chronical_block_text'>
                                    <h3>
                                    2015 год
                                    </h3>
                                    <p>
                                    Локализация продуктов для горношахтного оборудования
                                    </p>
                                </div>
                            </div>
                            <div className='about_chronical_block'>
                                <div className='about_chronical_block_pic'>
                                </div>
                                <div className='about_chronical_block_text'>
                                    <h3>
                                    2015 год
                                    </h3>
                                    <p>
                                    FUCHS 25 лет в России
                                    </p>
                                </div>
                            </div>
                            <div className='about_chronical_block'>
                                <div className='about_chronical_block_pic'>
                                </div>
                                <div className='about_chronical_block_text'>
                                    <h3>
                                    2016 год
                                    </h3>
                                    <p>
                                    Компания ООО "ФУКС ОЙЛ" пополнила  ассортимент моторных масел для коммерческого транспорта дополнился новыми продуктами для дизельных двигателей.
                                    </p>
                                </div>
                            </div>
                            <div className='about_chronical_block'>
                                <div className='about_chronical_block_pic'>
                                </div>
                                <div className='about_chronical_block_text'>
                                    <h3>
                                    2016 год
                                    </h3>
                                    <p>
                                    Моторные масла в розницу.
                                    </p>
                                </div>
                            </div>
                            <div className='about_chronical_block'>
                                <div className='about_chronical_block_pic'>
                                </div>
                                <div className='about_chronical_block_text'>
                                    <h3>
                                    2017 год
                                    </h3>
                                    <p>
                                    Переход на электронный документооборот
                                    </p>
                                </div>
                            </div>
                            <div className='about_chronical_block'>
                                <div className='about_chronical_block_pic'>
                                </div>
                                <div className='about_chronical_block_text'>
                                    <h3>
                                    2019-2021 года
                                    </h3>
                                    <p>
                                    Строительство и ввод в эксплуатацию нового здания R&D на территории завода сопутствующих и смазочных материалов FUCHS в г.Калуга
                                    </p>
                                </div>
                            </div>
                            <div className='about_chronical_block'>
                                <div className='about_chronical_block_pic'>
                                </div>
                                <div className='about_chronical_block_text'>
                                    <h3>
                                    2020 год
                                    </h3>
                                    <p>
                                    30 лет в России
                                    </p>
                                </div>
                            </div>
                            <div className='about_chronical_block'>
                                <div className='about_chronical_block_pic'>
                                </div>
                                <div className='about_chronical_block_text'>
                                    <h3>
                                    2022 год
                                    </h3>
                                    <p>
                                    Создание нового портфолио продуктов FUCHS для рынка России
                                    </p>
                                </div>
                            </div>

                        </div> */}

            {/* </div> */}
         </main>
    )
}

export default About;