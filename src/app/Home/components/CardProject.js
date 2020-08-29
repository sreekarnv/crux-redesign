import React from 'react';
import { Card } from 'react-bootstrap';
import uniqid from 'uniqid';

const CardProject = props => {
    const { body, img, title, icons } = props;

    return (
        <Card className="projects__card pb-3 mx-auto">
            <div className="projects__card-img" >
                <Card.Img variant="top" src={img} />
            </div>
            <Card.Title className="text-left">
                <span className="card-title-1">{title.split(' ')[0]}</span><br />
                <span className="card-title-2">{title.split(' ')[1]}</span>
            </Card.Title>

            <Card.Body>
                <Card.Text className="text-center text-muted">
                    {body}
                </Card.Text>
                <div className="d-flex justify-content-around">
                    {Object.keys(icons).map(icon => {
                        return (
                            <div key={uniqid()} className="text-center mt-2">
                                <img src={icons[icon]} alt="icon" className="icon" />
                                <span className="d-block text-primary">{icon}</span>
                            </div>
                        )
                    })}
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardProject
