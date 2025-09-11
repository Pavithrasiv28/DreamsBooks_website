import React from 'react'
import book1 from '../../../public/book_1.png'
import './card.css'

function CardComponent({title, image}) {
  return (
    <> 
    <div className='w-fit h-fit flex flex-col justify-center items-center'>
     <div className='card_container h-53 w-62 bg-white rounded-xl flex justify-center items-center flex-col m-3'>
        <div className='h-48 w-full flex justify-center items-center'>
          <img src={image} className='h-35 w-27' alt='image'/>
        </div>
        <div className='btn h-fit w-fit px-3 py-2 bg-[#FF7B6B] flex justify-center items-center text-white font-bold rounded-md relative top-4'>25 books</div>
     </div>
     <p className='m-4 text-white font-bold text-lg'>{title}</p>
    </div>
    </>
  )
}

export default CardComponent