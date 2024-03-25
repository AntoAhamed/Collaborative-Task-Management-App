import React from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
import Alert from './Alert';

function Navbar(props) {
    const navigate = useNavigate()

    // eslint-disable-next-line
    const { userId, setUserId, users, alert, alertMssg } = props;

    //logout
    const logout = () => {
        setUserId('')
        localStorage.setItem("userId", JSON.stringify(userId))
        navigate('/login')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand">CTMA</Link>
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
                            {!userId ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/login">LogIn</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/signup">SignUp</Link>
                                    </li>
                                </> : ''
                            }
                            {userId ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/profile">{/*users[userId - 1].name*/}Profile</Link>
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
                        </ul>
                        {userId ?
                            <button onClick={() => { logout() }} className="btn d-flex nav-item logout">LogOut</button> : ''}
                    </div>
                </div>
            </nav>

            {alert === true ? <Alert alertMssg={alertMssg} /> : ''}

            <Outlet />
        </>
    )
}

export default Navbar
