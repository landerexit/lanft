import React from "react";
import { inject, observer } from "mobx-react";
import { motion } from "framer-motion";

import ItemTile from "../components/ItemTile";

const CollectionPage = inject( "animationVariants", "ShopStore" )(
    observer(({ collectionIndex, animationVariants, ShopStore }) => {

        const collection = ShopStore.shopAssortment[collectionIndex]
        const items = ShopStore.shopAssortment[collectionIndex].content
        
        return (
            <section className="collection-page collection-page__mobilescreens flex flex-justify-center">
                <section
                    className="collection-container collection-page__collection-container widescreens"
                    href={`collection/${collection.collectionLink}`}
                >
                    <div className="collection-container__image-cut">
                        <img 
                            src={collection.cover} 
                            alt={collection.name}
                            className="collection-container__image"
                        />
                    </div>
                    <div className="collection-container__description collection-page__description flex flex-column flex-align-center">
                        <h2 className="collection-container__name">"{collection.name}"</h2>
                        <h3 className="collection-container__author">
                            {'by '}
                            <a 
                                className="collection-container__author-link"                                                    
                                rel="noopener noreferrer nofollow"
                                target="_blank"
                                href={collection.link}
                            >
                                {collection.author}
                            </a>
                        </h3>
                        <p className="collection-container__about">{collection.description}</p>
                    </div>
                </section>
                <section
                    className="collection-container collection-page__collection-container mobilescreens"
                    href={`collection/${collection.collectionLink}`}
                >
                    <div className="collection-container__image-cut">
                        <img 
                            src={collection.cover} 
                            alt={collection.name}
                            className="collection-container__image"
                        />
                    </div>
                    <div className="collection-container__description collection-page__description flex flex-column flex-align-center">
                        <h2 className="collection-container__name">"{collection.name}"</h2>
                        <h3 className="collection-container__author">
                            {'by '}
                            <a 
                                className="collection-container__author-link"                                                    
                                rel="noopener noreferrer nofollow"
                                target="_blank"
                                href={collection.link}
                            >
                                {collection.author}
                            </a>
                        </h3>
                        <p className="collection-container__about">{collection.description}</p>
                    </div>
                </section>
                <motion.section
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delayChildren: .2, staggerChildren: .1 }}
                    variants={ animationVariants }
                    className="collection-page__items"
                >
                    {  
                        items.map(item => 
                            <motion.div
                                variants={ animationVariants }
                                style={{ minWidth: 100 + "%"}}
                                key={"item" + item.c_id + item.i_id}
                            >
                                <ItemTile  item={item} isShop={true}/>
                            </motion.div>
                        )
                    }
                
                </motion.section>
            </section>
        )
    })
)


export default CollectionPage