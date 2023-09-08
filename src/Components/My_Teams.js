import React from 'react'

function My_Teams(props) {
    return (
        <div className='container' style={{ marginTop: '5%' }}>
            <div className="row mb-3">
                <div className="col" style={{ textAlign: "center", fontSize: "45px", paddingBottom: "30px" }}>
                    <b>My Teams</b>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <table className="table table-striped" style={{ textAlign: 'center' }}>
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

export default My_Teams
