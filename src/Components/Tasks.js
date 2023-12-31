import React, { useEffect, useState } from 'react'
import Task from './Task'
import { Link } from 'react-router-dom'

function Team(props) {
    const [tasks, setTasks] = useState([])
    const teamNames = props.teamNames?.map(teamName => teamName)
    const [selectedTeamName, setSelectedTeamName] = useState(teamNames[0])
    const teams = props.teams?.map(team => team)
    const handleAddrTypeChange = (e) => {
        const selectedTeamName = teamNames[e.target.value];
        setSelectedTeamName(selectedTeamName);
        console.log(selectedTeamName);
    }

    //to edit status
    const [newStatus, setNewStatus] = useState('')

    const editStatus = (id) => {
        if (newStatus !== '') {
            let t = tasks;
            for (let i = 0; i < t.length; i++) {
                if (t[i].id === id) {
                    t[i].status = newStatus;
                    break;
                }
            }

            setTasks(t);

            for (let i = 0; i < teams.length; i++) {
                if (teams[i].name === selectedTeamName) {
                    teams[i].tasks = t;
                    break;
                }
            }

            localStorage.setItem("teams", JSON.stringify(teams));

            setNewStatus('');

            alert("Status changed successfully");
        } else {
            alert("Empty field can't be submited! Please change status and try again");
        }
    }

    useEffect(() => {
        for (let i = 0; i < teams?.length; i++) {
            if (teams[i].name === selectedTeamName) {
                setTasks(teams[i].tasks);
            }
        }
    })

    return (
        <div className='container' style={{ marginTop: '5%' }}>
            <div className="row mb-3">
                <div className='col-4'>
                    <form className="d-flex py-4" role="search">
                        <input className="form-control me-2" type="search" placeholder="Filter by " aria-label="Search" />
                        {/*<button className="btn btn-outline-dark" type="submit">Filter</button>*/}
                    </form>
                </div>
                <div className="col-4 mt-4">
                    < select onChange={e => handleAddrTypeChange(e)} className="form-select" aria-label="Default select example">
                        {
                            teamNames.map((e, index) => <option key={index} value={index} style={{ textAlign: "center" }}>{`Team Name : ${e}`}</option>)
                        }
                    </select >
                </div>
                <div className='col-4'>
                    <form className="d-flex py-4" role="search">
                        <input className="form-control me-2" type="search" placeholder="Sort by " aria-label="Search" />
                        {/*<button className="btn btn-outline-dark" type="submit">Sort</button>*/}
                    </form>
                </div>
            </div>
            <div className="row mb-3">
                <div className='col-4'>

                </div>
                <div className="col-4" style={{ textAlign: "center", fontSize: "20px", paddingBottom: "30px" }}>
                    <Link to="/create_task"><button type="submit" className="btn btn-outline-dark">Add A New Task</button></Link>
                </div>
                <div className='col-4'>

                </div>
            </div>
            <div className="row mb-4">
                {tasks.length === 0 ? "No data to show" : tasks.map((task) => {
                    return <Task key={task.id} task={task} id={task.id} title={task.title} desc={task.desc} date={task.date} priority={task.priority} status={task.status} setNewStatus={setNewStatus} editStatus={editStatus} />
                })}
            </div>
        </div>
    )
}

export default Team
