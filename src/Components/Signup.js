import React from 'react'
import { Link } from "react-router-dom";

function Signup(props) {
    return (
        <div className='container' style={{ marginTop: '9%', marginBottom: '5%', border: "0.5px solid wheat", width: "50%", padding: "3% 10%", borderRadius: "10px", backgroundColor: "#96b8fb" }}>
            <div className="col" style={{ textAlign: "center", fontSize: "45px", paddingBottom: "30px" }}>
                <b>Signup Here</b>
            </div>
            <div className='row mb-2'>
                <div className='col'>
                    <form action='' method='' className=''>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control form-control-lg" value={props.newName} onChange={(e) => { props.setNewName(e.target.value) }} id="name" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control form-control-lg" value={props.newEmail} onChange={(e) => { props.setNewEmail(e.target.value) }} id="email" placeholder="Enter your email address" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control form-control-lg" value={props.newPassword} onChange={(e) => { props.setNewPassword(e.target.value) }} id="password" placeholder="Enter your password" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="bio" className="form-label">Bio</label>
                            <textarea className="form-control form-control-lg" value={props.newBio} onChange={(e) => { props.setNewBio(e.target.value) }} id="bio" rows="3" placeholder="Enter your bio"></textarea>
                        </div>
                        <button type="submit" onClick={props.signup} className="btn btn-lg btn-primary">Signup</button>
                    </form>
                </div>
            </div>
            <p className='text-center'>already have an account? <Link to='/'>login</Link></p>
        </div>
    )
}

export default Signup
