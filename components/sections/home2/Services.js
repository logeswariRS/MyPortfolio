'use client'
import Link from "next/link"
export default function Services() {
    return (
        <>

        <section className="services-section-two">
            <div className="auto-container">
                <div className="sec-title">
                    <h2>My Services</h2>
                </div>
                <div className="row clearfix">
                    
                    {/* Blocks Column */}
                    <div className="blocks-column col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-column">
                            
                            {/* Service Block */}
                            <div className="service-block">
                                <div className="inner-box">
                                    <div className="number-box">
                                        <span className="number">01</span>
                                    </div>
                                    <h4><Link href="blog-detail">Federal Tax Return <br/> Preparation</Link></h4>
                                    <div className="text">For Americans living abroad <br/> and foreign nationals.</div>
                                </div>
                            </div>
                            
                            {/* Service Block */}
                            <div className="service-block">
                                <div className="inner-box">
                                    <div className="number-box">
                                        <span className="number">03</span>
                                    </div>
                                    <h4><Link href="blog-detail">Late Tax Return <br/> Preparation</Link></h4>
                                    <div className="text">Helping Americans who are <br/> late filing their taxes.</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                    {/* Image Column */}
                    <div className="image-column col-lg-4 col-md-12 col-sm-12">
                        <div className="inner-column wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                <img src="assets/images/resource/service-1.png" alt="" />
                            </div>
                        </div>
                    </div>
                    
                    {/* Blocks Column */}
                    <div className="blocks-column right-column col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-column">
                            
                            {/* Service Block */}
                            <div className="service-block">
                                <div className="inner-box">
                                    <div className="number-box">
                                        <span className="number">02</span>
                                    </div>
                                    <h4><Link href="blog-detail">State Tax Return <br/> Preparation</Link></h4>
                                    <div className="text">In case you need to file a state return, I am here.</div>
                                </div>
                            </div>
                            
                            {/* Service Block */}
                            <div className="service-block">
                                <div className="inner-box">
                                    <div className="number-box">
                                        <span className="number">04</span>
                                    </div>
                                    <h4><Link href="blog-detail">Foreign Bank <br/> Account Reporting</Link></h4>
                                    <div className="text">Individuals who have $10,000+ in foreign bank accounts.</div>
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
