import React from 'react';
import About from "../components/About";

const projectsPage = () => {
    return (
        <div className="container mx-auto px-4">
            
            <About/>
            <div className="container items-center justify-center clear-right">
                <h1 className="text-5xl mb-10 text-purple-800 border-black text-center"> Projects </h1>
            </div>
            <div className="items-center"style={{height:"100vh",verticalAlign:"middle",alignItems:"center",display:"block", position:"relative"}}>
                <img className="center" src="https://via.placeholder.com/500x300" alt="project" />
                <br/>
                <h2 className=" text-center text-3xl font-medium" style={{marginTop:"20px", marginBottom:"20px"}}> Project X </h2>
                <br/>    
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis nulla nunc,
                        vel finibus mauris consectetur quis. Suspendisse
                        eget justo vitae orci fringilla condimentum luctus mattis erat.
                </p>
            </div>
            <div className="items-center"style={{height:"100vh",verticalAlign:"middle",alignItems:"center",display:"block", position:"relative"}}>
                <img className="center" src="https://via.placeholder.com/500x300" alt="project"/>
                <br/>
                <h2 className=" text-center text-3xl font-medium" style={{marginTop:"20px", marginBottom:"20px"}}> Project X </h2>
                <br/>    
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis nulla nunc,
                        vel finibus mauris consectetur quis. Suspendisse
                        eget justo vitae orci fringilla condimentum luctus mattis erat.
                </p>
            </div>
            <div className="items-center"style={{height:"100vh",verticalAlign:"middle",alignItems:"center",display:"block", position:"relative"}}>
                <img className="center" src="https://via.placeholder.com/500x300" alt="project" />
                <br/>
                <h2 className=" text-center text-3xl font-medium" style={{marginTop:"20px", marginBottom:"20px"}}> Project X </h2>
                <br/>    
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis nulla nunc,
                        vel finibus mauris consectetur quis. Suspendisse
                        eget justo vitae orci fringilla condimentum luctus mattis erat.
                </p>
            </div>
            <div className="items-center"style={{height:"100vh",verticalAlign:"middle",alignItems:"center",display:"block", position:"relative"}}>
                <img className="center" src="https://via.placeholder.com/500x300" alt="project" />
                <br/>
                <h2 className=" text-center text-3xl font-medium" style={{marginTop:"20px", marginBottom:"20px"}}> Project X </h2>
                <br/>    
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis nulla nunc,
                        vel finibus mauris consectetur quis. Suspendisse
                        eget justo vitae orci fringilla condimentum luctus mattis erat.
                </p>
            </div>
            
        </div>
    );
};
export default projectsPage;