'use client';
import Link from "next/link";
export default function About() {
    
    return (
        <>
        <section className="about-section">
            <div className="auto-container">
                <div className="row clearfix">
                    
                    {/* Image Column */}
                    <div className="image-column col-lg-7 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="author-name">Hi, I am LOGESWARI RAVI!</div>
                            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/background/pattern-1.png' }} ></div>
                            <div className="color-layer"></div>
                            <div className="border-layer"></div>
                            <div className="icon-box">
                                <span className="icon flaticon-developer"></span>
                            </div>
                            <div className="image wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <img src="assets/images/about 1.jpg" alt="Logeswari Ravi" />
                            </div>
                        </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className="content-column col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <h2>About Me</h2>
                            </div>
                            <div className="text">I am Logeswari Ravi, a passionate Fullstack Developer with expertise in Three.js, React.js, Next.js, Vue.js, Python, SQL, and Node.js. I specialize in creating interactive and responsive web applications that provide engaging user experiences.</div>
                            <Link href="portfolio" className="theme-btn btn-style-four"><span className="txt">Portfolio</span></Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        </>
    );
}
