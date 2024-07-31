
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Banner() {
    return (
        <>

        {/* Banner Section */}

        <section className="main-slider">
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/main-slider/pattern-layer.png' }} ></div>
            <Swiper {...swiperOptions} className="main-slider-carousel owl-carousel owl-theme">
                
                {/* Slide */}
                <SwiperSlide>
                    <div className="slide">
                        <div className="auto-container">
                            <div className="row clearfix">
                            
                                {/* Content Column */}
                                <div className="content-column col-lg-7 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <h1>Time for you to relax!</h1>
                                        <div className="text">Jessica will take care of things for you.</div>
                                        <div className="btn-box">
                                            <div className="clearfix">
                                                <Link href="blog-detail" className="theme-btn btn-style-two"><span className="txt">Our Services</span></Link>
                                                <Link href="blog-detail" className="theme-btn btn-style-three"><span className="txt">Portfolio</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                {/* Image Column */}
                                <div className="image-column col-lg-5 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <div className="image">
                                            <img src="assets/images/main-slider/content-image-1.png" alt="" />
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
                        <div className="auto-container">
                            <div className="row clearfix">
                            
                                {/* Content Column */}
                                <div className="content-column col-lg-7 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <h1>Time for you to relax!</h1>
                                        <div className="text">Jessica will take care of things for you.</div>
                                        <div className="btn-box">
                                            <div className="clearfix">
                                                <Link href="blog-detail" className="theme-btn btn-style-two"><span className="txt">Our Services</span></Link>
                                                <Link href="blog-detail" className="theme-btn btn-style-three"><span className="txt">Portfolio</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                {/* Image Column */}
                                <div className="image-column col-lg-5 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <div className="image">
                                            <img src="assets/images/main-slider/content-image-1.png" alt="" />
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
                        <div className="auto-container">
                            <div className="row clearfix">
                            
                                {/* Content Column */}
                                <div className="content-column col-lg-7 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <h1>Time for you to relax!</h1>
                                        <div className="text">Jessica will take care of things for you.</div>
                                        <div className="btn-box">
                                            <div className="clearfix">
                                                <Link href="blog-detail" className="theme-btn btn-style-two"><span className="txt">Our Services</span></Link>
                                                <Link href="blog-detail" className="theme-btn btn-style-three"><span className="txt">Portfolio</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                {/* Image Column */}
                                <div className="image-column col-lg-5 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <div className="image">
                                            <img src="assets/images/main-slider/content-image-1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            
        </section>
        {/* End Banner Section */}
            
        </>
    )
}
