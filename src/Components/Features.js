import React from 'react'
import any from '../Assets/any.jpg'

function Features() {
  return (
    <div className='' style={{ padding: '13% 2%' }}>
      <div className='row'>
        <div className='col-7 d-flex flex-column justify-content-center' style={{ padding: '0 6%' }}>
          <h1 className='mb-4' style={{ fontSize: '45px', fontWeight: '700' }}>Our Features</h1>
          <ul style={{ listStyleType: 'square' }}>
            <li>Users can effortlessly sign up and log in to get started.</li>
            <li>Creating teams and inviting others to join the collaboration journey.</li>
            <li>Whether you're a solo entrepreneur or part of a large corporation, this app adapts to your needs.</li>
            <li>Assign tasks with ease, specifying priority, status, and due dates.</li>
            <li>To ensuring everyone stays on track and aligned towards common goals.</li>
            <li>Plus, team members can update task statuses in real-time, fostering seamless communication and productivity.</li>
          </ul>
        </div>
        <div className='col-5 d-flex justify-content-center align-items-center'>
          <img src={any} alt='...' height={'80%'} width={'80%'} />
        </div>
      </div>
    </div>
  )
}

export default Features
