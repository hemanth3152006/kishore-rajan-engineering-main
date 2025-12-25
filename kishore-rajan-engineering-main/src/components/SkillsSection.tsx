import { Pencil, Calculator, HardHat, MessageSquare, Lightbulb, Clock, Users, Brain } from "lucide-react";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "AutoCAD (Design & Drafting)", level: 85, icon: Pencil },
    { name: "EPANET", level: 70, icon: Calculator },
    { name: "Quantity Estimation", level: 80, icon: Calculator },
    { name: "Site Supervision", level: 75, icon: HardHat },
  ];

  const softSkills = [
    { name: "Problem-Solving", icon: Lightbulb },
    { name: "Communication", icon: MessageSquare },
    { name: "Leadership", icon: Users },
    { name: "Decision-Making", icon: Brain },
    { name: "Time Management", icon: Clock },
    { name: "Teamwork", icon: Users },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-light text-accent font-medium text-sm rounded-full mb-4">
            Skills & Expertise
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical & <span className="text-gradient">Professional</span> Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A combination of technical proficiency and soft skills essential for civil engineering excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-primary-light rounded-lg flex items-center justify-center">
                <HardHat className="w-4 h-4 text-primary" />
              </span>
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 200}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-accent-light rounded-lg flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-accent" />
              </span>
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-card p-4 rounded-xl shadow-soft border border-border text-center card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center mx-auto mb-3">
                    <skill.icon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Software */}
        <div className="mt-16 text-center">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-8">
            Tools & Software
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["AutoCAD", "EPANET", "MS Word", "MS Excel", "MS PowerPoint"].map((tool) => (
              <span
                key={tool}
                className="px-6 py-3 bg-card border border-border rounded-full text-foreground font-medium shadow-soft hover:shadow-card hover:border-primary/30 transition-all"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
