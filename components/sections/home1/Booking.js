'use client'
import Link from "next/link"
export default function Booking() {
    return (
        <>

        <section className="booking-section">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="row clearfix">
                        
                        {/* Content Column */}
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <h2>Time to Book Me!</h2>
                                    <div className="text">Book a call with me and forget all the hassle that <br/> comes with paper work. I will do it for you!</div>
                                </div>
                                <Link href="contact" className="theme-btn btn-style-four"><span className="txt">Contact Me</span></Link>
                            </div>
                        </div>
                        
                        {/* Image Column */}
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="row clearfix">
                                    {/* Column */}
                                    <div className="column col-lg-7 col-md-6 col-sm-12">
                                        <div className="coloy-layer"></div>
                                        <div className="small-image text-right wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                            <img src="assets/images/resource/book-4.jpg" alt="" />
                                        </div>
                                        <div className="image wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                            <img src="assets/images/resource/book-1.jpg" alt="" />
                                        </div>
                                    </div>
                                    {/* Column */}
                                    <div className="column col-lg-5 col-md-6 col-sm-12">
                                        <div className="image wow fadeInDown" data-wow-delay="0ms" data-wow-duration="1500ms">
                                            <img src="assets/images/resource/book-2.jpg" alt="" />
                                        </div>
                                        <div className="image wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                            <img src="assets/images/resource/book-3.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
            

        </>
    )
}
