import React from 'react'
import collaboration from '../Assets/collaboration.jpg'

function Contact() {
  return (
    <div className='' style={{ padding: '5% 2%' }}>
      <div className='row'>
        <div className='col-5 d-flex justify-content-center align-items-center'>
          <img src={collaboration} alt='...' height={'80%'} width={'80%'} />
        </div>
        <div className='col-7 d-flex flex-column justify-content-center' style={{ padding: '0 6%' }}>
          <h1 className='mb-4' style={{ fontSize: '45px', fontWeight: '700' }}>Connect With Us</h1>
          <div>
            <p>
              Thank you for your interest in <strong>CTMA</strong> We'd love to hear from you and are here to help with any questions, comments, or concerns you may have.
              If you have any questions about using our app or need technical support, please reach out to our support team and mail at <strong>support@ctma.com</strong>. We're available 24/7 to assist you and ensure that you have a seamless experience with our app.
              For general inquiries or feedback, you can reach out to us at <strong>www.ctma.com</strong>. We value your feedback and suggestions, and we're always looking for ways to improve our app to meet the needs of our users.
              You can also follow us on social media to stay up to date on the latest news and updates from CTMA. We're active on Facebook, Twitter, and Instagram, and we'd love to connect with you.
              If you're interested in partnering with us or would like to explore advertising opportunities, please email us at <strong>support@ctma.com</strong>. We're open to partnerships and collaborations that align with our mission and values.
              Thank you for choosing <strong>CTMA</strong> as your go-to task management app. We're dedicated to providing you with the best possible user experience and look forward to hearing from you soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
