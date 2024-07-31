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
                        <div className="project-block">
                            <div className="inner-box">
                                <div className="image">
                                    <img src="assets/images/gallery/1.jpg" alt="" />
                                </div>
                                <div className="content-box">
                                    <h4>Acme Client</h4>
                                    <div className="designation">Integrated Mobile Middleware</div>
                                    <div className="text">Pellentesque id nulla eget orci mollis iaculis. Mauris luctus neque quis felis mattis finibus. Donec eget posuere odio. Suspendisse libero mi, consequat vitae.</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Gallery Block */}
                    <SwiperSlide>
                        <div className="project-block">
                            <div className="inner-box">
                                <div className="image">
                                    <img src="assets/images/gallery/2.jpg" alt="" />
                                </div>
                                <div className="content-box">
                                    <h4>Jefferson & Co.</h4>
                                    <div className="designation">Reduced Interactive Monitoring</div>
                                    <div className="text">Pellentesque id nulla eget orci mollis iaculis. Mauris luctus neque quis felis mattis finibus. Donec eget posuere odio. Suspendisse libero mi, consequat vitae.</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Gallery Block */}
                    <SwiperSlide>
                        <div className="project-block">
                            <div className="inner-box">
                                <div className="image">
                                    <img src="assets/images/gallery/1.jpg" alt="" />
                                </div>
                                <div className="content-box">
                                    <h4>Acme Client</h4>
                                    <div className="designation">Integrated Mobile Middleware</div>
                                    <div className="text">Pellentesque id nulla eget orci mollis iaculis. Mauris luctus neque quis felis mattis finibus. Donec eget posuere odio. Suspendisse libero mi, consequat vitae.</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Gallery Block */}
                    <SwiperSlide>
                        <div className="project-block">
                            <div className="inner-box">
                                <div className="image">
                                    <img src="assets/images/gallery/2.jpg" alt="" />
                                </div>
                                <div className="content-box">
                                    <h4>Jefferson & Co.</h4>
                                    <div className="designation">Reduced Interactive Monitoring</div>
                                    <div className="text">Pellentesque id nulla eget orci mollis iaculis. Mauris luctus neque quis felis mattis finibus. Donec eget posuere odio. Suspendisse libero mi, consequat vitae.</div>
                                </div>
                            </div>
                        </div>        
                    </SwiperSlide>
                </Swiper>     

        </>
    )
}
