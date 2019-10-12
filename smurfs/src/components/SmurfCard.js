import React from 'react';

const SmurfCard = props => {
    return(
        <div className="smurf-card">
            <h3>{props.smurf.name}</h3>
            <h4>ID: {props.smurf.id}</h4>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </div>
    );
}

export default SmurfCard;