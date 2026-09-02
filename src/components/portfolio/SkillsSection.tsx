import { useState } from "react";
import { Code2, Server, Layout, Wrench, Sparkles, CheckCircle2, Cpu, Database, Palette, Terminal } from "lucide-react";

interface SkillItem {
  name: string;
  level: number;
  badge?: string;
  icon?: string;
}

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: Layout,
    description: "Crafting fast, dynamic, pixel-perfect user interfaces with modern React & CSS.",
    skills: [
      { name: "HTML5 / Semantic Web", level: 98, badge: "Master" },
      { name: "CSS3 / Tailwind CSS", level: 95, badge: "Advanced" },
      { name: "JavaScript (ES6+)", level: 90, badge: "Advanced" },
      { name: "React.js & Hooks", level: 88, badge: "Advanced" },
      { name: "TypeScript", level: 75, badge: "Intermediate" },
      { name: "Responsive UI/UX", level: 95, badge: "Advanced" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Databases",
    icon: Server,
    description: "Developing robust REST APIs, server logic, and structured database storage.",
    skills: [
      { name: "Node.js & Express", level: 82, badge: "Advanced" },
      { name: "RESTful API Design", level: 88, badge: "Advanced" },
      { name: "MongoDB & Mongoose", level: 80, badge: "Intermediate" },
      { name: "SQL / Relational DB", level: 75, badge: "Intermediate" },
      { name: "Authentication (JWT)", level: 82, badge: "Advanced" },
      { name: "API Integration", level: 90, badge: "Advanced" },
    ],
  },
  {
    id: "design",
    title: "UI/UX & Design Tools",
    icon: Palette,
    description: "Designing modern mockups, wireframes, vector assets, and clean visual graphics.",
    skills: [
      { name: "Figma (UI/UX Design)", level: 92, badge: "Advanced" },
      { name: "Adobe Photoshop", level: 90, badge: "Advanced" },
      { name: "Adobe Illustrator", level: 78, badge: "Intermediate" },
      { name: "Adobe XD", level: 75, badge: "Intermediate" },
      { name: "Design Systems & Wireframing", level: 85, badge: "Advanced" },
      { name: "Color Theory & Typography", level: 90, badge: "Advanced" },
    ],
  },
  {
    id: "tools",
    title: "Workflow & Cloud Tools",
    icon: Wrench,
    description: "Version control, modern build tooling, testing, and cloud deployment.",
    skills: [
      { name: "Git & GitHub", level: 90, badge: "Advanced" },
      { name: "VS Code & Debugging", level: 95, badge: "Master" },
      { name: "Postman & API Testing", level: 88, badge: "Advanced" },
      { name: "Vite / Modern Bundlers", level: 85, badge: "Advanced" },
      { name: "Vercel / Netlify Deploy", level: 90, badge: "Advanced" },
      { name: "Performance Optimization", level: 82, badge: "Intermediate" },
    ],
  },
];

const highlights = [
  { icon: Sparkles, text: "Clean & Maintainable Code Architecture" },
  { icon: CheckCircle2, text: "Mobile-First & 100% Responsive Design" },
  { icon: Cpu, text: "Fast Load Speed & SEO-Friendly Practices" },
  { icon: Terminal, text: "Cross-Browser & Device Compatibility" },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <div className="animate-fade-in space-y-10">
      {/* Header */}
      <div>
        <span className="section-label mb-3 inline-flex">Technical Arsenal</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Skills & <span className="gradient-primary-text">Expertise</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl leading-relaxed text-sm md:text-base">
          A blend of engineering precision and modern visual design principles to craft fast, scalable, and immersive digital solutions.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
            activeCategory === "all"
              ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
              : "bg-secondary/70 text-muted-foreground hover:text-foreground hover:bg-secondary border border-border/50"
          }`}
        >
          All Skills
        </button>
        {skillCategories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                  : "bg-secondary/70 text-muted-foreground hover:text-foreground hover:bg-secondary border border-border/50"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{category.title}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.id} className="glass-card p-6 border border-border/60 relative group hover:border-primary/40 transition-colors">
              <div className="flex items-start gap-3.5 mb-5">
                <div className="glow-icon flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skill Bars */}
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-foreground/90 flex items-center gap-2">
                        {skill.name}
                        {skill.badge && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-semibold border border-primary/20">
                            {skill.badge}
                          </span>
                        )}
                      </span>
                      <span className="font-bold text-primary">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Engineering Principles Highlights */}
      <div className="glass-card p-6 border border-border/70 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <h3 className="text-base font-display font-semibold text-foreground mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" /> Core Development Standards
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-secondary/40 border border-border/40 hover:border-primary/30 transition-colors">
                <Icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-xs font-medium text-foreground/90 leading-snug">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
