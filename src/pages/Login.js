import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="emailPhone">Email/Phone Number</label>
                    <input type="text" className="form-control" id="emailPhone" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <p className="mt-3">Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    );
}

export default Login;
