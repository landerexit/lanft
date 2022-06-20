import React from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { AnimatePresence } from 'framer-motion';

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

import PLA from './reactComponents/components/PLA';

const App = inject( "ShopStore", "UsersStore",  "ButtonsStore" )(
  observer(({ ShopStore, UsersStore,  ButtonsStore }) => {
      const location = useLocation()
      const navigate = useNavigate()
      
      const NavigationControl = {
        goBack() {
          navigate(-1)
        },
    
        goStart() {
          navigate('/')
        },
      }

      React.useLayoutEffect(() => {
        window.scrollTo(0, 0)
      }, [location.pathname])
    
      return (
        <>
          <MainHeader NavigationControl={NavigationControl}/>

          <DropMenu NavigationControl={NavigationControl}/>

          <main className="wrapper">
            
            <PopUp />

            <AnimatePresence>
              <Routes location={location} key={location.pathname}>

                <Route path='/' element=
                  { 
                    ButtonsStore.isIntroChecked ? 
                      UsersStore.loggedUser ? <Navigate to="shop" /> : <Navigate to="welcome" />
                    :
                      <PLA><IntroPage NavigationControl={NavigationControl}/></PLA>
                  }
                />

                <Route path='welcome' element={
                    UsersStore.loggedUser ? 
                      <Navigate to="myprofile" />
                    : 
                      <PLA><StartPage /></PLA>
                }/>

                <Route path='registration' element=
                  {
                    UsersStore.loggedUser ? 
                      <Navigate to="myprofile" /> 
                    : 
                    <PLA><RegistrationPage NavigationControl={NavigationControl}/></PLA>
                  }
                />

                <Route path='login' element=
                  {
                    UsersStore.loggedUser ? 
                      <Navigate to="myprofile" /> 
                    : 
                      <PLA><LoginPage NavigationControl={NavigationControl}/></PLA>
                  }
                />

                <Route path='myprofile' element=
                  {
                    UsersStore.loggedUser ?
                      <ProfilePage userId={UsersStore.loggedUser.id} isLogged={true} />
                    :
                    <PLA><Navigate to="/welcome" /></PLA>
                  }
                />

                <Route path='shop' element={<AssortmentPage />}/>
                
                <Route path='users'>
                  <Route path='global' element={<PLA><AllUsersPage /></PLA>}/>
                  {
                    UsersStore.usersFromLocal.map( user => {
                      if (!UsersStore.getDeletedUsers().includes(user.id)) {
                        return (
                          <Route key={'user' + user.id} path={'/users/1337' + user.id} element={
                            user.id === UsersStore.loggedUser.id ? 
                            <Navigate to="/myprofile" />
                            :
                            <PLA><ProfilePage userId={user.id} isLogged={false}/></PLA> }/>
                        )
                      }
                    })
                  }
                </Route>
                
                <Route path='collection'>
                  {
                    ShopStore.shopAssortment.map( (collection, index) => {
                      return (
                        <Route key={'collection' + index} path={collection.collectionLink} element={<PLA><CollectionPage collectionIndex={index}/></PLA>}/>
                      )
                    })
                  }
                </Route>
                
                <Route path='*' element={<PLA><NotFoundPage NavigationControl={NavigationControl}/></PLA>}/>
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </>
      );
  })
)

export default App