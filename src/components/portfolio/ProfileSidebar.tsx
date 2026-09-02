import { Download, Instagram, Linkedin, Phone, Mail } from "lucide-react";
import { FaFacebook } from "react-icons/fa6";
import dhruvPhoto from "@/dhruv-photo.png";
import cvFile from "../portfolio/cv/DHRUV MOJILA CV.pdf";

interface ProfileSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const ProfileSidebar = ({ activeSection, onSectionChange }: ProfileSidebarProps) => {
  return (
    <aside className="w-full lg:w-80 xl:w-96 flex-shrink-0 items-center">
      <div className="glass-card p-6 lg:p-8 lg:sticky lg:top-8 bg-white/95 border border-slate-200 shadow-sm">
        {/* Profile Image */}
        <div className="relative mb-6">
          <div className="w-48 h-56 mx-auto overflow-hidden rounded-2xl border-2 border-primary/30 shadow-md">
            <img
              src={dhruvPhoto}
              alt="Dhruv Mojila"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name & Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-display font-bold text-foreground mb-1">
            Dhruv Mojila
          </h2>
          <div className="online-badge justify-center mb-2">
            <span>Active Online</span>
          </div>
          <p className="text-slate-500 font-semibold text-sm">Full Stack Developer</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 mb-6 text-center">
          <div className="contact-info justify-center text-sm font-medium">
            <Phone className="w-4 h-4 text-primary" />
            <a href="tel:9274252089" className="hover:text-primary transition-colors">+91 9274252089</a>
          </div>
          <div className="contact-info justify-center text-sm font-medium">
            <Mail className="w-4 h-4 text-primary" />
            <a href="mailto:7694dhruvmojila@gmail.com" className="hover:text-primary transition-colors">7694dhruvmojila@gmail.com</a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mb-6">
          <a 
            href="https://www.instagram.com/m_dhruuvv910?igsh=MXdmY292ZGZhYzR3MA%3D%3D&utm_source=qr" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Instagram"
            className="social-icon"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a 
            href="https://www.linkedin.com/in/dhruv-mojila-9530b3342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="LinkedIn"
            className="social-icon"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a 
            href="https://www.facebook.com/share/1FYT8nVBmp/?mibextid=wwXIfr" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Facebook"
            className="social-icon"
          >
            <FaFacebook className="w-4 h-4" />
          </a>
        </div>

        {/* Download CV Button */}
        <a
          href={cvFile}
          download="DHRUV MOJILA CV.pdf"
          className="glow-button w-full justify-center"
        >
          <span>Download My CV</span>
          <Download className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
