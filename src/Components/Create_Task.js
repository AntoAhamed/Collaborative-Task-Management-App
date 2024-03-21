import React, { useEffect } from 'react'

function Create_Task(props) {
    const priorities = ["Low", "Medium", "High"];
    const handleAddrTypeChangeOfPriority = (e) => {
        const selectedPriority = priorities[e.target.value];
        props.setPrio(selectedPriority);
        console.log(selectedPriority);
    }

    const teamNames = props.teamNames?.map(teamName => teamName)
    const teams = props.teams?.map(team => team)
    const handleAddrTypeChange = (e) => {
        const selectedTeamName = teamNames[e.target.value];
        props.setTea(selectedTeamName)
        console.log(selectedTeamName);
    }

    useEffect(() => {
        props.setPrio(priorities[0]);
        props.setTea(teamNames[0]);
    }, [])


    return (
        <div className='container mb-4 createTask'>
            <div className="row mb-2">
                <div className="col" style={{ textAlign: "center", fontSize: "45px" }}>
                    <b>Add Task</b>
                </div>
            </div>
            <div className='row mb-2'>
                <div className='col'>
                    <form action='' method='' className=''>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control form-control-lg" value={props.title} onChange={(e) => { props.setTitle(e.target.value) }} id="title" placeholder="Enter title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea className="form-control form-control-lg" value={props.desc} onChange={(e) => { props.setDesc(e.target.value) }} id="description" rows="5" placeholder="Enter description" ></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="due" className="form-label">Due Date</label>
                            <input type="date" className="form-control form-control-lg" value={props.due} onChange={(e) => { props.setDue(e.target.value) }} id="due" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="priority" className="form-label">Priority Level</label>
                            < select onChange={e => handleAddrTypeChangeOfPriority(e)} className="form-select form-select-lg" id="priority" aria-label="Default select example">
                                {
                                    priorities.map((e, index) => <option key={index} value={index}>{e}{console.log(e)}</option>)
                                }
                            </select >
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="team" className="form-label">Team</label>
                            < select onChange={e => handleAddrTypeChange(e)} className="form-select form-select-lg" id="team" aria-label="Default select example">
                                {
                                    teamNames.map((e, index) => <option key={index} value={index}>{e}{console.log(e)}</option>)
                                }
                            </select >
                        </div>
                        <button type="submit" onClick={props.addTask} className="btn btn-success btn-lg">Add</button>
                        <button type="reset" onClick={props.resetTask} className="btn btn-outline-success btn-lg mx-2">Reset</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create_Task
