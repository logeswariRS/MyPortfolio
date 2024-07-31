export default function Quality() {
    return (
        <>

        <section className="quality-section">
            <div className="auto-container">
                <div className="row clearfix">
                    
                    {/* Image Column */}
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/background/quality-bg.jpg' }} ></div>
                            <div className="image">
                                <img src="assets/images/resource/quality.png" alt="" />
                            </div>
                        </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="pattern-layer-two" style={{ backgroundImage: 'url(assets/images/background/pattern-5.png' }} ></div>
                            <div className="title-box">
                                <h2>Quality Tax <br/> Services To Over <br/> 10 Years.</h2>
                                <div className="text">Bookkeeping and Tax Preparation For Your Business. Committed To Helping You Succeed.</div>
                            </div>
                            <div className="image">
                                <img src="assets/images/resource/quality-1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

        </>
    )
}
