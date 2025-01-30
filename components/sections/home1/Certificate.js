'use client';
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
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
        320: { slidesPerView: 1 },
        575: { slidesPerView: 1 },
        767: { slidesPerView: 2 },
        991: { slidesPerView: 3 },
        1299: { slidesPerView: 4 },
        1650: { slidesPerView: 5 },
    }
};

export default function Certificate() {
    return (
        <section className="certificate-section">
            <div className="auto-container">
                <div className="sec-title style-two">
                    <h2>My Certifications</h2>
                </div>
            </div>
            <div className="outer-container">
                <Swiper {...swiperOptions} className="s-sliders">
                    <SwiperSlide>
                        <div className="certificate-block">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <span className="icon flaticon-diploma"></span>
                                </div>
                                <h3><Link href="#">HTML, CSS, JS</Link></h3>
                                <div className="text">Certificate from River</div>
                                <div className="post-date"><span className="icon flaticon-calendar"></span>Graduated June, 2021</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="certificate-block">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <span className="icon flaticon-diploma"></span>
                                </div>
                                <h3><Link href="#">Three.js</Link></h3>
                                <div className="text">Certificate from Cad+t Solutions</div>
                                <div className="post-date"><span className="icon flaticon-calendar"></span>Graduated September, 2022</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="certificate-block">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <span className="icon flaticon-diploma"></span>
                                </div>
                                <h3><Link href="#">Next.js, React.js</Link></h3>
                                <div className="text">Certificate from NextOne Solutions</div>
                                <div className="post-date"><span className="icon flaticon-calendar"></span>Graduated December, 2023</div>
                            </div>
                        </div>
                    </SwiperSlide>
           
                </Swiper>
            </div>
        </section>
    );
}
