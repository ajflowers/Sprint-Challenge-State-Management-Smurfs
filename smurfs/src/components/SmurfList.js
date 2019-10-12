import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import SmurfCard from './SmurfCard';

import { smurfHunting } from '../actions';

const SmurfList = props => {
    useEffect(() => {
        props.smurfHunting();
    }, []);

    return(
        <div>
            <h2>Smurfs Captured:</h2>
            {props.error && <p>{props.error}</p>}
            {props.smurfs.map(smurf => (
                <SmurfCard key={smurf.id} smurf={smurf} />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        huntIsOn: state.huntIsOn,
        error: state.error
    }
}

export default connect(mapStateToProps, { smurfHunting })(SmurfList)