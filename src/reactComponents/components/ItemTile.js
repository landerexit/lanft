import React from "react";
import { observer, inject } from 'mobx-react'
import { Link } from "react-router-dom";

import etherImage from '../../img/ether.svg'

const ItemTile = inject("mainStore", "UsersStore", "ShopStore", "ButtonsStore")(
    observer(({ item, isShop, mainStore, UsersStore, ShopStore, ButtonsStore }) => {
        return (
            <section key={'item' + item.c_id + item.i_id} className="flex flex-column nft-container collection-page__nft-container">
                <div className="nft-container__image-cut">
                    <img 
                        src={item.image}
                        alt={item.name}
                        className="nft-container__image"
                        />
                </div>
                <div className="flex flex-column nft-container__description">
                    <h3 className="flex flex-align-center flex-justify-center nft-container__item-name">"{item.name}"</h3>
                    <section className='flex flex-align-center flex-justify-center nft-container__info-container'>
                            { isShop ?
                                <div className='flex flex-column nft-container__line'>
                                    <span className='nft-container__headline'>
                                        Владелец
                                    </span>
                                    <Link
                                        className='nft-container__name'
                                        to={"/users/1337" + item.owner}
                                    >
                                        {"@" + UsersStore.usersFromLocal[item.owner].login}
                                    </Link>
                                </div>
                                    :
                                <div className='flex flex-column nft-container__line'>
                                    <span className='nft-container__headline'>
                                        Коллекция
                                    </span>
                                    <Link
                                        className='nft-container__name'
                                        to={"/collection/" + ShopStore.shopAssortment[item.c_id].collectionLink}
                                    >
                                        {ShopStore.shopAssortment[item.c_id].author}
                                    </Link>
                                </div>
                            }
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
                        onClick={ButtonsStore.showHistory}
                    >
                        Продажи
                    </button>
                { 
                    isShop && 
                    (
                        item.owner === UsersStore.loggedUser.id ? 
                        <button 
                            className="secondary-button nft-container__no-buy">
                            Ваш предмет
                        </button>
                        :
                        <button 
                            data-collection-id={item.c_id}
                            data-item-id={item.i_id}
                            className="primary-button"
                            onClick={
                                UsersStore.loggedUser ? 
                                ( 
                                    (UsersStore.loggedUser.balance - item.price) >= 0 ? 
                                    
                                    mainStore.buyItem 
                                        : 
                                    ButtonsStore.noMoney
                                ) 
                                    : 
                                ButtonsStore.buyLock}
                        >
                            Купить
                        </button>
                    )
                }
                </div>
            </section>
        )
    
    }) 
)

export default ItemTile