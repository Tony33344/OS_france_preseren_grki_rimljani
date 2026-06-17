import { motion } from "framer-motion";
import { useState } from "react";
import { Users, Award, Quote } from "lucide-react";

interface Figure {
  name: string;
  civilization: "greece" | "rome";
  period: string;
  role: string;
  description: string;
  achievements: string[];
}

interface KeyFiguresProps {
  figures: Figure[];
}

const figureImages: Record<string, string> = {
  Klejsten: "/images/democracy-diagram.jpg",
  Perikles: "/images/greek-citizen.jpg",
  Solon: "/images/greek-agora.jpg",
  Romul: "/images/roman-forum.jpg",
  "Lucij Junij Brut": "/images/roman-republic-diagram.jpg",
  Cicero: "/images/roman-senator.jpg",
  "Julij Cezar": "/images/roman-forum.jpg",
  "Oktavijan / Avgust": "/images/roman-senate.jpg",
};

export function KeyFigures({ figures }: KeyFiguresProps) {
  const [filter, setFilter] = useState<"all" | "greece" | "rome">("all");
  const [selectedFigure, setSelectedFigure] = useState<number | null>(null);

  const filteredFigures = figures.filter((f) => {
    if (filter === "all") return true;
    return f.civilization === filter;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-emerald-700">
          <Users className="h-4 w-4" />
          <span className="text-sm font-semibold">Ključne osebnosti</span>
        </div>
        <h2 className="mb-4 text-4xl font-bold text-stone-900 sm:text-5xl">
          Ljudje, ki so spremenili zgodovino
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-stone-600">
          Spoznaj izumitelje demokracije, osvoboditelje sužnjev, govornike in
          vojskovodje, ki so oblikovali zahodno civilizacijo.
        </p>
      </motion.div>

      {/* Filter */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
        {(
          [
            { id: "all", label: "Vse osebnosti", color: "stone" },
            { id: "greece", label: "🏛️ Grki", color: "amber" },
            { id: "rome", label: "🏺 Rimljani", color: "red" },
          ] as { id: typeof filter; label: string; color: string }[]
        ).map((option) => (
          <button
            key={option.id}
            onClick={() => setFilter(option.id)}
            aria-pressed={filter === option.id}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              filter === option.id
                ? "bg-stone-900 text-white shadow-md"
                : "bg-white text-stone-600 hover:bg-stone-100"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Figures grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredFigures.map((figure, idx) => {
          const isGreece = figure.civilization === "greece";
          const imageUrl = figureImages[figure.name] ?? "/images/acropolis.jpg";
          const accent = isGreece
            ? "from-amber-500 to-orange-500"
            : "from-red-500 to-rose-500";

          return (
            <motion.div
              key={figure.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() =>
                setSelectedFigure(selectedFigure === idx ? null : idx)
              }
              className="group cursor-pointer overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={imageUrl}
                  alt={figure.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${accent} opacity-30 mix-blend-multiply`} />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="inline-block rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-stone-700 backdrop-blur-sm">
                    {figure.period}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="mb-1 text-lg font-bold text-stone-900">
                  {figure.name}
                </h3>
                <div
                  className={`mb-3 text-sm font-semibold ${
                    isGreece ? "text-amber-600" : "text-red-600"
                  }`}
                >
                  {figure.role}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-stone-600">
                  {figure.description}
                </p>

                <div className="space-y-1.5">
                  {figure.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-stone-500"
                    >
                      <Award
                        className={`mt-0.5 h-3 w-3 flex-shrink-0 ${
                          isGreece ? "text-amber-500" : "text-red-500"
                        }`}
                      />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quote section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 grid gap-6 lg:grid-cols-2"
      >
        <div className="overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-8">
          <Quote className="mb-4 h-8 w-8 text-amber-500" />
          <p className="mb-4 text-xl font-medium italic text-stone-800">
            "Zakon mora vladati nad vsem."
          </p>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-xl text-white">
              🏛️
            </div>
            <div>
              <div className="font-bold text-stone-900">Solon</div>
              <div className="text-sm text-stone-600">
                Atene, ~594 pr. n. št.
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-red-200 bg-gradient-to-br from-red-50 to-rose-50 p-8">
          <Quote className="mb-4 h-8 w-8 text-red-500" />
          <p className="mb-4 text-xl font-medium italic text-stone-800">
            "Carthaginem delendam esse" - "Kartagino je treba uničiti."
          </p>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-rose-700 text-xl text-white">
              🏺
            </div>
            <div>
              <div className="font-bold text-stone-900">Cato Starejši</div>
              <div className="text-sm text-stone-600">
                Rim, 2. stol. pr. n. št.
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
