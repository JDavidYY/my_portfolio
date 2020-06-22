import React from 'react';

const projectsPage = () => {
    return (
        <div className="container mx-auto px-4">
            <nav className="items-center">
                <ul class="flex navpos">
                    <li class="mr-4">
                        <a class="text-purple-500 border-black hover:text-orange-500 navpos" href="/">About</a>
                    </li>
                    <li class="mr-4">
                        <a class="text-purple-500 hover:text-orange-500 navpos" href="#">Projects</a>
                    </li>
                </ul>
            </nav>
            <div className="container items-center justify-center clear-right">
                <h1 className="text-5xl mb-10 text-purple-800 border-black text-center"> Projects </h1>
            </div>
            <div className="items-center">
                <img className="center" src="https://via.placeholder.com/500x300" alt="project" />
                <h2 className=" text-center text-3xl font-medium"> Project X </h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis nulla nunc,
                        vel finibus mauris consectetur quis. Suspendisse
                        eget justo vitae orci fringilla condimentum luctus mattis erat.
                </p>
                
            </div>
        </div>
    );
};
export default projectsPage;