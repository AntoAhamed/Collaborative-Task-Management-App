import React from 'react'
import PHOTO from '../Assets/user.png'

function Profile(props) {
    return (
        <div className='container d-flex flex-column align-items-center' style={{ fontSize: '20px', marginTop: '10%', border: "0.5px solid gray", width: "30%", padding: "3%", borderRadius: "10px", backgroundColor: "wheat" }}>
            <div className="row mb-4">
                <div className="col" style={{ paddingBottom: "10px" }}>
                    <img src={PHOTO} width={'160px'} height={'160px'} alt='Profile'></img>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <div className='mb-3'>
                        <p>Name: {props.users[props.userId - 1]?.name}</p>
                    </div>
                    <div className='mb-3'>
                        <p>Email: {props.users[props.userId - 1]?.email}</p>
                    </div>
                    <div className='mb-3'>
                        <p>Bio: {props.users[props.userId - 1]?.bio}</p>
                    </div>
                    <div className='mb-3'>
                        <p>No. of your teams: {props.users[props.userId - 1]?.teams.length}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
