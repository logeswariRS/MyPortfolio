'use client'
import Link from "next/link"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
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
	const [isOpen, setOpen] = useState(false)
    return (
        <>

        {/* Banner Section */}

        <section className="main-slider-two">
			<div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/main-slider/pattern-layer-1.png' }} ></div>
            <Swiper {...swiperOptions} className="main-slider-carousel owl-carousel owl-theme">
                
                {/* Slide */}
                <SwiperSlide>
					<div className="slide">
						<div className="auto-container">
							<div className="row clearfix">
							
								{/* Content Column */}
								<div className="content-column col-lg-6 col-md-12 col-sm-12">
									<div className="inner-column">
										<h1>Your Voice At The IRS.</h1>
										<div className="text">The IRS isn’t Your Ally But We Are.</div>
										<div className="btn-box">
											<div className="clearfix">
												<Link href="blog-detail" className="theme-btn btn-style-two"><span className="txt">Get Started</span></Link>
												<Link href="blog-detail" className="theme-btn btn-style-five"><span className="txt">See Services</span></Link>
											</div>
										</div>
										<div className="play-box">
											<a onClick={() => setOpen(true)} className="lightbox-image video-box"><span className="fa fa-play"><i className="ripple"></i></span></a>
										</div>
									</div>
								</div>
							
								{/* Image Column */}
								<div className="image-column col-lg-6 col-md-12 col-sm-12">
									<div className="inner-column">
										<div className="pattern-layer-two" style={{ backgroundImage: 'url(assets/images/main-slider/image-1.jpg' }} ></div>
										<div className="image">
											<img src="assets/images/main-slider/content-image-2.png" alt="" />
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
								<div className="content-column col-lg-6 col-md-12 col-sm-12">
									<div className="inner-column">
										<h1>Your Voice At The IRS.</h1>
										<div className="text">The IRS isn’t Your Ally But We Are.</div>
										<div className="btn-box">
											<div className="clearfix">
												<Link href="blog-detail" className="theme-btn btn-style-two"><span className="txt">Get Started</span></Link>
												<Link href="blog-detail" className="theme-btn btn-style-five"><span className="txt">See Services</span></Link>
											</div>
										</div>
										<div className="play-box">
											<a onClick={() => setOpen(true)} className="lightbox-image video-box"><span className="fa fa-play"><i className="ripple"></i></span></a>
										</div>
									</div>
								</div>
							
								{/* Image Column */}
								<div className="image-column col-lg-6 col-md-12 col-sm-12">
									<div className="inner-column">
										<div className="pattern-layer-two" style={{ backgroundImage: 'url(assets/images/main-slider/image-1.jpg' }} ></div>
										<div className="image">
											<img src="assets/images/main-slider/content-image-2.png" alt="" />
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
								<div className="content-column col-lg-6 col-md-12 col-sm-12">
									<div className="inner-column">
										<h1>Your Voice At The IRS.</h1>
										<div className="text">The IRS isn’t Your Ally But We Are.</div>
										<div className="btn-box">
											<div className="clearfix">
												<Link href="blog-detail" className="theme-btn btn-style-two"><span className="txt">Get Started</span></Link>
												<Link href="blog-detail" className="theme-btn btn-style-five"><span className="txt">See Services</span></Link>
											</div>
										</div>
										<div className="play-box">
											<a onClick={() => setOpen(true)} className="lightbox-image video-box"><span className="fa fa-play"><i className="ripple"></i></span></a>
										</div>
									</div>
								</div>
							
								{/* Image Column */}
								<div className="image-column col-lg-6 col-md-12 col-sm-12">
									<div className="inner-column">
										<div className="pattern-layer-two" style={{ backgroundImage: 'url(assets/images/main-slider/image-1.jpg' }} ></div>
										<div className="image">
											<img src="assets/images/main-slider/content-image-2.png" alt="" />
										</div>
									</div>
								</div>
								
							</div>
						</div>
					</div>
                </SwiperSlide>
            </Swiper>
            
        </section>
		<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
        {/* End Banner Section */}
            
        </>
    )
}
