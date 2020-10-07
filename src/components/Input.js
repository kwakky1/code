import React from 'react';

const Input = ({Name,Placeholder,Value,OnChange}) => {
    return (
        <>
            <input name={Name} placeholder={Placeholder} value={Value} onChange={OnChange}/>
        </>
    );
};

export default Input;