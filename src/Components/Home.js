import React from 'react'
import cover from '../Assets/collaboration.jpg'
import collaboration from '../Assets/collaboration.jpg'
import teamwork from '../Assets/teamwork.jpg'
import createteams from '../Assets/createteams.jpg'
import invite from '../Assets/invite.jpg'
import achive from '../Assets/achive.jpg'
import any from '../Assets/any.jpg'

function Home() {
  return (
    <div id='home'>
      <div className=''>
        <img src={cover} alt='...' height={'500px'} width={'100%'} style={{ position: 'absolute', zIndex: '-1', opacity: '0.7' }} />
        <div className='text-center' style={{ padding: '15% 2%', color: 'black', opacity: '0.9' }}>
          <h1 style={{ fontSize: '75px', fontWeight: '800', backgroundColor: 'wheat' }}>Welcome To Collabify</h1>
          <p style={{ fontSize: '25px', fontWeight: '600', backgroundColor: 'wheat' }}>A collaborative task management system to manage team works and achive success together.</p>
        </div>
      </div>

      <div className='container d-flex justify-content-around' style={{ padding: '5% 2% 10% 2%' }}>
        <div class="card mx-2" style={{ height: "20rem", width: "18rem", border: "none", borderRadius: "0" }}>
          <img src={createteams} class="card-img-top" alt="..." height={'100%'} style={{ borderRadius: "0" }} />
        </div>
        <div class="card mx-2" style={{ height: "20rem", width: "18rem", border: "none", borderRadius: "0" }}>
          <img src={invite} class="card-img-top" alt="..." height={'100%'} style={{ borderRadius: "0" }} />
        </div>
        <div class="card mx-2" style={{ height: "20rem", width: "18rem", border: "none", borderRadius: "0" }}>
          <img src={teamwork} class="card-img-top" alt="..." height={'100%'} style={{ borderRadius: "0" }} />
        </div>
      </div>

      <div className='' style={{ padding: '8% 2%', background: 'white' }}>
        <div className='row d-flex justify-content-around align-items-center'>
          <div className='col-5'>
            <h1 style={{ fontSize: '45px', fontWeight: '700' }}>About Us</h1>
            <div>
              <p>
                Welcome to <strong>Collabify</strong>, a React-based note-taking application designed to help you stay organized and productive.
                Our team is made up of experienced developers and designers who are passionate about creating high-quality applications that meet the needs of our users.
                We're dedicated to delivering a seamless and intuitive experience that makes it easy to manage tasks anytime, anywhere.
              </p>
            </div>
          </div>
          <div className='col-4'>
            <img src={teamwork} alt='...' height={'350px'} width={'100%'} />
          </div>
        </div>
      </div>

      <h1 className='text-center' style={{ fontSize: '50px', fontWeight: '700', paddingTop: '8%' }}>Features</h1>
      <div className='container d-flex justify-content-around' style={{ padding: '5% 2% 10% 2%' }}>
        <div class="card mx-2" style={{ height: "18rem", width: "18rem", border: "none" }}>
          <img src={any} class="card-img-top" alt="..." height={'100%'} />
          <div class="card-body">
            <p class="card-text text-center">Collaboration</p>
          </div>
        </div>
        <div class="card mx-2" style={{ height: "18rem", width: "18rem", border: "none" }}>
          <img src={teamwork} class="card-img-top" alt="..." height={'100%'} />
          <div class="card-body">
            <p class="card-text text-center">Team Work</p>
          </div>
        </div>
        <div class="card mx-2" style={{ height: "18rem", width: "18rem", border: "none" }}>
          <img src={createteams} class="card-img-top" alt="..." height={'100%'} />
          <div class="card-body">
            <p class="card-text text-center">Create Teams</p>
          </div>
        </div>
      </div>
      <div className='container d-flex justify-content-around' style={{ padding: '0 2% 10% 2%' }}>
        <div class="card mx-2" style={{ height: "18rem", width: "18rem", border: "none" }}>
          <img src={collaboration} class="card-img-top" alt="..." height={'100%'} />
          <div class="card-body">
            <p class="card-text text-center">Manage Tasks</p>
          </div>
        </div>
        <div class="card mx-2" style={{ height: "18rem", width: "18rem", border: "none" }}>
          <img src={invite} class="card-img-top" alt="..." height={'100%'} />
          <div class="card-body">
            <p class="card-text text-center">Invite People</p>
          </div>
        </div>
        <div class="card mx-2" style={{ height: "18rem", width: "18rem", border: "none" }}>
          <img src={achive} class="card-img-top" alt="..." height={'100%'} />
          <div class="card-body">
            <p class="card-text text-center">Achive Success</p>
          </div>
        </div>
      </div>

      <div className='' style={{ padding: '8% 2%', marginBottom: '10%', background: 'white' }}>
        <div className='row d-flex justify-content-around align-items-center'>
          <div className='col-4'>
            <img src={collaboration} alt='...' height={'350px'} width={'100%'} />
          </div>
          <div className='col-5'>
            <h1 style={{ fontSize: '45px', fontWeight: '700' }}>Connect With Us</h1>
            <div>
              <p>
                Thank you for your interest in <strong>Collabify</strong> We'd love to hear from you and are here to help with any questions, comments, or concerns you may have.
                If you have any questions about using our app or need technical support, please reach out to our support team and mail at <strong>support@collabify.com</strong>.
                We're available 24/7 to assist you and ensure that you have a seamless experience with our app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
