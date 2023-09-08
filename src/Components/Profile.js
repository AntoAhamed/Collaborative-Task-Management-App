import React from 'react'
import PHOTO from '../Assets/user.png'

function Profile(props) {
    return (
        <div className='container' style={{ textAlign: 'center', fontSize: '20px' ,marginTop: '5%' }}>
            <div className="row mb-3">
                <div className="col" style={{ paddingBottom: "10px" }}>
                    <img src={PHOTO} width={'200px'} height={'200px'} alt='Profile'></img>
                </div>
            </div>
            <div className='row'>
                <div className='col profile'>
                    <div className='mb-3'>
                        <p>{props.users[props.userId-1]?.name}</p>
                    </div>
                    <div className='mb-3'>
                        <p>{props.users[props.userId-1]?.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
