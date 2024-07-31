import "@/node_modules/react-modal-video/css/modal-video.css"
import "public/assets/css/main.css"



import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { poppins } from '@/lib/font'
export const metadata = {
    title: 'HireMe',
    description: 'Portfolio Next Js Template',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${poppins.variable}`}>
            <body>{children}</body>
        </html>
    )
}
