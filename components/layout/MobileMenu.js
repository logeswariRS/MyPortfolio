'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
    return (
        <>  
            {/* Mobile Menu  */}
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu}></div>
                <div className="close-btn" onClick={handleMobileMenu}><span className="icon far fa-times-circle"></span></div>
                
                <nav className="menu-box">
                    <div className="nav-logo"><Link href="/"><img src="assets/images/logo-2.png" alt="" title="" /></Link></div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation">
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/">Home</Link>
                                    <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <li><Link href="/">Home One</Link></li>
                                        <li><Link href="index-2">Home Two</Link></li>
                                    </ul>
                                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/#">Blog</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>                                 
                                        <li><Link href="blog">Our Blog</Link></li>
                                        <li><Link href="blog-classic">Blog Classic</Link></li>
                                        <li><Link href="blog-detail">Blog Details</Link></li>
                                    </ul>
                                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/#">Pages</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>                                 
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="blog">Our Blog</Link></li>
                                        <li><Link href="blog-classic">Blog Classic</Link></li>
                                        <li><Link href="blog-detail">Blog Details</Link></li>
                                        <li><Link href="error-page">Error Page</Link></li>
                                        <li><Link href="contact">Contact</Link></li>
                                    </ul>
                                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

          

        </>
    )
}
export default MobileMenu;
