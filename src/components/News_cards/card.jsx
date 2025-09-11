import React from 'react'
import news from '../../../public/news.jpg'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function NewsCards() {
  return (
    <div className='h-95 w-65 border-1 border-gray-300 rounded-2xl bg-white p-[min(1rem,2%)] m-1'>
      <div>
        <img src={news} />
      </div>
      <div className='flex justify-between mt-5'>
        <p className='text-sm w-20 text-[#797979]'><CalendarMonthOutlinedIcon sx={{fontSize:17, color:'#FF7B6B'}}/>&nbsp;Feb 10, 2024</p>
        <p className='text-sm w-20 text-[#797979]'><PersonOutlinedIcon sx={{fontSize:17, color:'#FF7B6B'}}/>&nbsp;By Admin</p>
      </div>
      <h3 className='font-bold text-lg mt-4'>Montes Suspendisse Massa Curae Malesueaeda</h3>
      <p className='text-[#797979] mt-4'>Read More&nbsp;&nbsp;<ArrowForwardIcon sx={{fontSize:20}}/></p>
    </div>
  )
}

export default NewsCards