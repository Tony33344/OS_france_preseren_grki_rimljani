import { motion } from "framer-motion";
import {
  Library,
  BookOpen,
  Globe,
  FileText,
  ScrollText,
  ExternalLink,
} from "lucide-react";
import type { Source } from "../data/content";

interface SourcesProps {
  sources: Source[];
}

const typeConfig: Record<
  Source["type"],
  { icon: React.ReactNode; label: string; color: string; bg: string }
> = {
  book: {
    icon: <BookOpen className="h-5 w-5" />,
    label: "Knjiga",
    color: "text-amber-700",
    bg: "bg-amber-100",
  },
  website: {
    icon: <Globe className="h-5 w-5" />,
    label: "Spletna stran",
    color: "text-blue-700",
    bg: "bg-blue-100",
  },
  primary: {
    icon: <ScrollText className="h-5 w-5" />,
    label: "Primarni vir",
    color: "text-rose-700",
    bg: "bg-rose-100",
  },
  article: {
    icon: <FileText className="h-5 w-5" />,
    label: "Članek",
    color: "text-emerald-700",
    bg: "bg-emerald-100",
  },
};

export function Sources({ sources }: SourcesProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-indigo-700">
          <Library className="h-4 w-4" />
          <span className="text-sm font-semibold">Viri in literatura</span>
        </div>
        <h2 className="mb-4 text-4xl font-bold text-stone-900 sm:text-5xl">
          Kje lahko izveš več?
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-stone-600">
          Vsebine v tem pripomočku temeljijo na preverjenih virih. Spodaj
          najdeš knjige, spletne strani in primarne vire za nadaljnje
          raziskovanje.
        </p>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sources.map((source, idx) => {
          const config = typeConfig[source.type];
          return (
            <motion.div
              key={source.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${config.bg} ${config.color}`}
                >
                  {config.icon}
                </div>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${config.bg} ${config.color}`}
                >
                  {config.label}
                </span>
              </div>

              <h3 className="mb-2 text-base font-bold leading-snug text-stone-900">
                {source.title}
              </h3>

              {source.author && (
                <p className="mb-1 text-sm text-stone-700">
                  <span className="font-semibold">{source.author}</span>
                  {source.year && (
                    <span className="text-stone-500"> • {source.year}</span>
                  )}
                </p>
              )}

              {source.description && (
                <p className="mb-4 text-sm leading-relaxed text-stone-600">
                  {source.description}
                </p>
              )}

              {source.url && (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800"
                >
                  Odpri vir
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Methodology note */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 overflow-hidden rounded-2xl border border-stone-200 bg-gradient-to-br from-stone-50 to-amber-50/50 p-6 sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-stone-700 to-stone-900 text-white">
            <ScrollText className="h-6 w-6" />
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-stone-900">
              📚 Opomba o metodologiji
            </h3>
            <p className="mb-3 text-sm leading-relaxed text-stone-700">
              Ta učni pripomoček je bil pripravljen na podlagi akademsko
              preverljivih virov. Uporabljene informacije temeljijo na:
            </p>
            <ul className="space-y-1.5 text-sm text-stone-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-500">▸</span>
                <span>
                  Standardiziranem učnem načrtu za zgodovino v 9. razredu
                  osnovne šole (ZRSŠ)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">▸</span>
                <span>
                  Sodobni zgodovinski literaturi (Rajšp, Šterbenc in drugi
                  slovenski avtorji)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">▸</span>
                <span>
                  Primarnih virih antičnih avtorjev (Herodot, Tit Livij,
                  Ciceron)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">▸</span>
                <span>
                  Referenčnih spletnih enciklopedijah (Britannica,
                  Enciklopedija.si)
                </span>
              </li>
            </ul>
            <p className="mt-4 text-sm italic text-stone-600">
              Vse datume in dejstva smo večkratno preverili pri različnih
              avtorjih. Učenci naj vire uporabijo za lastno raziskovanje in
              kritično branje.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
