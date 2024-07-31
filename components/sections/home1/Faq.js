'use client'
import { useState } from 'react'
 

export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>

        <section className="faq-section">
            <div className="auto-container">
                <div className="row clearfix">
                    
                    {/* Image Column */}
                    <div className="image-column col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="circle-layer" style={{ backgroundImage: 'url(assets/images/icons/circle-pattern-1.png' }} ></div>
                            <div className="image wow slideInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <img src="assets/images/resource/faq.png" alt="" />
                            </div>
                        </div>
                    </div>
                    
                    {/* Accordion Column */}
                    <div className="accordion-column col-lg-7 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <h2>Frequently Asked Questions</h2>
                            </div>
                            
                            <div className="accordion-outer">
                                <ul className="accordion-box">

                                    {/*Block*/}
                                    <li className={isActive.key == 1 ? "accrodion block active-block" : "accrodion block"} onClick={() => handleToggle(1)}>
                                        <div className="acc-btn">Do you have specific princing plans to show? <div className="icon flaticon-down-arrow"></div></div>
                                        <div className="acc-content">
                                            <div className="content">
                                                <div className="text">Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.</div>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    {/*Block*/}
                                    <li className={isActive.key == 2 ? "accrodion block active-block" : "accrodion block"} onClick={() => handleToggle(2)}>
                                        <div className="acc-btn">How many years of experience do you have? <div className="icon flaticon-down-arrow"></div></div>
                                        <div className="acc-content">
                                            <div className="content">
                                                <div className="text">Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability. We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers.</div>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    {/*Block*/}
                                    <li className={isActive.key == 3 ? "accrodion block active-block" : "accrodion block"} onClick={() => handleToggle(3)}>
                                        <div className="acc-btn">What companies have you worked with? <div className="icon flaticon-down-arrow"></div></div>
                                        <div className="acc-content">
                                            <div className="content">
                                                <div className="text">Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.</div>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    {/*Block*/}
                                    <li className={isActive.key == 4 ? "accrodion block active-block" : "accrodion block"} onClick={() => handleToggle(4)}>
                                        <div className="acc-btn">Am I safe leaving my company in your hands? <div className="icon flaticon-down-arrow"></div></div>
                                        <div className="acc-content">
                                            <div className="content">
                                                <div className="text">Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.</div>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    {/*Block*/}
                                    <li className={isActive.key == 5 ? "accrodion block active-block" : "accrodion block"} onClick={() => handleToggle(5)}>
                                        <div className="acc-btn">Do you have specific princing plans to show? <div className="icon flaticon-down-arrow"></div></div>
                                        <div className="acc-content">
                                            <div className="content">
                                                <div className="text">Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.</div>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    {/*Block*/}
                                    <li className={isActive.key == 6 ? "accrodion block active-block" : "accrodion block"} onClick={() => handleToggle(6)}>
                                        <div className="acc-btn">What companies have you worked with? <div className="icon flaticon-down-arrow"></div></div>
                                        <div className="acc-content">
                                            <div className="content">
                                                <div className="text">Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.</div>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    {/*Block*/}
                                    <li className={isActive.key == 7 ? "accrodion block active-block" : "accrodion block"} onClick={() => handleToggle(7)}>
                                        <div className="acc-btn">Am I safe leaving my company in your hands? <div className="icon flaticon-down-arrow"></div></div>
                                        <div className="acc-content">
                                            <div className="content">
                                                <div className="text">Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.</div>
                                            </div>
                                        </div>
                                    </li>
                                    
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </section>
            

        </>
    )
}
