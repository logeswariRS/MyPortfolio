
export default function BackToTop({ scroll }) {

    return (
        <>
            {scroll && (
                <a className="back-to-top scroll-to-top scroll-to-target d-block show-back-to-top" href="#top">
                </a>
                
            )}
        </>
    )
}