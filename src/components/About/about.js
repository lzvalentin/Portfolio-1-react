import React, { useState } from "react";

function About() {
    const [pages] = useState([
        {
            name: "About me"
        }
    ]);
    const [currentPage] = useState(pages[0]);

    return (
        <div className="text-center text-white d-flex">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h1>{currentPage.name}</h1>
                        <hr />
                        <p className="text-faded mb-5">I am a front end developer</p>
                        <p className="text-faded mb-5">My strong skills...</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default About