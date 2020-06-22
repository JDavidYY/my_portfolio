import React from "react";
import { Link } from "gatsby";
import Banner from "../components/Banner";




const IndexPage = () => (
  <Banner>
    <div className="  opacidad items-center justify-center ">
    <h1 className="text-white text-center font-sans font-medium text-5xl mb-2 items-center justify-center">
      ¡Hello! I'm <span className="font-bold">David Yon</span>
    </h1>
    <p className="text-white text-center font-sans font-light text-xl mb-4">
      I'm a student of Software Engeneer based in Perú, passionate for code.
    </p>
    </div>
    <Link
    to="/projects" 
    className="bg-transparent text-white font-medium font-sans py-2 px-4 border border-white rounded opacidad mt-24">
    See my work
    </Link>
  
  </Banner>
  
  );

export default IndexPage;
