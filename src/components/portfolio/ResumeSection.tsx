const education = [
  {
    title: "SSC BOARDS",
    period: "2021-2022",
    description: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skills A personal portfolio.",
  },
  {
    title: "HSC BOARDS",
    period: "2023-2024",
    description: "An Assistant Director plays a vital role in supporting leadership, overseeing operations, and ensuring organizational success.",
  },
  {
    title: "Bachelor of Science in Information Technology",
    period: "2027(expeacted)",
    description: "I've had the privilege of working with various clients, from startups to established companies, helping bring their visions to life.",
  },
];

const devSkills = [
  { name: "HTML/CSS", percentage: 100 },
  { name: "JAVASCRIPT", percentage: 95 },
  { name: "REACT", percentage: 60 },
  { name: "NODE.JS", percentage: 70 },
];

const designSkills = [
  { name: "PHOTOSHOP", percentage: 100 },
  { name: "FIGMA", percentage: 95 },
  { name: "ADOBE XD", percentage: 60 },
  { name: "ADOBE ILLUSTRATOR", percentage: 70 },
];

const ResumeSection = () => {
  return (
    <div className="animate-fade-in space-y-10">
      {/* Education */}
      <div>
        <span className="section-label mb-3">Education</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 leading-tight">
          Elevate your brand with a <span className="text-primary">the</span>
        </h2>
        <p className="text-slate-600 mb-6 max-w-2xl text-sm sm:text-base leading-relaxed">
          Established fact that a reader will be distracted by design established fact that a reader will acted.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <div key={index} className="glass-card p-6 bg-white/95 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-lg font-display font-bold text-foreground mb-2">
                {item.title}
              </h4>
              <span className="text-primary text-xl font-extrabold">{item.period}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Development Skills */}
        <div className="glass-card p-6 bg-white/95 border border-slate-200">
          <span className="section-label mb-3">Development Skill</span>
          <h3 className="text-xl font-display font-bold text-foreground mb-6">My Development Skill</h3>
          <div className="space-y-5">
            {devSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">{skill.name}</span>
                  <span className="text-xs sm:text-sm font-bold text-primary">{skill.percentage}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design Skills */}
        <div className="glass-card p-6 bg-white/95 border border-slate-200">
          <span className="section-label mb-3">Design Skill</span>
          <h3 className="text-xl font-display font-bold text-foreground mb-6">My Design Skill</h3>
          <div className="space-y-5">
            {designSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">{skill.name}</span>
                  <span className="text-xs sm:text-sm font-bold text-primary">{skill.percentage}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
