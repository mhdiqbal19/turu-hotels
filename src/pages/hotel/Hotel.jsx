import './hotel.css'
import Navbar from './../../components/navbar/Navbar'
import Header from './../../components/header/Header'
import Footer from './../../components/footer/Footer'
import MailList from './../../components/mailList/MailList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleXmark, faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'



export const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const photo = [
    {
      src: "https://media.istockphoto.com/photos/happy-hotel-clerks-are-welcoming-professional-at-counter-picture-id1164435677?k=20&m=1164435677&s=612x612&w=0&h=P-2oRLVtEeZOCPZN8mF-hGpPWiUh0VJbEB4PWGQZ4Ro="
    },
    {
      src: "https://media.istockphoto.com/photos/entering-hotel-room-picture-id512882668?k=20&m=512882668&s=612x612&w=0&h=Ykm_LB72Ke0WnMyv6h_r6Z8LG3W3xEhgzmNbg-hK-qE="
    },
    {
      src: "https://media.istockphoto.com/photos/portrait-of-tourist-woman-raised-her-hands-and-standing-nearly-window-picture-id1199804796?k=20&m=1199804796&s=612x612&w=0&h=N_dOeQSlNhZ0T8p6b-Nr7AfD8cjH8LQEVlVHWbp6VE0="
    },
    {
      src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1561501878-aabd62634533?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1486591038957-19e7c73bdc41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
  ]

  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
    }
    setSlideNumber(newSlideNumber)
  }
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
            <div className="sliderWrapper">
              <img src={photo[slideNumber].src} className='slideImg' alt="" />
            </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
        </div>}
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className='bookNow'>Reserve or Book Now</button>
          <h1 className='hotelTitle'>Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Jakarta Pusat 101 Indonesia</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHightlight">
            Book a stay over Rp500.000,- at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photo.map((photo, i)=> (
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} className="hotelImg" alt="" />
                
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className='hotelTitle'>Stay in the heart of Jakarta</h1>
              <p className='hotelDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corrupti rerum ut porro aliquam, nobis laudantium amet unde, ab numquam nemo debitis at quod illum beatae assumenda officiis minima nam soluta explicabo animi. Temporibus autem veniam veritatis, obcaecati dicta deleniti suscipit ex eius iste consequuntur. Quibusdam ea soluta voluptatibus omnis.</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay</h1>
              <span>Located in the real heart of Jakarta, this property has an excellent location score of 9.8!</span>
              <h2>
                <b>Rp0,-</b> (9 night)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      <MailList/>
      <Footer/>
      </div>
    </div>
  )
}
