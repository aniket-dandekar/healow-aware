// "use client"

import Image from "next/image"
import Link from "next/link"
import { Roboto } from 'next/font/google'

import { FaArrowDown, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"

const roboto = Roboto({
    subsets: ['latin'],
    weight: ["100", "300", "400", "500", "700", "900"],
})

const Navbar = () => {
    return (
        <header className="header z-10">
            <div className="wrapper">

                <div className="header__logo">
                    <Link href={'/'}>
                        <Image priority={true} src={'/healow-aware-logo.png'} alt="healow-aware-logo" height={55} width={282}></Image>
                    </Link>
                </div>
                <nav className="header__nav">
                    <ul>
                        <li>
                            <Link className="hover:text-white transition-all duration-300" href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link className="hover:text-white transition-all duration-300" href={'/'}>About us</Link>
                        </li>
                        <li>
                            <Link className="hover:text-white transition-all duration-300" href={'/'}>Solutions for Startups</Link>
                        </li>
                        <li>
                            <Link className="hover:text-white transition-all duration-300" href={'/'}>Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

const Hero = () => {
    return (
        <section id="hero" className={` hero relative`}>
            <div className="wrapper mx-auto py-24">
                <h1 className={`text-8xl font-extrabold text-[#333333] mb-6 text-left ${roboto.className}`}>Connecting Providers & Patients</h1>
                <p className="text-xl text-[#333333] text-left">Greater efficiency to realize the promises of value-based care </p>
                <div className="flex gap-6 mt-20">
                    <Link href={'/'} className="text-center text-[#00BFFF] hover:text-white font-semibold text-lg bg-[#ffffff] hover:bg-[#00BFFF] py-3 px-8 rounded-full border-[2px] border-[#00BFFF] transition-all duration-300 flex items-center gap-2 max-w-[248px] min-w-[248px]">See What We Do <FaArrowDown /></Link>
                    <Link href={'/'} className="text-center text-[#00BFFF] hover:text-white font-semibold text-lg bg-[#ffffff] hover:bg-[#00BFFF] py-3 px-8 rounded-full border-[2px] border-[#00BFFF] transition-all duration-300 max-w-[248px] min-w-[248px]">Schedule A Call</Link>
                </div>
            </div>
            {/* <Image style={{ position: 'absolute', top: '292px', zIndex: -1 }} src={'/hero-img-opt.png'} alt="hero-image" width={1519} height={972} /> */}
        </section>
    )
}

const InfoSection = () => {
    return (
        <section id="info-section" className="info-section">
            <div className="wrapper mx-auto">
                InfoSection
            </div>
        </section>
    )
}

const HealowServices = () => {
    return (
        <section id="healow-services" className="healow-services min-h-[110rem] mt-12">
            <div className="wrapper mx-auto relative">
                <div className="healow_services__divs absolute top-0 left-0">
                    <Image className="relative" src={'/Online-Awareness-Image-optimized.png'} alt="Online-Awareness-Image" height={580} width={536} />
                    <div className="healow_services__divs__text">
                        <p>eClinicalWorks aids in creating strong online presences for both startup and established practices. We offer support for Google My Business™, Google Analytics™, social media management, and SEO.</p>
                        <Link href={'/'} className="text-center text-[#00BFFF] hover:text-white font-semibold bg-[#ffffff] hover:bg-[#00BFFF] py-2 px-8 rounded-full border-[2px] border-[#00BFFF] transition-all duration-300 flex items-center gap-2">Learn More <FaArrowUpRightFromSquare /></Link>
                    </div>
                </div>

                <div className="healow_services__divs absolute top-[20rem] right-0">
                    <Image className="relative" src={'/In-Office-Awareness-Image-3-optimized.png'} alt="In-Office-Awareness-Image-3" height={564} width={538} />
                    <div className="healow_services__divs__text">
                        <p>Practices enhance the patient experience with healow CHECK-IN™, Kiosk, Patient Portal, eClinicalMessenger®, healow TeleVisits™, and healow apps. Share your services through take-home marketing materials in English or Spanish.</p>
                        <Link href={'/'} className="text-center text-[#00BFFF] hover:text-white font-semibold bg-[#ffffff] hover:bg-[#00BFFF] py-2 px-8 rounded-full border-[2px] border-[#00BFFF] transition-all duration-300 flex items-center gap-2">Learn More <FaArrowUpRightFromSquare /></Link>

                    </div>
                </div>

                <div className="healow_services__divs absolute top-[40rem] left-0">
                    <Image className="relative" src={'/Product-Optimization-Image-optimized.png'} alt="Product-Optimization-Image" height={580} width={515} />
                    <div className="healow_services__divs__text">
                        <p>Strengthen your practice by understanding your patients and providers. Our healow team can enhance patient-practice relationships, whether you&apos;re new to our tools or not. We offer on-site and remote optimization services.</p>
                        <Link href={'/'} className="text-center text-[#00BFFF] hover:text-white font-semibold bg-[#ffffff] hover:bg-[#00BFFF] py-2 px-8 rounded-full border-[2px] border-[#00BFFF] transition-all duration-300 flex items-center gap-2">Learn More <FaArrowUpRightFromSquare /></Link>

                    </div>
                </div>

                <div className="healow_services__divs absolute top-[60rem] right-0">
                    <Image className="relative" src={'/Patient-Interaction-Feedback2-optimized.png'} alt="Patient-Interaction-Feedback2" height={563} width={563} />
                    <div className="healow_services__divs__text">
                        <p>Our consultants assist patients in using Patient Portal, healow apps, health trackers, and streamline the appointment process with healow CHECK-IN™ and Kiosk. Educating patients in the office improves engagement and supports your front-office staff.</p>
                        <Link href={'/'} className="text-center text-[#00BFFF] hover:text-white font-semibold bg-[#ffffff] hover:bg-[#00BFFF] py-2 px-8 rounded-full border-[2px] border-[#00BFFF] transition-all duration-300 flex items-center gap-2">Learn More <FaArrowUpRightFromSquare /></Link>

                    </div>
                </div>

            </div>
        </section>
    )
}

const Testimonials = () => {
    return (
        <section id="healow-services" className="healow-services min-h-[110rem] mt-12">
            <div className="wrapper mx-auto relative">

            </div>
        </section>
    )
}

const Footer = () => {
    return (
        <>
            <div className="spacer layer1"></div>

            <footer className="footer -mt-40">
                <div className="wrapper mx-auto">
                    <div className="left">
                        <div className="text-2xl font-semibold mb-1">
                            Useful Links
                        </div>
                        <ul>
                            <li><Link href={'#'}>Online Awareness</Link></li>
                            <li><Link href={'#'}>In-Office Awareness</Link></li>
                            <li><Link href={'#'}>Optimization & Staff Readiness</Link></li>
                            <li><Link href={'#'}>Patient Education & Interaction</Link></li>
                        </ul>
                        <p className="mt-12">Copyright © 2022, healow. All rights reserved.</p>
                    </div>

                    <div className="right flex flex-col items-end gap-2">
                        <Link href={'/'}>
                            <Image priority={true} src={'/healow-brandmark.png'} alt="healow-brandmark" height={50} width={50}></Image>
                        </Link>
                        <div className="text-2xl font-semibold my-1 mt-4">
                            Follow Us On
                        </div>
                        <ul className="flex gap-4 justify-end text-2xl">
                            <li><Link href={'#'}><FaFacebook /></Link></li>
                            <li><Link href={'#'}><FaTwitter /></Link></li>
                            <li><Link href={'#'}><FaInstagram /></Link></li>
                            <li><Link href={'#'}><FaLinkedin /></Link></li>
                        </ul>
                        <p className="mt-10"><Link href={'/'}>Privacy Policy</Link> | <Link href={'/'}>Terms of use</Link> | <Link href={'/'}>Your Privacy Choices</Link></p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export { Footer, Navbar, Hero, InfoSection, HealowServices, Testimonials }