import { useState, useEffect } from "react";
import ProfileSidebar from "@/components/portfolio/ProfileSidebar";
import TabNavigation from "@/components/portfolio/TabNavigation";
import AboutSection from "@/components/portfolio/AboutSection";
import ResumeSection from "@/components/portfolio/ResumeSection";
import WorkSection from "@/components/portfolio/WorkSection";
import BlogSection from "@/components/portfolio/BlogSection";
import ContactSection from "@/components/portfolio/ContactSection";
import { Palette } from "lucide-react";

type ThemeAccent = "cyan" | "violet" | "emerald" | "sunset" | "rose";

interface ThemeOption {
  id: ThemeAccent;
  name: string;
  colorHex: string;
}

const themeOptions: ThemeOption[] = [
  { id: "cyan", name: "Sky Cyan", colorHex: "#0284c7" },
  { id: "violet", name: "Royal Violet", colorHex: "#7c3aed" },
  { id: "emerald", name: "Fresh Emerald", colorHex: "#059669" },
  { id: "sunset", name: "Warm Amber", colorHex: "#d97706" },
  { id: "rose", name: "Vibrant Rose", colorHex: "#e11d48" },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [activeTheme, setActiveTheme] = useState<ThemeAccent>("cyan");
  const [showThemePicker, setShowThemePicker] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_light_theme") as ThemeAccent;
    if (saved && ["cyan", "violet", "emerald", "sunset", "rose"].includes(saved)) {
      setActiveTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", "cyan");
    }
  }, []);

  const changeTheme = (theme: ThemeAccent) => {
    setActiveTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio_light_theme", theme);
  };

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
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Top Bar for Color Switcher */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="container max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <span className="font-display font-bold text-sm tracking-tight text-slate-800">
              Dhruv Mojila Portfolio
            </span>
          </div>

          {/* Color Accent Picker */}
          <div className="relative">
            <button
              onClick={() => setShowThemePicker(!showThemePicker)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors border border-slate-200"
              title="Change Theme Accent Color"
            >
              <Palette className="w-3.5 h-3.5 text-primary" />
              <span className="hidden sm:inline">Color Theme</span>
              <span
                className="w-3 h-3 rounded-full border border-slate-300 shadow-sm"
                style={{
                  backgroundColor:
                    themeOptions.find((t) => t.id === activeTheme)?.colorHex || "#0284c7",
                }}
              />
            </button>

            {showThemePicker && (
              <div 
                className="absolute right-0 mt-2 w-44 p-2 rounded-2xl bg-white border border-slate-200 shadow-xl z-50 animate-fade-in space-y-1"
                onMouseLeave={() => setShowThemePicker(false)}
              >
                <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Select Light Accent
                </div>
                {themeOptions.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      changeTheme(t.id);
                      setShowThemePicker(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      activeTheme === t.id
                        ? "bg-slate-100 text-primary"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: t.colorHex }}
                      />
                      <span>{t.name}</span>
                    </div>
                    {activeTheme === t.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Profile Sidebar */}
          <ProfileSidebar
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />

          {/* Main Content */}
          <main className="flex-1 min-w-0 w-full">
            {/* Tab Navigation - Hidden on Mobile */}
            <div className="hidden lg:block">
              <TabNavigation
                activeSection={activeSection}
                onSectionChange={setActiveSection}
              />
            </div>

            {/* Mobile Tab Navigation */}
            <div className="lg:hidden mb-6 overflow-x-auto pb-2">
              <TabNavigation
                activeSection={activeSection}
                onSectionChange={setActiveSection}
              />
            </div>

            {/* Content */}
            <div key={activeSection} className="transition-opacity duration-200">
              {renderSection()}
            </div>
          </main>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-500 text-sm">
            © 2026. All rights reserved by{" "}
            <a href="#" className="text-primary font-semibold hover:underline">
              Dhruv Mojila
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
