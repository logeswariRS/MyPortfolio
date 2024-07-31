import Link from "next/link"

export default function Services() {
    return (
        <>
            <section className="services-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        
                        {/* Content Column */}
                        <div className="content-column col-lg-7 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <h2>My Services</h2>
                                </div>
                                
                                <div className="row clearfix">
                                
                                    {/* Service Block */}
                                    <div className="service-block col-lg-6 col-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <div className="number-box">
                                                <span className="number">01</span>
                                            </div>
                                            <h4><Link href="blog-detail">Bookkeeping</Link></h4>
                                            <div className="text">Being good with numbers is the most important part.</div>
                                        </div>
                                    </div>
                                    
                                    {/* Service Block */}
                                    <div className="service-block col-lg-6 col-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <div className="number-box">
                                                <span className="number">02</span>
                                            </div>
                                            <h4><Link href="blog-detail">Business Analysis</Link></h4>
                                            <div className="text">Gain Expertise in Analytics & Master Implement.</div>
                                        </div>
                                    </div>
                                    
                                    {/* Service Block */}
                                    <div className="service-block col-lg-6 col-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <div className="number-box">
                                                <span className="number">03</span>
                                            </div>
                                            <h4><Link href="blog-detail">Tax Preparation</Link></h4>
                                            <div className="text">Process of preparing the tax returns, often returns.</div>
                                        </div>
                                    </div>
                                    
                                    {/* Service Block */}
                                    <div className="service-block col-lg-6 col-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <div className="number-box">
                                                <span className="number">04</span>
                                            </div>
                                            <h4><Link href="blog-detail">Quickbooks Setup</Link></h4>
                                            <div className="text">Time-saving tools you need to grow your business. </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                        
                        {/* Image Column */}
                        <div className="image-column col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/icons/icon-1.png' }} ></div>
                                <div className="pattern-layer-two" style={{ backgroundImage: 'url(assets/images/icons/icon-2.png' }} ></div>
                                <div className="image wow slideInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <img src="assets/images/resource/service.png" alt="" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}
