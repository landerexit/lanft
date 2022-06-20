import React from "react";
import { observer, inject } from "mobx-react";
import { motion } from "framer-motion";

import UserTile from "../components/UserTile";

const AllUsersPage = inject("animationVariants", "UsersStore")(
    observer( ({ animationVariants, UsersStore }) => {
        return (
            <section
                className="flex flex-column flex-align-center assortment-page"
            >
                <h1 className="assortment-page__headline">Список пользователей</h1>
                <motion.section
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: .75, delayChildren: .05, staggerChildren: .05 }}
                    variants={ animationVariants } 
                    className="assortment-page__collections-container"
                >
                    { 
                        UsersStore.usersFromLocal.map( user => 
                            !UsersStore.getDeletedUsers().includes(user.id) &&
                                <motion.div
                                    variants={ animationVariants }
                                >
                                    <UserTile key={'userTile' + user.id} user={user} />
                                </motion.div>
                            ) 
                    }
                </motion.section>
            </section>
        )
    }
    )
)


export default AllUsersPage

