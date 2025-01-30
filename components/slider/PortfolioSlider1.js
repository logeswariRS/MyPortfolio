'use client'
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
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
        1199: {
            slidesPerView: 1,
        },
        1350: {
            slidesPerView: 1,
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
                                <img src="assets/images/developer1.avif" alt="" />
                            </div>
                            <div className="content-box">
                                <h4>Global Tech Solutions</h4>
                                <div className="designation">Advanced AI Integration</div>
                                <div className="text">Implementing cutting-edge AI solutions to enhance business processes and deliver superior user experiences.</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                {/* Gallery Block */}
                <SwiperSlide>
                    <div className="project-block">
                        <div className="inner-box">
                            <div className="image">
                                <img src="assets/images/developer2.avif" alt="" />
                            </div>
                            <div className="content-box">
                                <h4>Innovatech</h4>
                                <div className="designation">Cloud-Based Platform Development</div>
                                <div className="text">Developed a scalable cloud platform that supports real-time data processing and analytics for global clients.</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                {/* Gallery Block */}
                <SwiperSlide>
                    <div className="project-block">
                        <div className="inner-box">
                            <div className="image">
                                <img src="assets/images/developer3.avif" alt="" />
                            </div>
                            <div className="content-box">
                                <h4>NextGen Enterprises</h4>
                                <div className="designation">E-Commerce Optimization</div>
                                <div className="text">Optimized e-commerce platforms to improve user engagement, reduce load times, and boost conversions.</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                {/* Gallery Block */}
                <SwiperSlide>
                    <div className="project-block">
                        <div className="inner-box">
                            <div className="image">
                                <img src="assets/images/developer4.avif" alt="" />
                            </div>
                            <div className="content-box">
                                <h4>Bright Future Inc.</h4>
                                <div className="designation">Sustainable Tech Solutions</div>
                                <div className="text">Focused on creating sustainable technology solutions that minimize environmental impact and promote green practices.</div>
                            </div>
                        </div>
                    </div>        
                </SwiperSlide>
            </Swiper>     
        </>
    )
}
