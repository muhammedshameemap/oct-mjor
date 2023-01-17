import React from 'react'

function Contact() {
  return (
   <>
      <section className='py-4 bg-info'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 my-auto'>
          <h4>Contact us</h4>
        </div>
        <div className='col-md-8 my-auto'>
          <h6 className='float-end'>
            Home /  Contact us
          </h6>
        </div>
      </div>
    </div>

   </section>
   <section className='section'>
    <div className='continer '>
      <div className='card shadow card1' >
        <div className='card-body border-right'>
         <div className='row'>
          <div className='col-md-6'>
          <h6>Contact Form</h6>
          <hr/>
          <div className='form-group'>
            <label className='mb-1'>Full Name</label>
            <input className='form-control' type='text' placeholder='Enter your name'></input> 
          </div>
          <div className='form-group'>
            <label className='mb-1'>Phone number</label>
            <input className='form-control' type='tel' placeholder='Enter your contact'></input> 
          </div>
          <div className='form-group'>
            <label className='mb-1'>E-mail</label>
            <input className='form-control' type='email' placeholder='Enter your email'></input> 
          </div>
          <div className='form-group'>
            <label className='mb-1'>Message</label>
            <textarea rows={3} className='form-control' placeholder='Type your message...'></textarea>
          </div>
          <div className='form-group py-3'>
          <button type="button"className='btn btn-primary shadow'>Send</button>
          </div>
          </div>
          <div className='col-md-6 border-start'>
          <h5 className='main-heading'>Address Information</h5>
          <div className='underline'></div>
          <p>
            XXX, Byrathi, Karnataka, Bangalore-56XXXX, INDIA
          </p>
          <p>
            (+91) XXXXXXXXXX
          </p>
          <p>
            email@domain.com
          </p>
          </div>
         </div>
        </div>
      </div>
    </div>
   </section>
   </>
  )
}

export default Contact;
