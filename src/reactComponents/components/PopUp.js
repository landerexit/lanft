import React from "react";
import { inject, observer } from "mobx-react";

const PopUp = inject('ButtonsStore')(
    observer(({ ButtonsStore }) => {
        return (
            <div 
                className="popup-container__wrapper flex flex-align-center flex-justify-center"
                onClick={ButtonsStore.closePopup}
                >
                <section 
                    className="popup-container flex flex-align-center flex-justify-center"
                    onClick={(event) => event.stopPropagation()}
                    >
                    {!ButtonsStore.isPopupOpened.temporary && <button
                            className="popup-container__exit-button primary-button"
                            onClick={ButtonsStore.closePopup}
                    >
                        Х
                    </button>}
                    
                    {ButtonsStore.isPopupOpened.text} 
                </section>
            </div>
        )
    })
) 

export default PopUp