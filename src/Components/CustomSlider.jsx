import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"


import { Navigation, Pagination } from "swiper/modules"

const CustomSlider= ({images}) =>{
  return (
    <Swiper
      modules= {[Navigation, Pagination]}
      navigation= {true}
      pagination= {{clickable: true}}
      loop= {true}
      className= "mySwiper"
      style= {{width: "100%", height: "300px"}}
    >
      {images.map((image, index) =>(
        <SwiperSlide key={index}>
          <img
            src= {image.src}
            alt= {image.alt}
            style= {{width: "100%", height: "100%", objectFit: "cover"}}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CustomSlider