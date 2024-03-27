import React from 'react'
import teamwork from '../Assets/teamwork.jpg'

function About() {
  return (
    <div className='' style={{ padding: '5% 2%' }}>
      <div className='row'>
        <div className='col-7 d-flex flex-column justify-content-center' style={{ padding: '0 6%' }}>
          <h1 className='mb-4' style={{ fontSize: '45px', fontWeight: '700' }}>About Us</h1>
          <div>
            <p>
              Welcome to <strong>Collabify</strong>, a React-based note-taking application designed to help you stay organized and productive.
            </p>
            <p>
              At <strong>Collabify</strong>, we understand that task management is very important in our professional life. Whether you're a student, a professional, or just someone who likes to keep things organized, having a reliable and user-friendly task management app can make all the difference.
              Our team is made up of experienced developers and designers who are passionate about creating high-quality applications that meet the needs of our users. We're dedicated to delivering a seamless and intuitive experience that makes it easy to manage tasks anytime, anywhere.
              We take pride in our commitment to user privacy and data security. Collabify is built on a solid foundation of secure coding practices, and we continuously update our app to ensure that your data is always safe and protected.
              Our goal is to provide you with an exceptional task management experience that helps you stay focused and productive. We welcome your feedback and suggestions and are committed to continuously improving our app to meet the needs of our users.
            </p>
            <p>
              <strong>Thank you</strong> for choosing <strong>Collabify</strong> as your go-to task management app. We're excited to be a part of your journey towards greater productivity and organization.
            </p>
          </div>
        </div>
        <div className='col-5 d-flex justify-content-center align-items-center'>
          <img src={teamwork} alt='...' height={'80%'} width={'80%'} />
        </div>
      </div>
    </div>
  )
}

export default About
