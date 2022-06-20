import React from "react";
import { observer, inject } from "mobx-react";
import UserTile from "../components/UserTile";

const AllUsersPage = inject("UsersStore")(
    observer( ({ UsersStore }) => {
        return (
            <section className="flex flex-column flex-align-center assortment-page">
                <h1 className="assortment-page__headline">Список пользователей</h1>
                <div className="assortment-page__collections-container">
                    { 
                        UsersStore.usersFromLocal.map( user => 
                            !UsersStore.getDeletedUsers().includes(user.id) && 
                            <UserTile key={'userTile' + user.id} user={user} />) 
                    }
                </div>
            </section>
        )
    }
    )
)

export default AllUsersPage

