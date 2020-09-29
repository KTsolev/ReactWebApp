import React from 'react';
import './Card.scss';

export const Card = (props) => {
    const {image, title, text, list, remarks} = props;
   
    
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={title} />
            </div>
            <div className="card-text">
                <h2>{title}</h2>
                <p>{text}</p>
                {remarks && <span>{remarks}</span>}
                {list && <ul>
                    {list.map((item) => <li>{item.listText}</li>)}
                    </ul>}
            </div>
            <div className="card-stats">
            </div>
        </div>
    )
}