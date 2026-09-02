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
      <div className="mb-10">
        <span className="section-label mb-3">About Me</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 leading-tight">
          Boost Business Strategic<br />
          <span className="text-primary">Solutions</span> with Us
        </h2>
        <p className="text-slate-600 leading-relaxed max-w-3xl text-sm sm:text-base">
          Hello! I'm Dhruv Mojila, a passionate Web Developer, Graphic Designer, Data Analyst based in Dhaka. 
          With a strong focus on creativity, innovation, and a commitment to continuous learning, 
          I bring a unique blend of technical skills and artistic vision to each project I undertake.
        </p>
      </div>

      {/* What I Do */}
      <div className="mb-10">
        <h3 className="text-xl font-display font-bold text-foreground mb-6">What I Do?</h3>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="cyan-icon mb-4 group-hover:scale-105 transition-transform">
                <service.icon className="w-5 h-5" />
              </div>
              <h4 className="text-base font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="glass-card p-4 sm:p-6 shadow-sm border border-slate-200/80 bg-white/90">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card py-4 sm:py-2">
              <div className="stat-number">{stat.value}</div>
              <p className="text-slate-600 text-xs sm:text-sm font-medium mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
