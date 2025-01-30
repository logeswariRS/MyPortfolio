'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: { slidesPerView: 1 },
        575: { slidesPerView: 1 },
        767: { slidesPerView: 2 },
        991: { slidesPerView: 2 },
        1199: { slidesPerView: 3 },
        1350: { slidesPerView: 3 },
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
                        <div className="text">I am a professional in several areas and I am proud of my skills in the following:</div>
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
                                            <Link href="blog-detail"><img src="assets/images/book-skill.avif" alt="React.js" /></Link>
                                            <div className="overlay-content">
                                                <div className="icon flaticon-web-development"></div>
                                                <h3><Link href="blog-detail">React.js </Link></h3>
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
                                            <Link href="blog-detail"><img src="assets/images/food-skill.avif" alt="Vue.js" /></Link>
                                            <div className="overlay-content">
                                                <div className="icon flaticon-web-design"></div>
                                                <h3><Link href="blog-detail">Vue.js</Link></h3>
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
                                            <Link href="blog-detail"><img src="assets/images/server-skill.avif" alt="Node.js" /></Link>
                                            <div className="overlay-content">
                                                <div className="icon flaticon-server"></div>
                                                <h3><Link href="blog-detail">Node.js </Link></h3>
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
                                            <Link href="blog-detail"><img src="assets/images/database-skill.avif" alt="SQL" /></Link>
                                            <div className="overlay-content">
                                                <div className="icon flaticon-database"></div>
                                                <h3><Link href="blog-detail">SQL Database</Link></h3>
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
                                            <Link href="blog-detail"><img src="assets/images/maze-skill.avif" alt="Three.js" /></Link>
                                            <div className="overlay-content">
                                                <div className="icon flaticon-3d"></div>
                                                <h3><Link href="blog-detail">Three.js </Link></h3>
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
