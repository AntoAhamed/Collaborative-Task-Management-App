import React from 'react'
import { Link } from "react-router-dom";

function Signup(props) {
    const { newName, setNewName, newEmail, setNewEmail, newPassword, setNewPassword, newBio, setNewBio, signup } = props;

    return (
        <div className='container signup'>
            <div className="col" style={{ textAlign: "center", fontSize: "45px", paddingBottom: "30px" }}>
                <b>SignUp</b>
            </div>
            <div className='row mb-2'>
                <div className='col'>
                    <form action='' method='' className=''>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control form-control-lg" value={newName} onChange={(e) => { setNewName(e.target.value) }} id="name" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control form-control-lg" value={newEmail} onChange={(e) => { setNewEmail(e.target.value) }} id="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control form-control-lg" value={newPassword} onChange={(e) => { setNewPassword(e.target.value) }} id="password" placeholder="Enter your password" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="bio" className="form-label">Bio</label>
                            <textarea className="form-control form-control-lg" value={newBio} onChange={(e) => { setNewBio(e.target.value) }} id="bio" rows="3" placeholder="Enter your bio"></textarea>
                        </div>
                        <button type="submit" onClick={signup} className="btn btn-lg btn-primary">SignUp</button>
                    </form>
                </div>
            </div>
            <p className='text-center'>Already have an account? <Link to='/login'>LogIn</Link></p>
        </div>
    )
}

export default Signup
