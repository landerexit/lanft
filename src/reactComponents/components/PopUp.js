import React from "react";
import { inject, observer } from "mobx-react";
import { motion, AnimatePresence } from "framer-motion";

const PopUp = inject('animationVariants', 'ButtonsStore')(
    observer(({ animationVariants, ButtonsStore }) => {
        return (
            <AnimatePresence>
            {
                ButtonsStore.isPopupOpened.status && 
                
                <motion.div 
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    transition={{duration: .2}}
                    variants={animationVariants}
                    className="popup-container__wrapper flex flex-align-center flex-justify-center"
                    onClick={ButtonsStore.isPopupOpened.temporary ? () => {} : ButtonsStore.closePopup}
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
                </motion.div>
            }
            </AnimatePresence>
        )
    })
) 

export default PopUp