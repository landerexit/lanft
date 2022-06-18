import { UsersStore } from "./stores/UsersStore";
import { ShopStore } from "./stores/ShopStore";
import { ButtonsStore } from "./stores/ButtonsStore";

import { InitialVars } from "./initialValues/InitialVars";
import { ValidationVars } from "./initialValues/ValidationVars";

class mainStore {
    constructor() {
        this.InitialVars = new InitialVars()

        this.UsersStore = new UsersStore(this)
        this.ShopStore = new ShopStore(this)
        this.ButtonsStore = new ButtonsStore(this)

        this.ValidationVars = new ValidationVars(this)
    }

    buyItem = (event) => {
        const collectionId = event.target.dataset.collectionId
        const itemId = event.target.dataset.itemId

        const prevOwner = this.ShopStore.shopAssortment[collectionId].content[itemId].owner
        const price = this.ShopStore.shopAssortment[collectionId].content[itemId].price

        this.ShopStore.buyItem(collectionId, itemId)
        this.UsersStore.buyItem(price, prevOwner)
    }

    deleteDataFromLocal = () => {
        this.ShopStore.deleteLocalData()
        this.UsersStore.deleteLocalData()
        this.ButtonsStore.deleteLocalData()
    }

    deleteUser = () => {
        this.UsersStore.deleteUser()
        this.ShopStore.deleteUser()
    }
}

export default new mainStore()