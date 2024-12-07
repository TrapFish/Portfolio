import React from 'react';
import './index.css';

export default function Button({text, btnClassProp}){
    return(
        <>
          <button className={btnClassProp}>{text}</button>
        </>
    )
}