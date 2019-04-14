import React from 'react';
import './Card.css';

const Card = ({id, name, nickname, imgFile, description}) => {
    return (
        <div className="flip-card tc dib br3 pa4 ma2 bw2">
          
          <div className="flip-card-inner">
            
            <div className="flip-card-front" style={{'background-color': '#b3cde0'}}>
              <img alt={name} src={imgFile} style={{'height': 200, 'padding': '20px'}} />
              <h2>{name}</h2>
              <p style={{ 'font-style': 'italic' }}>"{nickname}"</p>
            </div>
            
            <div className="flip-card-back">
              <h2>{name}</h2>
              <p style={{ 'font-style': 'italic' }}>"{nickname}"</p>
              <p
                  style={{
                      'text-align': 'left',
                      'padding': '10px',
                      'line-height': '140%',
                  }}
               >
                  {description}
              </p>
            </div>
          
          </div>
        
        </div>
    );
};

export default Card;
