import React from 'react'

function Create_Team(props) {
    const { newTeam, setNewTeam, create, teams } = props;

    return (
        <div className='container mb-4 teams'>
            <div className="row mb-2">
                <div className="col" style={{ textAlign: "center", fontSize: "37px" }}>
                    <b>Create A New Team</b>
                </div>
            </div>
            <div className='row mb-4'>
                <div className='col'>
                    <form action='' method=''>
                        <div className="mb-3">
                            <label htmlFor="team-name" className="form-label">Team name</label>
                            <input type="text" className="form-control form-control-lg" value={newTeam} onChange={(e) => { setNewTeam(e.target.value) }} id="team-name" placeholder="Enter team name" autoFocus />
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" onClick={create} className="btn btn-success btn-lg ">Create Team</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col" style={{ textAlign: "center", fontSize: "27px" }}>
                    <b>My Teams</b>
                </div>
            </div>
            <div className='row mb-2'>
                <div className='col'>
                    <table className="table table-striped" style={{ textAlign: 'center', paddingLeft: "25%", paddingRight: "25%" }}>
                        <thead>
                            <tr>
                                <th scope="col">Team</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teams.length === 0 ? "No data to show" : teams.map((team, index) => {
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
