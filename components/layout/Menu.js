import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>
            <ul className="navigation">
                <li ><Link href="/"><span data-hover="Home">Home</span></Link>
                    {/* <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="index-2">Home 02</Link></li>
                    </ul> */}
                </li>
                <li ><Link href="blog"><span data-hover="Blog">Blog</span></Link>
                    {/* <ul>
                        <li><Link href="blog">Our Blog</Link></li>
                        <li><Link href="blog-classic">Blog Classic</Link></li>
                        <li><Link href="blog-detail">Blog Details</Link></li>
                    </ul> */}
                </li>
                <li ><Link href="blog-classic"><span data-hover="Pages">Services</span></Link>
                    {/* <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="blog">Our Blog</Link></li>
                        <li><Link href="blog-classic">Blog Classic</Link></li>
                        <li><Link href="blog-detail">Blog Details</Link></li>
                        <li><Link href="error-page">Error Page</Link></li>
                        <li><Link href="contact">Contact</Link></li>
                    </ul> */}
                </li>
                <li><Link href="contact"><span data-hover="Contact">Contact</span></Link></li>
            </ul>
        </>
    )
}
