import React from "react";
import { Formik } from "formik";
import Dropzone from "react-dropzone";
import { observer } from "mobx-react";

import DataStore from "../store/DataStore";
import ValidationSamples from "../store/ValidationVars";

import noAvatar from '../img/noavatar.svg'

function RegistrationPage(props) {
    const [avatarNewUser, setAvatarNewUser] = React.useState(false)

    function sendData(something) {
        DataStore.sendNewUser(something, avatarNewUser)
        props.NavigationControl.goStart()
    }

    async function sendAvatar(image){
        setAvatarNewUser(await DataStore.sendAndGetAvatarURL(image[0]).then( image => image.data.display_url))
    }
    
    return (
        <div className='flex flex-align-center flex-justify-center wrapper'>
            <div className="registration-page">
                <section className="flex flex-justify-center flex-align-center registration-page__avatar-input-box">
                    <div className="avatar-container__avatar-cut registration-page__avatar-cut">
                        <img
                            src={avatarNewUser ? avatarNewUser : noAvatar}
                            alt="аватар"
                            className="avatar-container__avatar-img registration-page__avatar-img"
                        />
                    </div>
                    <Dropzone 
                        onDrop={sendAvatar}
                        accept={{
                            'image/jpeg': [],
                            'image/png': []
                        }}
                        maxFiles={1}
                        maxSize={5242880}
                        >
                        {({getRootProps, getInputProps}) => (
                            <div
                                className={"flex flex-align-center registration-page__dropzone-section" + (avatarNewUser ? ' registration-page__dropzone-section__done' : '' )}
                                {...getRootProps()}
                            >
                                <input {...getInputProps()} />
                                <p 
                                    className="registration-page__dropzone-text"
                                >
                                    {avatarNewUser ? 'Фото загружено' : "Загрузить фото"}
                                </p>
                              </div>
                        )}
                    </Dropzone>
                </section>
                        
                <Formik
                    initialValues={ValidationSamples.regDataSample}
                    validateOnBlur
                    onSubmit={sendData}
                    validationSchema={ValidationSamples.regSchema}
                >
                {({values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                
                <section className="fields-container">
                    {ValidationSamples.fieldsRegSample.map( (field, index) => {
                        return (
                            <section className="field-container" key={'signinInput' + index}>
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

                            </section>
                        )})}
                        <button
                            className="primary-button fields-container__submit"
                            onClick={handleSubmit}
                            type="submit"
                        >
                            Отправить
                        </button>
                </section>)}
                                
                </Formik>
            </div>
        </div>
    )
}

export default observer(RegistrationPage)