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

        <section className="faq-section-two">
            <div className="auto-container">
                <div className="sec-title centered">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="inner-container">
                    <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/background/pattern-6.png' }} ></div>
                    <div className="row clearfix">
                        <div className="column col-lg-6 col-md-12 col-sm-12">
                            
                            <ul className="accordion-box style-two">

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
                                    <div className="acc-btn active">How many years of experience do you have? <div className="icon flaticon-down-arrow"></div></div>
                                    <div className="acc-content current">
                                        <div className="content">
                                            <div className="text">Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.</div>
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
                                
                            </ul>
                            
                        </div>
                        <div className="column col-lg-6 col-md-12 col-sm-12">
                            
                            <ul className="accordion-box style-two">

                                {/*Block*/}
                                <li className={isActive.key == 5 ? "accrodion block active-block" : "accrodion block"} onClick={() => handleToggle(5)}>
                                    <div className="acc-btn">Does the R&D specialist provide a report? <div className="icon flaticon-down-arrow"></div></div>
                                    <div className="acc-content">
                                        <div className="content">
                                            <div className="text">Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.</div>
                                        </div>
                                    </div>
                                </li>
                                
                                {/*Block*/}
                                <li className={isActive.key == 6 ? "accrodion block active-block" : "accrodion block"} onClick={() => handleToggle(6)}>
                                    <div className="acc-btn">Does the work actually qualify for tax relief? <div className="icon flaticon-down-arrow"></div></div>
                                    <div className="acc-content">
                                        <div className="content">
                                            <div className="text">Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.</div>
                                        </div>
                                    </div>
                                </li>
                                
                                {/*Block*/}
                                <li className={isActive.key == 7 ? "accrodion block active-block" : "accrodion block"} onClick={() => handleToggle(7)}>
                                    <div className="acc-btn">5% VAT applies to everyone? <div className="icon flaticon-down-arrow"></div></div>
                                    <div className="acc-content">
                                        <div className="content">
                                            <div className="text">Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.</div>
                                        </div>
                                    </div>
                                </li>
                                
                                {/*Block*/}
                                <li className={isActive.key == 8 ? "accrodion block active-block" : "accrodion block"} onClick={() => handleToggle(8)}>
                                    <div className="acc-btn">Posh Log Cabin, Office, Business Expense? <div className="icon flaticon-down-arrow"></div></div>
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
        </section>

        </>
    )
}
