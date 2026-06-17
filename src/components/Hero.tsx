import { motion } from "framer-motion";
import { ArrowDown, Sparkles, BookOpen } from "lucide-react";

interface HeroProps {
  onStart: () => void;
}

export function Hero({ onStart }: HeroProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/acropolis.jpg"
          alt="Akropola v Atenah"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/85 via-indigo-900/80 to-amber-900/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.25),transparent_60%)]" />
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute right-10 top-32 hidden h-24 w-24 rounded-full bg-amber-400/20 blur-2xl lg:block"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 left-10 hidden h-32 w-32 rounded-full bg-blue-400/20 blur-2xl lg:block"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-500/15 px-4 py-1.5 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 text-amber-300" />
              <span className="text-sm font-medium text-amber-100">
                Interaktivni učni pripomoček
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            >
              <span className="block">Vladanje v</span>
              <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                antični Grčiji
              </span>
              <span className="block">&</span>
              <span className="bg-gradient-to-r from-red-300 via-red-400 to-orange-400 bg-clip-text text-transparent">
                starem Rimu
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8 max-w-xl text-lg text-stone-200 sm:text-xl"
            >
              Odkrij, kako so naši predniki pred več kot 2000 leti izumili
              demokracijo, republiko in pravne sisteme, ki vplivajo na naš
              svet še danes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onStart}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-stone-900 shadow-xl shadow-black/20 transition-all hover:scale-105 hover:shadow-2xl"
              >
                <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                Začni raziskovati
              </button>
              <a
                href="https://sl.wikipedia.org/wiki/Antična_Grčija"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <BookOpen className="h-5 w-5" />
                Več o temi
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-4 border-t border-white/20 pt-8"
            >
              {[
                { value: "2000+", label: "let zgodovine" },
                { value: "5", label: "tematskih sklopov" },
                { value: "8+", label: "zgodovinskih osebnosti" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-amber-300 sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-xs text-stone-300 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Comparison card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-amber-500/30 to-blue-500/30 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl">
                <div className="grid grid-cols-2">
                  {/* Greece side */}
                  <div className="border-r border-white/20 p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="text-3xl">🏛️</div>
                      <div>
                        <div className="text-xs font-medium text-amber-200">
                          ATENE
                        </div>
                        <div className="text-xs text-stone-300">~508 pr. n. št.</div>
                      </div>
                    </div>
                    <img
                      src="/images/greek-agora.jpg"
                      alt="Grška agora"
                      className="mb-3 h-32 w-full rounded-lg object-cover"
                    />
                    <div className="space-y-1.5 text-xs text-stone-200">
                      <div className="flex items-start gap-1.5">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                        <span>Neposredna demokracija</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                        <span>Ljudska skupščina (eklezija)</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                        <span>Žrebanje (sorticija)</span>
                      </div>
                    </div>
                  </div>

                  {/* Rome side */}
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="text-3xl">🏺</div>
                      <div>
                        <div className="text-xs font-medium text-red-300">
                          RIMSKA REPUBLIKA
                        </div>
                        <div className="text-xs text-stone-300">509 pr. n. št.</div>
                      </div>
                    </div>
                    <img
                      src="/images/roman-senate.jpg"
                      alt="Rimski senat"
                      className="mb-3 h-32 w-full rounded-lg object-cover"
                    />
                    <div className="space-y-1.5 text-xs text-stone-200">
                      <div className="flex items-start gap-1.5">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400" />
                        <span>Mešana republika</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400" />
                        <span>Dva konzula + Senat</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400" />
                        <span>Vzajemni veto</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/20 bg-black/20 p-4 text-center">
                  <p className="text-sm text-stone-200">
                    <span className="font-semibold text-amber-300">Razmisli:</span>{" "}
                    Katera oblika vladavine je bližje sodobnim demokracijam?
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white lg:flex"
        >
          <span className="text-xs uppercase tracking-widest text-stone-300">
            Se drsaj
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-8 w-0.5 rounded-full bg-gradient-to-b from-amber-300 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
}
