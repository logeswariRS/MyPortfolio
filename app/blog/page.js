import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Blog() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Latest News">
                {/* Blog Page Section */}
                <section className="blog-page-section">
                    <div className="auto-container">
                    
                        {/* News Block Two */}
                        <div className="news-block-two">
                            <div className="inner-box">
                                <div className="row clearfix">
                                
                                    {/* Image Column */}
                                    <div className="image-column col-lg-7 col-md-12 col-sm-12 d-flex align-items-center justify-content-center">
                                        <div className="inner-column">
                                            <div className="image">
                                                <Link href="blog-detail"><img src="assets/images/react.avif" alt=""/></Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Content Column */}
                                    <div className="content-column col-lg-5 col-md-12 col-sm-12 d-flex flex-column justify-content-center">
                                        <div className="inner-column">
                                            <div className="post-title">React.js</div>
                                            <h2><Link href="blog-detail">Building Dynamic Web Apps with React.js</Link></h2>
                                            <div className="text">A deep dive into how React.js can be used to build dynamic, responsive web applications.</div>
                                            <div className="info-box">
                                                <div className="box-inner">
                                                    <div className="author-image">
                                                        <img src="assets/images/react.avif" alt="" />
                                                    </div>
                                                    Logeswari Ravi
                                                    <span>Fullstack Developer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                        {/* Additional Posts */}
                        <div className="row clearfix">
                            
                            {/* News Block Three */}
                            <div className="news-block-three col-lg-4 col-md-6 col-sm-12 d-flex flex-column">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link href="blog-detail"><img src="assets/images/3d.avif" alt=""/></Link>
                                    </div>
                                    <div className="lower-content">
                                        <div className="inner-column">
                                            <div className="post-title">3D Visualization</div>
                                            <h2><Link href="blog-detail">3D Experiences with Three.js</Link></h2>
                                            <div className="text">Explore how Three.js can be used for interactive 3D visualizations, including games and other dynamic applications.</div>
                                            <div className="info-box">
                                                <div className="box-inner">
                                                    <div className="author-image">
                                                        <img src="assets/images/3d.avif" alt="" />
                                                    </div>
                                                    Logeswari Ravi
                                                    <span>Frontend Developer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="news-block-three col-lg-4 col-md-6 col-sm-12 d-flex flex-column">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link href="blog-detail"><img src="assets/images/database-skill.avif" alt=""/></Link>
                                    </div>
                                    <div className="lower-content">
                                        <div className="inner-column">
                                            <div className="post-title">Backend Development</div>
                                            <h2><Link href="blog-detail">Optimizing SQL and Node.js for  Web</Link></h2>
                                            <div className="text">Explore best practices for optimizing SQL queries and Node.js performance to build scalable, efficient backend services.</div>
                                            <div className="info-box">
                                                <div className="box-inner">
                                                    <div className="author-image">
                                                        <img src="assets/images/database-skill.avif" alt="" />
                                                    </div>
                                                    Logeswari Ravi
                                                    <span>Backend Developer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="news-block-three col-lg-4 col-md-6 col-sm-12 d-flex flex-column">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link href="blog-detail"><img src="assets/images/next.png" alt=""/></Link>
                                    </div>
                                    <div className="lower-content">
                                        <div className="inner-column">
                                            <div className="post-title">Frontend Performance</div>
                                            <h2><Link href="blog-detail">Optimizing Next.js for Faster Web Apps</Link></h2>
                                            <div className="text">Learn best practices for improving performance in Next.js apps, focusing on rendering and load times.</div>
                                            <div className="info-box">
                                                <div className="box-inner">
                                                    <div className="author-image">
                                                        <img src="assets/images/next.png" alt="" />
                                                    </div>
                                                    Logeswari Ravi
                                                    <span>Frontend Developer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                        
                        {/* Post Share Options */}
                        <div className="styled-pagination">
                            <ul className="clearfix">
                                <li className="active"><Link href="#">1</Link></li>
                                <li><Link href="#">2</Link></li>
                                <li><Link href="#">3</Link></li>
                                <li><Link href="#">4</Link></li>
                                <li className="next"><Link href="#"><span className="flaticon-right-arrow"></span> </Link></li>
                            </ul>
                        </div>
                {/* End Blog Page Section */}
                        
                {/* Talk Section */}
                <section className="talk-section">
                    <div className="auto-container">
                        <div className="row clearfix">
                        
                            {/* Title Column */}
                            <div className="title-column col-lg-5 col-md-12 cols-m-12">
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <h2>Let’s Talk</h2>
                                    </div>
                                    <ul className="contact-list">
                                        <li><Link href="#"><span className="icon flaticon-skype"></span>Logeswari Ravi</Link></li>
                                        <li><Link href="#"><span className="icon flaticon-whatsapp"></span>(814) 802 - 6390</Link></li>
                                        <li><Link href="#"><span className="icon flaticon-slack"></span>LogeswariRavi.slack.com</Link></li>
                                    </ul>
                                </div>
                            </div>
                            
                            {/* Form Column */}
                            <div className="form-column col-lg-7 col-md-12 cols-m-12">
                                <div className="inner-column">
                                    <div className="column-text">Ready to start a journey together? <br/> Fill the form below and let´s connect!</div>
                                    
                                    {/* Contact Form */}
                                    <div className="contact-form">
                                        <form method="post" id="contact-form">
                                            <div className="row clearfix">
                                            
                                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                    <input type="text" name="firstname" placeholder="First Name" />
                                                </div>
                                                
                                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                    <input type="text" name="lastname" placeholder="Last Name" />
                                                </div>
                                                
                                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                    <input type="email" name="email" placeholder="Email" />
                                                </div>
                                                
                                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                    <input type="text" name="company" placeholder="Company" />
                                                </div>
                                                
                                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                    <label for="input_file" className="input_files"> Attachment (Optional) <i className="flaticon-paperclip"></i> </label>
                                                    <input className="input_files" id="input_file" type="file" name="file" placeholder="" />
                                                </div>
                                                
                                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                    <textarea name="message" placeholder="Message*"></textarea>
                                                </div>
                                                
                                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                    <h4>Why are you interested in speaking with me?</h4>
                                                    
                                                    <span>
                                                        <input type="checkbox" id="subject-1" className="d-none" />
                                                        <label for="subject-1" className="subjects">
                                                            <span>I need help with my company billings</span>
                                                        </label>
                                                    </span>
                                                    <span>
                                                        <input type="checkbox" id="subject-2" className="d-none" />
                                                        <label for="subject-2" className="subjects">
                                                            <span>I need some advice</span>
                                                        </label>
                                                    </span>
                                                    <span>
                                                        <input type="checkbox" id="subject-3" className="d-none" />
                                                        <label for="subject-3" className="subjects">
                                                            <span>I am looking for someone to hire</span>
                                                        </label>
                                                    </span>
                                                    <span>
                                                        <input type="checkbox" id="subject-4" className="d-none" />
                                                        <label for="subject-4" className="subjects">
                                                            <span>Something else</span>
                                                        </label>
                                                    </span>
                                                    
                                                </div>
                                                
                                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                    <button type="submit" className="theme-btn btn-style-two"><span className="txt">Contact Me</span></button>
                                                </div>
                                                
                                            </div>
                                        </form>
                                    </div>
                                    {/*End Contact Form*/}
                                    <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/icons/arrow-pattern.png' }} ></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
                {/* End Talk Section */}
                
                {/* Call To Action Section */}
                <section className="call-to-action-section">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="triangle-layer">
                                <span className="icon"><img src="assets/images/icons/triangles.png" alt="" /></span>
                                <span className="icon"><img src="assets/images/icons/triangles.png" alt="" /></span>
                                <span className="icon"><img src="assets/images/icons/triangles.png" alt="" /></span>
                            </div>
                            <h1>Ready to Start This?</h1>
                            <div className="text">It’s easy to get in contact with me. Either call or write!</div>
                            <div className="btns-box">
                                <Link href="tel:+012-345-6789"><span className="icon flaticon-phone-call"></span>(012) 345 - 6789</Link>
                                <Link href="mailto:jessh@contact.com"><span className="icon flaticon-envelope"></span>Logeswari@contact.com</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Call To Action Section */}


            </Layout>
        </>
    )
}
