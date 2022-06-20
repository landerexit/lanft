import React from "react";
import { observer, inject } from "mobx-react";

import ChangeCoverMenu from "../components/ChangeCoverMenu";

import verifStar from "../../img/verif.svg"
import etherImage from "../../img/ether.svg"
import ItemTile from "../components/ItemTile";

const ProfilePage = inject("ShopStore", "UsersStore", "ButtonsStore")(
    observer( ({isLogged, userId, ShopStore, UsersStore, ButtonsStore }) => {
        const user = UsersStore.usersFromLocal[userId]
    
        const id = user.id 

        const cover = user.cover
        const avatar = user.avatar

        const login = user.login

        const firstName = user.firstName
        const secondName = user.secondName

        const balance = user.balance
    
        const itemsCounter = ShopStore.shopAssortment.map( item => item.owner === id && item ).length

        return (
            <>
            {ButtonsStore.isCoverMenuOpened && <ChangeCoverMenu cover={cover}/>}
            <div className="wrapper profile-page__background__wrapper widesreens">
                <div className="wrapper profile-page__background" style={{background: 'url(' + user.cover + ')', backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: 'center'}}/>
            </div>
            <section className='flex flex-column profile-page'>
                <header 
                    className="flex flex-align-center flex-justify-center profile-page__header"
                    style={{backgroundImage: "url("+ cover +")"}}
                >
                    {isLogged && 
                        <button
                            className="secondary-button profile-page__open-change-cover"
                            onClick={ButtonsStore.setCoverMenu}
                        >
                            Изменить фон
                        </button>
                    }
                </header>
                
                <main className="profile-page__main-container">
                    <section className="profile-page__avatar-shifter">
                        <section className="avatar-container profile-page__avatar-container">
    
                            <div className="avatar-container__avatar-cut profile-page__avatar-cut">
                                <img
                                    src={avatar}
                                    className="avatar-container__avatar-img profile-page__avatar-img"
                                    alt="аватар"
                                />
                            </div>
                                <img
                                src={verifStar}
                                className="avatar-container__verif-star profile-page__verif-star"
                                alt="верификация"
                                />
    
                        </section>
                    </section>
                    <section className="profile-page__user-panel flex flex-align-center">
                        <section className="profile-page__user-info">
                            <div className="flex profile-page__name-and-balance">
                                <section className="profile-page__names-container">
                                    <h2 className="profile-page__user-name">{firstName + " " + secondName}</h2>
                                    <h3 className="profile-page__nickname">{"@" + login}</h3>
                                    {isLogged && 
                                        <h3>
                                            Это ваш профиль
                                        </h3>
                                    }
                                </section>
                                {isLogged &&
                                    <fieldset className="balance-container profile-page__balance-container flex flex-align-center">
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
                            <section className="profile-page__statistic-container">
                                <div className="profile-page__statistic-line">
                                    <small className="profile-page__statistic-number">
                                        {itemsCounter}
                                    </small>
                                    <small className="profile-page__statistic-text">Предметов</small>
                                </div>
                                <div className="profile-page__statistic-line">
                                    <small className="profile-page__statistic-number">{user.views + "M"}</small>
                                    <small className="profile-page__statistic-text">Просмотров</small>
                                </div>
                                <div className="profile-page__statistic-line">
                                    <small className="profile-page__statistic-number">{user.subs + 'K'}</small>
                                    <small className="profile-page__statistic-text">Подписчиков</small>
                                </div>
                            </section>
                        </section>
    
                    </section>
                    <section className="profile-page__inventory">
                        { 
                            itemsCounter ? 
                            ShopStore.shopAssortment.map( collection => 
                                collection.content.map( item => item.owner === user.id && 
                                    <ItemTile key={"item" + item.c_id + item.i_id} item={item} isShop={false}/>)) 
                                : 
                            <h3>Инвентарь пуст</h3>
                        }
                    </section>
                </main>
            </section>
            </>
        )
    })
)


export default ProfilePage