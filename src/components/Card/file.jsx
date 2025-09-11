import React from 'react'
import rating from '../../../public/rating.png'
import book1 from '../../../public/book_1.png'
import client1 from '../../../public/client-1.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareIcon from '@mui/icons-material/Share';

function Card() {
  return (
    <div className="flex flex-col md:flex-row border border-gray-300 rounded-2xl overflow-hidden shadow-sm bg-white h-full">

      {/* Book Image */}
      <div className="flex-[1] flex justify-center items-center p-4">
        <div className="h-30 w-27 bg-pink-50 rounded-lg flex items-center justify-center">
          <img src={book1} alt="Book" className="h-25 w-auto object-cover rounded" />
        </div>
      </div>

      {/* Book Info */}
      <div className="flex-[2] flex flex-col justify-between p-4">
        <div>
          <p className="text-gray-500 text-sm">Design Low Book</p>
          <h4 className="text-lg font-bold mt-1">Simple Things You To Save BOOK</h4>
          <p className="text-gray-700 font-bold text-lg mt-2">$30.00</p>

          <div className="flex items-center gap-2 mt-3">
            <img src={client1} alt="Author" className="h-8 w-8 rounded-full object-cover" />
            <span className="text-gray-600 font-medium text-sm">Wilson</span>
          </div>

          <div className="flex mt-2">
            <img src={rating} alt="Rating" className="h-5 w-auto" />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex-1 flex flex-col justify-between items-center p-4">
        <div className="flex gap-2 mb-4">
          <button className="h-9 w-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
            <FavoriteBorderIcon sx={{ color: '#797979', fontSize: 18 }} />
          </button>
          <button className="h-9 w-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
            <ShareIcon sx={{ color: '#797979', fontSize: 18 }} />
          </button>
          <button className="h-9 w-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
            <VisibilityIcon sx={{ color: '#797979', fontSize: 18 }} />
          </button>
        </div>

        <button className="w-full bg-[#FFEFEF] text-[#FF7B6B] font-bold text-sm h-10 rounded-md hover:bg-[#FFDCDC]">
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default Card