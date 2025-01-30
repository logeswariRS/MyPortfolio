import Link from "next/link";

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
                                            <h4><Link href="blog-detail">Frontend Development</Link></h4>
                                            <div className="text">Creating intuitive and responsive user interfaces using React.js, Vue.js, and Next.js.</div>
                                        </div>
                                    </div>
                                    
                                    {/* Service Block */}
                                    <div className="service-block col-lg-6 col-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <div className="number-box">
                                                <span className="number">02</span>
                                            </div>
                                            <h4><Link href="blog-detail">Three.js Experiences</Link></h4>
                                            <div className="text">Developing immersive 3D experiences and interactive games using Three.js.</div>
                                        </div>
                                    </div>
                                    
                                    {/* Service Block */}
                                    <div className="service-block col-lg-6 col-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <div className="number-box">
                                                <span className="number">03</span>
                                            </div>
                                            <h4><Link href="blog-detail">SQL Database Management</Link></h4>
                                            <div className="text">Designing, managing, and optimizing databases using SQL for efficient data storage and retrieval.</div>
                                        </div>
                                    </div>
                                    
                                    {/* Service Block */}
                                    <div className="service-block col-lg-6 col-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <div className="number-box">
                                                <span className="number">04</span>
                                            </div>
                                            <h4><Link href="blog-detail">Backend Development</Link></h4>
                                            <div className="text">Building robust and scalable server-side applications using Node.js.</div>
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
                                    <img src="assets/images/services1.avif" alt="" style={{ width: '722px', height: '962px' }} />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    );
}
