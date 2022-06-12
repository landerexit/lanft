import { action, makeObservable, observable } from 'mobx';

import noAvatar from '../img/noavatar.svg'
import noCover from '../img/no-cover.jpg'

class DataStore {
    constructor() {
        makeObservable(this, {
            usersFromLocal: observable.deep,
            loggedUser: observable.deep,
            introChecked: observable,
            deletedUsers: observable.deep,

            isWalletMenuOpened: observable,
            isChangeCoverOpened: observable,
            isPopupOpened: observable,

            getDataFromLocal: action,
            getUsersFromLocal: action,
            getLoggedUserFromLocal: action,
            getIntroCheckedFromLocal: action,
            
            setIntroChecked: action,
            setShowPopup: action,
            setChangeCoverOpened: action,
            setWallet: action,


            sendAndGetAvatarURL: action,
            sendAndGetCover: action,
            sendNewCover: action,
            sendNewUser: action,

            addBalance: action,
            buyItem: action,

            loginUser: action,
            exitUser: action,
            deleteUser: action,
        })

        this.isChangeCoverOpened = false
        this.getDataFromLocal()
    }

    getDataFromLocal = () => {
        this.introChecked = this.getIntroCheckedFromLocal()

        this.usersFromLocal = this.getUsersFromLocal()
        this.loggedUser = this.getLoggedUserFromLocal()
        this.deletedUsers = this.getDeletedUsersFromLocal()
    }

    loggedUser = {}

    usersFromLocal = []
    
    introChecked = []

    deletedUsers = []

    isWalletMenuOpened = false

    isChangeCoverOpened = false

    isPopupOpened = {status: false, text:''}

    setShowPopup = (theStatus, theText) => {
        this.isPopupOpened = {status: theStatus, text: theText}
    }

    setChangeCoverOpened = () => {
        this.isChangeCoverOpened = !this.isChangeCoverOpened
    }

    setWallet = () => {
        this.isWalletMenuOpened = !this.isWalletMenuOpened
    }

