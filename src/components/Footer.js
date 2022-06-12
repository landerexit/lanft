import React from "react";

import tgImg from '../img/footer/tg.svg'
import vkImg from '../img/footer/vk.svg'
import cardImg from '../img/footer/business-card.svg'
import habrImg from '../img/footer/habr.svg'
import githubImg from '../img/footer/github.svg'


function Footer() {
    return (
        <footer className="footer flex flex-justify-center">

            <section className="footer__column">
                

                <div className="footer__section">
                    <h3 className="footer__index">Задействованные технологии</h3>
                    <p className="footer__paragraph">
                        JS, HTML+CSS, БЭМ, Адаптивно-отзывчивая верстка, 
                        Sass, React, MobX, framer-motion. База данных пользователей 
                        хранится на стороне клиента, в local storage, за исключением загружаемых изображений пользователем.
                        С помощью API imgbb, изображения будут удаляться через определенный промежуток времени.
                    </p>
                </div>
                <div className="footer__section">
                    <h3 className="footer__index">Автор проекта</h3>
                    <h4 className="footer__author-name">Каримов Эмиль</h4>
                    <h5 className="footer__author-nickname">@landerexit</h5>
                </div>

            </section>

            <section className="footer__column footer__column__links flex flex-column flex-align-center">
                <div className="footer__section footer__section__links"> 
                    <h3 className="footer__index">Полезные ссылки</h3>
                    <div className="footer__links-box">
                        <a 
                            href="https://github.com/landerexit" 
                            target="_blank"
                            rel="noopener noreferrer nofollow">
                            <img 
                                src={githubImg}
                                alt="ГитХаб"
                                className='footer__link-img'/>
                        </a>
                        <a 
                            href="https://vk.com/m00nr1v3r" 
                            target="_blank"
                            rel="noopener noreferrer nofollow">
                            <img 
                                src={vkImg}
                                alt="Вк"
                                className='footer__link-img'/>
                        </a>
                        <a 
                            href="https://landerexit.github.io/personalCard/" 
                            target="_blank"
                            rel="noopener noreferrer nofollow">
                            <img 
                                src={cardImg}
                                alt="Визитка"
                                className='footer__link-img footer__link-img__card'/>
                        </a>
                        <a 
                            href="https://t.me/landerexit" 
                            target="_blank"
                            rel="noopener noreferrer nofollow">
                            <img 
                                src={tgImg}
                                alt="Телеграм"
                                className='footer__link-img'/>
                        </a>
                        <a 
                            href="https://career.habr.com/landerexit" 
                            target="_blank"
                            rel="noopener noreferrer nofollow">
                            <img 
                                src={habrImg}
                                alt="Хабр"
                                className='footer__link-img'/>
                        </a>
                    </div>
                </div>
            </section>
            <section className="footer__column footer__column__author">

                <div className="footer__section">
                    <h3 className="footer__index">О сайте</h3>
                    <p className="footer__paragraph">
                        Некоммерческий проект созданный исключительно в демонстрационных целях,
                        для портфолио. Все статистические данные, пользователи и цены являются
                        липовыми, бутафория для эмуляции действующего сайта. Я не владею авторскими правами
                        на определенные работы, все ссылки на первоисточники указаны.
                    </p>
                </div>
            </section>
        </footer>
    )
}

export default Footer