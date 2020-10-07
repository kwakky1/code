import React from 'react';

const Button = ({Text, FontColor, OnClick}) =>  {
    return (
      <>
          <button onClick={OnClick} style={{background: FontColor}} >{Text}</button>
      </>
    )
}

export default Button;
