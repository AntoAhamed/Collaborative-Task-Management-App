import React from 'react'
import { Link } from "react-router-dom";

function Signup(props) {
    return (
        <div className='container' style={{ marginTop: '5%' }}>
            <div className="col" style={{ textAlign: "center", fontSize: "45px", paddingBottom: "30px" }}>
                <b>Signup Here</b>
            </div>
            <div className='row'>
                <div className='col'>
                    <form action='' method='' className='signup-form'>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" value={props.newName} onChange={(e) => { props.setNewName(e.target.value) }} id="name" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" value={props.newEmail} onChange={(e) => { props.setNewEmail(e.target.value) }} id="email" placeholder="Enter your email address" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" value={props.newPassword} onChange={(e) => { props.setNewPassword(e.target.value) }} id="password" placeholder="Enter your password" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="bio" className="form-label">Bio</label>
                            <textarea className="form-control" value={props.newBio} onChange={(e) => { props.setNewBio(e.target.value) }} id="bio" rows="3" placeholder="Enter your bio"></textarea>
                        </div>
                        <button type="submit" onClick={props.signup} className="btn btn-outline-dark">Signup</button>
                    </form>
                </div>
            </div>
            <p className='signup-para'>already have an account? <Link to='/'>login</Link></p>
        </div>
    )
}

export default Signup
