import React from 'react'
import { Link } from "react-router-dom";

function Login(props) {
    return (
        <div className='container' style={{ marginTop: '5%' }}>
            <div className="row mb-3">
                <div className="col" style={{ textAlign: "center", fontSize: "45px", paddingBottom: "30px" }}>
                    <b>Login Here</b>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <form action='' method='' className='login-form'>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" value={props.email} onChange={(e) => { props.setEmail(e.target.value) }} id="email" placeholder="Enter your email address" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" value={props.password} onChange={(e) => { props.setPassword(e.target.value) }} id="password" placeholder="Enter your password" />
                        </div>
                        <button type="submit" onClick={props.login} className="btn btn-outline-dark">Login</button>
                    </form>
                </div>
            </div>
            <p className='login-para'>don't have any account? <Link to='/signup'>signup</Link></p>
        </div>
    )
}

export default Login
