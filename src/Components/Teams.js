import React from 'react'

function Create_Team(props) {
    return (
        <div className='container mb-4' style={{ paddingLeft: "25%", paddingRight: "25%", marginTop: "7%" }}>
            <div className="row">
                <div className="col" style={{ textAlign: "center", fontSize: "45px" }}>
                    <b>Create A New Team</b>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <form action='' method=''>
                        <div className="mb-3">
                            <label htmlFor="team-name" className="form-label">Team name</label>
                            <input type="text" className="form-control" value={props.newTeam} onChange={(e) => { props.setNewTeam(e.target.value) }} id="team-name" placeholder="Enter team name" autoFocus />
                        </div>
                        <button type="submit" onClick={props.create} className="btn btn-outline-dark">Create Team</button>
                    </form>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col" style={{ textAlign: "center", fontSize: "30px" }}>
                    <b>My Teams</b>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <table className="table table-striped" style={{ textAlign: 'center', paddingLeft: "25%", paddingRight: "25%" }}>
                        <thead>
                            <tr>
                                <th scope="col">Team</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.teams.length === 0 ? "No data to show" : props.teams.map((team, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{team}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Create_Team
