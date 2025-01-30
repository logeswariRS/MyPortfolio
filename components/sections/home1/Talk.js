'use client'
import Link from "next/link"
export default function Talk() {
    return (
        <>

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
            

        </>
    )
}
