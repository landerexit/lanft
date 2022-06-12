import React from "react";
import { observer } from "mobx-react";
import Dropzone from "react-dropzone";

import verifStar from "../img/verif.svg"
import etherImage from "../img/ether.svg"

import ShopStore from "../store/ShopStore";
import DataStore from "../store/DataStore";

function UserPage(props){
    const user = props.user

    const id = props.user.id
    const avatar = props.user.avatar
    const login = props.user.login
    const firstName = props.user.firstName
    const secondName = props.user.secondName
    const cover = props.user.cover

    const inventory = ShopStore.shopAssortment.map( collection => {
        return collection.content.map( item => {
            if (item.owner === id) {
                return (
                    <section key={'item' + item.c_id + item.i_id} className="flex flex-column nft-container collection-page__nft-container">
                        <a 
                            className="nft-container__image-cut"
                            href={"/collection/" + ShopStore.shopAssortment[item.c_id].collectionLink}
                            >
                            <img 
                                src={item.image}
                                alt={item.name}
                                className="nft-container__image"
                                />
                        </a>
                        <div className="flex flex-column nft-container__description">
                            <a 
                                href={"/collection/" + ShopStore.shopAssortment[item.c_id].collectionLink}
                                className="flex flex-align-center flex-justify-center nft-container__item-name"
                                >
                                    "{item.name}"
                            </a>
                            <section className='flex flex-align-center flex-justify-center nft-container__info-container'>
                                    <div className='flex flex-column nft-container__line'>
                                        <span className='nft-container__headline'>
                                            Коллекция
                                        </span>
                                        <a
                                            className='nft-container__name'
                                            href={"/collection/" + ShopStore.shopAssortment[item.c_id].collectionLink}
                                        >
                                            {ShopStore.shopAssortment[item.c_id].name}
                                        </a>
                                    </div>
                                    <div className='flex flex-column nft-container__line nft-container__line__right'>
                                        <span className='nft-container__price nft-container__headline'>
                                            Цена
                                        </span>
                                        <div className="flex flex-align-center nft-container__price-container">
                                            <img 
                                                src={etherImage}
                                                alt="Etherium"
                                            />
                                            <span className='nft-container__name'>
                                                {item.price}
                                            </span>
                                        </div>
                                    </div>
                            </section>
                            
                            <button                                
                                data-collection-id={item.c_id}
                                data-item-id={item.i_id}
                                className="secondary-button"
                                onClick={props.PopUpControl.showHistory}
                            >
                                Продажи
                            </button>
                        </div>
                    </section>
                )
            } else {
                return <></>
            }

        })
    })

    const itemsCounter = ShopStore.shopAssortment.reduce((itemsCounterAtAll, collection) => {
        return itemsCounterAtAll += collection.content.reduce((itemsCounterInCollection, item) => {
            if (item.owner === id) {
                return itemsCounterInCollection += 1
            } else {
                return itemsCounterInCollection
            }
        }, 0)
    } , 0)

    const [newCover, setNewCover] = React.useState(false)

    async function sendCover(image){
        setNewCover(await DataStore.sendAndGetCover(image[0]).then( image => image.data.display_url))
    }

    function changeCover(){
        DataStore.setChangeCoverOpened()
        DataStore.sendNewCover(newCover)
    }

    const balance = props.user.balance

    return (
        <>
        {DataStore.isChangeCoverOpened &&
            <div className="wrapper  cover-menu__wrapper flex flex flex-align-center flex-justify-center">

                <section className="flex flex-column flex-align-center cover-menu__change-cover-container">
                    <button
                        className="popup-container__exit-button primary-button"
                        onClick={DataStore.setChangeCoverOpened}
                    >Х</button> 
                
                    <div className="flex flex-column flex-align-center flex-justify-center cover-menu__newcover-and-drop">
                        <div
                            className="cover-menu__image"
                            style={{backgroundImage: "url("+ (newCover ? newCover : cover) +")"}}
                        />
                        <Dropzone 
                            onDrop={sendCover}
                            id
                            accept={{
                                'image/jpeg': [],
                                'image/png': []
                            }}
                            maxFiles={1}
                            maxSize={5242880}
                            >
                            {({getRootProps, getInputProps}) => (
                                <div
                                    className={"flex flex-align-center registration-page__dropzone-section" + (newCover ? ' registration-page__dropzone-section__done' : '' )}
                                    {...getRootProps()}
                                >
                                    <input {...getInputProps()} />
                                    <p 
                                        className="registration-page__dropzone-text"
                                    >
                                        {newCover ? 'Фон загружен' : "Загрузить фон"}
                                    </p>
                                  </div>
                            )}
                        </Dropzone>
                    </div>
                    <button
                        className="primary-button cover-menu__change-cover"
                        onClick={changeCover}
                    >
                        Принять новый фон
                    </button>
                </section>
            </div>
        }
        <div className="wrapper user-page__background__wrapper widesreens">
            <div className="wrapper user-page__background" style={{background: 'url(' + props.user.cover + ')', backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: 'center'}}/>
        </div>
        <section className='flex flex-column user-page'>
            <header 
                className="flex flex-align-center flex-justify-center user-page__header"
                style={{backgroundImage: "url("+ cover +")"}}
            >
                {props.isLogged && 
                    <button
                        className="secondary-button user-page__open-change-cover"
                        onClick={DataStore.setChangeCoverOpened}
                    >
                        Изменить фон
                    </button>
                }
            </header>
            
            <main className="user-page__main-container">
                <section className="user-page__avatar-shifter">
                    <section className="avatar-container user-page__avatar-container">

                        <div className="avatar-container__avatar-cut user-page__avatar-cut">
                            <img
                                src={avatar}
                                className="avatar-container__avatar-img user-page__avatar-img"
                                alt="аватар"
                            />
                        </div>
                            <img
                            src={verifStar}
                            className="avatar-container__verif-star user-page__verif-star"
                            alt="верификация"
                            />

                    </section>
                </section>
                <section className="user-page__user-panel flex flex-align-center">
                    <section className="user-page__user-info">
                        <div className="flex user-page__name-and-balance">
                            <section className="user-page__names-container">
                                <h2 className="user-page__user-name">{firstName + " " + secondName}</h2>
                                <h3 className="user-page__nickname">{"@" + login}</h3>
                                {props.isLogged && 
                                    <h3>
                                        Это ваш профиль
                                    </h3>
                                }
                            </section>
                            {props.isLogged &&
                                <fieldset className="balance-container user-page__balance-container flex flex-align-center">
                                    <img 
                                        className="balance-container__ether-img"
                                        alt="etherium"
                                        src={etherImage}                        
                                        />
                                    <small>{balance}</small>
                                    <legend>Баланс</legend>
                                </fieldset>
                            }
                        </div>
                        <section className="user-page__statistic-container">
                            <div className="user-page__statistic-line">
                                <small className="user-page__statistic-number">
                                    {itemsCounter}
                                </small>
                                <small className="user-page__statistic-text">Предметов</small>
                            </div>
                            <div className="user-page__statistic-line">
                                <small className="user-page__statistic-number">{user.views + "M"}</small>
                                <small className="user-page__statistic-text">Просмотров</small>
                            </div>
                            <div className="user-page__statistic-line">
                                <small className="user-page__statistic-number">{user.subs + 'K'}</small>
                                <small className="user-page__statistic-text">Подписчиков</small>
                            </div>
                        </section>
                    </section>

                </section>
                <section className="user-page__inventory">
                    { 
                        itemsCounter ? inventory : <h3>Инвентарь пуст</h3>
                    }
                </section>
            </main>
        </section>
        </>
    )
}

export default observer(UserPage)