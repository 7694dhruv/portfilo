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
    <div className="animate-fade-in">
      <span className="section-label mb-4 inline-block">My Recent Post</span>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
        Elevate your brand with a <span className="text-primary">the</span>
      </h2>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Every developer has a unique journey, filled with challenges, triumphs, and constant learning. 
        Here's a glimpse into my personal development path, from my early days as a beginner.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <div className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  <span>Comments ({blog.comments})</span>
                </div>
              </div>
              <h4 className="text-lg font-display font-semibold text-foreground mb-4 line-clamp-2">
                {blog.title}
              </h4>
              <button className="glow-button text-sm py-2">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
