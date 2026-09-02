import { User, MessageSquare, ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const blogs = [
  {
    image: blog1,
    author: "Mesbah",
    comments: 5,
    title: "Code & Innovation Software Development Trends.",
  },
  {
    image: blog2,
    author: "Mesbah",
    comments: 5,
    title: "Building the Future with Software Engineering",
  },
  {
    image: blog3,
    author: "Mesbah",
    comments: 5,
    title: "Tech Talks Exploring the World of Software",
  },
  {
    image: blog1,
    author: "Mesbah",
    comments: 5,
    title: "Smart Solutions Software Development Blog",
  },
  {
    image: blog2,
    author: "Mesbah",
    comments: 5,
    title: "Behind the Code Expert Software Insights",
  },
  {
    image: blog3,
    author: "Mesbah",
    comments: 5,
    title: "Engineering Excellence Software Development.",
  },
];

const BlogSection = () => {
  return (
    <div className="animate-fade-in space-y-8">
      <div>
        <span className="section-label mb-3">My Recent Post</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 leading-tight">
          Elevate your brand with a <span className="text-primary">the</span>
        </h2>
        <p className="text-slate-600 max-w-2xl text-sm sm:text-base leading-relaxed">
          Every developer has a unique journey, filled with challenges, triumphs, and constant learning. 
          Here's a glimpse into my personal development path, from my early days as a beginner.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="overflow-hidden aspect-[16/10]">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-4 mb-3 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-primary" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5 text-primary" />
                  <span>Comments ({blog.comments})</span>
                </div>
              </div>
              <h4 className="text-base font-display font-bold text-foreground mb-4 line-clamp-2">
                {blog.title}
              </h4>
              <button className="glow-button text-xs py-2 px-4">
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
