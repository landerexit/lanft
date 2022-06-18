import React from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";

import noAvatar from '../../img/noavatar.svg'
import etherImg from '../../img/ether.svg'

const DropMenu = inject( "mainStore", "UsersStore", "ButtonsStore" )(
    observer(({ NavigationControl, mainStore, UsersStore, ButtonsStore }) => {
        function exitUser() {
            NavigationControl.goStart()
            
            UsersStore.exitUser()
        }
    
        function deleteUser() {
            NavigationControl.goStart()

            mainStore.deleteUser()
        }
    
        const avatar = UsersStore.loggedUser ? UsersStore.loggedUser.avatar : noAvatar

        return (
            <>
                { 
                    ButtonsStore.isDropMenuOpened && 
                    <div 
                        className="wallet-menu__wrapper"
                        onClick={ButtonsStore.setDropMenu}
                        >
                        <div 
                            className="wallet-menu flex flex-column"
                            onClick={event => event.stopPropagation()}
                        >   
                            <div 
                                className="wallet-menu__line wallet-menu__back"
                                onClick={ButtonsStore.setDropMenu}
                            >
                                X
                            </div>

                            <Link 
                                to="/shop"
                                className="mobilescreens wallet-menu__line"
                            >
                                Каталог
                            </Link>

                            <Link 
                                to="/users/global" 
                                className="mobilescreens wallet-menu__line"
                            >
                                Пользователи
                            </Link>

                            <Link 
                                className="flex flex-align-center wallet-menu__line wallet-menu__user-info"
                                to="/myprofile"
                            >
                                <div className="avatar-container wallet-menu__avatar-container">
                                    <div className="avatar-container__avatar-cut wallet-menu__avatar-cut">
                                        <img
                                            src={avatar ? avatar : noAvatar }
                                            className="avatar-container__avatar-img wallet-menu__avatar-img"
                                            alt="аватар"
                                        />
                                    </div>
                                </div>

                                {
                                    UsersStore.loggedUser ?
                                        <div className="flex flex-column wallet-menu__names">  
                                            <span className="wallet-menu__name">{`${UsersStore.loggedUser.firstName} ${UsersStore.loggedUser.secondName}`}</span>
                                            <span className="wallet-menu__nickname">{"@" + UsersStore.loggedUser.login}</span>
                                        </div>
                                            : 
                                        <span className="wallet-menu__nickname">Мой Аккаунт</span>
                                }
                            </Link>
                            {
                                UsersStore.loggedUser && 
                                <>
                                    <div className="flex flex-align-center wallet-menu__line">
                                        <span>Ваш баланс: </span>
                                        <fieldset className="balance-container wallet-menu__balance-container flex flex-align-center flex-justify-center">
                                            <img 
                                                className="balance-container__ether-img"
                                                alt="etherium"
                                                src={etherImg}
                                            />
                                            <small>{UsersStore.loggedUser.balance}</small>
                                        </fieldset>
                                    </div>
                                    <div className="wallet-menu__line wallet-menu__buttons">
                                        <button
                                                className='primary-button'
                                                onClick={ButtonsStore.addBalance}
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
                                        <button
                                            className='secondary-button secondary-button__delete secondary-button__delete__data'
                                            onClick={mainStore.deleteLocalData}
                                        >
                                            Обнулить сайт
                                        </button>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                }
            </>
        )
    })
)


export default DropMenu