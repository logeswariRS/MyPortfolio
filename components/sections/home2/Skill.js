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
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1299: {
            slidesPerView: 3,
        },
        1650: {
            slidesPerView: 3,
        },
    }
}
export default function Skill() {
    return (
        <>

        <section className="skill-section">
            <div className="color-layer"></div>
            <div className="auto-container">
                <div className="sec-title light">
                    <div className="clearfix">
                        <div className="pull-left">
                            <h2>Skills. <br/> I see the details.</h2>
                        </div>
                        <div className="pull-right">
                            <div className="text">Your satisfaction is my priority and I want the <br/> best business relationships with you!</div>
                        </div>
                    </div>
                </div>
                <div className="inner-container">
                    <Swiper {...swiperOptions} className="s-sliders">
                        
                        {/* Slide */}
                        <SwiperSlide>
                            <div className="skill-block">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link href="blog-detail"><img src="assets/images/resource/skill-1.jpg" alt="" /></Link>
                                        <div className="overlay-content">
                                            <h5><Link href="blog-detail">Public Speaking Competence</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Slide */}
                        <SwiperSlide>
                            <div className="skill-block">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link href="blog-detail"><img src="assets/images/resource/skill-2.jpg" alt="" /></Link>
                                        <div className="overlay-content">
                                            <h5><Link href="blog-detail">Up-to-Date Tax Knowledge</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        {/* Slide */}
                        <SwiperSlide>
                            <div className="skill-block">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link href="blog-detail"><img src="assets/images/resource/skill-3.jpg" alt="" /></Link>
                                        <div className="overlay-content">
                                            <h5><Link href="blog-detail">Communication Mastery</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Slide */}
                        <SwiperSlide>
                            <div className="skill-block">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link href="blog-detail"><img src="assets/images/resource/skill-4.jpg" alt="" /></Link>
                                        <div className="overlay-content">
                                            <h5><Link href="blog-detail">Great Systems Abilities</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Slide */}
                        <SwiperSlide>
                            <div className="skill-block">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link href="blog-detail"><img src="assets/images/resource/skill-5.jpg" alt="" /></Link>
                                        <div className="overlay-content">
                                            <h5><Link href="blog-detail">Up-to-Date Tax Knowledge</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Slide */}
                        <SwiperSlide>
                            <div className="skill-block">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link href="blog-detail"><img src="assets/images/resource/skill-1.jpg" alt="" /></Link>
                                        <div className="overlay-content">
                                            <h5><Link href="blog-detail">Public Speaking Competence</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Slide */}
                        <SwiperSlide>
                            <div className="skill-block">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link href="blog-detail"><img src="assets/images/resource/skill-2.jpg" alt="" /></Link>
                                        <div className="overlay-content">
                                            <h5><Link href="blog-detail">Up-to-Date Tax Knowledge</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        {/* Slide */}
                        <SwiperSlide>
                            <div className="skill-block">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link href="blog-detail"><img src="assets/images/resource/skill-3.jpg" alt="" /></Link>
                                        <div className="overlay-content">
                                            <h5><Link href="blog-detail">Communication Mastery</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Slide */}
                        <SwiperSlide>
                            <div className="skill-block">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link href="blog-detail"><img src="assets/images/resource/skill-4.jpg" alt="" /></Link>
                                        <div className="overlay-content">
                                            <h5><Link href="blog-detail">Great Systems Abilities</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Slide */}
                        <SwiperSlide>
                            <div className="skill-block">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link href="blog-detail"><img src="assets/images/resource/skill-5.jpg" alt="" /></Link>
                                        <div className="overlay-content">
                                            <h5><Link href="blog-detail">Up-to-Date Tax Knowledge</Link></h5>
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
