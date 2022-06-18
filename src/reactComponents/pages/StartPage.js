import React from 'react'
import { Link } from 'react-router-dom'

import img1 from '../../img/StartPage/image1.png'
import logoImg from '../../img/logo.svg'

function StartPage(){
    return (
        <div className='flex flex-align-center flex-justify-center wrapper'>
            <div className='tile flex flex-align-center flex-column start-page'>
                <div className='flex flex-column flex-align-center start-page__logo-container'>
                    <img 
                        className='start-page__logo-img' 
                        alt='логотип'
                        src={logoImg}
                    />
                    <h1 className='start-page__logo-text'>LAN|NFT</h1>
                </div>

                <img 
                    src={img1} 
                    className='start-page__img' 
                    alt='телефон'
                />

                <div className='flex start-page__buttons-section start-page__button'>
                        <Link
                            className='primary-button flex flex-align-center'
                            to='/registration'
                        >
                            Регистрация
                        </Link>
                        <Link 
                            className='secondary-button start-page__button flex flex-align-center'
                            to='/login'
                        >
                            Вход в аккаунт
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default StartPage