import { useState, useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Crown,
  Users,
  Scale,
  Hammer,
  Sun,
  ScrollText,
  Calendar,
  Trophy,
  Library,
  Info,
  GraduationCap,
} from "lucide-react";
import {
  timelineEvents,
  comparisonPoints,
  keyFigures,
  sources,
  quizQuestions,
} from "./data/content";
import { Hero } from "./components/Hero";
import { Timeline } from "./components/Timeline";
import { Comparison } from "./components/Comparison";
import { KeyFigures } from "./components/KeyFigures";
import { Quiz } from "./components/Quiz";
import { Sources } from "./components/Sources";

type Section = "intro" | "timeline" | "comparison" | "figures" | "quiz" | "sources";

const sections: { id: Section; label: string; icon: ReactNode }[] = [
  { id: "intro", label: "Uvod", icon: <Info className="h-4 w-4" /> },
  { id: "timeline", label: "Časovnica", icon: <Calendar className="h-4 w-4" /> },
  { id: "comparison", label: "Primerjava", icon: <Scale className="h-4 w-4" /> },
  { id: "figures", label: "Osebnosti", icon: <Users className="h-4 w-4" /> },
  { id: "quiz", label: "Kviz", icon: <Trophy className="h-4 w-4" /> },
  { id: "sources", label: "Viri", icon: <Library className="h-4 w-4" /> },
];

const iconMap: Record<string, ReactNode> = {
  Crown: <Crown className="h-6 w-6" />,
  Users: <Users className="h-6 w-6" />,
  Hammer: <Hammer className="h-6 w-6" />,
  ScrollText: <ScrollText className="h-6 w-6" />,
  Scale: <Scale className="h-6 w-6" />,
  Sun: <Sun className="h-6 w-6" />,
};

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("intro");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections: Section[] = [
        "intro",
        "timeline",
        "comparison",
        "figures",
        "quiz",
        "sources",
      ];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: Section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-red-700">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-bold leading-tight">
                  Grčija & Rim
                </div>
                <div className="text-xs text-stone-500">9. razred OŠ</div>
              </div>
            </div>
            <div className="flex items-center gap-1 overflow-x-auto rounded-full bg-stone-100 p-1 sm:bg-stone-200/50">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all sm:text-sm ${
                    activeSection === section.id
                      ? "bg-white text-amber-700 shadow-sm"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  {section.icon}
                  <span className="hidden sm:inline">{section.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section id="intro">
        <Hero onStart={() => scrollToSection("timeline")} />
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-20">
        <Timeline events={timelineEvents} />
      </section>

      {/* Comparison */}
      <section
        id="comparison"
        className="bg-gradient-to-b from-stone-50 to-amber-50/30 py-20"
      >
        <Comparison points={comparisonPoints} iconMap={iconMap} />
      </section>

      {/* Key Figures */}
      <section id="figures" className="py-20">
        <KeyFigures figures={keyFigures} />
      </section>

      {/* Quiz */}
      <section
        id="quiz"
        className="bg-gradient-to-b from-stone-50 to-amber-50/30 py-20"
      >
        <Quiz questions={quizQuestions} />
      </section>

      {/* Sources */}
      <section id="sources" className="py-20">
        <Sources sources={sources} />
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-stone-900 py-12 text-stone-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-red-700">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    Grčija & Rim
                  </div>
                  <div className="text-xs text-stone-400">
                    Interaktivni učni pripomoček
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm">
                Sodobno didaktično gradivo za 9. razred osnovne šole o
                primerjavi načinov vladanja v antični Grčiji in Rimu.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-white">
                Teme pripomočka
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Zgodovinska časovnica</li>
                <li>• Primerjava oblik vladavine</li>
                <li>• Ključne osebnosti</li>
                <li>• Interaktivni kviz</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-white">
                Pedagoške vrednote
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Vizualno učenje</li>
                <li>• Interaktivna vsebina</li>
                <li>• Sodobne tehnologije</li>
                <li>• Akademsko preverljivi viri</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-stone-800 pt-6 text-center text-xs text-stone-500">
            © 2025 Učni pripomoček o antični Grčiji in Rimu • Izdelano s
            tehnologijami React, Tailwind CSS in Framer Motion
          </div>
        </div>
      </footer>
    </div>
  );
}
