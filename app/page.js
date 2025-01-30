import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import About from "@/components/sections/home1/About"
import Certificate from "@/components/sections/home1/Certificate"
import Services from "@/components/sections/home1/Services"
import Software from "@/components/sections/home1/Software"
import Booking from "@/components/sections/home1/Booking"
import Experience from "@/components/sections/home1/Experience"
import Testimonial from "@/components/sections/home1/Testimonial"
import Portfolio from "@/components/sections/home1/Portfolio"
import Blog from "@/components/sections/home1/Blog"
import Faq from "@/components/sections/home1/Faq"
import Talk from "@/components/sections/home1/Talk"
import Cta from "@/components/sections/home1/Cta"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <About/>
                <Certificate/>
                <Services/>
                <Software/>
                {/* <Booking/> */}
                <Experience />
                {/* <Testimonial /> */}
                <Portfolio />
                <Blog />
                {/* <Faq /> */}
                <Talk />
                <Cta />
            </Layout>

        </>
    )
}