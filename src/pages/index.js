import React from "react"
import { Link } from "gatsby"




const IndexPage = () => (
  <div className="waveWrapper waveAnimation">
    
  <div className="waveWrapperInner bgTop"> 
  <h1 className="font-sans font-light text-center font-medium items-center justify-center align-middle flex h-full items-center justify-center text-white px-4 flex text-5xl mb-2r" >Hello. I'm <span Name="font-bold">David Yon</span></h1>
    <div className="wave waveTop" style={{backgroundImage: `url(`+'http://front-end-noobs.com/jecko/img/wave-top.png'+`)`}}>
   
    </div>
    
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