    usersInit = [
        {
            id: 0,
            login: 'landerexit',
            password: '123123123',
            firstName: 'Эмиль',
            secondName: 'Каримов',
            balance: 10000,
            avatar: 'https://i.ibb.co/Jz6bzWL/death-note-suite-2020-2-749x1024.jpg',
            cover: 'https://i.ibb.co/bXnQfWj/nikita-tikhomirov-dv7csihurkm-unsplash-e1596543255933.jpg',
            views: '3,7',
            subs: '124',
        },

        {
            id: 1,
            login: 'Nikskey',
            password: '123123123',
            firstName: 'Никита',
            secondName: 'Зинин',
            balance: 10000,
            avatar: 'https://i.ibb.co/Vg3Hfhv/Je6-XOGTTX9m-Z6u-Xf-Z7igg-Yr-QGN4-J0or-L3-MHCgg-HQm-q-FKAn-PB-h2-O-L3ys1l4na-OP4lxkdp.jpg',
            cover: 'https://i.ibb.co/rfDWz3Z/50.jpg',
            views: '125',
            subs: '851',
        },

        {
            id: 2,
            login: 'witnessq',
            password: 'forfriends',
            firstName: 'Никита',
            secondName: 'Горев',
            balance: 10000,
            avatar: 'https://i.ibb.co/T1kjzL6/Abz-Gx-Ua-Cb-NX9-J8v-gzm2x6-Ay8j-Nv-HCOr-Fze-KB9-LXix6-Ux-He-ALv-Sfnp4z5-LVlq-K5tzh-Gu3-QLDe-Llk7z-X.jpg',
            cover: 'https://i.ibb.co/kS6Rvmc/wallpaper-51094941.jpg',
            views: '51',
            subs: '716',
        },

        {
            id: 3,
            login: '2Garin',
            password: 'forfriends',
            firstName: 'Виктор',
            secondName: 'Гарин',
            balance: 10000,
            avatar: 'https://i.ibb.co/7pGLBbx/maxresdefault-7.jpg',
            cover: 'https://i.ibb.co/8rYRRtK/932570.jpg',
            views: '3',
            subs: '154',
        },

        {
            id: 4,
            login: 'daimor',
            password: 'forfriends',
            firstName: 'Дарья',
            secondName: 'Миронова',
            balance: 10000,
            avatar: 'https://i.ibb.co/DKWVQCp/pjxf-Vyl-B8-Lhe-K9-J5p-Wj-F6b-RCcm-C7z-H170-Xbki-K9b-Jnx072-M1wtlf3o-Aw-P0-GX-Fyf-U4-RISEu71-Vr-O80.jpg',
            cover: 'https://i.ibb.co/Yt6dCDG/1500x500.jpg',
            views: '93',
            subs: '523',
        },

        {
            id: 5,
            login: 'n3vrthem0re',
            password: 'forfriends',
            firstName: 'XXXXX',
            secondName: 'XXXXXXXX',
            balance: 10000,
            avatar: 'https://i.ibb.co/mtVK9G0/1136503.jpg',
            cover: 'https://i.ibb.co/gDhPJ1Q/ttb2f3-QJ65-XJv-OHD2-Pb-EBins2-Uhw-Ao-Aq-Sxwnf-BXNp-VAd-QEln-HAGMbu-Zbhl-Wx-V3di-Pz3-WX6-IQo2ki9u1-N.jpg',
            views: '24',
            subs: '142',
        },

        {
            id: 6,
            login: 'rafonh',
            password: 'forfriends',
            firstName: 'РАФАЭЛЬ',
            secondName: '"DROP TABLE *',
            balance: 10000,
            avatar: 'https://i.ibb.co/TtrKLCh/maxresdefault-8.jpg',
            cover: 'https://i.ibb.co/DtvFKVz/quote-Mr-Robot-fsociety-computer-1942361.jpg',
            views: '{NULL}',
            subs: '{NULL}',
        },

        {
            id: 7,
            login: 'montrose',
            password: 'forfriends',
            firstName: 'Евгений',
            secondName: 'Ершов',
            balance: 10000,
            avatar: 'https://i.ibb.co/02RYdr2/scale-1200-9.webp',
            cover: 'https://i.ibb.co/fX2Gm4L/PFx-l93l-O89r-QSue-Bo-Vdr-E7it-POOld-YZJue7ogvb-Pbbn0-Hm-Qwlcdcf-Bn-Glmh-Au7-GVWGHQZIMiyg-TKYRO9-AXl.jpg',
            views: '10,7',
            subs: '524',
        },

        {
            id: 8,
            login: 'gwynbla1d',
            password: 'forfriends',
            firstName: 'Рамиль',
            secondName: 'Бекбусинов',
            balance: 10000,
            avatar: 'https://i.ibb.co/cNH5dXk/scale-1200-8.webp',
            cover: 'https://i.ibb.co/W2NJjTT/katana-drawing-27.jpg',
            views: '69',
            subs: '8',
        },

        {
            id: 9,
            login: 'Stryker',
            password: 'forfriends',
            firstName: 'Давид',
            secondName: 'Попов',
            balance: 10000,
            avatar: 'https://i.ibb.co/RC5bw9Y/scale-1200-7.webp',
            cover: 'https://i.ibb.co/zNZ1qVQ/Everlasting-Summer-Background-114.jpg',
            views: '512',
            subs: '754',
        },

        {
            id: 10,
            login: 'fadedpixel',
            password: 'forfriends',
            firstName: 'Izabel',
            secondName: 'Shapiro',
            balance: 10000,
            avatar: 'https://i.ibb.co/FY2BBCT/9j0dcb-ADE51u-Lk-JLni-B0e7-E6l-ETWjvr5f9zpxj-OQPsu-CGOUye-Qq-JD5-LMy-PW9cwcckq-LX4-V-u.jpg',
            cover: 'https://i.ibb.co/BB5X2rx/Isabella-watches-Phineas-fall.webp',
            views: '69',
            subs: '228',
        },

        {
            id: 11,
            login: 'acidluv',
            password: 'forfriends',
            firstName: 'Анна',
            secondName: 'Гаркуша',
            balance: 10000,
            avatar: 'https://i.ibb.co/NCZz33F/0wm-Pkr-OSWw4v-VQJp-Fx-Cd-Hm-P0vl5w-Zorjb-W85-C6-Nd-L5c-RCa-ZHZiyl-S-R5-Fom-NMXVTTBm-Bxl-Fu-Xhv-D-n.jpg',
            cover: 'https://i.ibb.co/mvfWsqS/f75c11c9a31c4ede5cc20e5d6aadcfcd.png',
            views: '130',
            subs: '666',
        },
    ]

    getDeletedUsersFromLocal = () => {
        const deletedUsers = JSON.parse(localStorage.getItem("deletedUsers"))

        if (!!deletedUsers) {
            return deletedUsers
        } else {
            localStorage.setItem('deletedUsers', JSON.stringify([]))
            return []
        }
    }

    getUsersFromLocal = () => {
        const usersFromLocal = JSON.parse(localStorage.getItem("users"))
        if (!!usersFromLocal) {
            return usersFromLocal
        } else {
            localStorage.setItem('users', JSON.stringify(this.usersInit))
            return this.usersInit
        }
    }

