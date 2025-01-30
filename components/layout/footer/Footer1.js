import Link from "next/link"
export default function Footer1() {
    return (
        <>
        {/* Main Footer */}
		<footer className="main-footer">
			<div className="auto-container">
				<div className="upper-box">
					<div className="row clearfix">
						{/* Column */}
						<div className="column col-lg-6 col-md-12 col-sm-12">
							<h2>Listening to <br/> your wishes <br/> & ideas! </h2>
							<Link href="contact" className="theme-btn btn-style-two"><span className="txt">Schedule a Discussion</span></Link>
						</div>
						{/* Column */}
						<div className="column col-lg-6 col-md-12 col-sm-12">
							<h4>Contact</h4>
							<div className="address">Rathinam Tech Park, <br/> Coimbatore</div>
							{/* Social Box */}
							<div className="social-box">
								<Link target="_blank" href="http://facebook.com/" className="fab fa-facebook-f"></Link>
								<Link target="_blank" href="http://twitter.com/" className="fab fa-twitter"></Link>
								<Link target="_blank" href="https://www.linkedin.com/in/logeswari-ravi-070822225/" className="fab fa-linkedin-in"></Link>
							</div>
						</div>
					</div>
				</div>
				
				{/* Footer Bottom */}
				<div className="footer-bottom">
					<div className="row clearfix">
						
						{/* Nav Column */}
						<div className="nav-column col-lg-6 col-md-12 col-sm-12">
							<ul>
								<li><Link href="contact">Terms & Conditions</Link></li>
								<li><Link href="contact">Privacy Policy</Link></li>
								<li><Link href="contact">Help & Support</Link></li>
							</ul>
						</div>
						
						{/* Copyright Column */}
						<div className="copyright-column col-lg-6 col-md-12 col-sm-12">
							<div className="copyright">&copy; 2024</div>
						</div>
						
					</div>
				</div>
				
			</div>
		</footer>

        </>
    )
}
