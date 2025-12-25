import { Building2, Calendar, CheckCircle2, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const responsibilities = [
    "Assisted in site supervision, foundation, reinforcement, and concrete works",
    "Ensured safety and quality compliance on construction sites",
    "Supported quantity estimation and cost assessment processes",
    "Interpreted technical drawings and construction plans",
    "Collaborated with senior engineers to understand real-world structural execution",
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-light text-primary font-medium text-sm rounded-full mb-4">
            Experience
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hands-on industry experience that shaped my engineering perspective
          </p>
        </div>

        {/* Timeline Experience Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-accent hidden md:block" />

            {/* Experience Card */}
            <div className="relative pl-0 md:pl-20">
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block" />

              <div className="bg-card rounded-3xl shadow-card border border-border overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-xl md:text-2xl font-bold mb-2">
                        Site Supervision & Site Execution
                      </h3>
                      <p className="text-primary-foreground/90 font-medium">
                        Internship Program
                      </p>
                    </div>
                    <div className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">1 Month</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Company Info */}
                  <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-border">
                    <div className="w-14 h-14 bg-accent-light rounded-xl flex items-center justify-center">
                      <Building2 className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground text-lg">
                        Traventure Homes Pvt. Ltd.
                      </h4>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Construction & Real Estate</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <h5 className="font-heading font-semibold text-foreground mb-4">
                    Key Responsibilities
                  </h5>
                  <ul className="space-y-3">
                    {responsibilities.map((responsibility, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills gained */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <h5 className="font-heading font-semibold text-foreground mb-3">
                      Skills Gained
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Site Management",
                        "Quality Control",
                        "Safety Compliance",
                        "Cost Estimation",
                        "Technical Drawing Interpretation",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-primary-light text-primary text-sm font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
