import React from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

import logo from '../../img/logo.svg'
import arrow from '../../img/arrow.svg'
import walletImg from '../../img/header/wallet.svg'

const MainHeader = inject('mainStore', 'UsersStore', 'ButtonsStore')(
    observer(({ NavigationControl, ButtonsStore }) => {
        return (
            <header className="main-header flex flex-align-center">
                <img
                    src={arrow}
                    className="main-header__back mobilescreens"
                    onClick={NavigationControl.goBack}
                    alt="Назад"
                />
                <Link 
                    to='/'
                    className="main-header__logo-container flex flex-align-center"
                >
                    <img
                        src={logo}
                        className="main-header__logo-img"
                        alt="логотип"
                    />
                    <h2 className="main-header__logo-text">LAN|NFT</h2>
                </Link>
                <div className="flex flex-justify-center flex-align-center main-header__links-container">
                    <Link to="/shop" className="widescreens">Каталог</Link>
                    <Link to="/users/global" className="widescreens">Пользователи</Link>
                    <img 
                        src={walletImg}
                        onClick={ButtonsStore.setDropMenu}
                        className="main-header__link-icon"
                        alt="кошелек"
                        />
                </div>
            </header>
        ) 
    })
) 

export default MainHeader