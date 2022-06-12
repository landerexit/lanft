import React from "react";
import { observer } from "mobx-react";

import DataStore from "../store/DataStore";

function PopUp(props) {
    return (
        <div 
            className="popup-container__wrapper flex flex-align-center flex-justify-center"
            onClick={props.PopUpControl.closePopup}
            >
            <section className="popup-container flex flex-align-center flex-justify-center">
                <button
                        className="popup-container__exit-button primary-button"
                        onClick={props.PopUpControl.closePopup}
                >Х</button> 
                {DataStore.isPopupOpened.text} 
            </section>
        </div>
    )
}

export default observer(PopUp)