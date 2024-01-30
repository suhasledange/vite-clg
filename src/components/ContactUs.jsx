import React from 'react'

const ContactUs = () => {
  return (
    <div className='lg:flex-1 w-full h-full'>
       
    <div className='space-y-10 border border-gray-300 bg-white p-5 shadow h-full'>

       <div>
          <h1 className='text-xl font-bold mb-6'>Our Contact Details : </h1>
          <div className='space-y-1'>

          <p className='text-lg font-medium'>Address : <span className='font-normal text-base' >Sangamner – 422608 Dist. Ahmednagar (Maharashtra-India)</span> </p>

          <p className='text-lg font-medium'>Tel : <span className='font-normal text-base' >(02425) 259015/16/17/18 259148(P)</span> </p>
          
          <p className='text-lg font-medium'>E-mail : <span className='font-normal text-base' >principal@avcoe.org</span> </p>
        
          <p className='text-lg font-medium'> Admission Contact Helpline : <span className='font-normal text-base' >18002339829</span> </p>
       </div>
       </div>

       <div className='map h-full'>
       <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.3105208456527!2d74.18287627499176!3d19.614017981704535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd0070e7eb3683%3A0x812069ad0d4f7f8f!2sAmrutvahini%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1706626829037!5m2!1sen!2sin" allowfullscreen="" loading="lazy" height="550" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>
     </div>
    </div>
  )
}

export default ContactUs
