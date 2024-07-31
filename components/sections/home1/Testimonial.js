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


export default function Testimonial() {
    return (
        <>

            <section className="testimonial-section">
                <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/background/pattern-2.png' }} ></div>
                <div className="auto-container">
                    <div className="sec-title">
                        <h2>Clients Love Me!</h2>
                    </div>
                    <Swiper {...swiperOptions} className="s-sliders">
                
                        {/* Slide */}
                        <SwiperSlide>
                            <div className="slide">
                                <div className="row clearfix">
                                    {/* Images Column */}
                                    <div className="images-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            <div className="image">
                                                <img src="assets/images/resource/author-1.jpg" alt="" />
                                            </div>
                                            <div className="author-image-one">
                                                <img src="assets/images/resource/author-2.jpg" alt="" />
                                            </div>
                                            <div className="author-image-two">
                                                <img src="assets/images/resource/author-3.jpg" alt="" />
                                            </div>
                                            <div className="author-image-three">
                                                <img src="assets/images/resource/author-4.jpg" alt="" />
                                            </div>
                                            <div className="author-image-four">
                                                <img src="assets/images/resource/author-5.jpg" alt="" />
                                            </div>
                                            <div className="quote-icon">
                                                <img src="assets/images/icons/quote-icon.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Carousel Column */}
                                    <div className="carousel-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            
                                            {/* Testimonial Block */}
                                            <div className="testimonial-block">
                                                <div className="inner-box">
                                                    <div className="rating">
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                    </div>
                                                    <div className="text">“Denise is a rockstar we feel extremely privileged to have her.  Her services and weekly consulting calls are one of the best investments I've made. ”</div>
                                                    <div className="author-name">
                                                        Janet Horks
                                                        <span>Director of Management</span>
                                                    </div>
                                                    <div className="designation">Acme Co.</div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide */}
                        <SwiperSlide>
                            <div className="slide">
                                <div className="row clearfix">
                                    {/* Images Column */}
                                    <div className="images-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            <div className="image">
                                                <img src="assets/images/resource/author-11.jpg" alt="" />
                                            </div>
                                            <div className="author-image-one">
                                                <img src="assets/images/resource/author-2.jpg" alt="" />
                                            </div>
                                            <div className="author-image-two">
                                                <img src="assets/images/resource/author-3.jpg" alt="" />
                                            </div>
                                            <div className="author-image-three">
                                                <img src="assets/images/resource/author-4.jpg" alt="" />
                                            </div>
                                            <div className="author-image-four">
                                                <img src="assets/images/resource/author-5.jpg" alt="" />
                                            </div>
                                            <div className="quote-icon">
                                                <img src="assets/images/icons/quote-icon.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Carousel Column */}
                                    <div className="carousel-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            
                                            {/* Testimonial Block */}
                                            <div className="testimonial-block">
                                                <div className="inner-box">
                                                    <div className="rating">
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                    </div>
                                                    <div className="text">“Denise is a rockstar we feel extremely privileged to have her.  Her services and weekly consulting calls are one of the best investments I've made. ”</div>
                                                    <div className="author-name">
                                                        Janet Horks
                                                        <span>Director of Management</span>
                                                    </div>
                                                    <div className="designation">Acme Co.</div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Slide */}
                        <SwiperSlide>
                            <div className="slide">
                                <div className="row clearfix">
                                    {/* Images Column */}
                                    <div className="images-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            <div className="image">
                                                <img src="assets/images/resource/author-12.jpg" alt="" />
                                            </div>
                                            <div className="author-image-one">
                                                <img src="assets/images/resource/author-2.jpg" alt="" />
                                            </div>
                                            <div className="author-image-two">
                                                <img src="assets/images/resource/author-3.jpg" alt="" />
                                            </div>
                                            <div className="author-image-three">
                                                <img src="assets/images/resource/author-4.jpg" alt="" />
                                            </div>
                                            <div className="author-image-four">
                                                <img src="assets/images/resource/author-5.jpg" alt="" />
                                            </div>
                                            <div className="quote-icon">
                                                <img src="assets/images/icons/quote-icon.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Carousel Column */}
                                    <div className="carousel-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            
                                            {/* Testimonial Block */}
                                            <div className="testimonial-block">
                                                <div className="inner-box">
                                                    <div className="rating">
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                    </div>
                                                    <div className="text">“Denise is a rockstar we feel extremely privileged to have her.  Her services and weekly consulting calls are one of the best investments I've made. ”</div>
                                                    <div className="author-name">
                                                        Janet Horks
                                                        <span>Director of Management</span>
                                                    </div>
                                                    <div className="designation">Acme Co.</div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Slide */}
                        <SwiperSlide>
                            <div className="slide">
                                <div className="row clearfix">
                                    {/* Images Column */}
                                    <div className="images-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            <div className="image">
                                                <img src="assets/images/resource/author-13.jpg" alt="" />
                                            </div>
                                            <div className="author-image-one">
                                                <img src="assets/images/resource/author-2.jpg" alt="" />
                                            </div>
                                            <div className="author-image-two">
                                                <img src="assets/images/resource/author-3.jpg" alt="" />
                                            </div>
                                            <div className="author-image-three">
                                                <img src="assets/images/resource/author-4.jpg" alt="" />
                                            </div>
                                            <div className="author-image-four">
                                                <img src="assets/images/resource/author-5.jpg" alt="" />
                                            </div>
                                            <div className="quote-icon">
                                                <img src="assets/images/icons/quote-icon.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Carousel Column */}
                                    <div className="carousel-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            
                                            {/* Testimonial Block */}
                                            <div className="testimonial-block">
                                                <div className="inner-box">
                                                    <div className="rating">
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                    </div>
                                                    <div className="text">“Denise is a rockstar we feel extremely privileged to have her.  Her services and weekly consulting calls are one of the best investments I've made. ”</div>
                                                    <div className="author-name">
                                                        Janet Horks
                                                        <span>Director of Management</span>
                                                    </div>
                                                    <div className="designation">Acme Co.</div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            
        </>
    )
}
