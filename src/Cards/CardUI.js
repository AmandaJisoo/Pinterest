import React from 'react';
import img1 from '../assets/index.jpg'
import './card-style.css'

const Card = props => {
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="Image of signs" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                {/* <h4 className="card-title">{props.title}</h4> */}
                <p className="card-text-secondary">
                    {this.props.comment}
                </p>
                <a href="#" className="btn btn-outline-success">Go Anywhere</a>
            </div>  
        </div>
    );
}

export default Card;