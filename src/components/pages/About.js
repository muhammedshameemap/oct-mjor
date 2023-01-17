import React from 'react'
import Vmc from '../inc/Vmc'
function About() {
  return (<>
   <section className='py-4 bg-info'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 my-auto'>
          <h4>About us</h4>
        </div>
        <div className='col-md-8 my-auto'>
          <h6 className='float-end'>
            Home /  About us
          </h6>
        </div>
      </div>
    </div>

   </section>

   <section className='section bg-light border-bottom'>
   <div className='container'>
    <h6 className='main-heading'>Our Company</h6>
    <div className='underline'></div>
    <p>lorem ipsum is simply
In Memoization, you store the expensive function calls in a cache and call back from there if exist when needed again. This is a top-down approach, and it has extensive recursive calls. In Dynamic Programming (Dynamic Tables), you break the complex problem into smaller problems and solve each of the problems once.</p>
   </div>
   </section>
   <Vmc/>
   </>
  )
}

export default About;
