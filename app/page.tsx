import Header from "./components/Header"
import Hero from "./components/Hero"
import CoreComponents from "./components/CoreComponents"
import SupportedDomains from "./components/SupportedDomains"
import Footer from "./components/Footer"


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <Hero />
        <CoreComponents />
        <SupportedDomains />
      </main>
      <Footer />
    </div>
  )
}

