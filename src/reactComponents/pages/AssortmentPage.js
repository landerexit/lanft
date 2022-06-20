import React from "react";
import { observer, inject } from "mobx-react";

import CollectionTile from "../components/CollectionTile";

const AssortmentPage = inject("ShopStore")(
    observer( ({ ShopStore }) => {
        return (
            <section className="flex flex-column flex-align-center assortment-page">
                <h1 className="assortment-page__headline">Ассортимент коллекций</h1>
                <div className="assortment-page__collections-container">
                    {
                        ShopStore.shopAssortment.map( (collection, index) => 
                            <CollectionTile key={"collectionTile" + index} collection={collection} index={index} />)
                    }
                </div>
            </section>
        )
    })
) 

export default AssortmentPage

