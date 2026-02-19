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
    <div className="animate-fade-in">
      <span className="section-label mb-4 inline-block">My Completed Work</span>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
        Elevate your brand with a <span className="text-primary">the</span>
      </h2>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Established fact that a reader will be distracted by design established fact that a reader will acted.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-card">
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="portfolio-overlay">
              <div className="flex items-center justify-between mb-3">
                <span className="text-primary text-sm font-medium">{project.category}</span>
                <div className="flex items-center gap-1 text-foreground">
                  <Heart className="w-4 h-4 fill-current text-red-500" />
                  <span className="text-sm">{project.likes}</span>
                </div>
              </div>
              <h4 className="text-lg font-display font-semibold text-foreground">
                {project.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
