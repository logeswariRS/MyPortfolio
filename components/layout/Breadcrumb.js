
export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>

        <section className="page-title" style={{ backgroundImage: 'url(assets/images/background/1.jpg' }} >
            <div className="auto-container">
                <h1>{breadcrumbTitle}</h1>
                <div className="text">Stay up to date with my latest resources.</div>
            </div>
        </section>
        {/* End Page Title */}

        </>
    )
}
