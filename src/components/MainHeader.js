import React from "react";
import { observer } from "mobx-react";

import DataStore from "../store/DataStore";
import ShopStore from "../store/ShopStore";

import logo from '../img/logo.svg'
import noAvatar from '../img/noavatar.svg'
import arrow from '../img/arrow.svg'
import etherImg from '../img/ether.svg'
import walletImg from '../img/header/wallet.svg'

function MainHeader(props) {
    function exitUser() {
        DataStore.exitUser()     
        props.NavigationControl.goStart()
    }

    function deleteUser() {
        props.NavigationControl.goStart()

        DataStore.deleteUser()
        ShopStore.deleteUser()
    }

    const avatar = DataStore.loggedUser.avatar

    return (
        <>
            <header className="main-header flex flex-align-center">
                <img
                    src={arrow}
                    className="main-header__back mobilescreens"
                    onClick={props.NavigationControl.goBack}
                    alt="Назад"
                />
                <a 
                    href='/'
                    className="main-header__logo-container flex flex-align-center"
                >
                    <img
                        src={logo}
                        className="main-header__logo-img"
                        alt="логотип"
                    />
                    <h2 className="main-header__logo-text">LAN|NFT</h2>
                </a>
                <div className="flex flex-justify-center flex-align-center main-header__links-container">
                    <a href="/shop" className="widescreens">Каталог</a>
                    <a href="/users/global" className="widescreens">Пользователи</a>
                    <img 
                        src={walletImg}
                        onClick={DataStore.setWallet}
                        className="main-header__link-icon"
                        alt="кошелек"
                        />
                </div>
            </header>
            { DataStore.isWalletMenuOpened && 
            <div 
                className={`wallet-menu__wrapper`}
                onClick={DataStore.setWallet}
                >
                <div 
                    className="wallet-menu flex flex-column"
                    onClick={event => event.stopPropagation()}>
                        <a href="/shop" className="mobilescreens wallet-menu__line">
                            Каталог
                        </a>
                        
                        <a href="/users/global" className="mobilescreens wallet-menu__line">
                            Пользователи
                        </a>
                        <a 
                            className="flex flex-align-center wallet-menu__line wallet-menu__user-info"
                            href="/myprofile">
                            <div className="avatar-container wallet-menu__avatar-container">
                                <div className="avatar-container__avatar-cut wallet-menu__avatar-cut">
                                    <img
                                        src={avatar ? avatar : noAvatar }
                                        className="avatar-container__avatar-img wallet-menu__avatar-img"
                                        alt="аватар"
                                    />
                                </div>
                            </div>
                            {DataStore.loggedUser ?
                                
                                <div className="flex flex-column wallet-menu__names">  
                                    <span className="wallet-menu__name">{`${DataStore.loggedUser.firstName} ${DataStore.loggedUser.secondName}`}</span>
                                    <span className="wallet-menu__nickname">{"@" + DataStore.loggedUser.login}</span>
                                </div>
                                : 
                                <span className="wallet-menu__nickname">Мой Аккаунт</span>}
                        </a>
                        {DataStore.loggedUser && 
                        <>
                            <div className="flex flex-align-center wallet-menu__line">
                                <span>Ваш баланс: </span>
                                <fieldset className="balance-container wallet-menu__balance-container flex flex-align-center flex-justify-center">
                                    <img 
                                        className="balance-container__ether-img"
                                        alt="etherium"
                                        src={etherImg}
                                    />
                                    <small>{DataStore.loggedUser.balance}</small>
                                </fieldset>
                            </div>
                            <div className="wallet-menu__line wallet-menu__buttons">
                                <button
                                        className='primary-button'
                                        onClick={DataStore.addBalance}
                                    >
                                        Пополнить баланс на +2000
                                </button>

                                <button 
                                    className='secondary-button'
                                    onClick={exitUser}
                                >
                                    Выйти из аккаунта
                                </button>


                            </div>
                            <div className="wallet-menu__line wallet-menu__delete">
                                <button
                                    className='secondary-button secondary-button__delete'
                                    onClick={deleteUser}
                                >
                                    Удалить аккаунт
                                </button>
                            </div>
                        </>}
                </div>
            </div>}
        </>
    ) 
}

export default observer(MainHeader)