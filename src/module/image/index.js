import React from "react";
import './index.css';

export default function Image({logo, altLogo}){
    return (
        <>
          <img src={logo} alt={altLogo} />
        </>
    )
}