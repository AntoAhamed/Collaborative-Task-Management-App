import React from 'react'
import { Link } from "react-router-dom";

function Login(props) {
    const { email, password, setEmail, setPassword, login } = props;

    return (
        <div className='container login'>
            <div className="row mb-3">
                <div className="col" style={{ textAlign: "center", fontSize: "45px", paddingBottom: "30px" }}>
                    <b>Login Here</b>
                </div>
            </div>
            <div className='row mb-2'>
                <div className='col'>
                    <form action='' method='' className=''>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control form-control-lg" value={email} onChange={(e) => { setEmail(e.target.value) }} id="email" placeholder="Enter your email address" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control form-control-lg" value={password} onChange={(e) => { setPassword(e.target.value) }} id="password" placeholder="Enter your password" />
                        </div>
                        <button type="submit" onClick={login} className="btn btn-lg btn-primary">Login</button>
                    </form>
                </div>
            </div>
            <p className='text-center'>Don't have any account? <Link to='/signup'>signup</Link></p>
        </div>
    )
}

export default Login
