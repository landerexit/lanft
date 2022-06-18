import React from "react";
import { observer, inject } from "mobx-react";

import CollectionTile from "../components/CollectionTile";

const AssortmentPage = inject("ShopStore")(
    observer( ({ ShopStore }) => {
        return (
            <section className="flex flex-column flex-align-center shop-page">
                <h1 className="shop-page__headline">Ассортимент коллекций</h1>
                <div className="shop-page__collections-container">
                    {ShopStore.shopAssortment.map( (collection, index) => <CollectionTile key={"collectionTile" + index} collection={collection} index={index} /> )}
                </div>
            </section>
        )
    })
) 

export default AssortmentPage

