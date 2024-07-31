'use client'
import Link from "next/link"
export default function Cta() {
    return (
        <>

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
            

        </>
    )
}
