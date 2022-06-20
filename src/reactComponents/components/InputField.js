import React from "react";
import { inject, observer } from "mobx-react";

const InputField = inject()(
    observer( ({field, errors, touched, handleBlur, handleChange, values}) => {
        return (
            <div className="field-container">
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
        )
    })
) 

export default InputField