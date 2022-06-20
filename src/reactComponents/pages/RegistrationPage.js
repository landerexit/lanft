import React from "react";
import { Formik } from "formik";
import Dropzone from "react-dropzone";
import { inject, observer } from "mobx-react";

import InputField from "../components/InputField";

import noAvatar from '../../img/noavatar.svg'

const RegistrationPage = inject("UsersStore", "ValidationVars")(
    observer(({ NavigationControl, UsersStore, ValidationVars }) => {
        const [avatarNewUser, setAvatarNewUser] = React.useState(false)
    
        function sendData(something) {
            UsersStore.sendNewUser(something, avatarNewUser)
            NavigationControl.goStart()
        }
    
        async function sendAvatar(image){
            setAvatarNewUser(await UsersStore.sendAndGetImage(image[0]).then( image => image.data.display_url))
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
                        initialValues={ValidationVars.regDataSample}
                        validateOnBlur
                        onSubmit={sendData}
                        validationSchema={ValidationVars.regSchema}
                    >
                    {({values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    
                    <section className="fields-container">
                        
                        {
                            ValidationVars.fieldsRegSample.map( (field, index) => 
                                <InputField 
                                    key={'input' + field.name + index}
                                    field={field} touched={touched} 
                                    errors={errors} handleChange={handleChange}
                                    handleBlur={handleBlur} values={values}
                                />)
                        }

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
    })
) 

export default RegistrationPage