import React, { useState } from 'react';
import { connect } from 'react-redux';

import { smurfCaught } from '../actions';

const SmurfTagger = props => {
    const [newCatch, setNewCatch] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleChange = event => {
        setNewCatch({...newCatch, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(newCatch);
        smurfCaught(newCatch);
        setNewCatch({
            name: "",
            age: "",
            height: ""
        })
    }

    return(
        <form className="smurf-tagger" onSubmit={event => handleSubmit(event)}>
            <h2>Log Your Catch Here:</h2>
            <label>
                Name:
                <input 
                    type="text"
                    name="name"
                    onChange={event => handleChange(event)}
                />
            </label>
            <label>
                Age:
                <input 
                    type="text"
                    name="age"
                    onChange={event => handleChange(event)}
                />
            </label>
            <label>
                Height:
                <input 
                    type="text"
                    name="height"
                    onChange={event => handleChange(event)}
                />
            </label>
            <button>Yum!</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, { smurfCaught })(SmurfTagger)