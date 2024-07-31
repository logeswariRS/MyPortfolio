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

export default function Certificate() {
    return (
        <>

        <section className="certificate-section">
            <div className="auto-container">
                <div className="sec-title style-two">
                    <h2>My Certifications</h2>
                </div>
            </div>
            <div className="outer-container">
                <Swiper {...swiperOptions} className="s-sliders">
                    
                    {/* Slide */}
                    <SwiperSlide>
                        <div className="certificate-block">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <span className="icon flaticon-diploma"></span>
                                </div>
                                <h3><Link href="blog-detail">AACSB</Link></h3>
                                <div className="text">Association to Advance Collegiate Schools of Business.</div>
                                <div className="post-date"><span className="icon flaticon-calendar"></span>Graduated May, 2017</div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide */}
                    <SwiperSlide>
                        <div className="certificate-block">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <span className="icon flaticon-diploma"></span>
                                </div>
                                <h3><Link href="blog-detail">gaap</Link></h3>
                                <div className="text">Generally Accepted Accounting Principles.</div>
                                <div className="post-date"><span className="icon flaticon-calendar"></span>Graduated January, 2015</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide */}
                    <SwiperSlide>
                        <div className="certificate-block">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <span className="icon flaticon-diploma"></span>
                                </div>
                                <h3><Link href="blog-detail">ACA</Link></h3>
                                <div className="text">Associate Chartered Accountant. </div>
                                <div className="post-date"><span className="icon flaticon-calendar"></span>Graduated July, 2016</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide */}
                    <SwiperSlide>
                        <div className="certificate-block">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <span className="icon flaticon-diploma"></span>
                                </div>
                                <h3><Link href="blog-detail">ICAEW</Link></h3>
                                <div className="text">Certificate in Finance, Accounting and Business</div>
                                <div className="post-date"><span className="icon flaticon-calendar"></span>Graduated March, 2015</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide */}
                    <SwiperSlide>
                        <div className="certificate-block">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <span className="icon flaticon-diploma"></span>
                                </div>
                                <h3><Link href="blog-detail">cia</Link></h3>
                                <div className="text">Certified Internal Auditor.</div>
                                <div className="post-date"><span className="icon flaticon-calendar"></span>Graduated October, 2017</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide */}
                    <SwiperSlide>
                        <div className="certificate-block">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <span className="icon flaticon-diploma"></span>
                                </div>
                                <h3><Link href="blog-detail">AACSB</Link></h3>
                                <div className="text">Association to Advance Collegiate Schools of Business.</div>
                                <div className="post-date"><span className="icon flaticon-calendar"></span>Graduated May, 2017</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide */}
                    <SwiperSlide>
                        <div className="certificate-block">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <span className="icon flaticon-diploma"></span>
                                </div>
                                <h3><Link href="blog-detail">gaap</Link></h3>
                                <div className="text">Generally Accepted Accounting Principles.</div>
                                <div className="post-date"><span className="icon flaticon-calendar"></span>Graduated January, 2015</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide */}
                    <SwiperSlide>
                        <div className="certificate-block">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <span className="icon flaticon-diploma"></span>
                                </div>
                                <h3><Link href="blog-detail">ACA</Link></h3>
                                <div className="text">Associate Chartered Accountant. </div>
                                <div className="post-date"><span className="icon flaticon-calendar"></span>Graduated July, 2016</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide */}
                    <SwiperSlide>
                        <div className="certificate-block">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <span className="icon flaticon-diploma"></span>
                                </div>
                                <h3><Link href="blog-detail">ICAEW</Link></h3>
                                <div className="text">Certificate in Finance, Accounting and Business</div>
                                <div className="post-date"><span className="icon flaticon-calendar"></span>Graduated March, 2015</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide */}
                    <SwiperSlide>
                        <div className="certificate-block">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <span className="icon flaticon-diploma"></span>
                                </div>
                                <h3><Link href="blog-detail">cia</Link></h3>
                                <div className="text">Certified Internal Auditor.</div>
                                <div className="post-date"><span className="icon flaticon-calendar"></span>Graduated October, 2017</div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>

        </>
    )
}
