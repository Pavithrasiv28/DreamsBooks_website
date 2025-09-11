import React from 'react'
import client1 from '../../../public/client-1.png';
import rating from '../../../public/rating.png'
import book1 from '../../../public/book_1.png';
import './slider.css'

function SliderCard({subtext, title, price, client, bookImg, clientImg, className = "", height = "h-[600px]", width = "w-[360px]",}) {
  return (
    <>
    <div className={`card ${height} ${width} p-[min(1em,2%)] mx-3 ${className}`}>
      <div className='Image_description bg-[#FFEFEF] h-3/6 w-full rounded-lg flex'>
         <div className='w-20 h-full'>
           {/* <p className='bg-[#FF7B6B] text-white rounded-sm w-fit h-fit px-4 py-2 font-bold relative top-5 left-5 z-10 flex justify-center items-center'>-12%</p> */}
         </div>
         <div className='w-60 h-full flex justify-center items-center'>
           <img src={bookImg} alt='book_img' className='scale_img'/>
         </div>
         <div className='w-20 h-full'>

         </div>
      </div>
      <div className=' h-2/5 w-full py-5'>
        <p className='text-[#797979]'>{subtext}</p>
        <h4 className='text-xl font-bold w-60 my-2'>{title}</h4>
        <p className='text-[#797979] font-bold text-[18px]'>{price}</p>

        <div className="w-full h-fit flex items-center rounded-md justify-between">
          <div className="flex items-center gap-2">
            <img src={clientImg} alt="client_img" className="h-8 w-8 rounded-full object-cover" />
            <span className="font-medium text-[#797979] text-md">{client}</span>
          </div>
            <img src={rating} alt="rating" className="h-20 w-20 m-0" />
       </div>

        <div className='w-full'>
          <button className='w-full bg-[#FFEFEF] text-[#FF7B6B] font-bold text-lg h-12 rounded-4xl'>Add To Cart</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default SliderCard