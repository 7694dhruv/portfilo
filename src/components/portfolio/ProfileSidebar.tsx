import { Download, Instagram, Linkedin, Twitter, Facebook, Phone, Mail } from "lucide-react";
import profileImage from "@/assets/1734336337775.jpg";
import { FaSquareXTwitter } from "react-icons/fa6";
import cvFile from "../portfolio/cv/DHRUV MOJILA CV.pdf";

interface ProfileSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

// const navItems = [
//   { id: "about", label: "My About" },
//   { id: "resume", label: "My Resume" },
//   { id: "work", label: "My Work" },
//   { id: "blog", label: "My Blog" },
//   { id: "contact", label: "My Contact" },
// ];

const ProfileSidebar = ({ activeSection, onSectionChange }: ProfileSidebarProps) => {
  return (
    <aside className="w-full lg:w-80 xl:w-96 flex-shrink-0 items-center">
      <div className="glass-card p-6 lg:p-8 lg:sticky lg:top-8 ">
        {/* Profile Image */}
        <div className="relative mb-6">
          <div className="w-48 h-56 mx-auto overflow-hidden rounded-2xl border-2 border-primary/20">
            <img
              src={profileImage}
              alt="Dhruv Mojila"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name & Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">Dhruv Mojila</h2>
          <div className="online-badge justify-center mb-1">
            <span>Active Online</span>
          </div>
          <p className="text-muted-foreground font-medium">Full Stack Developer</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 mb-6 text-center">
          <div className="contact-info justify-center">
            <Phone className="w-4 h-4 text-primary" />
            <a href="tel:9274252089">+91 9274252089</a>
          </div>
          <div className="contact-info justify-center">
            <Mail className="w-4 h-4 text-primary" />
            <a href="mailto:7694dhruvmojila@gmail.com">7694dhruvmojila@gmail.com</a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mb-6">
          <a href="https://www.instagram.com/m_dhruuvv910?igsh=MXdmY292ZGZhYzR3MA%3D%3D&utm_source=qr" className="social-icon">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/dhruv-mojila-9530b3342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="social-icon">
            <Linkedin className="w-4 h-4" />
          </a>
          {/* <a href="#" className="social-icon">
            <FaSquareXTwitter />
            
          </a> */}
          <a href="https://www.facebook.com/share/1FYT8nVBmp/?mibextid=wwXIfr" className="social-icon">
            <Facebook className="w-4 h-4" />
          </a>
        </div>

        {/* Download CV Button */}


        <a
          href={cvFile}
          download
          className="glow-button w-full justify-center mb-8 inline-flex items-center gap-2"
        >
          <span>Download My CV</span>
          <Download className="w-4 h-4" />
        </a>



        {/* Navigation */}
        {/* <nav className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`sidebar-nav-item w-full ${
                activeSection === item.id ? "active" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav> */}
      </div>
    </aside>
  );
};

export default ProfileSidebar;
