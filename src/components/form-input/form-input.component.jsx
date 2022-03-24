import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherProps}) =>(
  <div class="group">
         <input className="form-input" onChange={handleChange}{...otherProps}/>
         {label ? (
          <label className={`${
            otherProps.value.length ? 'Shrink' : ''
        } form-input-label`}>
        {label}
        </label>)
      :null}
  </div>
  
);

export default FormInput;