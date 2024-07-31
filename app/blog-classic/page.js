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
                <div className="sidebar-page-container">
                    <div className="auto-container">
                        <div className="row clearfix">
                            
                            {/* Content Side */}
                            <div className="content-side col-lg-8 col-md-12 col-sm-12">
                                <div className="our-blogs">
                                    
                                    {/* News Block Four */}
                                    <div className="news-block-four">
                                        <div className="inner-box">
                                            <div className="upper-content">
                                                <div className="link-icon flaticon-push-pin-2"></div>
                                                <ul className="post-info">
                                                    <li><Link href="blog-detail">by James Korcs</Link></li>
                                                    <li><Link href="blog-detail">25/08/2021</Link></li>
                                                    <li><Link href="blog-detail">new</Link></li>
                                                </ul>
                                                <h2><Link href="blog-detail">Former DOJ criminal head to join latham</Link></h2>
                                                <div className="text">Introduction On June 17, 2021, the Reserve Bank of India [RBI] released the draft framework for the regulation of Housing Finance Companies.</div>
                                            </div>
                                            <div className="image">
                                                <Link href="blog-detail"><img src="assets/images/resource/news-10.jpg" alt=""/></Link>
                                                <div className="side-icon flaticon-clicking"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* News Block Four */}
                                    <div className="news-block-four">
                                        <div className="inner-box">
                                            <div className="upper-content">
                                                <ul className="post-info">
                                                    <li><Link href="blog-detail">by James Korcs</Link></li>
                                                    <li><Link href="blog-detail">25/08/2021</Link></li>
                                                    <li><Link href="blog-detail">new</Link></li>
                                                </ul>
                                                <h2><Link href="blog-detail">Annual accounts statutory audit for companies</Link></h2>
                                                <div className="text">We will prepare your annual financial statements as set out by companies acts. We will advise our clients on the software.</div>
                                            </div>
                                            <div className="image">
                                                <Link href="blog-detail"><img src="assets/images/resource/news-11.jpg" alt=""/></Link>
                                                <div className="side-icon flaticon-clicking"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* News Block Four */}
                                    <div className="news-block-four">
                                        <div className="inner-box">
                                            <div className="upper-content">
                                                <ul className="post-info">
                                                    <li><Link href="blog-detail">by James Korcs</Link></li>
                                                    <li><Link href="blog-detail">25/08/2021</Link></li>
                                                    <li><Link href="blog-detail">new</Link></li>
                                                </ul>
                                                <h2><Link href="blog-detail">VIDEO - What 27-year age gap amongst partners?</Link></h2>
                                                <div className="text">We will prepare your annual financial statements as set out by companies acts. We will advise our clients on the software.</div>
                                            </div>
                                            <div className="image">
                                                <img src="assets/images/resource/news-12.jpg" alt=""/>
                                                <a onClick={() => setOpen(true)} className="lightbox-image overlay-box"><span className="icon flaticon-play"><i className="ripple"></i></span></a>
                                                <div className="side-icon flaticon-clicking"></div>
                                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* News Block Four */}
                                    <div className="news-block-four">
                                        <div className="inner-box">
                                            <div className="upper-content">
                                                <ul className="post-info">
                                                    <li><Link href="blog-detail">by James Korcs</Link></li>
                                                    <li><Link href="blog-detail">25/08/2021</Link></li>
                                                    <li><Link href="blog-detail">new</Link></li>
                                                </ul>
                                                <h2><Link href="blog-detail">Junior to senior energy is associate attorney </Link></h2>
                                                <div className="text">We will prepare your annual financial statements as set out by companies acts. We will advise our clients on the software.</div>
                                            </div>
                                            <div className="image">
                                                <BlogImageSlider />
                                                <div className="side-icon flaticon-clicking"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* News Block Five */}
                                    <div className="news-block-five">
                                        <div className="inner-box">
                                            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/background/pattern-3.png' }} ></div>
                                            <h2><Link href="blog-detail">“The law was made for one thing alone, for the exploitation of those who don't understand it.”</Link></h2>
                                            <div className="author">/ Bertolt Brecht</div>
                                        </div>
                                    </div>
                                    
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
                                    
                                </div>
                            </div>
                            
                            {/* Sidebar Side */}
                            <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
                                <aside className="sidebar sticky-top">
                                    
                                    {/* Search */}
                                    <div className="sidebar-widget search-box">
                                        <form>
                                            <div className="form-group">
                                                <input type="search" name="search-field" placeholder="Search article" />
                                                <button type="submit"><span className="icon fa fa-search"></span></button>
                                            </div>
                                        </form>
                                    </div>
                                    
                                    {/* Categories Widget */}
                                    <div className="sidebar-widget popular-posts">
                                        <div className="sidebar-title">
                                            <h3>Recent Post</h3>
                                        </div>
                                        <div className="widget-content">
                                            <article className="post">
                                                <figure className="post-thumb"><img src="assets/images/resource/post-thumb-1.jpg" alt=""/><Link href="blog-detail" className="overlay-box"><span className="icon fa fa-link"></span></Link></figure>
                                                <div className="text"><Link href="blog-detail">Lawyers Are About To Be Poor</Link></div>
                                                <div className="post-info">21/08/2021</div>
                                            </article>
                                            <article className="post">
                                                <figure className="post-thumb"><img src="assets/images/resource/post-thumb-2.jpg" alt=""/><Link href="blog-detail" className="overlay-box"><span className="icon fa fa-link"></span></Link></figure>
                                                <div className="text"><Link href="blog-detail">Help From Hotshot With Training</Link></div>
                                                <div className="post-info">20/08/2021</div>
                                            </article>
                                            <article className="post">
                                                <figure className="post-thumb"><img src="assets/images/resource/post-thumb-3.jpg" alt=""/><Link href="blog-detail" className="overlay-box"><span className="icon fa fa-link"></span></Link></figure>
                                                <div className="text"><Link href="blog-detail">Driving Efficiency In Law Firm Accounting</Link></div>
                                                <div className="post-info">19/08/2021</div>
                                            </article>
                                        </div>
                                    </div>
                                    
                                    {/* Categories Widget */}
                                    <div className="sidebar-widget categories-widget">
                                        <div className="sidebar-title">
                                            <h3>Categories</h3>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="blog-cat">
                                                <li><Link href="#">All</Link></li>
                                                <li><Link href="#">Property</Link></li>
                                                <li><Link href="#">Trading</Link></li>
                                                <li><Link href="#">Jobs</Link></li>
                                                <li><Link href="#">Tax</Link></li>
                                                <li><Link href="#">Business</Link></li>
                                                <li><Link href="#">Law & Order</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    {/* Archive Widget */}
                                    <div className="sidebar-widget archive-widget">
                                        <div className="sidebar-title">
                                            <h3>Archive</h3>
                                        </div>
                                        <div className="widget-content">
                                            <div className="form-group">
                                                <select className="custom-select-box">
                                                    <option>January, 2021</option>
                                                    <option>February, 2021</option>
                                                    <option>March, 2021</option>
                                                    <option>April, 2021</option>
                                                    <option>May, 2021</option>
                                                    <option>June, 2021</option>
                                                    <option>July, 2021</option>
                                                    <option >August, 2021</option>
                                                    <option>September, 2021</option>
                                                    <option>October, 2021</option>
                                                    <option>November, 2021</option>
                                                    <option>December, 2021</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Categories Widget */}
                                    <div className="sidebar-widget popular-posts style-two">
                                        <div className="sidebar-title">
                                            <h3>Most Popular</h3>
                                        </div>
                                        <div className="widget-content">
                                            <article className="post">
                                                <div className="text"><Link href="blog-detail">Bar Examiner Offers Less Than Inspiring Answers</Link></div>
                                                <div className="post-info">21/08/2021</div>
                                            </article>
                                            <article className="post">
                                                <div className="text"><Link href="blog-detail">So… Are We Going To Have A Test Of This October</Link></div>
                                                <div className="post-info">20/08/2021</div>
                                            </article>
                                            <article className="post">
                                                <div className="text"><Link href="blog-detail">California Bill Recommends Cut Score Retroactive2015</Link></div>
                                                <div className="post-info">19/08/2021</div>
                                            </article>
                                        </div>
                                    </div>
                                    
                                    {/* Popular Posts */}
                                    <div className="sidebar-widget popular-tags">
                                        <div className="sidebar-title">
                                            <h3>Tags</h3>
                                        </div>
                                        <div className="widget-content">
                                            <Link href="#">business</Link>
                                            <Link href="#">Jobs</Link>
                                            <Link href="#">New</Link>
                                            <Link href="#">Property</Link>
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
                                        <li><Link href="#"><span className="icon flaticon-skype"></span>JessicaHornes</Link></li>
                                        <li><Link href="#"><span className="icon flaticon-whatsapp"></span>(012) 345 - 6789</Link></li>
                                        <li><Link href="#"><span className="icon flaticon-slack"></span>jessh.slack.com</Link></li>
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
                                <Link href="mailto:jessh@contact.com"><span className="icon flaticon-envelope"></span>jessh@contact.com</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Call To Action Section */}


            </Layout>
        </>
    )
}