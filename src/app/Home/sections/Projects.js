import React, { useContext } from 'react';
import uniqid from 'uniqid';
import { Col, Row } from 'react-bootstrap';

import { ProjectContext } from '../../contexts/ProjectContext';
import CardProject from './../components/CardProject';


const Projects = props => {
    const projects = useContext(ProjectContext);
    return (
        <section className="projects mt-5" id="projects">
            <h1 className="text-center text-primary py-5 display-3">Our Projects</h1>
            <Row className="justify-content-center w-100 mx-auto">
                {projects.map(project => {
                    return (
                        <Col key={uniqid()} xl={3} lg={5} md={6} className="mx-auto " >
                            <CardProject
                                title={project.title}
                                img={project.bgimg}
                                body={project.body}
                                icons={project.icons}
                            />
                        </Col>
                    )
                })
                }
            </Row>

        </section>
    )
}

export default Projects
