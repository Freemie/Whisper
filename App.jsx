import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function WhisperApp() {
  const [timeOfDay, setTimeOfDay] = useState("");
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 11) setTimeOfDay("morning");
    else if (hour < 17) setTimeOfDay("afternoon");
    else setTimeOfDay("evening");
  }, []);

  useEffect(() => {
    const prompts = {
      morning: "🌅 What are you grateful for today?",
      afternoon: "🌞 How’s your emotional energy right now?",
      evening: "🌙 Did you show kindness today, even in conflict?"
    };
    if (timeOfDay) setPrompt(prompts[timeOfDay]);
  }, [timeOfDay]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white p-6 flex flex-col items-center justify-center">
      <motion.h1
        className="text-4xl font-bold text-indigo-700 mb-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Whisper
      </motion.h1>
      <p className="text-gray-700 italic mb-6">Your emotional intelligence coach</p>

      <div className="bg-white shadow-md rounded-xl w-full max-w-xl p-6">
        <div className="flex items-start gap-2 mb-4">
          <Sparkles className="text-indigo-600 w-6 h-6" />
          <h2 className="text-lg font-semibold">{prompt}</h2>
        </div>

        {!submitted ? (
          <>
            <textarea
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 min-h-[120px]"
              placeholder="Write your reflection..."
              value={response}
              onChange={(e) => setResponse(e.target.value)}
            />
            <button
              onClick={() => setSubmitted(true)}
              className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Submit Reflection
            </button>
          </>
        ) : (
          <div className="text-green-600 text-center text-lg">
            🌱 Thanks for sharing. Keep growing.
          </div>
        )}
      </div>
    </div>
  );
}
