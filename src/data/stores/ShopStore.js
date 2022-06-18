import { makeObservable, action, observable } from "mobx";

export class ShopStore {
    constructor(stores) {
        makeObservable(this, {
            shopAssortment: observable.deep,
            
            getShopAssortmentFromLocal: action.bound,

            checkOwnerHistory: action.bound,
            buyItem: action.bound,

            generateInitialRandomActivity: action.bound,
            generateRandomUser: action.bound,
            generateRandomOwnerHistory: action.bound,

            deleteUser: action.bound,
            deleteLocalData: action
        })

        this.shopInit = stores.InitialVars.shopAssortmentInit

        this.UsersStore = stores.UsersStore

        this.shopAssortment = this.getShopAssortmentFromLocal()
    }

    shopInit = []
    shopAssortment = []

    checkOwnerHistory (tempOwnerHistory) {
        let newOwnerHistory = tempOwnerHistory

        if (tempOwnerHistory.length === 6) {
            newOwnerHistory.pop()
            return [...newOwnerHistory]
        } else {
            return [...tempOwnerHistory]
        }
    }

    buyItem (itemCollectionId, itemId) {
        const item = this.shopAssortment[itemCollectionId].content[itemId]
        const buyerId = this.UsersStore.loggedUser.id

        this.shopAssortment[itemCollectionId].content[itemId] = {
            ...item, 
            owner: buyerId,
            price: item.price + Math.floor(Math.random() * (item.price / 4)),
            ownerHistory: [
                {
                    id: buyerId,
                    price: item.price
                },
                ...this.checkOwnerHistory(item.ownerHistory)
                ]
        }

        localStorage.setItem('shopStore', JSON.stringify(this.shopAssortment))
    }

    generateInitialRandomActivity () {
        return this.shopInit.map( (collection, collectionIndex) => {
            return {
                    c_id: collectionIndex,
                    ...collection,
                    content: collection.content.map((item, itemIndex) => {
                            const finalPrice = Math.floor(Math.random() * 2000)
                            const finalOwner = this.generateRandomUser(1, 999, 999, this.UsersStore.getDeletedUsers(), this.UsersStore.usersFromLocal.length)
                            return {
                                    c_id: collectionIndex,
                                    i_id: itemIndex,
                                    ...item,
                                    price: finalPrice,
                                    owner: finalOwner,
                                    ownerHistory: this.generateRandomOwnerHistory(finalPrice, finalOwner)
                                }
                        })
                    }
        })
    }

    generateRandomUser (tempHistory, prevUserId, notThisUser, deletedUsers, usersInTotal) {
        let newUser = Math.floor(Math.random() * usersInTotal)

        if (tempHistory === 0 || newUser === notThisUser) {
            while (newUser === notThisUser) {
                newUser = Math.floor(Math.random() * usersInTotal)
            }

        } else if (newUser === prevUserId) {
            while (newUser === prevUserId) {
                newUser = Math.floor(Math.random() * usersInTotal)
            }

        } else if (deletedUsers.includes(newUser)) {
            while (deletedUsers.includes(newUser)) {
                newUser = Math.floor(Math.random() * usersInTotal)
            }
        }

        return newUser
    }

    generateRandomOwnerHistory (finalPrice, finalOwner) {
        const ownersCount = Math.floor(Math.random() * 5)
        const preFinalPrice = finalPrice - Math.floor(Math.random() * (Math.floor(finalPrice / 20)))
        const ownerHistory = [{id: finalOwner, price: preFinalPrice}]

        let tempHistory = []
        let prevPrice = 0
        let prevUserId = 0

        for (let tempOwner = 0; tempOwner <= ownersCount; tempOwner++) {
            const newUser = this.generateRandomUser(tempHistory, prevUserId, finalOwner, [], this.UsersStore.usersFromLocal.length)
            prevUserId = newUser
            
            if (tempOwner === 0) {
                prevPrice = Math.floor(Math.random() * 200)
                tempHistory.unshift({
                    id: newUser,
                    price: prevPrice
                })
            } else {
                prevPrice = Math.floor(Math.random() * (preFinalPrice - prevPrice) + prevPrice)
                tempHistory.unshift({
                    id: newUser,
                    price: prevPrice
                })
            }
        }

        return ownerHistory.concat(tempHistory)
    }

    getShopAssortmentFromLocal () {
        const tempShop = JSON.parse(localStorage.getItem('shopStore'))

        if (!!tempShop) {
            return tempShop
        } else {
            const generatedAssortment = this.generateInitialRandomActivity()
            localStorage.setItem('shopStore', JSON.stringify(generatedAssortment))
            return generatedAssortment
        }
    }

    deleteUser () {
        this.shopAssortment = this.shopAssortment.map(collection => {
            return {
                ...collection,
                content: collection.content.map(item => {
                    const randomUser = this.generateRandomUser(1, 999, this.UsersStore.loggedUser.id, this.UsersStore.getDeletedUsers(), this.UsersStore.usersFromLocal.length)
                    if (this.UsersStore.getDeletedUsers().includes(item.owner)) {
                        return {
                                ...item, 
                                owner: randomUser,
                                price: item.price + Math.floor(Math.random() * (item.price / 4)),
                                ownerHistory: [
                                    {
                                        id: randomUser,
                                        price: item.price
                                    },
                                    ...this.checkOwnerHistory(item.ownerHistory)
                                    ]
                        }
                    } else {
                        return item
                    }
                })
            }
        })

        
        localStorage.setItem('shopStore', JSON.stringify(this.shopAssortment))
    }

    deleteLocalData() {
        localStorage.removeItem('shopStore')
    }
}
