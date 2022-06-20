import React from "react";
import { inject, observer } from "mobx-react";
import { Formik } from "formik";

import img1 from "../../img/LoginPage/image1.png"
import InputField from "../components/InputField";

const LoginPage = inject("UsersStore", "ValidationVars")(
    observer(({NavigationControl, UsersStore, ValidationVars}) => {
        const [loginError, setLoginError] = React.useState(false)

        function logIn(loginPassword) {
            const response = UsersStore.loginUser(loginPassword)
    
            if (response) {
                NavigationControl.goStart()
                setLoginError(false)
            } else {
                setLoginError(true)
            }
        }
        
        return (
            <div className="flex flex-align-center flex-justify-center wrapper">
                <div className="tile flex flex-column flex-align-center flex-align-center-self login-page">
                        <h2 className="login-page__headline">Вход</h2>
                        <img className="login-page__img" src={img1} alt='кошелек'/>
                        <span 
                                className={`field-container__error-sign${loginError ? '' : '__hidden'}`}
                            >
                                Пользователя не существует
                        </span>
                        <Formik
                            initialValues={ValidationVars.loginDataSample}
                            validateOnBlur
                            onSubmit={logIn}
                            validationSchema={ValidationVars.loginSchema}
                        >
                        {({values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                            <div className="fields-container login-page__fields-container">
                                    {
                                        ValidationVars.fieldsLoginSample.map( (field, index) => <InputField 
                                        field={field} index={index} 
                                        errors={errors} touched={touched} 
                                        handleBlur={handleBlur} values={values}
                                        handleChange={handleChange} />)
                                    }
                                <button
                                    className="primary-button"
                                    onClick={handleSubmit}
                                    type="submit"
                                >
                                    Отправить
                                </button>          
                            </div>
                        )}
                    </Formik>
                </div>
            </div>
        )
    })
)

export default LoginPage