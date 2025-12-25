import { GraduationCap, Heart, Target, Users } from "lucide-react";

const AboutSection = () => {
  const traits = [
    {
      icon: Target,
      title: "Detail-Oriented",
      description: "Meticulous attention to quality and precision in every project",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Strong collaboration skills with engineers and stakeholders",
    },
    {
      icon: Heart,
      title: "Passionate",
      description: "Committed to sustainable and eco-friendly construction",
    },
    {
      icon: GraduationCap,
      title: "Eager Learner",
      description: "Continuously expanding knowledge in civil engineering",
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-light text-primary font-medium text-sm rounded-full mb-4">
            About Me
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Building Tomorrow's <span className="text-gradient">Infrastructure</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into my journey, values, and aspirations in civil engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I am a highly motivated Civil Engineering undergraduate with practical internship 
              experience in construction supervision, structural works, and quantity estimation.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Skilled in <span className="text-primary font-medium">AutoCAD</span>, 
              <span className="text-primary font-medium"> EPANET</span>, and 
              <span className="text-primary font-medium"> MS Office</span>, I bring a strong 
              foundation in technical tools essential for modern civil engineering practice.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My strong interest lies in <span className="text-accent font-medium">sustainable 
              infrastructure development</span> and <span className="text-accent font-medium">green 
              building practices</span>. I am committed to delivering engineering solutions that 
              prioritize teamwork, safety, quality, and environmental responsibility.
            </p>

            {/* Education Card */}
            <div className="bg-card p-6 rounded-2xl shadow-card border border-border mt-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-lg">
                    B.E. Civil Engineering
                  </h3>
                  <p className="text-primary font-medium">
                    Government College of Engineering, Erode
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    2022 – 2026 (Expected)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Traits Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {traits.map((trait, index) => (
              <div
                key={trait.title}
                className="bg-card p-6 rounded-2xl shadow-soft border border-border card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center mb-4">
                  <trait.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {trait.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {trait.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
