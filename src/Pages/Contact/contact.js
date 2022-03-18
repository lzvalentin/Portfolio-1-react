import React from 'react';


function Contact() {
    return (
        <React.Fragment>
         
            <section id="portfolio">
                <div className="container">
                    <div className="contact-grid">
                        <a href="mailto:lorenazuniga253@gmail.com">
                            <div className="contact-project">
                                <h3>Email</h3>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/lorena-z-tin/" target="blank" rel="noreferrer">
                            <div className="contact-project">
                                <h3>LinkedIn</h3>
                            </div>
                        </a>
                        <a href="https://github.com/lzvalentin" target="blank" rel="noreferrer">
                            <div className="contact-project">
                                <h3>GitHub</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Contact;