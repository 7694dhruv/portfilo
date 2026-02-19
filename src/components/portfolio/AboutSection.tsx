import { Code, Palette, Briefcase, Monitor, Database, Handshake } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Each one showcases my approach and dedication to detail, creativity dedication to detail, creativity",
  },
  {
    icon: Monitor,
    title: "Web Development",
    description: "Business consulting consul us to a provide expert advice businesses expert advice businesses",
  },
  {
    icon: Briefcase,
    title: "eCommerce Apps",
    description: "We build conversion-driven eCommerce platforms that are secure, scalable, and easy to manage. From product catalogs and payment gateways to order tracking, we integrate everything needed to launch and grow your online store efficiently.",
  },
  {
    icon: Database,
    title: "IT Consulting",
    description: "They ensure that IT systems align with business objectives, drive innovation, and enhance operational efficiency.",
  },
  {
    icon: Palette,
    title: "Hosting Sites",
    description: "Looking to strengthen your IT strategy? A skilled IT Director can turn technology business advantage!",
  },
  {
    icon: Handshake,
    title: "Profit Partners",
    description: "Business consulting consul us to a provide expert advice businesses provide advice businesses",
  },
];

const stats = [
  { value: "3", label: "Our Project Complete" },
  { value: "30", label: "self project" },
  { value: "3", label: "Clients Reviews" },
  { value: "3", label: "Our Satisfied Client" },
];

const AboutSection = () => {
  return (
    <div className="animate-fade-in">
      {/* About Me */}
      <div className="mb-12">
        <span className="section-label mb-4 inline-block">About Me</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
          Boost Business Strategic<br />
          <span className="text-primary">Solutions</span> with Us
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          Hello! I'm Dhruv Mojila, a passionate Web Developer, Graphic Designer, Data Analyst based in Dhaka. 
          With a strong focus on creativity, innovation, and a commitment to continuous learning, 
          I bring a unique blend of technical skills and artistic vision to each project I undertake.
        </p>
      </div>

      {/* What I Do */}
      <div className="mb-12">
        <h3 className="text-xl font-display font-semibold text-foreground mb-6">What I Do?</h3>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="cyan-icon mb-4">
                <service.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-display font-semibold text-foreground mb-3">
                {service.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="glass-card p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number text-primary">{stat.value}</div>
              <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
