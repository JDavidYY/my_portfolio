import React from "react"
import { Link } from "gatsby"




const IndexPage = () => (
  <div className="waveWrapper waveAnimation">
    
  <div className="waveWrapperInner bgTop flex flex-col h-full items-center justify-center text-white px-4"> 
  
    <div className="wave waveTop items-center" style={{backgroundImage: `url(`+'http://front-end-noobs.com/jecko/img/wave-top.png'+`)`}}>
   
    </div>
    <h1 className="text-white text-center font-sans font-medium text-5xl mb-2 items-center justify-center">
      ¡Hello! I'm <span className="font-bold">David Yon</span>
    </h1>
    <p className="text-white text-center font-sans font-light text-xl mb-4">
      I'm a Software Engeneer based in Perú, passionate for code.
    </p>
  </div>
  
  <div className="waveWrapperInner bgMiddle">
    <div className="wave waveMiddle" style={{backgroundImage: `url(`+'http://front-end-noobs.com/jecko/img/wave-mid.png'+`)`}}></div>
  </div>
  <div className="waveWrapperInner bgBottom">
    <div className="wave waveBottom" style={{backgroundImage:  `url(`+'http://front-end-noobs.com/jecko/img/wave-bot.png'+`)`}}></div>
  </div>
</div>
);

export default IndexPage;
