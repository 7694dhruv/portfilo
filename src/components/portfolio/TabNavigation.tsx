interface TabNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const tabs = [
  { id: "about", label: "My About" },
  { id: "resume", label: "My Resume" },
  // { id: "work", label: "My Work" },
  // { id: "blog", label: "My Blog" },
  { id: "contact", label: "My Contact" },
];

const TabNavigation = ({ activeSection, onSectionChange }: TabNavigationProps) => {
  return (
    <div className="glass-card p-2 mb-8 inline-flex flex-wrap gap-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onSectionChange(tab.id)}
          className={`nav-tab ${
            activeSection === tab.id ? "nav-tab-active" : "nav-tab-inactive"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
