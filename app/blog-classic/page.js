'use client'
import Layout from "@/components/layout/Layout"
import BlogImageSlider from "@/components/slider/BlogImageSlider"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import Link from "next/link"
export default function BlogClassic() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Latest News">
                {/* Sidebar Page Container */}
                <div className="services-page-container">
                    <div className="auto-container">
                        <div className="row clearfix">
                            
                            {/* Content Side */}
                            <div className="content-side col-lg-8 col-md-12 col-sm-12">
                                <div className="our-services">
                                    
                                    {/* Service Block */}
                                    <div className="service-block">
                                        <div className="inner-box">
                                            <div className="upper-content">
                                                <h2><Link href="service-detail">Web Development</Link></h2>
                                                <div className="text">We specialize in creating responsive, user-friendly web applications using modern frameworks such as React.js and Vue.js.</div>
                                            </div>
                                            <div className="image">
                                                <Link href="service-detail"><img src="assets/images/food-skill.avif" alt="Web Development"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Service Block */}
                                    <div className="service-block">
                                        <div className="inner-box">
                                            <div className="upper-content">
                                                <h2><Link href="service-detail">3D Visualization</Link></h2>
                                                <div className="text">Our expertise in Three.js allows us to build immersive 3D experiences and interactive visualizations for various industries.</div>
                                            </div>
                                            <div className="image">
                                                <Link href="service-detail"><img src="assets/images/3d.avif" alt="3D Visualization"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Service Block */}
                                    <div className="service-block">
                                        <div className="inner-box">
                                            <div className="upper-content">
                                                <h2><Link href="service-detail">SQL Database Management</Link></h2>
                                                <div className="text">Designing, managing, and optimizing databases using SQL for efficient data storage and retrieval.</div>
                                            </div>
                                            <div className="image">
                                                <Link href="service-detail"><img src="assets/images/database-skill.avif" alt="Cybersecurity Interfaces"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Service Block */}
                                    <div className="service-block">
                                        <div className="inner-box">
                                            <div className="upper-content">
                                                <h2><Link href="service-detail">Booking Systems</Link></h2>
                                                <div className="text">Our booking systems, built with React.js, offer seamless integration, user-friendly interfaces, and efficient management for your booking needs.</div>
                                            </div>
                                            <div className="image">
                                                <Link href="service-detail"><img src="assets/images/book-skill.avif" alt="Booking Systems"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Sidebar Side */}
                            <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
                                <aside className="sidebar sticky-top">
                                    
                                    {/* Contact Widget */}
                                    <div className="sidebar-widget contact-widget">
                                        <div className="sidebar-title">
                                            <h3>Contact Us</h3>
                                        </div>
                                        <div className="widget-content">
                                            <div className="text">Feel free to reach out for any queries or services. We are here to help you!</div>
                                            <ul className="contact-info">
                                                <li>Email: <Link href="mailto:log@gmail.com">log@gmail.com</Link></li>
                                                <li>Phone: +123 456 7890</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    {/* Categories Widget */}
                                    <div className="sidebar-widget categories-widget">
                                        <div className="sidebar-title">
                                            <h3>Services</h3>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="service-cat">
                                                <li><Link href="#">Web Development</Link></li>
                                                <li><Link href="#">3D Visualization</Link></li>
                                                <li><Link href="#">Cybersecurity Interfaces</Link></li>
                                                <li><Link href="#">Booking Systems</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    {/* Testimonials Widget */}
                                    <div className="sidebar-widget testimonials-widget">
                                        <div className="sidebar-title">
                                            <h3>Testimonials</h3>
                                        </div>
                                        <div className="widget-content">
                                            <div className="testimonial">"The web development services provided were exceptional. The team was professional and delivered beyond our expectations." - Client A</div>
                                            <div className="testimonial">"Amazing 3D visualization! It truly transformed our presentation." - Client B</div>
                                            <div className="testimonial">"Their cybersecurity interfaces are both secure and user-friendly. Highly recommend!" - Client C</div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
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
                                                    <label className="input_files"> Attachment (Optional) <i className="flaticon-paperclip"></i> </label>
                                                    <input className="input_files" id="input_file" type="file" name="file" placeholder="" />
                                                </div>
                                                
                                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                    <textarea name="message" placeholder="Message*"></textarea>
                                                </div>
                                                
                                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                    <h4>Why are you interested in speaking with me?</h4>
                                                    
                                                    <span>
                                                        <input type="checkbox" id="subject-1" className="d-none" />
                                                        <label className="subjects">
                                                            <span>I need help with my company billings</span>
                                                        </label>
                                                    </span>
                                                    <span>
                                                        <input type="checkbox" id="subject-2" className="d-none" />
                                                        <label className="subjects">
                                                            <span>I need some advice</span>
                                                        </label>
                                                    </span>
                                                    <span>
                                                        <input type="checkbox" id="subject-3" className="d-none" />
                                                        <label className="subjects">
                                                            <span>I am looking for someone to hire</span>
                                                        </label>
                                                    </span>
                                                    <span>
                                                        <input type="checkbox" id="subject-4" className="d-none" />
                                                        <label className="subjects">
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
                                <Link href="mailto:jessh@contact.com"><span className="icon flaticon-envelope"></span>Logeshwari@contact.com</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Call To Action Section */}


            </Layout>
        </>
    )
}



