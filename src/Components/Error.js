import React from "react"
import { connect } from 'react-redux';

const ErrorScreen = ({ error }) => {
    return (
        <div className="errorScreen">
            <h1>{error}</h1>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        error: state.error
    }
};

export default connect(mapStateToProps)(ErrorScreen);