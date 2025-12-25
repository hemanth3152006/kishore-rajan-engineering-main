import { ArrowDown, FileText, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center blueprint-pattern overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom section-padding pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-2 bg-accent-light text-accent font-medium text-sm rounded-full mb-6">
                🌱 Sustainable Infrastructure Enthusiast
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up delay-100">
              Hey There,
              <br />
              I'm <span className="text-gradient">Kishore Rajan D</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-up delay-200 font-heading font-medium">
              Civil Engineering Undergraduate | Site Supervision & Sustainable Infrastructure
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8 animate-fade-up delay-300 max-w-lg">
              A passionate Civil Engineering student at Government College of Engineering, Erode,
              with hands-on internship experience in site supervision and execution.
              Committed to building a sustainable future through eco-friendly construction practices.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-400">
              <button
                onClick={() => handleScroll("#projects")}
                className="btn-hero-primary"
              >
                <FileText size={20} />
                View Projects
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="btn-hero-outline"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 animate-fade-up delay-500">
              <div>
                <p className="font-heading text-3xl font-bold text-primary">1+</p>
                <p className="text-sm text-muted-foreground">Month Internship</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-primary">2+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-accent">2026</p>
                <p className="text-sm text-muted-foreground">Expected Graduation</p>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up delay-200">
            <div className="relative">
              {/* Decorative brush stroke effect */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl transform -rotate-3" />
              
              <div className="relative w-72 md:w-80 lg:w-96 aspect-[3/4] rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={profilePhoto}
                  alt="Kishore Rajan D - Civil Engineering Student"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-card animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏗️</span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm">GCE Erode</p>
                    <p className="text-xs text-muted-foreground">B.E. Civil Engineering</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <button
            onClick={() => handleScroll("#about")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
