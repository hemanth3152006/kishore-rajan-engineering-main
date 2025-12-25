import { Leaf, FlaskConical, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Eco-Friendly and Sustainable Technology in Civil Engineering",
      description:
        "Developed a sustainable prototype using eco-friendly materials, focusing on energy-efficient construction techniques aimed at reducing environmental impact and promoting green building practices.",
      icon: Leaf,
      tags: ["Sustainability", "Green Building", "Energy Efficiency"],
      color: "accent",
    },
    {
      title: "Experimental Study on Cement Replacement with GGBS & Eggshell Powder",
      description:
        "Conducted research on partial replacement of cement to create eco-friendly concrete. Performed compressive strength, split tensile, and workability tests as per IS standards, achieving improved performance with reduced environmental impact.",
      icon: FlaskConical,
      tags: ["Research", "Concrete Technology", "Material Science"],
      color: "primary",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-light text-accent font-medium text-sm rounded-full mb-4">
            Projects
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Latest <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic and research projects focusing on sustainable construction and innovative materials
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-3xl shadow-card border border-border overflow-hidden card-hover"
            >
              {/* Project Header with Icon */}
              <div
                className={`p-8 ${
                  project.color === "accent"
                    ? "bg-gradient-to-br from-accent/10 to-accent/5"
                    : "bg-gradient-to-br from-primary/10 to-primary/5"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                    project.color === "accent"
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  <project.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Project Content */}
              <div className="p-8 pt-0 -mt-4">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        project.color === "accent"
                          ? "bg-accent-light text-accent"
                          : "bg-primary-light text-primary"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <button className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                  View Details
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Services I Can Offer
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Entry-level services available as I continue to grow in my engineering career
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Site Supervision Assistance",
                description: "Supporting site monitoring and quality checks",
              },
              {
                title: "Site Execution Support",
                description: "Assisting in construction execution and coordination",
              },
              {
                title: "Quantity Estimation Support",
                description: "Helping with material and cost estimation",
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="bg-card p-6 rounded-2xl shadow-soft border border-border text-center card-hover"
              >
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">{index + 1}</span>
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
