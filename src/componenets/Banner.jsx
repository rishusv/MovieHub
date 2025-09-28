import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[50vh] bg-cover bg-center flex items-end' style={{backgroundImage: "url('https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg')"}}>

      <div className='text-white w-full text-center text-2xl md:text-4xl font-bold p-4 bg-black bg-opacity-50'>
        Your Movie Title
      </div>
    </div>
  )
}

export default Banner
