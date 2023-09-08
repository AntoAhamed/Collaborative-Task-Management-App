import React from 'react'

function Create_Team(props) {
    return (
        <div className='container' style={{ marginTop: '5%' }}>
            <div className="row mb-3">
                <div className="col" style={{ textAlign: "center", fontSize: "45px", paddingBottom: "30px" }}>
                    <b>Create A New Team</b>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <form action='' method='' className='team-creation-form'>
                        <div className="mb-3">
                            <label htmlFor="team-name" className="form-label">Team name</label>
                            <input type="text" className="form-control" value={props.newTeam} onChange={(e) => { props.setNewTeam(e.target.value) }} id="team-name" placeholder="Enter team name" autoFocus />
                        </div>
                        <button type="submit" onClick={props.create} className="btn btn-outline-dark">Create Team</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create_Team
