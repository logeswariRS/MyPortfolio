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
        1299: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1650: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
    }
}
export default function Testimonial() {
    return (
        <>

        <section className="testimonial-section-two">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="row clearfix">
                        
                        {/* Title Column */}
                        <div className="title-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <h2>Clients Love Me</h2>
                                </div>
                                <div className="text">
                                    <p>My goal is to provide high quality accounting services to my clients. I take the time to learn about the needs of each of my clients.</p>
                                    <p>Unique circumstances make sure my clients are taking advantage of every opportunity available in the accounting and tax code.</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Testimonial Column */}
                        <div className="testimonial-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <Swiper {...swiperOptions} className="s-sliders">
                    
                                    {/* Slide */}
                                    <SwiperSlide>
                                        <div className="testimonial-block-two">
                                            <div className="inner-box">
                                                <div className="quote flaticon-left-quote"></div>
                                                <div className="text">Denise was terrific to work with and diligently completed my personal returns without a hassle. She explains things simply and gives sound advice. 100% recommended.</div>
                                                <div className="author-info">
                                                    <div className="info-inner">
                                                        <div className="author-image">
                                                            <img src="assets/images/resource/author-14.jpg" alt="" />
                                                        </div>
                                                        <h5>Shauna James</h5>
                                                        <div className="designation">Assistant</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    {/* Slide */}
                                    <SwiperSlide>
                                        <div className="testimonial-block-two">
                                            <div className="inner-box">
                                                <div className="quote flaticon-left-quote"></div>
                                                <div className="text">Denise was terrific to work with and diligently completed my personal returns without a hassle. She explains things simply and gives sound advice. 100% recommended.</div>
                                                <div className="author-info">
                                                    <div className="info-inner">
                                                        <div className="author-image">
                                                            <img src="assets/images/resource/author-14.jpg" alt="" />
                                                        </div>
                                                        <h5>Shauna James</h5>
                                                        <div className="designation">Assistant</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* Slide */}
                                    <SwiperSlide>
                                        <div className="testimonial-block-two">
                                            <div className="inner-box">
                                                <div className="quote flaticon-left-quote"></div>
                                                <div className="text">Denise was terrific to work with and diligently completed my personal returns without a hassle. She explains things simply and gives sound advice. 100% recommended.</div>
                                                <div className="author-info">
                                                    <div className="info-inner">
                                                        <div className="author-image">
                                                            <img src="assets/images/resource/author-14.jpg" alt="" />
                                                        </div>
                                                        <h5>Shauna James</h5>
                                                        <div className="designation">Assistant</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
