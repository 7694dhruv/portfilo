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
    title: " Bachelor of Science in Information Technology",
    period: "2027(expeacted)",
    description: "I've had the privilege of working with various clients, from startups to established companies, helping bring their visions to life.",
  },
  // {
  //   title: "Marketing Specialist",
  //   period: "2019-2025",
  //   description: "A Marketing Specialist plays a crucial role in crafting and executing marketing strategies that enhance brand awareness.",
  // },
];

const experience = [
  {
    title: "Jr. Web Developer",
    period: "2005-2009",
    description: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skills A personal portfolio.",
  },
  {
    title: "Sr. Web Developer",
    period: "2010-2014",
    description: "Each project here showcases my commitment to excellence and adaptability, tailored to meet each client's unique needs.",
  },
  {
    title: "Sr. Graphic Designer",
    period: "2008-2012",
    description: "I've had the privilege of working with various clients, from startups to established companies, helping bring their visions to life.",
  },
  {
    title: "Design Assistant",
    period: "2008-2012",
    description: "A Marketing Specialist plays a crucial role in crafting and executing marketing strategies that enhance brand awareness.",
  },
];

const designSkills = [
  { name: "PHOTOSHOP", percentage: 100 },
  { name: "FIGMA", percentage: 95 },
  { name: "ADOBE XD", percentage: 60 },
  { name: "ADOBE ILLUSTRATOR", percentage: 70 },
];

const devSkills = [
  { name: "HTML/CSS", percentage: 100 },
  { name: "JAVASCRIPT", percentage: 95 },
  { name: "REACT", percentage: 60 },
  { name: "NODE.JS", percentage: 70 },
];

const ResumeSection = () => {
  return (
    <div className="animate-fade-in">
      {/* Education */}
      <div className="mb-12">
        <span className="section-label mb-4 inline-block">Education</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
          Elevate your brand with a <span className="text-primary">the</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Established fact that a reader will be distracted by design established fact that a reader will acted.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <div key={index} className="glass-card p-6">
              <h4 className="text-lg font-display font-semibold text-foreground mb-1">
                {item.title}
              </h4>
              <span className="text-primary text-2xl font-bold">{item.period}</span>
              {/* <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                {item.description}
              </p> */}
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-12 grid md:grid-cols-2 gap-8">
        {/* Design Skills */}
        {/* <div>
          <span className="section-label mb-4 inline-block">Design Skill</span>
          <h3 className="text-xl font-display font-semibold text-foreground mb-6">My Design Skill</h3>
          <div className="space-y-5">
            {designSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">{skill.name}</span>
                  <span className="text-sm font-medium text-primary">{skill.percentage}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill transition-all duration-1000"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Development Skills */}
        <div>
          <span className="section-label mb-4 inline-block">Development Skill</span>
          <h3 className="text-xl font-display font-semibold text-foreground mb-6">My Development Skill</h3>
          <div className="space-y-5">
            {devSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">{skill.name}</span>
                  <span className="text-sm font-medium text-primary">{skill.percentage}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill transition-all duration-1000"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience */}
      {/* <div>
        <span className="section-label mb-4 inline-block">Experience</span>
        <h3 className="text-xl font-display font-semibold text-foreground mb-6">My Awesome Experience</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {experience.map((item, index) => (
            <div key={index} className="glass-card p-6">
              <h4 className="text-lg font-display font-semibold text-foreground mb-1">
                {item.title}
              </h4>
              <span className="text-primary text-2xl font-bold">{item.period}</span>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ResumeSection;
