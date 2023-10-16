// import Image from 'next/image'

import { HealowServices, Hero, InfoSection } from "./components";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <InfoSection />
      <HealowServices />
    </main>
  )
}
