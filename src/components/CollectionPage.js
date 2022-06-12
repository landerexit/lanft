import React from "react";
import { observer } from "mobx-react";

import ShopStore from "../store/ShopStore";
import DataStore from "../store/DataStore";

import etherImage from '../img/ether.svg'

function CollectionPage(props) {
    function buyItem(event) {
        const collectionId = event.target.dataset.collectionId
        const itemId = event.target.dataset.itemId

        const prevOwner = ShopStore.shopAssortment[collectionId].content[itemId].owner
        const price = ShopStore.shopAssortment[collectionId].content[itemId].price

        ShopStore.buyItem(collectionId, itemId, DataStore.loggedUser.id)
        DataStore.buyItem(price, prevOwner)
    }
    
    const collection = ShopStore.shopAssortment[props.collectionIndex]
    const items = ShopStore.shopAssortment[props.collectionIndex].content
    
    return (
        <section className="collection-page collection-page__mobilescreens flex flex-justify-center">
            <section
                className="collection-container collection-page__collection-container widescreens"
                href={`collection/${collection.collectionLink}`}
            >
                <div className="collection-container__image-cut">
                    <img 
                        src={collection.cover} 
                        alt={collection.name}
                        className="collection-container__image"
                    />
                </div>
                <div className="collection-container__description collection-page__description flex flex-column flex-align-center">
                    <h2 className="collection-container__name">"{collection.name}"</h2>
                    <h3 className="collection-container__author">
                        {'by '}
                        <a 
                            className="collection-container__author-link"                                                    
                            rel="noopener noreferrer nofollow"
                            target="_blank"
                            href={collection.link}
                        >
                            {collection.author}
                        </a>
                    </h3>
                    <p className="collection-container__about">{collection.description}</p>
                </div>
            </section>
            <section
                className="collection-container collection-page__collection-container mobilescreens"
                href={`collection/${collection.collectionLink}`}
            >
                <div className="collection-container__image-cut">
                    <img 
                        src={collection.cover} 
                        alt={collection.name}
                        className="collection-container__image"
                    />
                </div>
                <div className="collection-container__description collection-page__description flex flex-column flex-align-center">
                    <h2 className="collection-container__name">"{collection.name}"</h2>
                    <h3 className="collection-container__author">
                        {'by '}
                        <a 
                            className="collection-container__author-link"                                                    
                            rel="noopener noreferrer nofollow"
                            target="_blank"
                            href={collection.link}
                        >
                            {collection.author}
                        </a>
                    </h3>
                    <p className="collection-container__about">{collection.description}</p>
                </div>
            </section>
            <section className="collection-page__items">
                {items.map(item => {
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
                                        <div className='flex flex-column nft-container__line'>
                                            <span className='nft-container__headline'>
                                                Владелец
                                            </span>
                                            <a
                                                className='nft-container__name'
                                                href={"/users/1337" + item.owner}
                                            >
                                                {"@" + DataStore.usersFromLocal[item.owner].login}
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

                            { 
                                item.owner === DataStore.loggedUser.id ? 

                                <button 
                                    className="secondary-button nft-container__no-buy">
                                    Ваш предмет
                                </button>
                                :
                                <button 
                                    data-collection-id={item.c_id}
                                    data-item-id={item.i_id}
                                    className="primary-button"
                                    onClick={DataStore.loggedUser ? ( (DataStore.loggedUser.balance - item.price) >= 0 ? buyItem : props.PopUpControl.noMoney) : props.PopUpControl.buyLock}>
                                    Купить
                                </button>
                            }

                            </div>
                        </section>
                    )
                })}
            </section>
        </section>
    )
}

export default observer(CollectionPage)