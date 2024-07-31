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
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }
}


export default function Software() {
    return (
        <>

            <section className="software-section">
                <div className="color-layer"></div>
                <div className="auto-container">
                    <div className="sec-title">
                        <h2>Software Skills</h2>
                        <div className="text">I am a professional in several areas and I am proud of my <br/> skills in the following:</div>
                    </div>
                    <div className="inner-container">
                        <div className="cross-icons">
                            <span className="flaticon-close"></span>
                            <span className="flaticon-close"></span>
                            <span className="flaticon-close"></span>
                            <span className="flaticon-close"></span>
                        </div>
                        <Swiper {...swiperOptions} className="s-sliders">
                
                            {/* Slide */}
                            <SwiperSlide>
                                <div className="software-block">
                                    <div className="inner-box">
                                        <div className="image">
                                            <Link href="blog-detail"><img src="assets/images/resource/software-1.jpg" alt="" /></Link>
                                            <div className="overlay-content">
                                                <div className="icon flaticon-income"></div>
                                                <h3><Link href="blog-detail">QuickBooks</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Slide */}
                            <SwiperSlide>
                                <div className="software-block">
                                    <div className="inner-box">
                                        <div className="image">
                                            <Link href="blog-detail"><img src="assets/images/resource/software-2.jpg" alt="" /></Link>
                                            <div className="overlay-content">
                                                <div className="icon flaticon-trading"></div>
                                                <h3><Link href="blog-detail">FreshBooks</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Slide */}
                            <SwiperSlide>
                                <div className="software-block">
                                    <div className="inner-box">
                                        <div className="image">
                                            <Link href="blog-detail"><img src="assets/images/resource/software-3.jpg" alt="" /></Link>
                                            <div className="overlay-content">
                                                <div className="icon flaticon-web-security"></div>
                                                <h3><Link href="blog-detail">Zoho Books</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Slide */}
                            <SwiperSlide>
                                <div className="software-block">
                                    <div className="inner-box">
                                        <div className="image">
                                            <Link href="blog-detail"><img src="assets/images/resource/software-1.jpg" alt="" /></Link>
                                            <div className="overlay-content">
                                                <div className="icon flaticon-income"></div>
                                                <h3><Link href="blog-detail">QuickBooks</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Slide */}
                            <SwiperSlide>
                                <div className="software-block">
                                    <div className="inner-box">
                                        <div className="image">
                                            <Link href="blog-detail"><img src="assets/images/resource/software-1.jpg" alt="" /></Link>
                                            <div className="overlay-content">
                                                <div className="icon flaticon-income"></div>
                                                <h3><Link href="blog-detail">QuickBooks</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Slide */}
                            <SwiperSlide>
                                <div className="software-block">
                                    <div className="inner-box">
                                        <div className="image">
                                            <Link href="blog-detail"><img src="assets/images/resource/software-2.jpg" alt="" /></Link>
                                            <div className="overlay-content">
                                                <div className="icon flaticon-trading"></div>
                                                <h3><Link href="blog-detail">FreshBooks</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Slide */}
                            <SwiperSlide>
                                <div className="software-block">
                                    <div className="inner-box">
                                        <div className="image">
                                            <Link href="blog-detail"><img src="assets/images/resource/software-3.jpg" alt="" /></Link>
                                            <div className="overlay-content">
                                                <div className="icon flaticon-web-security"></div>
                                                <h3><Link href="blog-detail">Zoho Books</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Slide */}
                            <SwiperSlide>
                                <div className="software-block">
                                    <div className="inner-box">
                                        <div className="image">
                                            <Link href="blog-detail"><img src="assets/images/resource/software-1.jpg" alt="" /></Link>
                                            <div className="overlay-content">
                                                <div className="icon flaticon-income"></div>
                                                <h3><Link href="blog-detail">QuickBooks</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
