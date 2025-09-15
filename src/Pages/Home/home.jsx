import React from 'react'
import './home.css'
import { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardComponent from '../../components/Category_card/card.jsx'
import heroImg from '../../../public/hero-girl.png'
import hero_book from '../../../public/book_lower.png'
import DreambooksLogo from '../../../public/dream-book-logo.png'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import delivery from '../../../public/delivery-truck.png'
import discount from '../../../public/price-tag.png'
import support from '../../../public/customer-support.png'
import payment from '../../../public/check.png'
import SliderCard from '../../components/Slider_card/slider.jsx'
import book1 from '../../../public/book_1.png'
import book2 from '../../../public/book_2.png'
import book3 from '../../../public/book_3.png'
import book4 from '../../../public/book_4.png'
import "@fortawesome/fontawesome-free/css/all.min.css";
import book5 from '../../../public/book_5.png'
import client1 from '../../../public/client-1.png'
import client2 from '../../../public/client-2.png'
import client3 from '../../../public/client-3.png'
import client4 from '../../../public/client-4.png'
import client5 from '../../../public/client-5.png'
import book_icon from '../../../public/icon-24.svg'
import book from  '../../../public/parallax_book.png'
import line from '../../../public/line-shape_parallax.png'
import cta_book from '../../../public/cta-book.png';
import Card from '../../components/Card/file.jsx'
import NewsCards from '../../components/News_cards/card.jsx'
import Testimonials from '../../components/Testimonal/file.jsx'
import shape from '../../../public/shape-img.png'
import author1 from '../../../public/author1.jpg'
import author2 from '../../../public/author2.jpg'
import author3 from '../../../public/author3.jpg'
import author4 from '../../../public/author4.jpg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import paypal from '../../../public/paypal.png'
import visa from '../../../public/visa.png'
import card_ from '../../../public/card.png'
import stripe from '../../../public/stripe.png'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { motion, AnimatePresence} from 'framer-motion';


const PrevArrow = ({ sliderRef, hover }) => {
  return (
    <div
      className={`custom-arrow left ${hover ? "show" : ""}`}
      onClick={() => sliderRef.current.slickNext()}
    >
      <ArrowBackIcon style={{ color: "white" }} />
    </div>
  );
};

const NextArrow = ({ sliderRef, hover }) => {
  return (
    <div
      className={`custom-arrow right ${hover ? "show" : ""}`}
      onClick={() => sliderRef.current.slickPrev()}
    >
      <ArrowForwardIcon style={{ color: "white" }} />
    </div>
  );
};


function HomeComponent() {
    // const [isFixed, setIsFixed] = useState(false);
    // const [toparrow, setToparrow] = useState(false);
    const [ShowScrollBtn, setShowScrollBtn] = useState(false);
    const sliderRef = useRef(null);
    const [hover, setHover] = useState(false);


  useEffect(() => {
  const handleScroll = () => {
    setShowScrollBtn(window.scrollY > 300);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const card =[
    {text: 'Return & Refund', subText: 'Money back guarantee', icon:delivery},
    {text: 'Secure Payment', subText: '30% off by subscribing', icon:payment},
    {text: 'Quality Support', subText: 'Always online 24/7', icon:support},
    {text: 'Daily Offers', subText: '20% off by subscribing', icon:discount},
  ]

  const authors = [
  {
    name: "Alice Johnson",
    image: author1,
    books: ["10 Published Books"],
  },
  {
    name: "Brian Smith",
    image: author2,
    books: ["07 Published Books"],
  },
  {
    name: "Clara Davis",
    image: author3,
    books: ["07 Published Books"],
  },
  {
    name: "Kawser Ahmed",
    image: author4,
    books: ["04 Published Books"],
  },
  {
    name: "Brooklyn Simmons",
    image: author3,
    books: ["15 Published Books"],
  },
];


  var slider = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    // centerMode: true,
    // centerPadding: "0px",
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1326,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // initialSlide: 2
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    const authorsSettings = {
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


  const testimonials = [
  {
    name: "Dianne Russell",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 3,
    text: "The idea that we can choose to see opportunities rather than limitations is a game-changer. The book encourages readers to step out of their comfort zones and embrace a more positive outlook on life.",
    company: "amazon",
  },
  {
    name: "Ronald Richards",
    role: "Marketing Coordinator",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    rating: 3,
    text: `"The Art of Possibility" by Rosamund Stone Zander and Benjamin Zander is a transformative read that challenges conventional thinking and opens up new possibilities. As a reader, I found myself profoundly.`,
    company: "envato",
  },
  {
    name: "Dianne Russell",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 3,
    text: "The idea that we can choose to see opportunities rather than limitations is a game-changer. The book encourages readers to step out of their comfort zones and embrace a more positive outlook on life.",
    company: "amazon",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

  return (
    <>
     <div className='Home_container h-[100dvh] w-full'>
        <div className={`navigation h-[12dvh] w-full bg-white p-1 box-border items-center flex justify-around shadow-[0_4px_15px_-1px_rgba(0,0,0,0.1)] transition-transform duration-1000 ease-in-out ${ShowScrollBtn ? "fixed z-50 top-0 opacity-100 translate-y" : "translate-y-0"}`}>
            <div className='logo h-full w-48'>
              <img src={DreambooksLogo} height='130px' width='150px'/>
            </div>

            <div className='h-full w-lg'>
               <nav className='h-full w-full'>
                  <ul className=' h-full w-full flex items-center justify-between common_font text-[17px] cursor-pointer'>
                    <li>Home <KeyboardArrowDownOutlinedIcon fontSize='small'/></li>
                    <li>Shop <KeyboardArrowDownOutlinedIcon fontSize='small'/></li>
                    <li>Pages <KeyboardArrowDownOutlinedIcon fontSize='small'/></li>
                    <li>Blog <KeyboardArrowDownOutlinedIcon fontSize='small'/></li>
                    <li>Contact</li>
                 </ul>
               </nav>
            </div>
           <div className='cart'>
              <ShoppingBagOutlinedIcon/>
           </div>
        </div>

         {/* Hero Section */}
        <section className="Hero-section h-fit w-full flex items-center p-[min(3rem,5%)] overflow-hidden bg-gradient-to-r from-[#1e1e2f] to-[#2e1a1f] relative">
          <div className="hero_content flex flex-row flex-wrap 1112px:flex-col 1112:justify-centre items-center justify-evenly w-full">
  
             {/* Content */}
             <div transition={{ duration: 0.8, ease: 'easeOut' }} className="text_content lg:w-[62dvw] md:w-[70dvw] lg:px-4">
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, ease: 'easeOut' }} className="font-medium text-[clamp(1.1rem,1.7vw,1.5rem)] text-[#FF7B6B]">Editor Choice Best Books
                <span className="ml-3 px-2.5 py-1 bg-black text-white rounded-2xl text-[15px] font-bold">Up To 50% Off</span></motion.p>

                <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, ease: 'easeOut' }} className="mt-4 text-[clamp(2rem,4.4vw,4.5rem)] font-[700] leading-tight text-white">Your Next Favourite Book Is Just A <span className="text-[#FF7B6B]">Click Away</span></motion.h1>

                <motion.p initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, ease: 'easeOut' }} className="mt-4 max-w-2xl text-white">Sed ac arcu sed felis vulputate molestie. Nullam at urna in velit finibus vestibulum euismod A Urna. Sed quis aliquam leo. Duis iaculis lorem mauris, et convallis du</motion.p>

                <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-[370px] h-fit p-[min(10vw,2%)] flex flex-wrap justify-between mt-10">
                    <button className="relative overflow-hidden h-fit py-3 px-5 bg-white rounded-4xl font-bold m-1 group hover:text-white">
                      <span className="relative z-10 flex items-center">Shop Now <ArrowRightAltOutlinedIcon fontSize="medium" /></span>
                      <span className="absolute left-0 bottom-0 w-0 h-full bg-[#FF7B6B] transition-all duration-300 group-hover:w-full z-0"></span>
                   </button>

                    <button className="relative overflow-hidden h-fit py-3 px-5 bg-[#FF7B6B] text-white rounded-4xl font-bold m-1 group hover:text-black transition-all duration-700 ">
                      <span className="relative z-10 flex items-center">View All Books <ArrowForwardOutlinedIcon fontSize="medium" /></span>
                      <span className="absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-700 group-hover:w-full z-0"></span>
                   </button>
                </motion.div>

                <div className='book_animate relative top-50'>
                  <img src={hero_book} alt="book_image"/>
                </div>
                </div>

             {/* Image */}
            <div className="flex justify-center transform relative right-20">
               <img src={heroImg} alt="Hero"
                className=" h-[830px] w-[400px] scale-180 
                lg:h-[830px] lg:w-[400px] lg:scale-180
                md:h-[650px] md:w-[320px] md:scale-180
                sm:h-[450px] sm:w-[220px] sm:scale-180
                object-contain 
                relative transform translate-y-10
                transition-all duration-500"/>
            </div>
            </div>
        </section>

        <AnimatePresence>
        {ShowScrollBtn && (
        <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 70 }}
        transition={{ duration: 0.8 }}
        className='w-14 h-14 rounded-2xl bg-[#FF7B6B] flex justify-center items-center left-315 top-135 fixed'
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
        <KeyboardArrowUpIcon fontSize='large' sx={{color:'white', fontSize:35}}/>
        </motion.div>
        )}
        </AnimatePresence>

        
        {/* Cards Section */}
        <section className='cards_intro h-fit w-full py-30'>
           <motion.div variants={containerVariants} whileInView="visible" viewport={{ once: true, amount: 0.3 }} initial="hidden" className='w-[80dvw] h-fit bg-[#FFEFEF] m-auto rounded-2xl flex p-[min(1.2rem,4%)] flex-wrap justify-between'>
              {card.map((idx, item) => (
              <motion.div key={item} variants={cardVariants} transition={{ duration: 1}} className='h-30 w-73 flex items-center justify-between m-1'>
                  <div className='h-22 w-22 bg-[#FF7B6B] rounded-md flex items-center justify-center'>
                     <img src={idx.icon}/>
                  </div>
                  <div className='max-w-2xl ml-5'>
                     <h3 className='text-xl font-bold'>{idx.text}</h3>
                     <p className='text-[#797979] text-[18px] font-medium'>{idx.subText}</p>
                  </div>
              </motion.div>
              ))}
           </motion.div>
        </section>

        {/* Featured Books Section*/}
        <section className='carousal w-full h-fit p-10'>
          <div className='w-[80dvw] h-fit m-auto'>
            <div className='Featured flex justify-between flex-wrap'>
                <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, ease: 'easeOut' }}  className='text-[clamp(1.6rem,3.2vw,3rem)] font-bold'>Featured Books</motion.h1>
                <button className="relative overflow-hidden h-fit py-3 px-5 bg-[#FF7B6B] text-white rounded-4xl font-bold m-1 group">
                  <span className="relative z-10 flex items-center">Explore More <ArrowForwardOutlinedIcon fontSize="medium" /></span>
                  <span className="absolute left-0 bottom-0 w-0 h-full bg-black transition-all duration-400 ease-in group-hover:w-full z-0"></span>
               </button>
            </div>
            <div className='lg:mt-10 overflow-hidden'>
              <Slider {...settings}>
                 <SliderCard bookImg={book1} subtext={"Design Low Book"} title={"How to Deal with very bad Book"} price={"$39.00"} client={"Esther"} clientImg={client1}/>
                 <SliderCard bookImg={book2} subtext={"Design Low Book"} title={"The Hidden Mystery Behind"} price={"$29.00"} client={"Hawkings"} clientImg={client2}/>
                 <SliderCard bookImg={book3} subtext={"Design Low Book"} title={"Simple Things You to Save BOOK"} client={"Wilson"} price={"$30.00"} clientImg={client3}/> 
                 <SliderCard bookImg={book4} subtext={"Design Low Book"} title={"Flovely and Unicorn Erna"} price={"$25.00"} client={"Alexander"} clientImg={client4}/>
                 <SliderCard bookImg={book5} subtext={"Design Low Book"} title={"Qply Gpad with Retina Sisplay"} price={"$19.00"} client={"(Author)Albert"} clientImg={client5}/> 
              </Slider>
            </div>
          </div>
        </section>


        {/* Top categories Section*/}
        <section className='Top_Categories w-full h-150 flex justify-center items-center flex-col'>
           <div  className='h-fit w-[60dvw] p-[min(2.5em,4%)] flex flex-col justify-center items-center'>
              <img src={book_icon} alt='Book_icon'/>
              <motion.h3 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, ease: 'easeOut' }} className=' text-white text-[clamp(1.5rem,3.2vw,3rem)] font-bold lg:mt-2 text-center'>Top Categories Book</motion.h3>
           </div>
           <div className='h-70 w-[80dvw] overflow-hidden'>
              <Slider {...slider}>
                <CardComponent image={book4} title={"Unicorn Erna"}/>
                <CardComponent image={book2} title={"castle in the sky"}/>
                <CardComponent image={book5} title={"UX Research"}/>
                <CardComponent image={book1} title={"Safe Home"}/>
                <CardComponent image={book3} title={"Grow Flower"}/>
              </Slider>
           </div>
        </section> 


        {/* Readit Top Books */}
        <section className='carousal w-full h-fit py-30'>
          <div className='w-[80dvw] h-fit m-auto'>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className='Featured flex justify-between flex-wrap'>
                <motion.h1 variants={cardVariants} transition={{ duration: 1 }} className='text-[clamp(1.6rem,3.2vw,3rem)] font-bold'>Readit Top Books</motion.h1>
                <motion.button variants={cardVariants} transition={{ duration: 1 }} className="relative overflow-hidden h-fit py-3 px-5 bg-[#FF7B6B] text-white rounded-4xl font-bold m-1 group">
                  <span className="relative z-10 flex items-center">Explore More <ArrowForwardOutlinedIcon fontSize="medium" /></span>
                  <span className="absolute left-0 bottom-0 w-0 h-full bg-black transition-all duration-400 ease-in group-hover:w-full z-0"></span>
                </motion.button>

            </motion.div>
            <div className='lg:mt-10 flex flex-wrap justify-evenly'>
              {/* <Slider {...settings}> */}
                 <SliderCard bookImg={book1} subtext={"Design Low Book"} title={"How to Deal with very bad Book"} price={"$39.00"} client={"Esther"} clientImg={client1} width='w-[247px]'/>
                 <SliderCard bookImg={book2} subtext={"Design Low Book"} title={"The Hidden Mystery Behind"} price={"$29.00"} client={"Hawkings"} clientImg={client2} width='w-[247px]'/>
                 <SliderCard bookImg={book3} subtext={"Design Low Book"} title={"Simple Things You to Save BOOK"} client={"Wilson"} price={"$30.00"} clientImg={client3} width='w-[247px]'/> 
                 <SliderCard bookImg={book4} subtext={"Design Low Book"} title={"Flovely and Unicorn Erna"} price={"$25.00"} client={"Alexander"} clientImg={client4} width='w-[247px]'/>
                 {/* <SliderCard bookImg={book5} subtext={"Design Low Book"} title={"Qply Gpad with Retina Sisplay"} price={"$19.00"} client={"(Author)Albert"} clientImg={client5} width='w-[240px]'/>  */}
              {/* </Slider> */}
            </div>
          </div>
        </section>


        {/* (Parallax) Discount */}
        <section className='h-[80dvh] w-full py-[min(5em, 8%)]'>
          <div className="discount h-[95%] w-[80%] m-auto rounded-3xl overflow-hidden flex flex-col lg:flex-col justify-center items-center">
          {/* Left book */}
          <img src={book} className="hidden lg:block lg:relative lg:top-9 lg:self-start lg:ml-0"/>
         {/* Main content */}

         <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="h-fit w-full flex flex-col items-center justify-center text-center lg:relative lg:bottom-5">
         {/* Top text with line */}
         <motion.div variants={cardVariants} transition={{ duration: 1 }} className="flex flex-col items-center">
         <p className="text-white text-2xl font-semibold">Get 25%</p>
         <img src={line} alt="line" className="w-24 mt-1" />
         </motion.div>

        {/* Main heading */}
        <motion.h2 variants={cardVariants} transition={{ duration: 1 }} className="font-bold text-[clamp(2rem,4vw,4rem)] text-white leading-tight mt-4">
          Discount In All <br /> Kind Of Super Selling</motion.h2>

        {/* Button */}
        <motion.button variants={cardVariants} transition={{ duration: 1 }}className="relative overflow-hidden flex items-center gap-2 mt-6 py-3 px-5 bg-white text-black rounded-full font-semibold group hover:text-white">
          <span className="relative z-10 flex items-center gap-2">Shop Now <ArrowForwardOutlinedIcon fontSize="medium" /></span>
          {/* Expanding layer */}
          <span className="absolute left-0 bottom-0 w-0 h-full bg-black transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
        </motion.button>

        </motion.div>

        {/* Right book */}
        <div className="w-[90%] h-fit m-auto text-right hidden lg:block">
         <img src={cta_book} className="inline-block relative bottom-10" />
       </div>

      </div>
      </section>


      {/* Top Ratting Books */}
      <section className='rating_container h-fit w-full my-20 flex justify-center items-center py-[min(12rem,5%)]'>
        <div className='h-fit w-[80dvw] bg-white rounded-2xl p-[min(2rem,5%)] box-border'>
           <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className='Featured flex justify-between flex-wrap'>
                <motion.h1 variants={cardVariants} transition={{ duration: 1 }} className='text-[clamp(1.6rem,2.2vw,3rem)] font-bold'>Top Rating Books</motion.h1>
                <motion.button variants={cardVariants} transition={{ duration: 1 }} className="h-fit py-3 px-5 bg-[#FF7B6B] text-white rounded-4xl font-bold m-1">
                 View More Books<ArrowForwardOutlinedIcon fontSize="medium"/>
                </motion.button>
            </motion.div>

          <div className="w-full p-5 grid grid-cols-1 lg:grid-cols-2 gap-5 ">
              <Card />
              <Card />
          </div>
        </div>
      </section>


         {/* Top Selling Books */}
         <section className='carousal w-full h-fit p-10'>
           <div className='w-[80dvw] h-fit m-auto'>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className='Featured flex justify-between flex-wrap'>
                <motion.h1 variants={cardVariants} transition={{ duration: 1 }} className='text-[clamp(1.6rem,3.2vw,3rem)] font-bold'>Top Selling Books</motion.h1>
                <motion.button variants={cardVariants} transition={{ duration: 1 }} className="relative overflow-hidden h-fit py-3 px-5 bg-[#FF7B6B] text-white rounded-4xl font-bold m-1 group">
                  <span className="relative z-10 flex items-center">Explore More <ArrowForwardOutlinedIcon fontSize="medium" /></span>
                  <span className="absolute left-0 bottom-0 w-0 h-full bg-black transition-all duration-400 ease-in group-hover:w-full z-0"></span>
                </motion.button>
            </motion.div>
            <div className='lg:mt-10 overflow-hidden'>
              <Slider {...settings}>
                 <SliderCard bookImg={book1} subtext={"Design Low Book"} title={"How to Deal with very bad Book"} price={"$39.00"} client={"Esther"} clientImg={client1}/>
                 <SliderCard bookImg={book2} subtext={"Design Low Book"} title={"The Hidden Mystery Behind"} price={"$29.00"} client={"Hawkings"} clientImg={client2}/>
                 <SliderCard bookImg={book3} subtext={"Design Low Book"} title={"Simple Things You to Save BOOK"} client={"Wilson"} price={"$30.00"} clientImg={client3}/> 
                 <SliderCard bookImg={book4} subtext={"Design Low Book"} title={"Flovely and Unicorn Erna"} price={"$25.00"} client={"Alexander"} clientImg={client4}/>
                 <SliderCard bookImg={book5} subtext={"Design Low Book"} title={"Qply Gpad with Retina Sisplay"} price={"$19.00"} client={"(Author)Albert"} clientImg={client5}/> 
              </Slider>
            </div>
          </div>
        </section>

         {/* Testimonals */}
        <section className='testimonals w-full h-fit'>
            <Testimonials testimonials={testimonials}/>
        </section>


        {/* Featured Author */}
        <section className='Featured-author h-fit w-full p-[min(2rem,5%)] flex justify-center items-center'>
        <div 
          className='w-[80dvw] h-fit flex flex-col justify-between relative group'
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className='Featured_content text-center'>
            <motion.h2 variants={cardVariants} transition={{ duration: 1 }} className='text-[clamp(2rem,5vw,3rem)] font-bold'>Featured Author</motion.h2>
            <motion.p variants={cardVariants} transition={{ duration: 1 }} className='text-[#797979] leading-7'>
              Interdum et malesuada fames ac ante ipsum primis in faucibus.<br/>
              Donec at nulla nulla. Duis posuere ex lacus
            </motion.p>
          </motion.div>

          <Slider ref={sliderRef} {...authorsSettings} className="mt-6">
            {authors.map((author, index) => (
              <div key={index} className='w-full h-fit mt-2'>
                <div className='h-75 w-65 shadow-xl bg-white rounded-xl p-[min(2rem,5%)] flex flex-col justify-between'>
                  <div className='h-40 flex items-center justify-center relative'>
                    <img src={shape} className='relative z-10 top-2' />
                    <img src={author.image} className='absolute' />
                  </div>
                  <div className='h-25 border-1 border-dashed border-[#FF7B6B] rounded-xl flex flex-col justify-center items-center'>
                    <h6 className='font-bold my-1'>{author.name}</h6>
                    <p className='text-[#797979] text-sm font-medium'>{author.books}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <PrevArrow sliderRef={sliderRef} hover={hover} />
          <NextArrow sliderRef={sliderRef} hover={hover} />
        </div>
      </section>

      {/* Lates News */}
      <section className='rating_container py-20'>
         <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className='Featured_content text-center'>
            <motion.h2 variants={cardVariants} transition={{ duration: 1 }} className='text-[clamp(2rem,5vw,3rem)] font-bold'>Our Latest News</motion.h2>
            <motion.p variants={cardVariants} transition={{ duration: 1 }} className='text-[#797979] leading-7'>
              Interdum et malesuada fames ac ante ipsum primis in faucibus.<br/>
              Donec at nulla nulla. Duis posuere ex lacus
            </motion.p>
          </motion.div>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className='h-fit w-[80dvw] flex m-auto flex-wrap justify-evenly'>
              <NewsCards variants={cardVariants}/>
              <NewsCards variants={cardVariants}/>
              <NewsCards variants={cardVariants}/>
              <NewsCards variants={cardVariants}/>
            </motion.div>
      </section>

      <footer className='h-fit w-full flex flex-col items-center justify-center pt-[min(5rem,6%)]'>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className='h-fit w-[85dvw] flex flex-wrap'>
          <motion.div variants={cardVariants} transition={{ duration: 1 }} className='h-fit w-80 flex flex-col items-left'>
            <img src={DreambooksLogo} className='h-25 w-50'/>
            <p className='text-[#797979] mt-2'>Got Questions? Call us</p>
            <h4 className='font-medium text-[22px] mb-5'>+670 413 90 762</h4>
            <p className='text-[#797979] text-[18px] my-2'><MarkunreadOutlinedIcon sx={{color:'black'}}/> readit@gmail.com</p>
            <p className='text-[#797979] text-[18px] w-50 my-1'><LocationOnOutlinedIcon sx={{color:'black'}}/>79 Sleepy Hollow st. Jamaica, New York 132</p>
          </motion.div>
          <motion.div variants={cardVariants} transition={{ duration: 1 }} className='h-100 w-65'>
             <h4 className='font-medium text-2xl mb-6'>Customer Support</h4>
             <ul className='list-disc h-40 w-fit flex flex-col justify-between text-[#797979] relative left-5'>
              <li>Store List</li>
              <li>Opening Hours</li>
              <li>Contact Us</li>
              <li>Return Policy</li>
             </ul>
          </motion.div>
          <motion.div variants={cardVariants} transition={{ duration: 1 }} className='h-100 w-65'>
             <h4 className='font-medium text-2xl mb-6'>Categories</h4>
             <ul className='list-disc h-40 w-fit flex flex-col justify-between text-[#797979] relative left-5'>
              <li>Novel Books</li>
              <li>Poetry Books</li>
              <li>Political Books</li>
              <li>History Books</li>
             </ul>
          </motion.div>
          <motion.div variants={cardVariants} transition={{ duration: 1 }} className='h-100 w-80'>
            <h4 className='font-medium text-2xl mb-6'>Subscribe</h4>
            <p className='text-[#797979] text-[18px] w-70'>Our conversation is just getting started</p>
            <div className='mt-3'>
              <input placeholder='Enter your Email' className='h-15 w-45 border-1 border-gray-200 rounded-md text-sm text-center shadow-sm'/>
              <button className='subs_btn h-15 w-25 bg-[#FF7B6B] rounded-sm text-white'>Subscribe</button>
            </div>
            <div className="mt-7">
            <h4 className="mb-4 text-lg font-medium">Follow Us On</h4>
            <div className="flex gap-4">
               <div className="h-10 w-10 bg-white shadow-md rounded-md flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer">
          <i className="fa-brands fa-facebook-f"></i>
        </div>
        <div className="h-10 w-10 bg-white shadow-md rounded-md flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer">
          <i className="fa-brands fa-twitter"></i>
        </div>
        <div className="h-10 w-10 bg-white shadow-md rounded-md flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer">
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
        <div className="h-10 w-10 bg-white shadow-md rounded-md flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer">
          <i className="fa-brands fa-vimeo-v"></i>
        </div>
      </div>
    </div>
          </motion.div>
        </motion.div>
        <div className='w-[85dvw] border-t-1 border-gray-200 py-7 flex justify-between'>
          <p className='text-[#797979]'>@All Rights Reserved 2025 By<span className='text-[#FF7B6B]'> Readit.</span></p>
          <div className='flex'>
            <img src={paypal}/>
            <img src={visa}/>
            <img src={card_}/>
            <img src={stripe} />
          </div>
        </div>
      </footer>
     </div>
    </>
  )
}

export default HomeComponent
