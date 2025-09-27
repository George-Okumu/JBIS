import {HeroSection} from "../components/layout/LandingHeroSection"
import Navbar2 from "../components/layout/Navigation";

export default function Landing() {
  return (
    <main className="min-h-screen">
      <Navbar2 />
      <HeroSection />
    </main>
  );
}
