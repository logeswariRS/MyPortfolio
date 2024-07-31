'use client'
import Link from "next/link"
export default function Blog() {
    return (
        <>

        <section className="blog-section">
            <div className="auto-container">
                <div className="sec-title centered">
                    <h2>Blog Tips</h2>
                </div>
                <div className="row clearfix">
                    
                    {/* News Block */}
                    <div className="news-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="border-layer"></div>
                            <div className="category">Accountability</div>
                            <h4><Link href="blog-detail">Annual Mic Accounts & Statutory Audit  For All Companies </Link></h4>
                            <div className="text">Donec rutrum, mauris cras atumui blandit convallis, orci nulla volutpat sapien.</div>
                            <div className="post-date">13 Sept, 2021</div>
                        </div>
                    </div>
                    
                    {/* News Block */}
                    <div className="news-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="border-layer"></div>
                            <div className="category">Tips & Tricks</div>
                            <h4><Link href="blog-detail">What’s A 27-Year Big Age Gap Amongst Business Partners?</Link></h4>
                            <div className="text">Phasellus fringilla turpis eu neque semper accumsan. Sed vitae semper enim.</div>
                            <div className="post-date">12 Sept, 2021</div>
                        </div>
                    </div>
                    
                    {/* News Block */}
                    <div className="news-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="border-layer"></div>
                            <div className="category">Accountability</div>
                            <h4><Link href="blog-detail">Statutory Forgiveness For All The Companies That Are Ok</Link></h4>
                            <div className="text">Pellentesque ullamcorper quis dolor ut congue. Etiam pretium turdum.</div>
                            <div className="post-date">11 Sept, 2021</div>
                        </div>
                    </div>
                    
                </div>
                
                <div className="btn-box text-center">
                    <Link href="blog" className="theme-btn btn-style-four"><span className="txt">All Articles</span></Link>
                </div>
                
            </div>
        </section>
        
        </>
    )
}
