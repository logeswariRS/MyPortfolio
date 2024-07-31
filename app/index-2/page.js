
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home2/Banner"
import Clients from "@/components/sections/home2/Clients"
import Deserve from "@/components/sections/home2/Deserve"
import Certificate from "@/components/sections/home2/Certificate"
import Services from "@/components/sections/home2/Services"
import Skill from "@/components/sections/home2/Skill"
import Quality from "@/components/sections/home2/Quality"
import Experience from "@/components/sections/home2/Experience"
import CV from "@/components/sections/home2/CV"
import Testimonial from "@/components/sections/home2/Testimonial"
import Blog from "@/components/sections/home2/Blog"
import Faq from "@/components/sections/home2/Faq"
import Talk from "@/components/sections/home2/Talk"


export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={2}>
                <Banner />
                <Clients />
                <Deserve />
                <Certificate />
                <Services />
                <Skill />
                <Quality />
                <Experience />
                <CV />
                <Testimonial />
                <Blog />
                <Faq />
                <Talk />
            </Layout>
        </>
    )
}