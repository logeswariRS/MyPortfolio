'use client'
import Link from "next/link"
export default function Certificate() {
    return (
        <>
    
        <section className="certificate-section-two">
            <div className="auto-container">
                <div className="sec-title">
                    <div className="clearfix">
                        <div className="pull-left">
                            <h2>My Certifications</h2>
                        </div>
                        <div className="pull-right">
                            <Link href="blog-detail" className="theme-btn btn-style-five"><span className="txt">See All</span></Link>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    
                    {/* Certificate Block */}
                    <div className="certificate-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                <img src="assets/images/resource/certificate-1.jpg" alt="" />
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <h4><Link href="#">Certified Tax Representation Consultant</Link></h4>
                                        <div className="lower-box clearfix">
                                            <div className="pull-left">
                                                <div className="info">Graduated in 2015</div>
                                            </div>
                                            <div className="pull-right">
                                                <Link href="#" className="arrow flaticon-right-arrow"></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Certificate Block */}
                    <div className="certificate-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                <img src="assets/images/resource/certificate-2.jpg" alt="" />
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <h4><Link href="#">Certified Tax Representation Consultant</Link></h4>
                                        <div className="lower-box clearfix">
                                            <div className="pull-left">
                                                <div className="info">Graduated in 2015</div>
                                            </div>
                                            <div className="pull-right">
                                                <Link href="#" className="arrow flaticon-right-arrow"></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Certificate Block */}
                    <div className="certificate-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                <img src="assets/images/resource/certificate-3.jpg" alt="" />
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <h4><Link href="#">Certified Tax Representation Consultant</Link></h4>
                                        <div className="lower-box clearfix">
                                            <div className="pull-left">
                                                <div className="info">Graduated in 2015</div>
                                            </div>
                                            <div className="pull-right">
                                                <Link href="#" className="arrow flaticon-right-arrow"></Link>
                                            </div>
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
