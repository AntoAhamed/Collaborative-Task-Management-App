import React, { useEffect, useState } from 'react'
import Task from './Task'
import { Link } from 'react-router-dom'

function Team(props) {
    //to set tasks
    const [tasks, setTasks] = useState([])
    const teamNames = props.teamNames?.map(teamName => teamName) //status
    const [selectedTeamName, setSelectedTeamName] = useState(teamNames[0]) // selected status
    const teams = props.teams?.map(team => team)
    const users = props.users?.map(user => user)
    const handleAddrTypeChange = (e) => {
        const selectedTeamName = teamNames[e.target.value];
        setSelectedTeamName(selectedTeamName);
        console.log(selectedTeamName);
    }

    //to get tasks of the user for a particular team
    const getTasks = () => {
        for (let i = 0; i < teams?.length; i++) {
            if (teams[i].name === selectedTeamName) {
                setTasks(teams[i].tasks);
            }
        }
    }

    //to change task status
    const editStatus = (id, newStatus) => {
        const now = new Date();

        let t = tasks;
        for (let i = 0; i < t.length; i++) {
            if (t[i].id === id) {
                t[i].status.status = newStatus;
                t[i].status.statusBy = props.userId;
                t[i].status.statusOn = now.toLocaleDateString();
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

        props.setTeams(JSON.parse(localStorage.getItem("teams")));

        getTasks();

        props.setAlertMssg(`Status marked as ${newStatus}`)
        props.alertSystem()
    }

    //to delete task
    const dltTask = (task) => {
        let t = tasks;

        t = t.filter(e=>e!==task);

        setTasks(t);

        for (let i = 0; i < teams.length; i++) {
            if (teams[i].name === selectedTeamName) {
                teams[i].tasks = t;
                break;
            }
        }

        localStorage.setItem("teams", JSON.stringify(teams));

        props.setTeams(JSON.parse(localStorage.getItem("teams")));

        getTasks();

        props.setAlertMssg("Task successfully deleted.")
        props.alertSystem()
    }

    let pb = tasks.length;

    //everytime when selected team name will be changed, it will render to get the users tasks for the team
    useEffect(() => {
        getTasks();
    }, [selectedTeamName])

    return (
        <div className='container' style={pb > 2 ? { paddingBottom: "5rem" } : { paddingBottom: "19.7rem" }}>
            <div className="row mb-3">
                {/*<div className='col-4'>
                    <form className="d-flex py-4" role="search">
                        <input className="form-control form-control-lg me-2" type="search" placeholder="Filter by " aria-label="Search" />
                        {<button className="btn btn-outline-dark" type="submit">Filter</button>}
                    </form>
                </div>*/}
                <div className="col mt-4">
                    {teamNames.length === 0 ?
                        < select className="form-select form-select-lg mb-3" aria-label="Default select example">
                            <option style={{ textAlign: "center" }}>No teams to show</option>
                        </select > :
                        < select onChange={e => handleAddrTypeChange(e)} className="form-select form-select-lg mb-3" aria-label="Default select example">
                            {teamNames.map((e, index) => {
                                return <option key={index} value={index} style={{ textAlign: "center" }}>Team Name : {e}</option>
                            })}
                        </select >}
                </div>
                {/*<div className='col-4'>
                    <form className="d-flex py-4" role="search">
                        <input className="form-control form-control-lg me-2" type="search" placeholder="Sort by " aria-label="Search" />
                        {<button className="btn btn-outline-dark" type="submit">Sort</button>}
                    </form>
                        </div>*/}
            </div>
            <div className="row mb-3">
                <div className="col-4" style={{ textAlign: "center", fontSize: "20px" }}>
                    {teamNames.length === 0 ?
                        <button type="button" onClick={() => {
                            props.setAlertMssg("You have to create a team first to assign a task.");
                            props.alertSystem();
                        }} className="btn btn-success">Add A New Task</button> :
                        <Link to="/create_task"><button type="submit" className="btn btn-success">Add A New Task</button></Link>}
                </div>
            </div>
            <div className="row mb-4">
                {tasks.length === 0 ? "No data to show" : tasks.map((task) => {
                    return <Task key={task.id} task={task} id={task.id} title={task.title} desc={task.desc} date={task.date} currentDate={task.currentDate} priority={task.priority} status={task.status} creator={task.creator} users={users} editStatus={editStatus} dltTask={dltTask} />
                })}
            </div>
        </div>
    )
}

export default Team
