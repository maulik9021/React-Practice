import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl p-2 m-2'>Contact Us Page</h1>
      <form>
        <input type='text' className='border border-black p-2 m-2' placeholder='name'/>
        <input type='text' className='border border-black p-2 m-2' placeholder='message'/>
        <button className='border border-black p-2 m-2 bg-green rounded-lg'>Submit</button>
      </form>
    </div>
  )
}

export default ContactUs;