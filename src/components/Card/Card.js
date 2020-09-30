import React from 'react';
import services from '../../Services/Services';
import './Card.scss';


const { isMSIE } = services;


export const Card = (props) => {
    const {image, title, text, list, remarks} = props;
    const cardClasses = isMSIE() ? 'card card-flex' : 'card';
    const cardImageClasses = isMSIE() ? 'image-flex' : 'card-image';
    const cardTextClasses = isMSIE() ? 'text-flex' : 'card-text';
    const cardStatsClasses = isMSIE() ? 'stats-flex' : 'card-stats';
   
    return (
        <div  className={cardClasses}>
            <div className={cardImageClasses}>
                <img src={image} alt={title} />
            </div>
            <div className={cardTextClasses}>
                <h2>{title}</h2>
                <p>{text}</p>
                {remarks && <span class="remark">{remarks}</span>}
                {list && <ul>
                    {list.map((item) => <li>{item.listText}</li>)}
                    </ul>}
            </div>
            <div className={cardStatsClasses}>
            </div>
        </div>
    );
}