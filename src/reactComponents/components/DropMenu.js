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
                        className="drop-menu__wrapper"
                        onClick={ButtonsStore.setDropMenu}
                        >
                        <div 
                            className="drop-menu flex flex-column"
                            onClick={event => event.stopPropagation()}
                        >   
                            <div 
                                className="drop-menu__line drop-menu__back"
                                onClick={ButtonsStore.setDropMenu}
                            >
                                X
                            </div>

                            <Link 
                                to="/shop"
                                className="mobilescreens drop-menu__line"
                            >
                                Каталог
                            </Link>

                            <Link 
                                to="/users/global" 
                                className="mobilescreens drop-menu__line"
                            >
                                Пользователи
                            </Link>

                            <Link 
                                className="flex flex-align-center drop-menu__line drop-menu__user-info"
                                to="/myprofile"
                            >
                                <div className="avatar-container drop-menu__avatar-container">
                                    <div className="avatar-container__avatar-cut drop-menu__avatar-cut">
                                        <img
                                            src={avatar ? avatar : noAvatar }
                                            className="avatar-container__avatar-img drop-menu__avatar-img"
                                            alt="аватар"
                                        />
                                    </div>
                                </div>

                                {
                                    UsersStore.loggedUser ?
                                        <div className="flex flex-column drop-menu__names">  
                                            <span className="drop-menu__name">{`${UsersStore.loggedUser.firstName} ${UsersStore.loggedUser.secondName}`}</span>
                                            <span className="drop-menu__nickname">{"@" + UsersStore.loggedUser.login}</span>
                                        </div>
                                            : 
                                        <span className="drop-menu__nickname">Мой Аккаунт</span>
                                }
                            </Link>
                            {
                                UsersStore.loggedUser && 
                                <>
                                    <div className="flex flex-align-center drop-menu__line">
                                        <span>Ваш баланс: </span>
                                        <fieldset className="balance-container drop-menu__balance-container flex flex-align-center flex-justify-center">
                                            <img 
                                                className="balance-container__ether-img"
                                                alt="etherium"
                                                src={etherImg}
                                            />
                                            <small>{UsersStore.loggedUser.balance}</small>
                                        </fieldset>
                                    </div>
                                    <div className="drop-menu__line drop-menu__buttons">
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
                                    <div className="drop-menu__line drop-menu__delete">
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