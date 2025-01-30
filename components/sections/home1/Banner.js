'use client';

import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
};

export default function Banner() {
    return (
        <>
        {/* Banner Section */}
        <section className="main-slider " >
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/main-slider/pattern-layer.png' }} ></div>
            <Swiper {...swiperOptions} className="main-slider-carousel owl-carousel owl-theme">
                {/* Slide */}
                <SwiperSlide>
                    <div className="slide">
                        <div className="auto-container " >
                            <div className="row clearfix " >
                                {/* Content Column */}
                                <div className="content-column  col-lg-7 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <h2>Expert in Web Technologies!</h2>
                                        <div className="text">Logeswari Ravi excels in Three.js, React.js, Next.js, Vue.js, Python, SQL, and Node.js to bring your ideas to life.</div>
                                        <div className="btn-box">
                                            <div className="clearfix " >
                                                <Link href="services" className="theme-btn btn-style-two"><span className="txt">Our Services</span></Link>
                                                <Link href="portfolio" className="theme-btn btn-style-three"><span className="txt">Portfolio</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Image Column */}
                                <div className="image-column col-lg-5 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <div  style={{ padding: '50px',marginTop:'70px',marginLeft:'50px' }}>
                                            <img style={{ borderRadius: '1em',}} src="/assets/images/banner.avif" alt="Expertise Image" />
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
                                        <h1>Innovative Solutions Await!</h1>
                                        <div className="text">Harnessing the power of modern frameworks to deliver cutting-edge web applications.</div>
                                        <div className="btn-box">
                                            <div className="clearfix">
                                                <Link href="services" className="theme-btn btn-style-two"><span className="txt">Our Services</span></Link>
                                                <Link href="portfolio" className="theme-btn btn-style-three"><span className="txt">Portfolio</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Image Column */}
                                <div className="image-column col-lg-5 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <div className="image">
                                            <img src="assets/images/main-slider/content-image-2.png" alt="Innovative Solutions" />
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
                                        <h1>Transforming Ideas into Reality!</h1>
                                        <div className="text">With extensive expertise in JavaScript frameworks and backend technologies, we turn your vision into successful digital solutions.</div>
                                        <div className="btn-box">
                                            <div className="clearfix">
                                                <Link href="services" className="theme-btn btn-style-two"><span className="txt">Our Services</span></Link>
                                                <Link href="portfolio" className="theme-btn btn-style-three"><span className="txt">Portfolio</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Image Column */}
                                <div className="image-column col-lg-5 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <div className="image">
                                            <img src="assets/images/main-slider/content-image-3.png" alt="Transforming Ideas" />
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
    );
}
// git commit -m "My Portfolio"