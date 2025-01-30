export default function Experiance() {
    return (
        <>

        <section className="experiance-section">
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/background/pattern-2.png' }} ></div>
            <div className="auto-container">
                <div className="sec-title centered">
                    <h2>Experience & Education</h2>
                </div>
                
                <div className="row clearfix">
                    
                    {/* Experience Block */}
                    <div className="experiance-block col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="icon-box">
                                <span className="flaticon-briefcase"></span>
                            </div>
                            <div className="post-date">Jun 2024 - Mar 2025</div>
                            <h5>Three.js Intern - CAD+T Solutions</h5>
                            <div className="text">Focused on developing interactive 3D applications and visualizations using Three.js, enhancing user experiences with dynamic and immersive interfaces.</div>
                        </div>
                    </div>
                    
                    {/* Experience Block */}
                    <div className="experiance-block col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="icon-box">
                                <span className="flaticon-briefcase"></span>
                            </div>
                            <div className="post-date">Dec 2023 - Jun 2024</div>
                            <h5>React/Next.js Intern - NextOne Solutions</h5>
                            <div className="text">Developed responsive web applications using React.js and Next.js, collaborating with teams to deliver user-friendly interfaces and optimized web solutions.</div>
                        </div>
                    </div>
                    
                    {/* Education Block */}
                    <div className="experiance-block col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="icon-box">
                                <span className="flaticon-briefcase"></span>
                            </div>
                            <div className="post-date">2021 - 2025</div>
                            <h5>Bachelor of Technology in Biotechnology</h5>
                            <div className="text">Anna University</div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </section>
            

        </>
    )
}
