// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* Title */}
            <div className="container mt-4">
                <h1>Welcome to SRKR Fundraiser</h1>
                <p>Help us make a difference!</p>
            </div>

            {/* Buttons */}
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6">
                    <Link to="/completed-donations" className="btn btn-primary btn-lg btn-block">Donate</Link>
                    </div>
                    <div className="col-md-6">
                    <Link to="/contact" className="btn btn-success btn-lg btn-block">Raise a Campaign</Link>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
