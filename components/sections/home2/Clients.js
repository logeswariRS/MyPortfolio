'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1299: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
        1650: {
            slidesPerView: 5,
            // spaceBetween: 30,
        },
    }
}
export default function Clients() {
    return (
        <>

        <section className="clients-section">
            <div className="auto-container">
                <div className="sec-title centered">
                    <h2>Some Of My Clients</h2>
                </div>
                <div className="sponsors-outer">
                    {/*Sponsors Carousel*/}
                    <Swiper {...swiperOptions} className="s-sliders">                    
                        {/* Slide */}
                        <SwiperSlide>
                            <div className="slide-item"><figure className="image-box"><Link href="#"><img src="assets/images/clients/1.png" alt=""/></Link></figure></div>
                        </SwiperSlide>                            
                        {/* Slide */}
                        <SwiperSlide>
                            <div className="slide-item"><figure className="image-box"><Link href="#"><img src="assets/images/clients/2.png" alt=""/></Link></figure></div>
                        </SwiperSlide>                            
                        {/* Slide */}
                        <SwiperSlide>
                            <div className="slide-item"><figure className="image-box"><Link href="#"><img src="assets/images/clients/3.png" alt=""/></Link></figure></div>
                        </SwiperSlide>
                        {/* Slide */}
                        <SwiperSlide>
                            <div className="slide-item"><figure className="image-box"><Link href="#"><img src="assets/images/clients/4.png" alt=""/></Link></figure></div>
                        </SwiperSlide>
                        {/* Slide */}
                        <SwiperSlide>
                            <div className="slide-item"><figure className="image-box"><Link href="#"><img src="assets/images/clients/5.png" alt=""/></Link></figure></div>
                        </SwiperSlide>
                        {/* Slide */}
                        <SwiperSlide>
                            <div className="slide-item"><figure className="image-box"><Link href="#"><img src="assets/images/clients/1.png" alt=""/></Link></figure></div>
                        </SwiperSlide>
                        {/* Slide */}
                        <SwiperSlide>
                            <div className="slide-item"><figure className="image-box"><Link href="#"><img src="assets/images/clients/2.png" alt=""/></Link></figure></div>
                        </SwiperSlide>
                        {/* Slide */}
                        <SwiperSlide>
                            <div className="slide-item"><figure className="image-box"><Link href="#"><img src="assets/images/clients/3.png" alt=""/></Link></figure></div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                
            </div>
        </section>

        </>
    )
}
