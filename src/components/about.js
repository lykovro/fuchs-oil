import React, {useEffect, useState, useRef } from 'react';
import '../css/about.css'; // Импорт CSS стилей
import SvgHome from '../assetsImage/assets/house.svg';
import vk from '../assetsImage/assets/icons8-вконтакте.svg';
import tg from '../assetsImage/assets/icons8-телеграмма-app.svg';
import { Link } from 'react-router-dom';
import Simposium from '../assetsImage/assets_news/Bezymyannyy.png'
import RenolitDTA from '../assetsImage/assets_news/08.04.png'
import CompMc from '../assetsImage/assets_news/COMP_MC.png'
import Kaluga from '../assetsImage/assets_news/Конференция_в_Калуге.jpg'
import messages from "./messages.json";
import lubricants from "../assetsImage/assets/lubricants.png"
import Rectangle from "../assetsImage/assets/Rectangle.png"
import Rectangle2 from "../assetsImage/assets/Rectangle_2.png"
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








const About = () => {

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
                    <h2>FUCHS - 
                        Официальный дистрибьютор оригинальных смазочных материалов Fuchs в России 
                    </h2>
                </div>
            </div>
            <div className="about_text">   
                <p className="super-brief-statement">
                    <span>Не существует </span>
                    <span className="cosmic-highlight">смазочных материалов</span>
                    <span>{messages["ltbr_gt"]}</span>
                    <span className="cosmic-highlight">Наша компания </span>
                    <span>поможет вам </span>
                    <span className="cosmic-highlight">найти </span>
                    <span> правильное решение для каждой области применения.</span>
                </p>
            </div>
            <div className='about_title'>
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

                        </div>

            </div>
         </main>
    )
}

export default About;