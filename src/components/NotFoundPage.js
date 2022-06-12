import React from 'react';

function NotFoundPage(props) {
    return (
        <div className='wrapper flex flex-align-center flex-justify-center'>
            <div className='NotFound-container flex flex-align-center flex-justify-center flex-column'>
                <h2 className='NotFound-container__headline'>404</h2>
                <p className='NotFound-container__description'>Страницы не существует</p>
                <button 
                    className='primary-button NotFound-container__back-button'
                    onClick={props.NavigationControl.goBack}
                >Вернуться назад</button>
            </div>
        </div>
    )
}

export default NotFoundPage