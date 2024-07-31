import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogDetails() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Details">
                {/* Blog Page Section */}
                <div className="sidebar-page-container">
                    <div className="auto-container">
                        <div className="row clearfix">
                            
                            {/* Content Side */}
                            <div className="content-side col-lg-8 col-md-12 col-sm-12">
                                <div className="blog-detail">
                                    <div className="inner-boxed">
                                        <ul className="post-info">
                                            <li>by James Korcs</li>
                                            <li>25/08/2021</li>
                                            <li>new</li>
                                        </ul>
                                        <div className="image">
                                            <img src="assets/images/resource/news-13.jpg" alt=""/>
                                        </div>
                                        <p>Our client is the growing Houston office of a prestigious W. Coast-based on international law firm with an immediate need for an Oil and Gas Associate. Our client, a top-tier West Coast firm, is actively hiring a senior funds from associate with 5+ PQE for its team in Singapore. Candidates need to begins US-qualified with experience in either US PE fund formation experience in everything that you need.</p>
                                        <h3>Having a Good Decision to Take</h3>
                                        <p>The right person will to be able to think on their feet and carry entrepreneurial personality. Any additional Asian language experience is strongly preferred, but not a must-have.  </p>
                                        <ul className="list">
                                            <li>Be Afraid, Be Very Afraid</li>
                                            <li>NY Board of Bar Examiners</li>
                                            <li>Orrick is offering staff bonuses</li>
                                        </ul>
                                        <blockquote>
                                            “Even when laws have been written down, they <br/> bought not always to remain unaltered.”
                                            <div className="author-name">/ Aristotle</div>
                                        </blockquote>
                                        <p>Earthjustice’s Fossil Fuels Program seeks applicants for a Staff Attorney to join us in using the power of the law to protect communities and our environment from an onslaught of new oil and gas development. </p>
                                        <p>The position will focus on Texas, but will include other parts of the U.S. Gulf Region, and will be based in New Orleans (remotely), or in Texas (remotely). Note we have a team of Fossil Fuels program staff in New Orleans.</p>
                                        {/* Post Share Options*/}
                                        <div className="post-share-options">
                                            <div className="post-share-inner clearfix">
                                                <div className="pull-left tags">Tags:<Link href="#">jobs</Link> <Link href="#">trading </Link><Link href="#">new</Link></div>
                                                <ul className="social-box pull-right">
                                                    <li className="share">Share:</li>
                                                    <li><Link href="#"><span className="fab fa-instagram"></span></Link></li>
                                                    <li><Link href="#"><span className="fab fa-facebook-f"></span></Link></li>
                                                    <li><Link href="#"><span className="fab fa-pinterest-p"></span></Link></li>
                                                    <li><Link href="#"><span className="fab fa-youtube"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Recommended Posts */}
                                    <div className="recommended-posts">
                                        <h3>Recommended</h3>
                                        <div className="two-item-carousel owl-carousel owl-theme">
                                            
                                            {/* News Block Three */}
                                            <div className="news-block-three">
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
                                            <div className="news-block-three">
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
                                            <div className="news-block-three">
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
                                            <div className="news-block-three">
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
                                            
                                        </div>
                                    </div>
                                    
                                    <div className="comment-form-box">
                                        <h3>Leave a comment</h3>
                                        <div className="text">Required fields are marked with *</div>
                                        
                                        {/* Comment Form */}
                                        <div className="comment-form">
                                            <form method="post" id="contact-form">
                                                <div className="row clearfix">
                                                
                                                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                        <input type="text" name="firstname" placeholder="Name" />
                                                    </div>
                                                    
                                                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                        <input type="email" name="email" placeholder="Email" />
                                                    </div>
                                                    
                                                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                        <input type="text" name="website" placeholder="Website (Optional)" />
                                                    </div>
                                                    
                                                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                        <textarea name="message" placeholder="Comment*"></textarea>
                                                    </div>
                                                    
                                                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                                                                    
                                                        <span>
                                                            <input type="checkbox" id="subject-5" className="d-none" />
                                                            <label for="subject-5" className="subjects">
                                                                <span>Save details in browser for the next time I comment.</span>
                                                            </label>
                                                        </span>
                                                        
                                                    </div>
                                                    
                                                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                        <button type="submit" className="theme-btn btn-style-two"><span className="txt">Submit</span></button>
                                                    </div>
                                                    
                                                </div>
                                            </form>
                                        </div>
                                        
                                    </div>
                                    
                                    
                                    {/* Comments Area */}
                                    <div className="comments-area">
                                        <div className="group-title">
                                            <h3>Recent Comments</h3>
                                        </div>
                                        
                                        <div className="comment-box">
                                            <div className="comment">
                                                <div className="author-thumb"><img src="assets/images/resource/author-6.jpg" alt=""/></div>
                                                <div className="comment-info clearfix"><strong>Cameron White</strong></div>
                                                <div className="text">Suspendisse potenti. Curabitur sit amet sollicitudin sapien, ac tincidunt dolor. Cras eu velit id risus venenatis lacinia in velit. </div>
                                                <Link className="theme-btn reply-btn" href="#"> Reply</Link>
                                            </div>
                                        </div>
                                        
                                        <div className="comment-box reply-comment">
                                            <div className="comment">
                                                <div className="author-thumb"><img src="assets/images/resource/author-7.jpg" alt=""/></div>
                                                <div className="comment-info clearfix"><strong>Danielle Horr</strong></div>
                                                <div className="text">Suspendisse vel dignissim ipsum. </div>
                                                <Link className="theme-btn reply-btn" href="#"> Reply</Link>
                                            </div>
                                        </div>
                                        
                                        <div className="comment-box">
                                            <div className="comment">
                                                <div className="author-thumb"><img src="assets/images/resource/author-8.jpg" alt=""/></div>
                                                <div className="comment-info clearfix"><strong>Jessica Bielso</strong></div>
                                                <div className="text">Fusce quis mauris vel massa aliquam aliquet. Suspendisse potenti. Nam sollicitudin sodales imperdiet. Vivamus dictum auctor.</div>
                                                <Link className="theme-btn reply-btn" href="#"> Reply</Link>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                    
                                </div>
                            </div>
                            
                            {/* Sidebar Side */}
                            <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
                                <aside className="sidebar sticky-top">
                                    
                                    {/* Search */}
                                    <div className="sidebar-widget search-box">
                                        <form method="post">
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
                                                    <option>August, 2021</option>
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