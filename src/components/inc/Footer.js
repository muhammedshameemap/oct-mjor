import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className='section footer bg-dark text-white'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <h4>Company Information</h4>
                    <hr/>
                    <p className='text-white'>In computing, memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur aga
                    </p>
                </div>
                <div className='col-md-4'>
                    <h6>Quick Links</h6>
                    <hr/>
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/About">About us </Link></div>
                    <div><Link to="/Contact">Contact us</Link></div>
                    <div><Link to="/">Blog</Link></div>
                </div>
                <div className='col-md-4'>
                    <h6>Contact Information</h6>
                    <hr/>
                    <div><p className='text-white mb-1'>#26, Bangalore, Karnataka, India, Byrathi</p></div>
                    <div><p className='text-white mb-1'>+91 XXXXXXXXXX</p></div>
                    <div><p className='text-white mb-1'>+91 XXXXXXXXXX</p></div>
                    <div><p className='text-white mb-1'>email@domain.com</p></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
