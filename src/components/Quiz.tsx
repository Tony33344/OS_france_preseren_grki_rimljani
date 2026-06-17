import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Trophy, RotateCcw, Check, X, Sparkles, Award } from "lucide-react";

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  civilization: "greece" | "rome";
}

interface QuizProps {
  questions: QuizQuestion[];
}

export function Quiz({ questions }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [finished, setFinished] = useState(false);

  const handleAnswer = (idx: number) => {
    if (showResult) return;
    setSelectedAnswer(idx);
    setShowResult(true);
    if (idx === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = idx;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers(new Array(questions.length).fill(null));
    setFinished(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100)
      return { title: "Mojster antične zgodovine! 🏆", message: "Popoln rezultat! Poznaš Grčijo in Rim kot pravi arheolog.", color: "from-amber-400 to-yellow-500" };
    if (percentage >= 75)
      return { title: "Odlično! 🌟", message: "Zelo dobro poznaš snov. Nekaj malenkosti ti je ušlo.", color: "from-emerald-400 to-green-500" };
    if (percentage >= 50)
      return { title: "Dobro! 👍", message: "Osnove ti gredo dobro. Ponovno preberi primerjave, da boš še boljši.", color: "from-blue-400 to-indigo-500" };
    return { title: "Poskusi znova! 📚", message: "Nič hudega, vsak začetek je težak. Vrni se k učnemu gradivu in ponovi.", color: "from-rose-400 to-red-500" };
  };

  if (finished) {
    const result = getScoreMessage();
    return (
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="overflow-hidden rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-xl sm:p-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className={`mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${result.color} text-white shadow-lg`}
          >
            <Trophy className="h-12 w-12" />
          </motion.div>
          <h2 className="mb-3 text-3xl font-bold text-stone-900 sm:text-4xl">
            {result.title}
          </h2>
          <p className="mb-2 text-lg text-stone-600">{result.message}</p>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-stone-100 px-6 py-3">
            <Award className="h-5 w-5 text-amber-500" />
            <span className="text-2xl font-bold text-stone-900">
              {score} / {questions.length}
            </span>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-2 text-left sm:grid-cols-2">
            {questions.map((q, idx) => {
              const userAnswer = answers[idx];
              const isCorrect = userAnswer === q.correct;
              return (
                <div
                  key={idx}
                  className={`flex items-start gap-2 rounded-lg p-3 ${
                    isCorrect ? "bg-emerald-50" : "bg-rose-50"
                  }`}
                >
                  <div
                    className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                      isCorrect ? "bg-emerald-500" : "bg-rose-500"
                    } text-white`}
                  >
                    {isCorrect ? (
                      <Check className="h-3 w-3" strokeWidth={3} />
                    ) : (
                      <X className="h-3 w-3" strokeWidth={3} />
                    )}
                  </div>
                  <div className="text-xs">
                    <div className="font-medium text-stone-700">
                      Vprašanje {idx + 1}
                    </div>
                    <div className="text-stone-500">
                      {isCorrect ? "Pravilno" : `Pravilni odgovor: ${q.options[q.correct]}`}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-amber-500/30 transition-all hover:scale-105 hover:shadow-xl"
          >
            <RotateCcw className="h-5 w-5" />
            Poskusi znova
          </button>
        </motion.div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isGreece = question.civilization === "greece";

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-1.5 text-rose-700">
          <Trophy className="h-4 w-4" />
          <span className="text-sm font-semibold">Interaktivni kviz</span>
        </div>
        <h2 className="mb-4 text-4xl font-bold text-stone-900 sm:text-5xl">
          Preizkusi svoje znanje
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-stone-600">
          Odgovori na {questions.length} vprašanj in preveri, kako dobro
          poznaš antično Grčijo in Rim. Za vsak odgovor dobiš pojasnilo!
        </p>
      </motion.div>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-sm text-stone-600">
          <span>
            Vprašanje {currentQuestion + 1} od {questions.length}
          </span>
          <span className="font-semibold text-amber-600">
            Točke: {score}
          </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-stone-200">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-gradient-to-r from-amber-400 to-orange-500"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden rounded-3xl border border-stone-200 bg-white p-6 shadow-xl sm:p-8"
        >
          {/* Question tag */}
          <div
            className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 ${
              isGreece
                ? "bg-amber-100 text-amber-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            <span className="text-base">{isGreece ? "🏛️" : "🏺"}</span>
            <span className="text-xs font-semibold">
              {isGreece ? "Antična Grčija" : "Stari Rim"}
            </span>
          </div>

          <h3 className="mb-6 text-2xl font-bold text-stone-900 sm:text-3xl">
            {question.question}
          </h3>

          <div className="space-y-3">
            {question.options.map((option, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrect = idx === question.correct;
              const showCorrect = showResult && isCorrect;
              const showWrong = showResult && isSelected && !isCorrect;

              return (
                <motion.button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={showResult}
                  whileHover={!showResult ? { scale: 1.01 } : {}}
                  whileTap={!showResult ? { scale: 0.99 } : {}}
                  className={`w-full rounded-xl border-2 p-4 text-left transition-all ${
                    showCorrect
                      ? "border-emerald-500 bg-emerald-50"
                      : showWrong
                      ? "border-rose-500 bg-rose-50"
                      : isSelected
                      ? "border-amber-500 bg-amber-50"
                      : "border-stone-200 bg-white hover:border-amber-300 hover:bg-amber-50/30"
                  } ${showResult ? "cursor-default" : "cursor-pointer"}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                          showCorrect
                            ? "bg-emerald-500 text-white"
                            : showWrong
                            ? "bg-rose-500 text-white"
                            : isSelected
                            ? "bg-amber-500 text-white"
                            : "bg-stone-100 text-stone-600"
                        }`}
                      >
                        {showCorrect ? (
                          <Check className="h-4 w-4" strokeWidth={3} />
                        ) : showWrong ? (
                          <X className="h-4 w-4" strokeWidth={3} />
                        ) : (
                          String.fromCharCode(65 + idx)
                        )}
                      </div>
                      <span className="font-medium text-stone-800">
                        {option}
                      </span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-6 overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-blue-900">
                      {selectedAnswer === question.correct ? "Pravilno! 🎉" : "Žal ni pravilno."}
                    </h4>
                    <p className="text-sm text-blue-800">
                      {question.explanation}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next button */}
          {showResult && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 flex justify-end"
            >
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
              >
                {currentQuestion < questions.length - 1
                  ? "Naslednje vprašanje"
                  : "Pokaži rezultat"}
                <Award className="h-4 w-4" />
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
