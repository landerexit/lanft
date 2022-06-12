import React from "react";
import { observer } from "mobx-react-lite";

import ShopStore from "../store/ShopStore";

function ShopPage() {
    return (
        <section className="flex flex-column flex-align-center shop-page">
            <h1 className="shop-page__headline">Ассортимент коллекций</h1>
            <div className="shop-page__collections-container">
                {
                    ShopStore.shopAssortment.map( (collection, index) => {
                        return (
                            <a
                                className="flex flex-column flex-align-center collection-container shop-page__collection-container"
                                href={`collection/${collection.collectionLink}`}
                                key={"collection" + index}
                            >
                                <div className="collection-container__image-cut">
                                    <img 
                                        src={collection.cover} 
                                        alt={collection.name}
                                        className="collection-container__image"
                                    />
                                </div>
                                <div className="collection-container__description flex flex-column flex-align-center flex-justify-center">
                                    <h2 className="collection-container__name">{collection.name}</h2>
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
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default observer(ShopPage)

