import React from 'react'
import cover from '../Assets/bg1.jpg'
import bg1 from '../Assets/bg1.jpg'
import bg2 from '../Assets/bg2.jpg'
import bg3 from '../Assets/bg3.jpg'
import any from '../Assets/any.jpg'

function Home() {
  return (
    <div id='home'>
      <div className=''>
        <img src={cover} alt='...' height={'500px'} width={'100%'} style={{ position: 'absolute', zIndex: '-1', opacity: '0.7' }} />
        <div className='text-center' style={{ padding: '15% 2%', color: 'black' }}>
          <h1 style={{ fontSize: '75px', fontWeight: '800', backgroundColor: 'wheat' }}>Welcome To CTMA</h1>
          <p style={{ fontSize: '25px', fontWeight: '600', backgroundColor: 'wheat' }}>A collaborative task management system to manage team works and achive success together.</p>
        </div>
      </div>

      <div className='container d-flex justify-content-around' style={{ padding: '5% 2% 10% 2%' }}>
        <div class="card" style={{ width: "18rem" }}>
          <img src={bg1} class="card-img-top" alt="..." height={'180rem'} />
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={bg2} class="card-img-top" alt="..." height={'180rem'} />
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={bg3} class="card-img-top" alt="..." height={'180rem'} />
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>

      <div className='' style={{ padding: '8% 2%', background: 'white' }}>
        <div className='row d-flex justify-content-around align-items-center'>
          <div className='col-5'>
            <h1 style={{ fontSize: '45px', fontWeight: '700' }}>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus aliquam sunt dolorem cumque iste, ad repellat,
              rerum officiis dicta dolores porro odit amet explicabo repudiandae eius magni odio aspernatur vitae.
            </p>
          </div>
          <div className='col-4'>
            <img src={bg2} alt='...' height={'350px'} width={'100%'} />
          </div>
        </div>
      </div>

      <h1 className='text-center' style={{ fontSize: '50px', fontWeight: '700', paddingTop: '8%' }}>Features</h1>
      <div className='container' style={{ padding: '8% 2%' }}>
        <div className='row d-flex justify-content-around'>
          <div className='col-3'>
            <div class="card" style={{ width: "18rem", marginBottom: '4rem' }}>
              <img src={bg1} class="card-img-top" alt="..." height={'180rem'} />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div class="card" style={{ width: "18rem", marginBottom: '4rem' }}>
              <img src={bg2} class="card-img-top" alt="..." height={'180rem'} />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div class="card" style={{ width: "18rem", marginBottom: '4rem' }}>
              <img src={bg3} class="card-img-top" alt="..." height={'180rem'} />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row d-flex justify-content-around'>
          <div className='col-3'>
            <div class="card" style={{ width: "18rem" }}>
              <img src={any} class="card-img-top" alt="..." height={'180rem'} />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div class="card" style={{ width: "18rem" }}>
              <img src={bg1} class="card-img-top" alt="..." height={'180rem'} />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div class="card" style={{ width: "18rem" }}>
              <img src={any} class="card-img-top" alt="..." height={'180rem'} />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='' style={{ padding: '8% 2%', marginBottom: '10%', background: 'white' }}>
        <div className='row d-flex justify-content-around align-items-center'>
          <div className='col-4'>
            <img src={bg1} alt='...' height={'350px'} width={'100%'} />
          </div>
          <div className='col-5'>
            <h1 style={{ fontSize: '45px', fontWeight: '700' }}>Connect With Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus aliquam sunt dolorem cumque iste, ad repellat,
              rerum officiis dicta dolores porro odit amet explicabo repudiandae eius magni odio aspernatur vitae.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
