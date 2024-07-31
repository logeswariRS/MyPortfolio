'use client'
import Link from "next/link"
export default function About() {
    
    return (
        <>

        <section className="about-section">
            <div className="auto-container">
                <div className="row clearfix">
                    
                    {/* Image Column */}
                    <div className="image-column col-lg-7 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="author-name">Hi, I am Jessica!</div>
                            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/background/pattern-1.png' }} ></div>
                            <div className="color-layer"></div>
                            <div className="border-layer"></div>
                            <div className="icon-box">
                                <span className="icon flaticon-calculator"></span>
                            </div>
                            <div className="image wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <img src="assets/images/resource/about.png" alt="" />
                            </div>
                        </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className="content-column col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <h2>About Me</h2>
                            </div>
                            <div className="text">I am Jessica and I am a professional accountat. I am a CPA with over 10 years of experience in a variety of topics, including but not limited to the technical with accounting, audit, finance (both personal and for the business).</div>
                            <Link href="blog-detail" className="theme-btn btn-style-four"><span className="txt">About Me</span></Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

        </>
    )
}
