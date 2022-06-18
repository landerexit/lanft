import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import IntroPage from './reactComponents/pages/IntroPage';
import StartPage from './reactComponents/pages/StartPage';
import RegistrationPage from './reactComponents/pages/RegistrationPage';
import LoginPage from './reactComponents/pages/LoginPage';

import AssortmentPage from './reactComponents/pages/AssortmentPage';
import AllUsersPage from './reactComponents/pages/AllUsersPage';

import CollectionPage from './reactComponents/pages/CollectionPage';
import ProfilePage from './reactComponents/pages/ProfilePage';

import NotFoundPage from './reactComponents/pages/NotFoundPage';

import MainHeader from './reactComponents/components/MainHeader';
import DropMenu from './reactComponents/components/DropMenu'
import Footer from './reactComponents/components/Footer'
import PopUp from "./reactComponents/components/PopUp"

const App = inject( "ShopStore", "UsersStore",  "ButtonsStore" )(
  observer(({ShopStore, UsersStore,  ButtonsStore }) => {
      const navigate = useNavigate()
      
      const NavigationControl = {
        goBack() {
          navigate(-1)
        },
    
        goStart() {
          navigate('/')
        },
      }
    
      return (
        <>
          <MainHeader NavigationControl={NavigationControl}/>

          {
            ButtonsStore.isDropMenuOpened &&
            <DropMenu NavigationControl={NavigationControl}/>
          }

          <main className="wrapper">
            {
              ButtonsStore.isPopupOpened.status && 
              <PopUp />
            }

            <Routes>

              <Route path='/' element=
                { 
                  ButtonsStore.isIntroChecked ? 
                    UsersStore.loggedUser ? <Navigate to="shop" /> : <Navigate to="welcome" />
                  :
                    <IntroPage NavigationControl={NavigationControl}/>
                }
              />
              
              <Route path='welcome' element={
                  UsersStore.loggedUser ? 
                    <Navigate to="myprofile" />
                  : 
                    <StartPage />
              }/>
      
              <Route path='registration' element=
                {
                  UsersStore.loggedUser ? 
                    <Navigate to="myprofile" /> 
                  : 
                    <RegistrationPage NavigationControl={NavigationControl}/>
                }
              />
      
              <Route path='login' element=
                {
                  UsersStore.loggedUser ? 
                    <Navigate to="myprofile" /> 
                  : 
                    <LoginPage NavigationControl={NavigationControl}/>
                }
              />
                
              <Route path='myprofile' element=
                {
                  UsersStore.loggedUser ?
                    <ProfilePage userId={UsersStore.loggedUser.id} isLogged={true} />
                  :
                    <Navigate to="/welcome" />
                }
              />
    
              <Route path='shop' element={<AssortmentPage />}/>
    
              <Route path='users'>
                <Route path='global' element={<AllUsersPage />}/>
                {
                  UsersStore.usersFromLocal.map( user => {
                    if (!UsersStore.getDeletedUsers().includes(user.id)) {
                      return (
                        <Route key={'user' + user.id} path={'/users/1337' + user.id} element={
                          user.id === UsersStore.loggedUser.id ? 
                          <Navigate to="/myprofile" />
                          :
                          <ProfilePage userId={user.id} isLogged={false}/> }/>
                      )
                    }
                  })
                }
              </Route>
    
              <Route path='collection'>
                {
                  ShopStore.shopAssortment.map( (collection, index) => {
                    return (
                      <Route key={'collection' + index} path={collection.collectionLink} element={<CollectionPage collectionIndex={index}/>}/>
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
  })
)
  

export default App
