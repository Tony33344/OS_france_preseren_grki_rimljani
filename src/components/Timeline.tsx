import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Filter } from "lucide-react";
import type { TimelineEvent } from "../data/content";

interface TimelineProps {
  events: TimelineEvent[];
}

const categoryColors: Record<string, { bg: string; text: string; ring: string }> = {
  political: {
    bg: "bg-amber-500",
    text: "text-amber-700",
    ring: "ring-amber-300",
  },
  social: {
    bg: "bg-emerald-500",
    text: "text-emerald-700",
    ring: "ring-emerald-300",
  },
  military: {
    bg: "bg-red-500",
    text: "text-red-700",
    ring: "ring-red-300",
  },
  cultural: {
    bg: "bg-blue-500",
    text: "text-blue-700",
    ring: "ring-blue-300",
  },
};

export function Timeline({ events }: TimelineProps) {
  const [filter, setFilter] = useState<"all" | "greece" | "rome">("all");
  const [catFilter, setCatFilter] = useState<"all" | "political" | "social" | "military" | "cultural">("all");

  const filteredEvents = events.filter((e) => {
    const civMatch = filter === "all" || e.civilization === filter;
    const catMatch = catFilter === "all" || e.category === catFilter;
    return civMatch && catMatch;
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
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-amber-700">
          <Calendar className="h-4 w-4" />
          <span className="text-sm font-semibold">Zgodovinska časovnica</span>
        </div>
        <h2 className="mb-4 text-4xl font-bold text-stone-900 sm:text-5xl">
          Pot skozi čas
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-stone-600">
          Sledi ključnim dogodkom, ki so oblikovali način vladanja v antični
          Grčiji in Rimu - od ustanovitve prvih mestnih držav do vzpona
          rimskega cesarstva.
        </p>
      </motion.div>

      {/* Filter buttons */}
      <div className="mb-12 flex flex-col items-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2 text-sm text-stone-500">
            <Filter className="h-4 w-4" />
            <span>Civilizacija:</span>
          </div>
          {(
            [
              { id: "all", label: "Vse" },
              { id: "greece", label: "🏛️ Antična Grčija" },
              { id: "rome", label: "🏺 Stari Rim" },
            ] as { id: typeof filter; label: string }[]
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
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm text-stone-500">Kategorija:</span>
          {(
            [
              { id: "all", label: "Vse" },
              { id: "political", label: "🏛️ Politično" },
              { id: "social", label: "👥 Družbeno" },
              { id: "military", label: "⚔️ Vojaško" },
              { id: "cultural", label: "🎭 Kulturno" },
            ] as { id: typeof catFilter; label: string }[]
          ).map((option) => (
            <button
              key={option.id}
              onClick={() => setCatFilter(option.id)}
              aria-pressed={catFilter === option.id}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                catFilter === option.id
                  ? "bg-stone-700 text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Center line */}
        <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-amber-300 via-stone-300 to-red-300 lg:block" />

        <div className="space-y-8 lg:space-y-12">
          {filteredEvents.map((event, index) => {
            const isLeft = index % 2 === 0;
            const isGreece = event.civilization === "greece";
            const isBoth = event.civilization === "both";
            const accent = isBoth
              ? "from-purple-500 to-pink-500"
              : isGreece
              ? "from-amber-500 to-orange-500"
              : "from-red-500 to-rose-500";

            return (
              <motion.div
                key={`${event.year}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative grid items-center gap-8 lg:grid-cols-2 ${
                  isLeft ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Content */}
                <div
                  className={`group ${
                    isLeft ? "lg:col-start-1 lg:text-right" : "lg:col-start-2"
                  }`}
                >
                  <div
                    className={`inline-block max-w-md rounded-2xl border border-stone-200 bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl ${
                      isLeft ? "lg:ml-auto" : ""
                    }`}
                  >
                    <div
                      className={`mb-3 flex items-center gap-2 ${
                        isLeft ? "lg:justify-end" : ""
                      }`}
                    >
                      <div
                        className={`rounded-full bg-gradient-to-r ${accent} px-3 py-1 text-xs font-semibold text-white`}
                      >
                        {event.year}
                      </div>
                      <div
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          categoryColors[event.category].bg
                        } text-white`}
                      >
                        {event.category === "political" && "🏛️ Politično"}
                        {event.category === "social" && "👥 Družbeno"}
                        {event.category === "military" && "⚔️ Vojaško"}
                        {event.category === "cultural" && "🎭 Kulturno"}
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-stone-900">
                      {event.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-stone-600">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-white bg-gradient-to-br shadow-lg ring-4 lg:block">
                  <div
                    className={`h-full w-full rounded-full bg-gradient-to-br ${accent}`}
                  />
                </div>

                {/* Year mobile */}
                <div
                  className={`block lg:hidden ${
                    isLeft ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"
                  }`}
                >
                  <div
                    className={`text-4xl font-bold ${
                      isGreece
                        ? "text-amber-300"
                        : isBoth
                        ? "text-purple-300"
                        : "text-red-300"
                    }`}
                  >
                    {event.year.split(" ")[0]}
                  </div>
                </div>

                {/* Year desktop (on opposite side) */}
                <div
                  className={`hidden text-right text-7xl font-bold opacity-20 lg:block ${
                    isLeft
                      ? "lg:col-start-2 lg:row-start-1"
                      : "lg:col-start-1 lg:row-start-1 lg:text-left"
                  }`}
                >
                  <div
                    className={`bg-gradient-to-br ${accent} bg-clip-text text-transparent`}
                  >
                    {event.year.split(" ")[0]}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
