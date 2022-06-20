import React from "react";
import Dropzone from "react-dropzone";
import { inject, observer } from "mobx-react";

const ChangeCoverMenu = inject("UsersStore", "ButtonsStore")(
    observer( ({ cover, UsersStore, ButtonsStore }) => {
        const [newCover, setNewCover] = React.useState({theImage: cover, isNewCover: false})
    
        async function sendCover(image){
            setNewCover({theImage: await UsersStore.sendAndGetImage(image[0]).then( image => image.data.display_url ), isNewCover: true})
        }
    
        function changeCover(){
            ButtonsStore.setCoverMenu()
            UsersStore.sendNewCover(newCover.theImage)
        }

        return (
            <div className="wrapper cover-menu__wrapper flex flex flex-align-center flex-justify-center">
                <section className="flex flex-column flex-align-center cover-menu__change-cover-container">
                    <button
                        className="popup-container__exit-button primary-button"
                        onClick={ButtonsStore.setCoverMenu}
                    >Х</button> 
    
                    <div className="flex flex-column flex-align-center flex-justify-center cover-menu__newcover-and-drop">
                        <div
                            className="cover-menu__image"
                            style={{backgroundImage: "url("+ (newCover.isNewCover ? newCover.theImage : cover) +")"}}
                        />
                        <Dropzone 
                            onDrop={sendCover}
                            id
                            accept={{
                                'image/jpeg': [],
                                'image/png': []
                            }}
                            maxFiles={1}
                            maxSize={5242880}
                            >
                            {({getRootProps, getInputProps}) => (
                                <div
                                    className={"flex flex-align-center registration-page__dropzone-section" + (newCover.isNewCover ? ' registration-page__dropzone-section__done' : '' )}
                                    {...getRootProps()}
                                >
                                    <input {...getInputProps()} />
                                    <p 
                                        className="registration-page__dropzone-text"
                                    >
                                        {newCover.isNewCover ? 'Фон загружен' : "Загрузить фон"}
                                    </p>
                                  </div>
                            )}
                        </Dropzone>
                    </div>
                    <button
                        className="primary-button cover-menu__change-cover"
                        onClick={changeCover}
                    >
                        Принять новый фон
                    </button>
                </section>
            </div>
        )
    })
)

export default ChangeCoverMenu