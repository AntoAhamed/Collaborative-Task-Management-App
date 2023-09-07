import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [bio, setBio] = useState('')
    const navigate = useNavigate()

    function signup(e) {
        e.preventDefault();

        
    }

    return (
        <div className='container' style={{ marginTop: '5%' }}>
            <div className="col" style={{ textAlign: "center", fontSize: "45px", paddingBottom: "30px" }}>
                <b>Signup Here</b>
            </div>
            <div className='row'>
                <div className='col'>
                    <form action='' method='post' className='signup-form'>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" value={name} onChange={(e) => { setName(e.target.value) }} id="name" placeholder="Enter your name" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} id="email" placeholder="Enter your email address" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} id="password" placeholder="Enter your password" required/>
                        </div>
                        <div className="mb-3">
                            <label for="bio" class="form-label">Bio</label>
                            <textarea class="form-control" value={bio} onChange={(e) => { setBio(e.target.value) }} id="bio" rows="3" placeholder="Enter your bio" required></textarea>
                        </div>
                        <button type="submit" onSubmit={signup} className="btn btn-outline-dark">Signup</button>
                    </form>
                </div>
            </div>
            <p className='signup-para'>already have an account? <Link to='/'>login</Link></p>
        </div>
    )
}

export default Signup
