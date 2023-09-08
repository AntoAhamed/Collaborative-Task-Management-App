import React, { useState } from 'react'

function Invitation(props) {
    const teamNames = props.teamNames?.map(teamName => teamName)
    const [selectedTeamName, setSelectedTeamName] = useState(teamNames[0])
    const handleAddrTypeChange = (e) => {
        const selectedTeam = teamNames[e.target.value];
        setSelectedTeamName(selectedTeam);
        console.log(selectedTeamName);
    }

    //finding members to invite
    if (teamNames) {
        var tmp = [];
        const users = props.users;
        for (let i = 0; i < users.length; i++) {
            let f = 0;
            let k = users[i].teams;
            for (let j = 0; j < k.length; j++) {
                if (k[j] === selectedTeamName) {
                    f = 1;
                    break;
                }
            }
            if (f === 0) {
                tmp.push(users[i]);
            }
        }
    }

    //invite and join
    const invite = (e) => {
        let t = e.teams;
        t = [...t, selectedTeamName];
        e.teams = t;

        for (let i = 0; i < props.users?.length; i++) {
            if (props.users[i].id === e.id) {
                props.users[i].teams = t;
                break;
            }
        }

        let tt = [];
        for (let i = 0; i < tmp.length; i++) {
            if (tmp[i].id === e.id) {
                continue;
            } else {
                tt.push(tmp[i]);
            }
        }

        tmp = tt;

        alert(`${e.name} is invited and joined in the team ${selectedTeamName}`)
    }

    console.log(tmp)

    return (
        <div className='container' style={{ marginTop: '5%' }}>
            <div className="row mb-3">
                <div className='col-4'>

                </div>
                <div className="col-4 mt-4">
                    < select onChange={e => handleAddrTypeChange(e)} className="form-select" aria-label="Default select example">
                        {
                            teamNames.length === 0 ? "No data to show" : teamNames.map((e, index) => <option key={index} value={index} style={{ textAlign: "center" }}>{`Invite Members To Team ${e}`}</option>)
                        }
                    </select >
                </div>
                <div className='col-4'>

                </div>
            </div>
            <div className="row mb-3">
                {tmp.length === 0 ? "No data to show" : tmp.map((e) => {
                    return (
                        <div className='col-12 mb-4' key={e.id}>
                            <div className="card">
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                        <p>{e.name}</p>
                                        <footer className="blockquote-footer">{e.email}<button type="button" onClick={() => invite(e)} className="btn btn-sm btn-dark mx-2">Invite</button></footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Invitation
