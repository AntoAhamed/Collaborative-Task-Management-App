import React, { useEffect, useState } from 'react'

function Invitation(props) {
    //to set users to invite
    const [usersToInvite, setUsersToInvite] = useState([])
    const teamNames = props.teamNames?.map(teamName => teamName)
    const [selectedTeamName, setSelectedTeamName] = useState(teamNames[0])
    const handleAddrTypeChange = (e) => {
        const selectedTeam = teamNames[e.target.value];
        setSelectedTeamName(selectedTeam);
        console.log(selectedTeamName);
    }

    //finding members to invite
    const find = () => {
        //var tmp = [];
        let tmp = [];
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
        setUsersToInvite(tmp);
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

        props.setUsers(props.users);

        localStorage.setItem("users", JSON.stringify(props.users));

        find(); //after give an invitation again find who are left to be invited

        props.setAlertMssg(`${e.name} is invited and joined in the team ${selectedTeamName}`)
        props.alertSystem()
    }

    let pb = teamNames.length;
    //everytime when selected team name will be changed, it will render to find the users to invite in the selected team
    useEffect(() => {
        find();
    }, [selectedTeamName])

    return (
        <div className='container' style={pb > 2 ? { paddingBottom: "5rem" } : { paddingBottom: "31rem" }}>
            {teamNames.length === 0 ? "No data to show" :
                <>
                    <div className="row mb-3">
                        <div className="col mt-4">
                            < select onChange={e => handleAddrTypeChange(e)} className="form-select form-select-lg mb-3" aria-label="Default select example">
                                {
                                    teamNames.map((e, index) => <option key={index} value={index} style={{ textAlign: "center" }}>Invite Members To Team: {e}</option>)
                                }
                            </select >
                        </div>
                    </div>
                    <div className="row mb-3">
                        {usersToInvite.length === 0 ? "No data to show" : usersToInvite.map((e) => {
                            return (
                                <div className='col-12 mb-4' key={e.id}>
                                    <div className="card p-4" style={{ backgroundColor: "#CBBEFE" }}>
                                        <div className="card-body">
                                            <blockquote className="blockquote mb-0">
                                                <p><strong>{e.name}</strong></p>
                                                <div className="d-flex justify-content-between">
                                                    <footer className="blockquote-footer">{e.email}</footer>
                                                    <button type="button" onClick={() => invite(e)} className="btn btn-primary mx-2">Invite & Join</button>
                                                </div>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </>
            }
        </div>
    )
}

export default Invitation
