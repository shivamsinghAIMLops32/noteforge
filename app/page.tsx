import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import  Features  from "@/components/features";
import  CallToAction  from "@/components/call-to-action";
import  Footer  from "@/components/footer";

export default function Home() {
  return (
    <main>
      <HeroHeader/>
   <HeroSection/>
   <Features />
   <CallToAction />
   <Footer />
   </main>
  );
}
