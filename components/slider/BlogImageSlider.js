'use client'
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
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
    }
}

export default function PortfolioSlider1() {
    return (
        <>

                <Swiper {...swiperOptions} className="s-sliders">
                        
                    {/* Gallery Block */}
                    <SwiperSlide>
                        <div className="slide">
                            <div className="image">
                                <img src="assets/images/resource/news-13.jpg" alt=""/>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Gallery Block */}
                    <SwiperSlide>
                        <div className="slide">
                            <div className="image">
                                <img src="assets/images/resource/news-13.jpg" alt=""/>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Gallery Block */}
                    <SwiperSlide>
                        <div className="slide">
                            <div className="image">
                                <img src="assets/images/resource/news-13.jpg" alt=""/>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>    

        </>
    )
}
