// "use client"

import Image from "next/image"
import Link from "next/link"
import { Roboto } from 'next/font/google'

import { FaArrowDown, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"
import TestimonialSlider from "./testimonial-slider"

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
        <section id="hero" className={` hero relative p-8`}>
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
        <section id="healow-services" className="healow-services min-h-[90rem] mt-12 p-4">
            <h4 className="text-4xl text-center font-bold">What healow Aware Offers</h4>
            <div className="wrapper mx-auto relative">
                <div className="z-[1] healow_services__divs absolute top-0 left-0">
                    <Image className="relative" src={'/Online-Awareness-Image-optimized.png'} alt="Online-Awareness-Image" height={580} width={536} />
                    <div className="healow_services__divs__text">
                        <p>eClinicalWorks aids in creating strong online presences for both startup and established practices. We offer support for Google My Business™, Google Analytics™, social media management, and SEO.</p>
                        <Link href={'/'} className="text-center text-[#00BFFF] hover:text-white font-semibold bg-[#ffffff] hover:bg-[#00BFFF] py-2 px-8 rounded-full border-[2px] border-[#00BFFF] transition-all duration-300 flex items-center gap-2">Learn More <FaArrowUpRightFromSquare /></Link>
                    </div>
                </div>

                <div className="z-[1] healow_services__divs absolute top-[20rem] right-0">
                    <Image className="relative" src={'/In-Office-Awareness-Image-3-optimized.png'} alt="In-Office-Awareness-Image-3" height={564} width={538} />
                    <div className="healow_services__divs__text">
                        <p>Practices enhance the patient experience with healow CHECK-IN™, Kiosk, Patient Portal, eClinicalMessenger®, healow TeleVisits™, and healow apps. Share your services through take-home marketing materials in English or Spanish.</p>
                        <Link href={'/'} className="text-center text-[#00BFFF] hover:text-white font-semibold bg-[#ffffff] hover:bg-[#00BFFF] py-2 px-8 rounded-full border-[2px] border-[#00BFFF] transition-all duration-300 flex items-center gap-2">Learn More <FaArrowUpRightFromSquare /></Link>

                    </div>
                </div>

                <div className="z-[1] healow_services__divs absolute top-[40rem] left-0">
                    <Image className="relative" src={'/Product-Optimization-Image-optimized.png'} alt="Product-Optimization-Image" height={580} width={515} />
                    <div className="healow_services__divs__text">
                        <p>Strengthen your practice by understanding your patients and providers. Our healow team can enhance patient-practice relationships, whether you&apos;re new to our tools or not. We offer on-site and remote optimization services.</p>
                        <Link href={'/'} className="text-center text-[#00BFFF] hover:text-white font-semibold bg-[#ffffff] hover:bg-[#00BFFF] py-2 px-8 rounded-full border-[2px] border-[#00BFFF] transition-all duration-300 flex items-center gap-2">Learn More <FaArrowUpRightFromSquare /></Link>

                    </div>
                </div>

                <div className="z-[1] healow_services__divs absolute top-[60rem] right-0">
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

const HealowInAction = () => {
    return (
        <section id="healow-services" className="healow-services mt-20 p-4">
            <div className="wrapper mx-auto relative">
                <h4 className="text-4xl text-center font-bold">healow in Action</h4>
                <div className="flex items-center justify-around my-16">
                    <div className="w-[45%]">
                        <iframe className="w-full aspect-video" src="https://www.youtube-nocookie.com/embed/JOIfQpTUMsE?controls=0&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Faware.healow.com&widgetid=1"></iframe>
                    </div>
                    <div className="w-[45%]">
                        <iframe className="w-full aspect-video" src="https://www.youtube-nocookie.com/embed/KKzomzpY5Lg?controls=0&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Faware.healow.com&widgetid=1"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Experties = () => {
    return (
        <section id="healow-expertise" className="healow_expertise bg-[#97defb] relative py-40">
            <div class="custom-shape-divider-top-1697491937">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>

            <div className="p-4">
                <div className="wrapper mx-auto relative">
                    <h4 className="text-4xl text-center font-bold my-4">Expertise in the areas where it is most needed</h4>

                    <div className="healow_expertise__grid">
                        <div className="p-6 pt-8 relative card">
                            <div className="front">
                                <Image src={'/icons/internet-presence.svg'} className="mx-auto" width={64} style={{ height: '54.74px', width: 'auto' }} height={64} alt="icon" ></Image>
                                <p className="text-2xl font-medium text-center mt-6">Get a mobile-friendly website</p>
                            </div>
                            <div className="back p-4 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                                <p className="text-xl text-center">Let your business work for you 24/7 by creating an informative website that is open even when your office is closed.</p>
                            </div>
                        </div>

                        <div className="p-6 pt-8 relative card">
                            <div className="front">
                                <Image src={'/icons/in-office-marketing.svg'} className="mx-auto" width={64} style={{ height: '48px', width: 'auto' }} height={64} alt="icon" ></Image>
                                <p className="text-2xl font-medium text-center mt-6">Engage patients with in-house marketing</p>
                            </div>
                            <div className="back p-4 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                                <p className="text-xl text-center">Spread awareness of the tools you have to offer both within the office and among your patients.</p>
                            </div>
                        </div>

                        <div className="p-6 pt-8 relative card">
                            <div className="front">
                                <Image src={'/icons/educate-patients.svg'} className="mx-auto" width={64} style={{ height: '64px', width: 'auto' }} height={64} alt="icon" ></Image>
                                <p className="text-2xl font-medium text-center mt-6">Reduce no-shows with appointment reminders</p>
                            </div>
                            <div className="back p-4 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                                <p className="text-xl text-center">Send automatic notifications and reminders so that your patients don’t miss their appointments.</p>
                            </div>
                        </div>

                        <div className="p-6 pt-8 relative card">
                            <div className="front">
                                <Image src={'/icons/website-accessible.svg'} className="mx-auto" width={64} style={{ height: '53.74px', width: 'auto' }} height={64} alt="icon" ></Image>
                                <p className="text-2xl font-medium text-center mt-6">Let patients easily pay bills online</p>
                            </div>
                            <div className="back p-4 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                                <p className="text-xl text-center">Empower patients to make payments with ease by clicking a secure text link.</p>
                            </div>
                        </div>

                        <div className="p-6 pt-8 relative card">
                            <div className="front">
                                <Image src={'/icons/book-appointment.svg'} className="mx-auto" width={64} style={{ height: '64px', width: 'auto' }} height={64} alt="icon" ></Image>
                                <p className="text-2xl font-medium text-center mt-6">Let patients self-schedule appointments</p>
                            </div>
                            <div className="back p-4 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                                <p className="text-xl text-center">Show available time slots and let patients choose the dates and times they prefer.</p>
                            </div>
                        </div>

                        <div className="p-6 pt-8 relative card">
                            <div className="front">
                                <Image src={'/icons/easy-checkin.svg'} className="mx-auto" width={64} style={{ height: '64px', width: 'auto' }} height={64} alt="icon" ></Image>
                                <p className="text-2xl font-medium text-center mt-6">Use electronic check-in to boost efficiency</p>
                            </div>
                            <div className="back p-4 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                                <p className="text-xl text-center">Give patients the convenience of checking in on a smartphone from the comfort of home.</p>
                            </div>
                        </div>

                        <div className="p-6 pt-8 relative card">
                            <div className="front">
                                <Image src={'/icons/improve-process.svg'} className="mx-auto" width={64} style={{ height: '64px', width: 'auto' }} height={64} alt="icon" ></Image>
                                <p className="text-2xl font-medium text-center mt-6">Understand your patients’ needs</p>
                            </div>
                            <div className="back p-4 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                                <p className="text-xl text-center">Use surveys to collect feedback in order to better serve your patients.</p>
                            </div>
                        </div>

                        <div className="p-6 pt-8 relative card">
                            <div className="front">
                                <Image src={'/icons/patient-satisfaction.svg'} className="mx-auto" width={64} style={{ height: '64px', width: 'auto' }} height={64} alt="icon" ></Image>
                                <p className="text-2xl font-medium text-center mt-6">Train your staff on healow solutions</p>
                            </div>
                            <div className="back p-4 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                                <p className="text-xl text-center">Our experts make sure your staff understand and can fully employ healow solutions.</p>
                            </div>
                        </div>

                        <div className="p-6 pt-8 relative card">
                            <div className="front">
                                <Image src={'/icons/google-maps.svg'} className="mx-auto" width={64} style={{ height: '64px', width: 'auto' }} height={64} alt="icon" ></Image>
                                <p className="text-2xl font-medium text-center mt-6">Put your healthcare business on the map</p>
                            </div>
                            <div className="back p-4 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                                <p className="text-xl text-center">Help your patients find your office on maps and get to your office easily. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="custom-shape-divider-bottom-1697491898">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>

        </section>
    )
}

const Testimonials = () => {
    return (
        <div className="relative">
            <div className="spacer layer2"></div>
            <section id="testimonials" className="testimonials bg-[#4EC2E0] pb-8">
                <div className="wrapper mx-auto relative">
                    <h4 className="text-4xl text-center font-bold">What Our Customers Say</h4>
                    <TestimonialSlider />
                </div>
            </section>
            <div className="custom-shape-divider-bottom-1697487513">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <>
            <div className="spacer layer1"></div>

            <footer className="footer -mt-40 p-8">
                <div className="wrapper mx-auto">
                    <div className="left">
                        <div className="text-2xl font-semibold mb-2">
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
                        <p className="mt-10"><Link className="underline underline-offset-2" href={'/'}>Privacy Policy</Link> | <Link className="underline underline-offset-2" href={'/'}>Terms of use</Link> | <Link className="underline underline-offset-2" href={'/'}>Your Privacy Choices</Link></p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export { Footer, Navbar, Hero, InfoSection, HealowServices, Testimonials, HealowInAction, Experties }