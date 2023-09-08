import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/profile">Callaborative Task Management App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/profile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/create_team">Create Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/my_teams">Teams</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/tasks">Tasks</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/invitation">Invitation</Link>
                            </li>
                        </ul>
                        <button onClick={props.logout} disabled={!props.userId} className="btn btn-outline-light d-flex">Logout</button>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default Navbar
