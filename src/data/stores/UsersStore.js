import { action, makeObservable, observable } from 'mobx';

import noAvatar from '../../img/noavatar.svg'
import noCover from '../../img/no-cover.jpg'

export class UsersStore {
    constructor(stores) {
        makeObservable(this, {
            usersFromLocal: observable.deep,
            loggedUser: observable.deep,

            getDeletedUsers: action.bound,
            getDataFromLocal: action.bound,
            getUsersFromLocal: action.bound,
            getLoggedUserFromLocal: action.bound,

            sendAndGetImage: action.bound,
            sendNewCover: action.bound,
            sendNewUser: action.bound,

            addBalance: action.bound,
            buyItem: action.bound,

            loginUser: action.bound,
            exitUser: action.bound,
            deleteUser: action.bound,
        })
        
        this.usersInit = stores.InitialVars.usersInit

        this.getDataFromLocal()
    }

    loggedUser = {}

    usersFromLocal = []

    getDataFromLocal () {
        this.usersFromLocal = this.getUsersFromLocal()
        this.loggedUser = this.getLoggedUserFromLocal()
    }

    deleteLocalData () {
        localStorage.removeItem("deletedUsers")
        localStorage.removeItem("users")
        localStorage.removeItem("logged")
    }

    getUsersFromLocal () {
        const usersFromLocal = JSON.parse(localStorage.getItem("users"))
        if (!!usersFromLocal) {
            return usersFromLocal
        } else {
            const generatedUsers = this.generateUsersData()
            localStorage.setItem('users', JSON.stringify(generatedUsers))
            return generatedUsers
        }
    }

    generateUsersData () {
        return this.usersInit.map( ( user, index ) => {
            return {
                id: index,
                ...user,
                isDeleted: false,
                balance: Math.floor(Math.random() * 10000),
                password: "forfriends",
                views: Math.floor(Math.random() * 300),
                subs: Math.floor(Math.random() * 999),
            }
        })
    }

    getLoggedUserFromLocal () {
        const loggedUser = JSON.parse(localStorage.getItem("logged"))
        if (!!loggedUser) {
            return loggedUser
        } else {
            return false
        }
    }

    getDeletedUsers () {
        return this.usersFromLocal.map((user, index) => user.isDeleted && index)
    }

    sendAndGetImage (image) {
        const formData = new FormData()
        formData.append('image', image)
        
        const urlForAPI = "https://api.imgbb.com/1/upload?key=12524e217ca0edc0281db3674b0af816"
        const settingsForImgBb = {
            method: "POST",
            body: formData
        };

        const response = fetch(urlForAPI, settingsForImgBb)
            .then(theResponse => theResponse.json())

        return response
    }

    sendNewCover (cover) {
        const newUserCover = cover ? cover : noCover

        this.usersFromLocal[this.loggedUser.id].cover = newUserCover
        this.loggedUser.cover = newUserCover

        localStorage.setItem('logged', JSON.stringify(this.loggedUser))
        localStorage.setItem('users', JSON.stringify(this.usersFromLocal))
    }

    sendNewUser (data, avatar) {
        const newUserAvatar = avatar ? avatar : noAvatar

        const newUserId = () => {
            if (!this.usersFromLocal.length) {
                return 0
            } else {
                const tempUsersFromLocal = this.usersFromLocal.slice().reverse()
                return tempUsersFromLocal[0].id + 1
            }
        }

        const arrayWithNewUser = { 
            id: newUserId(), 
            ...data, 
            balance: 10000, 
            avatar: newUserAvatar, 
            cover: noCover,
            isDeleted: false,
            views: Math.floor(Math.random() * 100), 
            subs: Math.floor(Math.random() * 10)
        }

        this.usersFromLocal.push(arrayWithNewUser)
        localStorage.setItem('users', JSON.stringify(this.usersFromLocal))
    }

    addBalance () {
        this.usersFromLocal[this.loggedUser.id].balance += 2000
        this.loggedUser.balance += 2000

        localStorage.setItem('logged', JSON.stringify(this.loggedUser))
        localStorage.setItem('users', JSON.stringify(this.usersFromLocal))
    }

    buyItem (price, prevOwner) {
        this.usersFromLocal[this.loggedUser.id].balance -= price
        this.loggedUser.balance -= price

        this.usersFromLocal[prevOwner].balance += price

        localStorage.setItem('logged', JSON.stringify(this.loggedUser))
        localStorage.setItem('users', JSON.stringify(this.usersFromLocal))
    }


    loginUser (loginPassword) {
        if (!!this.usersFromLocal.length) {
            const tempLoggedUser = this.usersFromLocal
                .find( user => (((loginPassword.login === user.login || loginPassword.login === user.email) && !user.isDeleted))
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

    exitUser () {
        this.loggedUser = false
        localStorage.removeItem('logged')
    }
 

    deleteUser () {
        this.usersFromLocal[this.loggedUser.id] = {
            ...this.usersFromLocal[this.loggedUser.id],
            avatar: noAvatar,
            balance: 'DELETED',
            isDeleted: true,
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