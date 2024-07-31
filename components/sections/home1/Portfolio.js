'use client'
import { useState } from "react"

import PortfolioSlider1 from "@/components/slider/PortfolioSlider1"
import PortfolioSlider2 from "@/components/slider/PortfolioSlider2"
import PortfolioSlider3 from "@/components/slider/PortfolioSlider3"
import PortfolioSlider4 from "@/components/slider/PortfolioSlider4"

export default function Portfolio() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>

        <section className="portfolio-section">
            <div className="auto-container">
                <div className="sec-title">
                    <div className="clearfix">
                        <div className="pull-left">
                            <h2>My Portfolio</h2>
                        </div>
                        <div className="pull-right">
                            <div className="text">I am trying to make the world a better and <br/> safer place from now on.</div>
                        </div>
                    </div>
                </div>
                {/*Porfolio Tabs*/}
                <div className="project-tab">
                    <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/icons/circle-pattern.png' }} ></div>
                    <div className="tab-btns-box">
                        {/*Tabs Header*/}
                        <div className="tabs-header">
                            <ul className="product-tab-btns clearfix">
                                <li className={activeIndex == 1 ? "p-tab-btn active-btn" : "p-tab-btn"} onClick={() => handleOnClick(1)}><span>01</span>Acme Client</li>
                                <li className={activeIndex == 2 ? "p-tab-btn active-btn" : "p-tab-btn"} onClick={() => handleOnClick(2)}><span>02</span>Jefferson & Co.</li>
                                <li className={activeIndex == 3 ? "p-tab-btn active-btn" : "p-tab-btn"} onClick={() => handleOnClick(3)}><span>03</span>Schuster Inc</li>
                                <li className={activeIndex == 4 ? "p-tab-btn active-btn" : "p-tab-btn"} onClick={() => handleOnClick(4)}><span>04</span>Hagenes PLC</li>
                            </ul>
                        </div>
                    </div>
                    
                    {/*Tabs Content*/}  
                    <div className="p-tabs-content">
                    
                        {/*Portfolio Tab / Active Tab*/}
                        <div className={activeIndex == 1 ? "p-tab fadeInUp animated show active-tab" : "p-tab fadeInUp animated"}>
                            <PortfolioSlider1 />
                        </div>
                        
                        {/* Portfolio Tab */}
                        <div className={activeIndex == 2 ? "p-tab fadeInUp animated show active-tab" : "p-tab fadeInUp animated"}>
                            <PortfolioSlider2 />
                        </div>
                        
                        {/* Portfolio Tab */}
                        <div className={activeIndex == 3 ? "p-tab fadeInUp animated show active-tab" : "p-tab fadeInUp animated"}>
                            <PortfolioSlider3 />
                        </div>
                        
                        {/* Portfolio Tab */}
                        <div className={activeIndex == 4 ? "p-tab fadeInUp animated show active-tab" : "p-tab fadeInUp animated"}>
                            <PortfolioSlider4 />
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </section>

        </>
    )
}
