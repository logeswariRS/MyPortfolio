import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, handleMobileMenu }) {
    return (
        <>
            


	<header className={`main-header header-style-three ${scroll ? "fixed-header" : ""}`}>
    	
		{/* Header Upper */}
        <div className="header-upper">
        	<div className="auto-container">
            	<div className="inner-container clearfix">
                	
					{/* Logo Box */}
                	<div className="pull-left logo-box">
                    	<div className="logo"><Link href="/"><img src="assets/images/logo-2.png" alt="" title=""/></Link></div>
                    </div>
                   	
					{/* Nav Outer */}
                   	<div className="nav-outer clearfix">
						
						{/* Mobile Navigation Toggler For Mobile */}
						<div className="mobile-nav-toggler"><span className="icon fas fa-bars"></span></div>
						{/* End Mobile Navigation Toggler For Mobile */}
						
						{/* Main Menu */}
						<nav className="main-menu navbar-expand-md">
							<div className="navbar-header">
								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							</div>

							<div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
								<Menu />
							</div>
							
						</nav>
						
						{/* Main Menu End*/}
						<div className="outer-box clearfix">
							{/* Button Box */}
							<div className="button-box">
								<Link href="contact" className="theme-btn btn-style-one"><span className="txt">Contact</span></Link>
							</div>
							{/* Social Box */}
							<div className="social-box">
								<Link target="_blank" href="http://facebook.com/" className="fab fa-facebook-f"></Link>
								<Link target="_blank" href="http://twitter.com/" className="fab fa-twitter"></Link>
								<Link target="_blank" href="https://www.linkedin.com/in/logeswari-ravi-070822225/" className="fab fa-linkedin-in"></Link>
							</div>
						</div>
					
					</div>
                   
                </div>
            </div>
        </div>
        {/*End Header Upper*/}
        
		<MobileMenu handleMobileMenu={handleMobileMenu} />
		
    </header>
     
        </>
    )
}
