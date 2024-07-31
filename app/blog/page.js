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
                                    <div className="image-column col-lg-7 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            <div className="image">
                                                <Link href="blog-detail"><img src="assets/images/resource/news-1.jpg" alt=""/></Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Content Column */}
                                    <div className="content-column col-lg-5 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            <div className="post-title">new</div>
                                            <h2><Link href="blog-detail">Annual accounts statutory audit</Link></h2>
                                            <div className="text">We will prepare your annual financial statements as set out by the companies acts. We will advise our clients.</div>
                                            <div className="info-box">
                                                <div className="box-inner">
                                                    <div className="author-image">
                                                        <img src="assets/images/resource/author-6.jpg" alt="" />
                                                    </div>
                                                    James Korcs
                                                    <span>Writer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                        <div className="row clearfix">
                            
                            {/* News Block Three */}
                            <div className="news-block-three col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link href="blog-detail"><img src="assets/images/resource/news-2.jpg" alt=""/></Link>
                                    </div>
                                    <div className="lower-content">
                                        <div className="inner-column">
                                            <div className="post-title">trading</div>
                                            <h2><Link href="blog-detail">Changing to four-day week</Link></h2>
                                            <div className="text">The head of Germany’s largest trade union has proposed a four-day week to protect jobs threatened.</div>
                                            <div className="info-box">
                                                <div className="box-inner">
                                                    <div className="author-image">
                                                        <img src="assets/images/resource/author-7.jpg" alt="" />
                                                    </div>
                                                    Jessica Bielso
                                                    <span>Writer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* News Block Three */}
                            <div className="news-block-three col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link href="blog-detail"><img src="assets/images/resource/news-3.jpg" alt=""/></Link>
                                    </div>
                                    <div className="lower-content">
                                        <div className="inner-column">
                                            <div className="post-title">jobs</div>
                                            <h2><Link href="blog-detail">Euro area sheds almost half of jobs</Link></h2>
                                            <div className="text">The coronavirus pandemic has wiped out nearly half of the 12 million euro-area jobs created in the seven.</div>
                                            <div className="info-box">
                                                <div className="box-inner">
                                                    <div className="author-image">
                                                        <img src="assets/images/resource/author-8.jpg" alt="" />
                                                    </div>
                                                    Danielle Horr
                                                    <span>Writer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* News Block Three */}
                            <div className="news-block-three col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link href="blog-detail"><img src="assets/images/resource/news-4.jpg" alt=""/></Link>
                                    </div>
                                    <div className="lower-content">
                                        <div className="inner-column">
                                            <div className="post-title">property</div>
                                            <h2><Link href="blog-detail">Property prices rise again</Link></h2>
                                            <div className="text">Property prices rose marginally in the year to June despite the pandemic causing massive disruption.</div>
                                            <div className="info-box">
                                                <div className="box-inner">
                                                    <div className="author-image">
                                                        <img src="assets/images/resource/author-9.jpg" alt="" />
                                                    </div>
                                                    Cameron White
                                                    <span>Writer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* News Block Three */}
                            <div className="news-block-three col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link href="blog-detail"><img src="assets/images/resource/news-5.jpg" alt=""/></Link>
                                    </div>
                                    <div className="lower-content">
                                        <div className="inner-column">
                                            <div className="post-title">tax</div>
                                            <h2><Link href="blog-detail">Taxation and tax planning</Link></h2>
                                            <div className="text">Why is tax important to your wealth creation and overall financial health? For most people, the largest expense.</div>
                                            <div className="info-box">
                                                <div className="box-inner">
                                                    <div className="author-image">
                                                        <img src="assets/images/resource/author-9.jpg" alt="" />
                                                    </div>
                                                    Cameron White
                                                    <span>Writer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* News Block Three */}
                            <div className="news-block-three col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link href="blog-detail"><img src="assets/images/resource/news-6.jpg" alt=""/></Link>
                                    </div>
                                    <div className="lower-content">
                                        <div className="inner-column">
                                            <div className="post-title">jobs</div>
                                            <h2><Link href="blog-detail">Restart of the aviation industry</Link></h2>
                                            <div className="text">The aviation industry is staring into a winter of devastation but the answer could lie in colder climes.</div>
                                            <div className="info-box">
                                                <div className="box-inner">
                                                    <div className="author-image">
                                                        <img src="assets/images/resource/author-8.jpg" alt="" />
                                                    </div>
                                                    Danielle Horr
                                                    <span>Writer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* News Block Three */}
                            <div className="news-block-three col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link href="blog-detail"><img src="assets/images/resource/news-7.jpg" alt=""/></Link>
                                    </div>
                                    <div className="lower-content">
                                        <div className="inner-column">
                                            <div className="post-title">property</div>
                                            <h2><Link href="blog-detail">No recovery in the retail</Link></h2>
                                            <div className="text">No recovery in the retail sector before 2025, says EY reports for always making everything function well.</div>
                                            <div className="info-box">
                                                <div className="box-inner">
                                                    <div className="author-image">
                                                        <img src="assets/images/resource/author-10.jpg" alt="" />
                                                    </div>
                                                    Kate Jenses
                                                    <span>Writer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* News Block Three */}
                            <div className="news-block-three style-two col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link href="blog-detail"><img src="assets/images/resource/news-8.jpg" alt=""/></Link>
                                    </div>
                                    <div className="lower-content">
                                        <div className="inner-column">
                                            <div className="post-title">Business</div>
                                            <h2><Link href="blog-detail">Expanded business restart grant scheme</Link></h2>
                                            <div className="text">Applications have opened for the Government’s Restart Grant Plus Scheme after the maximum grant available was raised to €25,000. Businesses that have suffered.</div>
                                            <div className="info-box">
                                                <div className="box-inner">
                                                    <div className="author-image">
                                                        <img src="assets/images/resource/author-7.jpg" alt="" />
                                                    </div>
                                                    Kate Jenses
                                                    <span>Writer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* News Block Three */}
                            <div className="news-block-three style-two col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link href="blog-detail"><img src="assets/images/resource/news-9.jpg" alt=""/></Link>
                                    </div>
                                    <div className="lower-content">
                                        <div className="inner-column">
                                            <div className="post-title">Business</div>
                                            <h2><Link href="blog-detail">Digital hub warns of need for emergency funding</Link></h2>
                                            <div className="text">Applications have opened for the Government’s Restart Grant Plus Scheme after the maximum grant available was raised to €25,000. Businesses that have suffered.</div>
                                            <div className="info-box">
                                                <div className="box-inner">
                                                    <div className="author-image">
                                                        <img src="assets/images/resource/author-9.jpg" alt="" />
                                                    </div>
                                                    Cameron White
                                                    <span>Writer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                </section>
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