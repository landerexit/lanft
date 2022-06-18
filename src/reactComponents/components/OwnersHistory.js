import React from "react";
import { Link } from 'react-router-dom';
import { inject, observer } from "mobx-react";


import etherImage from '../../img/ether.svg'

const OwnersHistory = inject( "UsersStore", "ShopStore" )(
    observer( ({ collectionId, itemId, UsersStore, ShopStore}) => {
        return (
            <div className="history-popup">
                <div className="history-popup__head-container">
                    <h2 className="history-popup__headline">История продаж</h2>
                                        
                    <h3 className="history-popup__item-name">"{ShopStore.shopAssortment[collectionId].content[itemId].name}"</h3>
                </div>
                {ShopStore.shopAssortment[collectionId].content[itemId].ownerHistory.map( (record, recordId) => {
                  return (
                    <section
                        key={"history" + collectionId + itemId + recordId}
                        className='flex flex-align-center flex-justify-center nft-container__info-container history-popup__record-container'
                    >
                        <div className='flex flex-column nft-container__line'>
                            <span className='nft-container__headline'>
                                Покупатель
                            </span>
                            <Link className='nft-container__name' to={"/users/1337" + record.id}>
                                {"@" + UsersStore.usersFromLocal[record.id].login}
                            </Link>
                        </div>
                        <div className='flex flex-column nft-container__line nft-container__line__right'>
                            <span className='nft-container__price nft-container__headline'>
                                Цена
                            </span>
                            <div className="flex flex-align-center nft-container__price-container">
                                <img src={etherImage} alt="Etherium" />
                                <span className='nft-container__name'>
                                    {record.price}
                                </span>
                            </div>
                        </div>
                    </section>
                    )
                  })
                }
            </div>
        )
    })
)

export default OwnersHistory