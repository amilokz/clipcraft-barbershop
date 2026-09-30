import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Barbers from "@/components/Barbers";
import Booking from "@/components/Booking";
import Gallery from "@/components/Gallery";
import Membership from "@/components/Membership";
import Testimonials from "@/components/Testimonials";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-coal-950">
      <Navbar />
      <Hero />
      <Services />
      <Barbers />
      <Booking />
      <Gallery />
      <Membership />
      <Testimonials />
      <Visit />
      <Footer />
    </main>
  );
}
