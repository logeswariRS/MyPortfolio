import Link from "next/link"
export default function Deserve() {
    return (
        <>

        <section className="deserve-section">
            <div className="auto-container">
                <div className="row clearfix">
                    
                    {/* Image Column */}
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/background/pattern-4.png' }} ></div>
                            <div className="image">
                                <img src="assets/images/resource/deserve.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <h2>I’ll Get You What You Deserve.</h2>
                            </div>
                            <div className="text">I have over 10 years of accounting experience. I hold a Bachelor Degree in Accounting. I am an IRS designated Enrolled Agent. I have worked as a full charge bookkeeper, a tax manager, and an accounting business owner.</div>
                            <Link href="blog-detail" className="theme-btn btn-style-four"><span className="txt">About Me</span></Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

        </>
    )
}
