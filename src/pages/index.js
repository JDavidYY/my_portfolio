import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"



const IndexPage = () => (
  <div className="waveWrapper waveAnimation">
  <div className="waveWrapperInner bgTop"> 
    <div className="wave waveTop" style={{backgroundImage: `url(`+'http://front-end-noobs.com/jecko/img/wave-top.png'+`)`}}>
    </div>
    <h1 className="font-sans font-medium text-white text-center" >Hello. I 'm <span className="font-bold"> David Yon</span></h1>
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
