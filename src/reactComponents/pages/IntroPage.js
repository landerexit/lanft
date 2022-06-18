import { inject, observer } from "mobx-react";
import React from "react";

import img1 from '../../img/IntroPage/image1.png'
import img2 from '../../img/IntroPage/image2.png'
import img3 from  '../../img/IntroPage/image3.png'
import statusDot from '../../img/status-dot.svg'

const IntroPage = inject("ButtonsStore")(
    observer(({ NavigationControl, ButtonsStore }) => {
        const [order, setOrder] = React.useState(0)
     
        function nextSlide() {
            setOrder(prevOrder => prevOrder+1)
        } 
    
        function prevSlide() {
            setOrder(prevOrder => prevOrder-1)
        }
    
        function endIntro(){
            ButtonsStore.setIntroChecked()
            NavigationControl.goStart()
        }
    
        const introData = [
            {
                img: img1, 
                imgAlt: "Гора монет",
                headline: "Открой для себя крупнейшую NFT торговую площадку", 
                description: "Покупай и продавай вирутальные предметы"
            },
    
            {
                img: img2,
                imgAlt: "Гора монет",
                headline: "Покажи всему миру свою собственную NFT галерею", 
                description: "Выкладывай и делись своими творениями"
            },
    
            { 
                img: img3, 
                imgAlt: "Гора монет",
                headline: "Погрузись в мир крипто-арта с головой", 
                description: "Ищи и вдохновляйся творениями других"
            },
        ]
    
        return (
            <section className="wrapper flex flex-align-center flex-justify-center">
                <div className="flex flex-column flex-align-center intro-container">
                    <img 
                        src={introData[order].img} 
                        alt={introData[order].imgAlt}
                        className="intro-container__image"
                    />
                    <hr className="intro-container__hr"/>
                    <div className="tile intro-container__menu-container">
                        <h2 className="intro-container__headline">{introData[order].headline}</h2>
                        <p className="intro-container__description">{introData[order].description}</p>
                        <div className="intro-container__status-container">
                            {introData.map((item, index) => {
                                return (
                                    <img 
                                        key={"dot" + index}
                                        src={statusDot} 
                                        alt={item.imgAlt}
                                        className={`intro-container__status-dot intro-container__status-dot${ order === index ? "__active" : ''}`}
                                        onClick={() => setOrder(index)}
                                    />
                                )
                            })}
                        </div>
                        <div className="flex intro-container__buttons-container">
                            <button className="secondary-button" onClick={order > 0 && prevSlide}>Назад</button>
                            <button className="primary-button" onClick={order === 2 ? endIntro : nextSlide}>Дальше</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    })
)


export default IntroPage