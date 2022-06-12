import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';

import DataStore from './store/DataStore';
import ShopStore from './store/ShopStore';

import IntroPage from './components/IntroPage';
import StartPage from './components/StartPage';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';

import ShopPage from './components/ShopPage';
import UsersPage from './components/UsersPage';

import CollectionPage from './components/CollectionPage';
import UserPage from './components/UserPage';

import NotFoundPage from './components/NotFoundPage';

import MainHeader from './components/MainHeader';
import Footer from './components/Footer'
import PopUp from "./components/PopUp"

import etherImage from "./img/ether.svg"

function App() {
  const navigate = useNavigate()

  const PopUpControl = {
    noMoney() {
        DataStore.setShowPopup(true, (<h1>На балансе не хватает средств</h1>))
        setTimeout(() => {
            DataStore.setShowPopup(false, '')
        }, "2000");
    },

    buyLock() {
        DataStore.setShowPopup(true, (<h1>Войдите в аккаунт</h1>))
        setTimeout(() => {
            DataStore.setShowPopup(false, '')
        }, "2000");
    },

    closePopup() {
        DataStore.setShowPopup(false, '')
    },

    showHistory(event) {
        const collectionId = event.target.dataset.collectionId
        const itemId = event.target.dataset.itemId

        DataStore.setShowPopup(true,
        (<div className="history-popup">
            <div className="history-popup__head-container">
                <h2 className="history-popup__headline">История продаж</h2>
                                    
                <h3 className="history-popup__item-name">"{ShopStore.shopAssortment[collectionId].content[itemId].name}"</h3>
            </div>
            {ShopStore.shopAssortment[collectionId].content[itemId].ownerHistory.map( (record, recordId) => {
              return (
                <section
                    key={"history" + collectionId + itemId + recordId}
                    className='flex flex-align-center flex-justify-center nft-container__info-container history-popup__record-container'
                >
                    <div className='flex flex-column nft-container__line'>
                        <span className='nft-container__headline'>
                            Покупатель
                        </span>
                        <a
                            className='nft-container__name'
                            href={"/users/1337" + record.id}
                        >
                            {"@" + DataStore.usersFromLocal[record.id].login}
                        </a>
                    </div>
                    <div className='flex flex-column nft-container__line nft-container__line__right'>
                        <span className='nft-container__price nft-container__headline'>
                            Цена
                        </span>
                        <div className="flex flex-align-center nft-container__price-container">
                            <img 
                                src={etherImage}
                                alt="Etherium"
                            />
                            <span className='nft-container__name'>
                                {record.price}
                            </span>
                        </div>
                    </div>
                </section>)
              })
            }
        </div>))
    }
  }

  const NavigationControl = {
    goBack() {
      navigate(-1)
    },

    goStart() {
      navigate('/')
    },

    goWelcome(){
      navigate('/welcome')
    },

    goMyPage(){
      navigate(DataStore.loggedUser ? '/myprofile' : '/welcome')
    },

    goSignin() {
      navigate('/signin')
    },

    goLogin() {
      navigate('/login')
    },

    goToCollection(collectionName) {
      navigate(`collection/${collectionName}`)
    }
  }
  

  return (
    <>
      <MainHeader NavigationControl={NavigationControl}/>
      <main className="wrapper">
        {DataStore.isPopupOpened.status && <PopUp PopUpControl={PopUpControl}/>}
        <Routes>
          <Route path='/' element={ 
            DataStore.introChecked ? 
              DataStore.loggedUser ? 
                <Navigate to="shop" /> 
                : 
                <Navigate to="welcome" />
              :
              <IntroPage NavigationControl={NavigationControl}/>
          }/>
          
          <Route path='welcome' element={
              DataStore.loggedUser ? 
                <Navigate to="myprofile" />
              : 
                <StartPage NavigationControl={NavigationControl}/>
          }/>
  
          <Route 
            path='signin' 
            element={
              DataStore.loggedUser ? 
              <Navigate to="myprofile" /> 
              : 
              <RegistrationPage NavigationControl={NavigationControl}/>}
          />
  
          <Route
            path='login' 
            element={
              DataStore.loggedUser ? 
              <Navigate to="myprofile" /> 
              : 
              <LoginPage NavigationControl={NavigationControl}/>
            }
          />
            
          <Route 
            path='myprofile' 
            element={
              DataStore.loggedUser ?
              <UserPage user={DataStore.loggedUser} isLogged={true} PopUpControl={PopUpControl} NavigationControl={NavigationControl}/>
              :
              <Navigate to="/welcome" />
            }/>

          <Route path='shop' element={<ShopPage NavigationControl={NavigationControl}/>}/>

          <Route path='users'>
            <Route path='global' element={<UsersPage NavigationControl={NavigationControl} PopUpControl={PopUpControl}/>}/>
            {
              DataStore.usersFromLocal.map( user => {
                if (!DataStore.deletedUsers.includes(user.id)) {
                  return (
                    <Route key={'user' + user.id} path={'/users/1337' + user.id} element={
                      user.id === DataStore.loggedUser.id ? 
                      <Navigate to="/myprofile" />
                      :
                      <UserPage user={user} isLogged={false} PopUpControl={PopUpControl}/> }/>
                  )
                } else {
                  return <></>
                }
              } )
            }
          </Route>

          <Route path='collection'>
            {
              ShopStore.shopAssortment.map( (collection, index) => {
                return (
                  <Route key={'collection' + index} path={collection.collectionLink} element={<CollectionPage collectionIndex={index}  PopUpControl={PopUpControl}/>}/>
                )
              })
            }
          </Route>

          <Route path='*' element={<NotFoundPage NavigationControl={NavigationControl}/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default observer(App);
