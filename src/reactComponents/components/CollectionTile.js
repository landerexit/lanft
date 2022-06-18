import React from "react";
import { Link } from "react-router-dom";

function CollectionTile({ collection, index }) {
    return (
        <Link
            className="flex flex-column flex-align-center collection-container shop-page__collection-container"
            to={`/collection/${collection.collectionLink}`}
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
                    <span 
                        className="collection-container__author-link"
                    >
                        {collection.author}
                    </span>
                </h3>
            </div>
        </Link>
    )
}

export default CollectionTile