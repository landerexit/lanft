import React from 'react'

import img1 from '../img/StartPage/image1.png'
import logoImg from '../img/logo.svg'

function StartPage(props){
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

                <div className='flex start-page__buttons-section'>
                        <button
                            className='primary-button start-page__signin-button start-page__link'
                            onClick={props.NavigationControl.goSignin}
                        >
                            Регистрация
                        </button>
                        <button 
                            className='secondary-button start-page__login-button start-page__link'
                            onClick={props.NavigationControl.goLogin}
                        >
                            Вход в аккаунт
                        </button>
                </div>
            </div>
        </div>
    )
}

export default StartPage