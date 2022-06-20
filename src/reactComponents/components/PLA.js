import React from "react";
import { motion } from "framer-motion";
import { inject, observer } from "mobx-react";

// Page Loading Animation

const PLA = inject()(
    observer(({ children }) => {
        const loadingAnimation = {

          hidden: {
            opacity: 0,
            transition: {
              ease: 'easeIn', 
              duration: .3
            }
          },
    
          visible: {
            opacity: 1,
            transition: {
              ease: 'easeIn', 
              duration: .3
            }
          },
    
          exitHidden: {
            opacity: 0,
            transition: {
              ease: 'easeIn', 
              duration: .1
            }
          },
          
        }

        return (
            <motion.div
                initial='hidden'
                animate='visible'
                exit='exitHidden'
                variants={loadingAnimation}
                className='wrapper'
            >
                {children}
            </motion.div>
        )
    })
)

export default PLA