    getLoggedUserFromLocal = () => {
        const loggedUser = JSON.parse(localStorage.getItem("logged"))
        if (!!loggedUser) {
            return loggedUser
        } else {
            return false
        }
    }


    getIntroCheckedFromLocal = () => {
        const introChecked = JSON.parse(localStorage.getItem("introChecked"))

        return !!introChecked
    }

    sendAndGetAvatarURL = (avatar) => {
        const formData = new FormData()
        formData.append('image', avatar)
        
        const urlForAPI = "https://api.imgbb.com/1/upload?key=12524e217ca0edc0281db3674b0af816"
        const settingsForImgBb = {
            method: "POST",
            body: formData
        };

        const response = fetch(urlForAPI, settingsForImgBb)
            .then(theResponse => theResponse.json())

        return response
    }

    sendAndGetCover = (cover) => {
        const formData = new FormData()
        formData.append('image', cover)
        
        const urlForAPI = "https://api.imgbb.com/1/upload?key=12524e217ca0edc0281db3674b0af816"
        const settingsForImgBb = {
            method: "POST",
            body: formData
        };

        const response = fetch(urlForAPI, settingsForImgBb)
            .then(theResponse => theResponse.json())

        return response
    }


    setIntroChecked = () => {
        this.introChecked = true
        localStorage.setItem('introChecked', JSON.stringify(this.introChecked))
    }


    sendNewCover = (cover) => {
        const newUserCover = cover ? cover : noCover

        this.usersFromLocal[this.loggedUser.id].cover = newUserCover
        this.loggedUser.cover = newUserCover

        localStorage.setItem('logged', JSON.stringify(this.loggedUser))
        localStorage.setItem('users', JSON.stringify(this.usersFromLocal))
    }


    sendNewUser = (data, avatar) => {
        const newUserAvatar = avatar ? avatar : noAvatar

        const newUserId = () => {
            if (!this.usersFromLocal.length) {
                return 0
            } else {
                const tempUsersFromLocal = this.usersFromLocal.reverse()
                return tempUsersFromLocal[0].id + 1
            }
        }

        const arrayWithNewUser = { 
            id: newUserId(), ...data, 
            balance: 10000, 
            avatar: newUserAvatar, 
            cover: noCover,
            views: Math.floor(Math.random() * 100), 
            subs: Math.floor(Math.random() * 10)}

        this.usersFromLocal.push(arrayWithNewUser)
        localStorage.setItem('users', JSON.stringify(this.usersFromLocal))
    }

    addBalance = () => {
        this.usersFromLocal[this.loggedUser.id].balance += 2000
        this.loggedUser.balance += 2000

        localStorage.setItem('logged', JSON.stringify(this.loggedUser))
        localStorage.setItem('users', JSON.stringify(this.usersFromLocal))
    }

    buyItem = (price, prevOwner) => {
        this.usersFromLocal[this.loggedUser.id].balance -= price
        this.loggedUser.balance -= price

        this.usersFromLocal[prevOwner].balance += price

        localStorage.setItem('logged', JSON.stringify(this.loggedUser))
        localStorage.setItem('users', JSON.stringify(this.usersFromLocal))
    }


    loginUser = (loginPassword) => {
        if (!!this.usersFromLocal.length) {
            const tempLoggedUser = this.usersFromLocal
                .find( user => (loginPassword.login === user.login || loginPassword.login === user.email)
                                    &&
                                loginPassword.password === user.password)
            
            if (!!tempLoggedUser) {
                this.loggedUser = tempLoggedUser
                localStorage.setItem('logged', JSON.stringify(this.loggedUser))
                return true
            } else {
                return false
            }

        } else {
            return false
        }

    }


    exitUser = () => {
        this.loggedUser = false
        localStorage.removeItem('logged')
    }
 

    deleteUser = () => {
        this.deletedUsers.push(this.loggedUser.id)
        localStorage.setItem('deletedUsers', JSON.stringify(this.deletedUsers))

        this.usersFromLocal[this.loggedUser.id] = {
            ...this.usersFromLocal[this.loggedUser.id],
            avatar: noAvatar,
            balance: 'DELETED',
            cover: noCover,
            firstName: "DELETED",
            login: "DELETED ID" + this.loggedUser.id,
            password: "DELETED",
            secondName: "DELETED",
            subs: "DELETED",
            views: "DELETED",
            email: "DELETED"
        }

        this.exitUser()

        localStorage.setItem('users', JSON.stringify(this.usersFromLocal))
    }

}

export default new DataStore()
