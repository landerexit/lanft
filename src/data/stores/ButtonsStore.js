import { makeObservable, action, observable } from 'mobx'

import OwnersHistory from '../../reactComponents/components/OwnersHistory'

export class ButtonsStore {
    constructor(stores) {
        makeObservable(this, {
            
        // -------- Intro state --------
            isIntroChecked: observable,
            getIntroCheckedFromLocal: action,
            setIntroChecked: action.bound,
            
        // -------- Drop Menu --------
            isDropMenuOpened: observable,
            setDropMenu: action.bound,

        // ----- Change Cover Menu -----
            isCoverMenuOpened: observable,
            setCoverMenu: action.bound,
            
        // -------- Popup state --------
            isPopupOpened: observable.deep,
            setShowPopup: action.bound,
            closePopup: action.bound,

            noMoney: action.bound,
            buyLock: action.bound,
            showHistory: action.bound,

        // -------- Main functions --------
            deleteLocalData: action.bound,

        })

        this.ShopStore = stores.ShopStore
        this.UsersStore = stores.UsersStore
        
        this.isIntroChecked = this.getIntroCheckedFromLocal()
    }

    // -------- Intro state --------
    
    isIntroChecked = false

    getIntroCheckedFromLocal () {
        return !!JSON.parse(localStorage.getItem("introChecked"))
    }

    setIntroChecked () {
        this.isIntroChecked = true
        localStorage.setItem('introChecked', JSON.stringify(this.introChecked))
    }

    // -------- Drop Menu --------

    isDropMenuOpened = false

    setDropMenu () {
        this.isDropMenuOpened = !this.isDropMenuOpened
    }

    // ----- Change Cover Menu -----

    isCoverMenuOpened = false
    
    setCoverMenu () {
        this.isCoverMenuOpened = !this.isCoverMenuOpened
    }

    // -------- Popup state --------

    isPopupOpened = false

    setShowPopup (isTemporary,theStatus, theText) {
        this.isPopupOpened = {temporary: isTemporary, status: theStatus, text: theText}
    }

    closePopup() {
        this.setShowPopup(true, false, '')
    }

    noMoney() {
        this.setShowPopup(true, true, (<h1>На балансе не хватает средств</h1>))
        setTimeout(() => {
            this.setShowPopup(true, false, '')
        }, "2000");
    }

    buyLock() {
        this.setShowPopup(true, true, (<h1>Войдите в аккаунт</h1>))
        setTimeout(() => {
            this.setShowPopup(true, false, '')
        }, "2000");
    }

    showHistory(event) {
        const collectionId = event.target.dataset.collectionId
        const itemId = event.target.dataset.itemId

        this.setShowPopup(false, true, <OwnersHistory collectionId={collectionId} itemId={itemId}/>)
    }

    // -------- Main functions --------
    
    deleteLocalData () {
        this.introChecked = false
        localStorage.removeItem("introChecked")
    }
}
