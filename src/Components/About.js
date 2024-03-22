import React from 'react'

function About() {
  return (
    <div className='container'>
      <div className='row'>
        <div className="col text-center" style={{ fontSize: "50px", paddingTop: '4%' }}>
          <b>About Us</b>
        </div>
      </div>
      <div className='row'>
        <div className='col' style={{ padding: '4.86% 2%' }}>
          <p>
            Welcome to <strong>CTMA</strong>, a React-based task management application designed to help teams for their colleborative work.
          </p>
          <p>
            At CTMA, we understand that task management is very important in our professional life. Whether you're a student, a professional, or just someone who likes to keep things organized and work together, having a reliable and user-friendly app can make all the difference.

            Our team is made up of experienced developers and designers who are passionate about creating high-quality applications that meet the needs of our users. We're dedicated to delivering a seamless and intuitive experience that makes it easy to manage tasks collaboratively.

            We take pride in our commitment to user privacy and data security. CTMA is built on a solid foundation of secure coding practices, and we continuously update our app to ensure that your data is always safe and protected.

            Our goal is to provide you with an exceptional task management experience that helps a team to finish work nicely and timely. We welcome your feedback and suggestions and are committed to continuously improving our app to meet the needs of our users.
          </p>
          <p>
            <strong>Thank you</strong> for choosing <strong>CTMA</strong> as your task management app. We're excited to be a part of your journey towards greater productivity and organization.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
