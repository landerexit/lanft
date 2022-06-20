import React from "react";
import { Link } from "react-router-dom";

function UserTile({ user }) {
    return (
        <Link
            className="flex flex-column flex-align-center collection-container"
            to={"/users/1337" + user.id}
            key={"user" + user.id}
        >
            <div className="collection-container__image-cut">
                <img 
                    src={user.cover} 
                    alt={user.name}
                    className="collection-container__image"
                />
            </div>
            
            <section className="collection-container__avatar-shifter ">
                <div className="collection-container__avatar-container">
                        <div className="avatar-container__avatar-cut profile-page__avatar-cut">
                            <img
                                src={user.avatar}
                                className="avatar-container__avatar-img profile-page__avatar-img"
                                alt="аватар"
                            />
                        </div>
                </div>
            </section>

            <div className="collection-container__description flex flex-column flex-align-center ">
                <h2 className="collection-container__name">{user.firstName + " " + user.secondName}</h2>
                <h3 className="collection-container__author">@{user.login}</h3>
            </div>
        </Link>
    )
}

export default UserTile