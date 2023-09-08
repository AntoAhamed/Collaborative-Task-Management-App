import React from 'react'

function Create_Task(props) {
    const priorities = ["low", "medium", "high"];
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

    return (
        <div className='container' style={{ marginTop: '5%' }}>
            <div className="row mb-3">
                <div className="col" style={{ textAlign: "center", fontSize: "45px", paddingBottom: "30px" }}>
                    <b>Add Task</b>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <form action='' method='' className='add-task'>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" value={props.title} onChange={(e) => { props.setTitle(e.target.value) }} id="title" placeholder="Enter title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea className="form-control" value={props.desc} onChange={(e) => { props.setDesc(e.target.value) }} id="description" rows="5" placeholder="Enter description" ></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="due" className="form-label">Due Date</label>
                            <input type="date" className="form-control" value={props.due} onChange={(e) => { props.setDue(e.target.value) }} id="due" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="priority" className="form-label">Priority Level</label>
                            < select onChange={e => handleAddrTypeChangeOfPriority(e)} className="form-select" id="priority" aria-label="Default select example">
                                {
                                    priorities.map((e, index) => <option key={index} value={index}>{e}{console.log(e)}</option>)
                                }
                            </select >
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="team" className="form-label">Team</label>
                            < select onChange={e => handleAddrTypeChange(e)} className="form-select" id="team" aria-label="Default select example">
                                {
                                    teamNames.map((e, index) => <option key={index} value={index}>{e}{console.log(e)}</option>)
                                }
                            </select >
                        </div>
                        <button type="submit" onClick={props.addTask} className="btn btn-outline-dark">Add</button>
                        <button type="reset" onClick={props.resetTask} className="btn btn-outline-dark mx-2">Reset</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create_Task
