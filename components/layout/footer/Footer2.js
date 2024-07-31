import Link from "next/link"
export default function Footer2() {
    return (
        <>
            

    {/* Main Footer */}
	<footer className="footer-style-two">
    	<div className="auto-container">
			<div className="widgets-section">
				<div className="row clearfix">
				
					{/* Big Column */}
					<div className="big-column col-lg-6 col-md-12 col-sm-12">
						<div className="row clearfix">
						
							{/* Footer Column */}
							<div className="footer-column col-lg-6 col-md-6 col-sm-12">
								<div className="footer-widget chat-widget">
									<div className="ideas">Listening to your <br/> wishes & ideas!</div>
									<Link href="contact" className="theme-btn btn-style-two"><span className="txt">Schedule a Discussion</span></Link>
								</div>
							</div>
							
							{/* Footer Column */}
							<div className="footer-column col-lg-6 col-md-6 col-sm-12">
								<div className="footer-widget">
									<h4>Contact</h4>
									<div className="text">422 Ryder Avenue <br/> Seattle, WA <br/> 98109</div>
								</div>
							</div>
							
						</div>
					</div>
					
					{/* Big Column */}
					<div className="big-column col-lg-6 col-md-12 col-sm-12">
						<div className="row clearfix">
							
							{/* Footer Column */}
							<div className="footer-column col-lg-6 col-md-6 col-sm-12">
								<div className="footer-widget">
									<h4>Get In Touch</h4>
									<ul className="contact-info">
										<li><Link href="tel:+012-345-6789">(012) 345 - 6789</Link></li>
										<li><Link href="mailto:denise@contact.com">denise@contact.com</Link></li>
									</ul>
								</div>
							</div>
							
							{/* Footer Column */}
							<div className="footer-column col-lg-6 col-md-6 col-sm-12">
								<div className="footer-widget">
									{/* Social Box */}
									<div className="social-box">
										<Link target="_blank" href="http://facebook.com/" className="fab fa-facebook-f"></Link>
										<Link target="_blank" href="http://twitter.com/" className="fab fa-twitter"></Link>
										<Link target="_blank" href="http://linkedin.com/" className="fab fa-linkedin-in"></Link>
									</div>
								</div>
							</div>
							
						</div>
					</div>
					
				</div>
			</div>
			
		</div>
		
		{/* Footer Bottom */}
		<div className="footer-bottom">
			<div className="auto-container">
				<div className="row clearfix">
					
					{/* Copyright Column */}
					<div className="copyright-column col-lg-6 col-md-12 col-sm-12">
						<div className="copyright">&copy; 2024</div>
					</div>
					
					{/* Nav Column */}
					<div className="nav-column col-lg-6 col-md-12 col-sm-12">
						<ul>
							<li><Link href="contact">Terms & Conditions</Link></li>
							<li><Link href="contact">Privacy Policy</Link></li>
							<li><Link href="contact">Help & Support</Link></li>
						</ul>
					</div>
					
				</div>
			</div>
		</div>
		
	</footer>

        </>
    )
}
