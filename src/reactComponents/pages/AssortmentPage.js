import React from "react";
import { observer, inject } from "mobx-react";
import { motion } from "framer-motion";

import CollectionTile from "../components/CollectionTile";

const AssortmentPage = inject("animationVariants", "ShopStore")(
    observer( ({ animationVariants, ShopStore }) => {
        return (
            <section className="flex flex-column flex-align-center assortment-page">
                <h1 className="assortment-page__headline">Ассортимент коллекций</h1>
                <motion.section
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delayChildren: .05, staggerChildren: .05 }}
                    variants={ animationVariants } 
                    className="assortment-page__collections-container"
                >
                    {
                        ShopStore.shopAssortment.map( (collection, index) => 
                            <motion.div
                                variants={ animationVariants }
                                style={{ minWidth: 100 + "%"}}
                            >
                                <CollectionTile key={"collectionTile" + index} collection={collection} index={index} />
                            </motion.div>
                        )
                    }
                </motion.section>
            </section>
        )
    })
) 

export default AssortmentPage

