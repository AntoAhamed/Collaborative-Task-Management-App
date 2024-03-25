import React from 'react'
import PHOTO from '../Assets/user1.jpg'

function Profile(props) {
    const { userId, users } = props;

    return (
        <div className='container d-flex flex-column align-items-center profile'>
            <div className="row mb-4">
                <div className="col" style={{ paddingBottom: "10px" }}>
                    <img src={PHOTO} width={'180px'} height={'180px'} alt='Profile' style={{ borderRadius: '50%' }}></img>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <div className='mb-3'>
                        <p>Name: <strong>{users[userId - 1]?.name}</strong></p>
                    </div>
                    <div className='mb-3'>
                        <p>Email: <strong>{users[userId - 1]?.email}</strong></p>
                    </div>
                    <div className='mb-3'>
                        <p>Bio: {users[userId - 1]?.bio}</p>
                    </div>
                    <div className='mb-3'>
                        <p>No. of your teams: {users[userId - 1]?.teams.length}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
