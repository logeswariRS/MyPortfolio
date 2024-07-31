'use client'
import Link from "next/link"
export default function Blog() {
    return (
        <>

        <section className="news-section-two">
            <div className="auto-container">
                <div className="sec-title">
                    <div className="clearfix">
                        <div className="pull-left">
                            <h2>Blog Articles</h2>
                        </div>
                        <div className="pull-right">
                            <Link href="blog" className="theme-btn btn-style-five"><span className="txt">See All</span></Link>
                        </div>
                    </div>
                </div>
                
                <div className="masonry-items-container row clearfix">
                    
                    {/* News Block */}
                    <div className="news-block-six masonry-item col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image">
                                <Link href="blog-detail"><img src="assets/images/resource/news-15.jpg" alt="" /></Link>
                            </div>
                            <div className="lower-content">
                                <div className="category">Accountability</div>
                                <h4><Link href="blog-detail">Annual Mic Accounts & Statutory Audit  For All Companies </Link></h4>
                                <div className="text">Donec rutrum, maurtis cras atumui blandit convallis, orci nulla volutpat sapien.</div>
                                <div className="post-date">4 Oct, 2021</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* News Block */}
                    <div className="news-block-six masonry-item col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image">
                                <Link href="blog-detail"><img src="assets/images/resource/news-19.jpg" alt="" /></Link>
                            </div>
                            <div className="lower-content">
                                <div className="category">Tips & Tricks</div>
                                <h4><Link href="blog-detail">Posh Log Cabin Office Business Expense, But Who Will Pay?</Link></h4>
                                <div className="text">Phasellus fringilla turpis eu neque semper accumsan. Sed vitae semper enim.</div>
                                <div className="post-date">2 Oct, 2021</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* News Block */}
                    <div className="news-block-six masonry-item col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image">
                                <Link href="blog-detail"><img src="assets/images/resource/news-17.jpg" alt="" /></Link>
                            </div>
                            <div className="lower-content">
                                <div className="category">Accountability</div>
                                <h4><Link href="blog-detail">Does the R&D Specialist Provide A Detailed Report? And Why?</Link></h4>
                                <div className="text">Maecenas tempor auctor porttitor. Sed maximus lorem tellus, eu tincidunt.</div>
                                <div className="post-date">3 Oct, 2021</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* News Block */}
                    <div className="news-block-six masonry-item col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image">
                                <Link href="blog-detail"><img src="assets/images/resource/news-16.jpg" alt="" /></Link>
                            </div>
                            <div className="lower-content">
                                <div className="category">Accountability</div>
                                <h4><Link href="blog-detail">If You Could Pick A Job What Would That Job Be And Why?</Link></h4>
                                <div className="text">Donec rutrum, mauris cras atumui blandit convallis, orci nulla volutpat sapien.</div>
                                <div className="post-date">3 Oct, 2021</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* News Block */}
                    <div className="news-block-six masonry-item col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image">
                                <Link href="blog-detail"><img src="assets/images/resource/news-18.jpg" alt="" /></Link>
                            </div>
                            <div className="lower-content">
                                <div className="category">Tips & Tricks</div>
                                <h4><Link href="blog-detail">What’s A 27-Year Big Age Gap Amongst Business Partners?</Link></h4>
                                <div className="text">Phasellus fringilla turpis eu neque semper accumsan. Sed vitae semper enim.</div>
                                <div className="post-date">3 Oct, 2021</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* News Block */}
                    <div className="news-block-six masonry-item col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image">
                                <Link href="blog-detail"><img src="assets/images/resource/news-20.jpg" alt="" /></Link>
                            </div>
                            <div className="lower-content">
                                <div className="category">Accountability</div>
                                <h4><Link href="blog-detail">Undertaken With The Work Done by Company The Specialists </Link></h4>
                                <div className="text">Donec rutrum, mauris cras atumui blandit convallis, orci nulla volutpat sapien.</div>
                                <div className="post-date">3 Oct, 2021</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </section>

        </>
    )
}
