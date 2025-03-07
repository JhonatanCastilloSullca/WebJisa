import { useState, useEffect } from "react";
import { menuSections } from "../data/menuSections";

export default function FloatingMenu({ page }) {
  const [activeSection, setActiveSection] = useState("");
  const sections = menuSections[page] || [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (!sections.length) return null;

  return (
    <div className="fixed bottom-5 left-1 bg-white shadow-lg p-1 rounded-tr-xl flex flex-col items-center gap-2 z-40">
      {sections.map(({ id, icon: Icon }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`p-2  rounded-tr-lg transition ${activeSection === id ? "bg-JisaVerde text-white" : "bg-white text-JisaVerde"
            }`}
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
}
