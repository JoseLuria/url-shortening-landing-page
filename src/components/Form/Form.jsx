import React from 'react';
import "./Form.style.scss"
import CustomButton from '../CustomButton/CustomButton';

const Form = ({handleSetUrl, urlText, handleGetUrl, error}) => {
  return (
    <form
      onSubmit={(e) => handleGetUrl(e)}
      className="form"
    >
      <input 
        className={`form-text ${error && "input-error"}`}
        type="text" 
        placeholder="Shorten a link here..."
        onChange={({target}) => handleSetUrl(target)}
        value={urlText}
      />
      <p className={`error-message`}>{error}</p> 

      <CustomButton type="submit" size="lg">
        Shorten It!
      </CustomButton>
    </form>
  )
};

export default Form;
