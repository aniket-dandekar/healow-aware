// import Image from 'next/image'

import { Experties, HealowInAction, HealowServices, Hero, InfoSection, Testimonials } from "./components";

export default function Home() {
  return (
    <main className="">
      <Hero />
      {/* <InfoSection /> */}
      <Experties />
      <HealowServices />
      <Testimonials />
      <HealowInAction />
    </main>
  )
}
