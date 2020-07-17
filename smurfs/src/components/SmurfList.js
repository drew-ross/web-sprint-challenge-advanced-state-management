import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions/formActions';

import Smurf from './Smurf';

const SmurfList = props => {

    useEffect(() => {
        props.getSmurfs();
    }, []);

    return (
        <div className='SmurfList'>
            <h3>Village Members:</h3>
            <div className='smurfs'>
                {props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    };
};

export default connect(mapStateToProps, { getSmurfs })(SmurfList);