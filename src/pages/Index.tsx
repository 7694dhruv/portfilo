import { useState } from "react";
import ProfileSidebar from "@/components/portfolio/ProfileSidebar";
import TabNavigation from "@/components/portfolio/TabNavigation";
import AboutSection from "@/components/portfolio/AboutSection";
import ResumeSection from "@/components/portfolio/ResumeSection";
import WorkSection from "@/components/portfolio/WorkSection";
import BlogSection from "@/components/portfolio/BlogSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "resume":
        return <ResumeSection />;
      case "work":
        return <WorkSection />;
      case "blog":
        return <BlogSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Profile Sidebar */}
          <ProfileSidebar
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Tab Navigation - Hidden on Mobile */}
            <div className="hidden lg:block">
              <TabNavigation
                activeSection={activeSection}
                onSectionChange={setActiveSection}
              />
            </div>

            {/* Content */}
            <div key={activeSection}>{renderSection()}</div>
          </main>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2026. All rights reserved by{" "}
            <a href="#" className="text-primary hover:underline">
              Dhruv Mojila
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
