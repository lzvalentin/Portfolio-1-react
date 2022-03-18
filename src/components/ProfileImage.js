import React from 'react';
import ProfileImage from '../assets/images/self.jpg'
import "../App.css"

function Bio() {
    return (
        <React.Fragment>
            <img className="center" src={ProfileImage} alt="self" height="350px" width="350px"/>
            <div className="text-center  d-flex">
            <div className="container my-auto">
                <div className="row">
                    <div className="about-me col-lg-10 mx-auto">
                        <h1 id="aboutme">About me</h1>
                        <hr />
                        <p className="p1 text-faded mb-5">Why hello there! My name is Lorena Zuniga. I am a full stack developer. Coding brings me back to when I use to change backgrounds with codes on Myspace. I am continuing to learn and practice everyday. With coding you never stop learning </p>
                        <p className=" p1 text-faded mb-5">As I am still learning, I plan on practicing and redoing old projects.</p>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}
export default Bio;
