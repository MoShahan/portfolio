import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/Projects";
import { SiteHeader } from "@/components/SiteHeader";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="relative z-10 mx-auto min-h-screen max-w-6xl px-6 sm:px-8 lg:px-16">
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <div className="lg:flex lg:gap-16">
        <SiteHeader />
        <main id="content" className="lg:w-[58%] lg:py-24">
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Education />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
