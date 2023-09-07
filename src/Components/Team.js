import React from 'react'
import Task from './Task'

function Team() {
    return (
        <div className='container' style={{ marginTop: '5%' }}>
            <div className="row mb-3">
                <div className='col-4'>
                    <form className="d-flex py-4" role="search">
                        <input className="form-control me-2"  type="search" placeholder="Filter by " aria-label="Search" />
                        <button className="btn btn-outline-dark"  type="submit">Filter</button>
                    </form>
                </div>
                <div className="col-4" style={{ textAlign: "center", fontSize: "45px", paddingBottom: "30px" }}>
                    <b>Team Name</b>
                </div>
                <div className='col-4'>
                    <form className="d-flex py-4" role="search">
                        <input className="form-control me-2"  type="search" placeholder="Sort by " aria-label="Search" />
                        <button className="btn btn-outline-dark"  type="submit">Sort</button>
                    </form>
                </div>
            </div>
            <div className="row mb-3">
                <div className='col-4'>
                    
                </div>
                <div className="col-4" style={{ textAlign: "center", fontSize: "20px", paddingBottom: "30px" }}>
                    <button type="submit" className="btn btn-outline-dark"><a href="/create_task">Add A New Task</a></button>
                </div>
                <div className='col-4'>
                    
                </div>
            </div>
            <div className="row mb-4">
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </div>
        </div>
    )
}

export default Team
