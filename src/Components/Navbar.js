import React from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
import Alert from './Alert';

function Navbar(props) {
    const navigate = useNavigate()

    //logout
    const logout = () => {
        props.setUserId('')
        localStorage.setItem("userId", JSON.stringify(props.userId))
        navigate('/')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand p-4" style={{ fontSize: '25px', fontWeight: '800' }} >CTMA</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-4" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/features">Features</Link>
                            </li>
                            {!props.userId ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/signup">Signup</Link>
                                    </li>
                                </> : ''
                            }
                            {props.userId ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/profile">{/*props.users[props.userId - 1].name*/}Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/teams">Teams</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/tasks">Tasks</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/invitation">Invitation</Link>
                                    </li>
                                </> : ''
                            }
                            {props.alert === true ?
                                <li className='mx-4'>
                                    <Alert alertMssg={props.alertMssg} />
                                </li> : ''}
                        </ul>
                        {props.userId ?
                            <button onClick={() => { logout() }} className="btn btn-dark text-light d-flex">Logout</button> : ''}
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default Navbar
