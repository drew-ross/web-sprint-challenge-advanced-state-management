import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';

const SmurfList = props => {

    return (
        <div className='SmurfList'>
            {props.smurfs.map(smurf => <Smurf smurf={smurf} />)}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {})(SmurfList);