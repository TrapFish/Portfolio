import React from 'react';
import './Home.css';
import Button from "../../module/button";
import Image from  '../../module/image';
import HomeImage from '../../asset/profileOne.png';

function Home() {
    return (
        <>
            <div>
                <div className={`home-left-panel`}>
                    <h2 className='header-adjustment'>MERN Stack Developer</h2>
                    <p className='para'>
                        Building modern web applications with MongoDB, Express.js, React.js, and Node.js
                    </p>
                    <div className='button-alignment'>
                        <Button text="Hire Me" btnClassProp="hire-button" />
                        <Button text="View Work" btnClassProp="view-work-button" />
                    </div>
                </div>
                <div className={`home-right-panel`}>
                       <Image logo={HomeImage} altLogo="profileHomealt"/>
                </div>
            </div>
        </>
    );
}

export default Home;