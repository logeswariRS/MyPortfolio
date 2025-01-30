'use client'
import Link from "next/link"
export default function Blog() {
    return (
        <>

        <section className="blog-section">
            <div className="auto-container">
                <div className="sec-title centered">
                    <h2>Development Insights</h2>
                </div>
                <div className="row clearfix">
                    
                    {/* News Block */}
                    <div className="news-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="border-layer"></div>
                            <div className="category">React.js</div>
                            <h4><Link href="blog-detail">Building Scalable Applications with React.js</Link></h4>
                            <div className="text">Discover tips and best practices for creating scalable and maintainable applications using React.js.</div>
                            <div className="post-date">10 Jan, 2025</div>
                        </div>
                    </div>
                    
                    {/* News Block */}
                    <div className="news-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="border-layer"></div>
                            <div className="category">Three.js</div>
                            <h4><Link href="blog-detail">Creating Immersive 3D Experiences with Three.js</Link></h4>
                            <div className="text">Learn how to leverage Three.js to build interactive 3D web experiences that captivate users.</div>
                            <div className="post-date">9 Jan, 2025</div>
                        </div>
                    </div>
                    
                    {/* News Block */}
                    <div className="news-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="border-layer"></div>
                            <div className="category">SQL</div>
                            <h4><Link href="blog-detail">Enhancing Data Integrity with SQL Constraints</Link></h4>
                            <div className="text">Explore the importance of SQL constraints in maintaining data integrity and consistency in your databases.</div>
                            <div className="post-date">8 Jan, 2025</div>
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
