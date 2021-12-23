import React from "react"
import { Spinner } from 'spin.js';

const LoadingScreen = () => {
    return (
        <div className="loadingScreen">
            {new Spinner().spin()}
        </div>
    )
};

export default LoadingScreen;