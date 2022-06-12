import React from "react";
import { Formik } from "formik";

import DataStore from "../store/DataStore";
import ValidationSamples from "../store/ValidationVars";

import img1 from "../img/LoginPage/image1.png"

function LoginPage(props) {
    const [loginError, setLoginError] = React.useState(false)
    function logIn(loginPassword) {
        const response = DataStore.loginUser(loginPassword)

        if (response) {
            props.NavigationControl.goStart()
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
                        initialValues={ValidationSamples.loginDataSample}
                        validateOnBlur
                        onSubmit={logIn}
                        validationSchema={ValidationSamples.loginSchema}
                    >
                    {({values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <>
                        <div className="fields-container login-page__fields-container">
                            {ValidationSamples.fieldsLoginSample.map( (field, index) => {
                                    return (
                                        <div className="field-container" key={'loginInput' + index}>
                                            <span className="field-container__field-legend">
                                                {field.nameForLegend}
                                            </span>
                                    
                                            {touched[field.name] && errors[field.name] && 
                                                <p className='field-container__error-sign'> 
                                                    {" - " + errors[field.name]}
                                                </p>}
                                            
                                            <input 
                                                className="field-container__field-input"
                                            
                                                type={field.type}
                                                name={field.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values[field.name]}
                                            ></input>
                                        </div>
                            )})}
                                          
                        </div>
                        <button
                            className="primary-button"
                            onClick={handleSubmit}
                            type="submit"
                        >
                            Отправить
                        </button>  
                    </>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default LoginPage