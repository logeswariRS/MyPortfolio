'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"


export default function Error404() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>

                <section className="error-section">
                    <div className="auto-container">
                        <div className="image">
                            <img src="assets/images/resource/error.png" alt="" />
                        </div>
                        <h3>Sorry... page not found!</h3>
                        
                        {/* Error Search Box */}
                        <div className="error-search-box">
                            <form method="post">
                                <div className="form-group">
                                    <input type="search" name="search-field" placeholder="Search" />
                                    <button type="submit"><span className="icon fa fa-search"></span></button>
                                </div>
                            </form>
                        </div>
                        
                        {/* Button Box */}
                        <div className="button-box text-center">
                            <Link href="/" className="theme-btn btn-style-one"><span className="txt">Back to Homepage</span></Link>
                        </div>
                        {/* End Button Box */}
                        
                    </div>
                </section>

            </Layout>

        </>
    )
}
