import { Heart } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const projects = [
  {
    image: portfolio1,
    category: "IT Consulting",
    likes: 600,
    title: "The services provide for design",
  },
  {
    image: portfolio2,
    category: "Cybersecurity",
    likes: 340,
    title: "Crafting Digital Experiences Design",
  },
  {
    image: portfolio3,
    category: "Data Analytics",
    likes: 230,
    title: "User-Centric Designs, Developer-Friendly Code.",
  },
  {
    image: portfolio4,
    category: "Automation",
    likes: 600,
    title: "From Wireframes to Web Apps",
  },
  {
    image: portfolio1,
    category: "AI Solutions",
    likes: 600,
    title: "Front-End Magic, Back-End Logic.",
  },
  {
    image: portfolio2,
    category: "Business Intelligence",
    likes: 600,
    title: "A Fusion of Art & Engineering",
  },
];

const WorkSection = () => {
  return (
    <div className="animate-fade-in space-y-8">
      <div>
        <span className="section-label mb-3">My Completed Work</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 leading-tight">
          Elevate your brand with a <span className="text-primary">the</span>
        </h2>
        <p className="text-slate-600 max-w-2xl text-sm sm:text-base leading-relaxed">
          Established fact that a reader will be distracted by design established fact that a reader will acted.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 transition-opacity flex flex-col justify-end p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-xs font-bold px-2.5 py-1 rounded-full bg-primary/90">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1 text-white text-xs font-semibold">
                    <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                    <span>{project.likes}</span>
                  </div>
                </div>
                <h4 className="text-base font-display font-bold text-white leading-snug">
                  {project.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
