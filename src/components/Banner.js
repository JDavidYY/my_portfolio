import React from 'react';

const Banner = ({ children }) =>{
    return (
        <div className="waveWrapper waveAnimation">
            <div className="waveWrapperInner bgTop flex flex-col h-full items-center justify-center text-white px-4"> 
                <div className="wave waveTop items-center background_top" />
                {children}
            </div>
            <div className="waveWrapperInner bgMiddle">
                <div className="wave waveMiddle background_mid" />
            </div>
            <div className="waveWrapperInner bgBottom ">
                <div className="wave waveBottom background_bot" />
            </div>
        </div>
    );
};
export default Banner;