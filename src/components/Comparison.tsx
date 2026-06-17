import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Scale, Sparkles, Check } from "lucide-react";
import type { ComparisonPoint } from "../data/content";

interface ComparisonProps {
  points: ComparisonPoint[];
  iconMap: Record<string, React.ReactNode>;
}

export function Comparison({ points, iconMap }: ComparisonProps) {
  const [activePoint, setActivePoint] = useState(0);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-purple-700">
          <Scale className="h-4 w-4" />
          <span className="text-sm font-semibold">Primerjava sistemov</span>
        </div>
        <h2 className="mb-4 text-4xl font-bold text-stone-900 sm:text-5xl">
          Grčija proti Rimu
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-stone-600">
          Razišči ključne razlike in podobnosti med obema civilizacijama.
          Klikni na posamezno temo in odkrij, kako sta si bili vladavini
          različni in hkrati podobni.
        </p>
      </motion.div>

      {/* Topic selector */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {points.map((point, idx) => (
          <button
            key={point.category}
            onClick={() => setActivePoint(idx)}
            className={`flex items-center gap-2 rounded-full border-2 px-4 py-2.5 text-sm font-semibold transition-all ${
              activePoint === idx
                ? "border-amber-500 bg-amber-50 text-amber-700 shadow-md"
                : "border-stone-200 bg-white text-stone-600 hover:border-amber-200 hover:bg-amber-50/50"
            }`}
          >
            {iconMap[point.icon]}
            <span className="hidden sm:inline">{point.category}</span>
            <span className="sm:hidden">{point.category.split(" ")[0]}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activePoint}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {/* Title */}
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-stone-900 sm:text-3xl">
              {points[activePoint].category}
            </h3>
          </div>

          {/* Comparison cards */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Greece card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-3xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-8 shadow-lg transition-all hover:shadow-2xl"
            >
              {/* Decorative pattern */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-200/30 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-orange-200/40 blur-2xl" />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/30">
                      🏛️
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                        Antična Grčija
                      </div>
                      <div className="text-sm text-stone-500">Ateński model</div>
                    </div>
                  </div>
                  <div className="text-4xl opacity-20">⚖️</div>
                </div>

                <h4 className="mb-3 text-2xl font-bold text-stone-900">
                  {points[activePoint].greece.title}
                </h4>
                <p className="mb-6 text-stone-700">
                  {points[activePoint].greece.description}
                </p>

                <div className="space-y-2.5">
                  {points[activePoint].greece.keyPoints.map((point, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.05 }}
                      className="flex items-start gap-3 rounded-lg bg-white/70 p-3 backdrop-blur-sm"
                    >
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-white">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-stone-700">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Rome card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-3xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-rose-50 p-8 shadow-lg transition-all hover:shadow-2xl"
            >
              {/* Decorative pattern */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-200/30 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-rose-200/40 blur-2xl" />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-rose-700 text-white shadow-lg shadow-red-500/30">
                      🏺
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-red-600">
                        Stari Rim
                      </div>
                      <div className="text-sm text-stone-500">Rimski model</div>
                    </div>
                  </div>
                  <div className="text-4xl opacity-20">🦅</div>
                </div>

                <h4 className="mb-3 text-2xl font-bold text-stone-900">
                  {points[activePoint].rome.title}
                </h4>
                <p className="mb-6 text-stone-700">
                  {points[activePoint].rome.description}
                </p>

                <div className="space-y-2.5">
                  {points[activePoint].rome.keyPoints.map((point, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                      className="flex items-start gap-3 rounded-lg bg-white/70 p-3 backdrop-blur-sm"
                    >
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-stone-700">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Insight box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 overflow-hidden rounded-2xl border border-stone-200 bg-gradient-to-r from-amber-50 via-stone-50 to-red-50 p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-red-500 text-white">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h5 className="mb-1 font-bold text-stone-900">
                  💡 Ključna razlika
                </h5>
                <p className="text-sm text-stone-700">
                  {activePoint === 0 &&
                    "Ateńska demokracija je bila neposredna - ljudje so sami odločali. Rim je imel predstavniški sistem z izvoljenimi uradniki, ki je vplival na kasnejše republike, tudi na ZDA."}
                  {activePoint === 1 &&
                    "Obe družbi sta imeli ozko definicijo 'državljana'. A Grčija je bila strožja (izključeni metojki in sužnji), Rim pa je postopno širil pravice - vrhunec je bil Constitutio Antoniniana (212 n. št.)."}
                  {activePoint === 2 &&
                    "Kolegijski sistem z vzajemnim vetom je preprečeval kopičenje oblasti v eni osebi. Atene tega niso imele - strateg Perikles je 15 let zaporedoma vodil mesto."}
                  {activePoint === 3 &&
                    "V Atenah so ljudje sami glasovali. V Rimu je imel Senat (300-600 patricijev) ogromno moč, formalne odločitve pa so sprejemale ljudske skupščine comitia."}
                  {activePoint === 4 &&
                    "Obe civilizaciji sta poznali žreb za poroto - a Atene so žrebale tudi magistrate. To je bila ključna demokratična reforma, ki je preprečevala korupcijo."}
                  {activePoint === 5 &&
                    "V obeh civilizacijah so bili verski obredi povezani s politiko. V Rimu je Pontifex Maximus kasneje postal celo cesar, kar je versko in politično oblast združilo v eni osebi."}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
