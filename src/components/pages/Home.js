import React from 'react'
import Slider from '../inc/Slider'
import Vmc from '../inc/Vmc'
import {Link} from 'react-router-dom'
import img1 from '../images/img1.jpg'
import Hero from '../inc/Hero'
function Home() {
  return (
    <>
    <Hero/>
    <Slider/>
    <section className='section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h3 className='main-heading'>Our Company</h3>
            <div className='underline mx-auto'></div>
            <p>Our company makes dreams true.<br/>Travel with TVRF to most authentic and famous tourist destinations in budget.</p>
            <Link to="/About" className="btn btn-warning shadow">Read More</Link>
          </div>
        </div>
      </div>
    </section>
    {/* our visions,missions and values */}
    <Vmc/>
    {/* our services section */}
    


    <div>
      <section className='section  border-top'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-5 text-center'>
            <h3 className='main-heading'>Our Services</h3>
            <div className='underline mx-auto'></div>
            <div className='row floating'>
            <div className='col-md-4 text-center '>
              <div className='card shadow'>
                <img src={img1} alt=""/>
                <div className='card-body'>
                  <h6>Service1</h6>
                  <p>We provide best accomodation facilities possible.</p>
                  <Link to="/Services" className='btn btn-link '>Read more</Link>
                </div>
              </div>
              
            </div>
            <div className='col-md-4 text-center '>
              <div className='card shadow'>
                <img src={img1} alt=""/>
                <div className='card-body'>
                  <h6>Service1</h6>
                  <p>We provide best accomodation facilities possible.</p>
                  <Link to="/Services" className='btn btn-link '>Read more</Link>
                </div>
              </div>
              
            </div>
            <div className='col-md-4 text-center'>
              <div className='card shadow'>
                <img src={img1} alt=""/>
                <div className='card-body'>
                  <h6>Service1</h6>
                  <p>We provide best accomodation facilities possible.</p>
                  <Link to="/Services" className='btn btn-link '>Read more</Link>
                </div>
              </div>
              
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>    
    </div>
  

export default vmc

    </>
  )
}

export default Home;
