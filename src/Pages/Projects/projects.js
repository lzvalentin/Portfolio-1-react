import React from 'react';
import { Card, Button } from 'react-bootstrap'

function Projects() {
    return (
        <React.Fragment>
            <section id="portfolio" className="projects">
                <div className="container">
                    <div className="grid">
                        <div className="Cardbox" id="firstCard">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://github.com/velkyam/excuse-generator/raw/dev/assets/images/firstgif.gif" />
                            <Card.Body>
                                <Card.Title>Excuse Generator</Card.Title>
                                <Card.Text>
                                </Card.Text>
                                
                                <Button variant="primary" href="https://velkyam.github.io/excuse-generator/#team-8" target="_blank" rel="noreferrer">
                                    Deployed Link</Button>
                                <Button  variant="primary" href="https://github.com/velkyam/excuse-generator" target="_blank" rel="noreferrer">
                                    Repo</Button>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className="Cardbox" id="secondCard">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://github.com/lzvalentin/Note-Taker/raw/main/public/assets/notetaker.gif" />
                            <Card.Body>
                                <Card.Title>Note Taker</Card.Title>
                                <Card.Text>
                                </Card.Text>
                                <Button variant="primary" href="https://note-hw-taker.herokuapp.com/" target="_blank" rel="noreferrer">
                                    Deployed Link</Button>
                                <Button  variant="primary" href="https://github.com/lzvalentin/Note-Taker" target="_blank" rel="noreferrer">
                                    Repo</Button>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className="Cardbox" id="thirdCard">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="../../assets/images/wkday.png" />
                            <Card.Body>
                                <Card.Title>Note Taker</Card.Title>
                                <Card.Text>
                                </Card.Text>
                                <Button variant="primary" href="https://lzvalentin.github.io/Work-Day-Scheduler//" target="_blank" rel="noreferrer">
                                    Deployed Link</Button>
                                <Button  variant="primary" href="https://github.com/lzvalentin/Work-Day-Scheduler" target="_blank" rel="noreferrer">
                                    Repo</Button>
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                </div>
            </section>
           <div className="wip">
               WORK IN PROGRESS...COME BACK SOON!
           </div>

           
        </React.Fragment>
    )
}

export default Projects;
