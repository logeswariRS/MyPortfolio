'use client'
import Link from "next/link"
export default function CV() {
    return (
        <>

        <section className="cv-section">
            <div className="auto-container">
                <div className="clearfix">
                    <div className="pull-left">
                        <h2><span>.pdf</span>Download my CV</h2>
                    </div>
                    <div className="pull-right">
                        <Link href="contact" className="theme-btn btn-style-four style-two"><span className="txt"><i className="fa fa-download"></i>Download</span></Link>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
