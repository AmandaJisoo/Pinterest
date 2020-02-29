import React from 'react';
import img1 from '../assets/index.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './card-style.css'

const Card = props => {
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="Image of signs" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <p className="text-left">
                    {props.comment}
                </p>
                <a href="#" className="btn btn-outline-success">Go Anywhere</a>
            </div>  
        </div>
    );
}

export default Card;