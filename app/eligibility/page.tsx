"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, MessageCircle, Info } from "lucide-react";

export default function EligibilityChecker() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    { id: 1, q: "Are you a citizen of Bangladesh?" },
    { id: 2, q: "Will you return to Bangladesh after your award has ended for at least two years?" },
    { id: 3, q: "Do you hold a recognised undergraduate degree eligible for a UK Master's entry?" },
    { id: 4, q: "Did you graduate from your undergraduate degree before October 2023?" },
    { id: 5, q: "Since completing your undergraduate degree, do you have 2 years (2800 hours) of work experience?" },
    { id: 6, q: "Are you at least 18 years of age?" },
    { id: 7, q: "Are you applying for a UK study starting in Autumn 2026?" },
  ];

  const handleChange = (id: number, value: string) => setAnswers({ ...answers, [id]: value });
  const handleSubmit = () => setSubmitted(true);

  const isEligible =
    Object.keys(answers).length === questions.length &&
    Object.values(answers).every((ans) => ans === "Yes");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A192F] via-[#0F213F] to-[#1F2937] text-white py-12 px-6 md:px-20">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-5xl font-extrabold text-center mb-10 text-white drop-shadow-lg"
      >
        Chevening Eligibility Checker
      </motion.h1>

      <div className="max-w-3xl mx-auto grid gap-6">
        {questions.map((q, index) => (
          <motion.div
            key={q.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-gradient-to-r from-indigo-900 to-purple-900 border border-white/20 shadow-2xl rounded-3xl hover:shadow-3xl hover:border-[#6366F1]/50 transition-all duration-300">
              <CardContent className="py-6 px-4">
                <p className="font-semibold mb-4 text-lg text-gray-100">{q.q}</p>
                <div className="flex gap-6">
                  {['Yes', 'No'].map((val) => (
                    <motion.button
                      key={val}
                      onClick={() => handleChange(q.id, val)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-md flex-1 text-center ${answers[q.id] === val ? (val === 'Yes' ? 'bg-emerald-500 text-white shadow-xl' : 'bg-red-500 text-white shadow-xl') : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
                    >
                      {val}
                    </motion.button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        <div className="flex justify-center mt-6">
          <Button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:opacity-90 px-8 py-4 rounded-2xl text-lg shadow-2xl transition-all duration-300"
          >
            Check Eligibility
          </Button>
        </div>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`mt-8 p-8 rounded-2xl text-center text-xl font-semibold shadow-2xl flex flex-col items-center gap-4 ${isEligible ? 'bg-emerald-600/90' : 'bg-red-600/90'}`}
          >
            {isEligible ? (
              <>
                <CheckCircle size={48} className="text-white animate-bounce" />
                <p>🎉 Congratulations! You meet the basic Chevening eligibility criteria.</p>
                <div className="flex flex-col md:flex-row gap-4 mt-6">
                  <a href="https://api.whatsapp.com/send?phone=8801813106421" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-green-400 to-green-600 text-white hover:opacity-90 px-6 py-3 rounded-xl flex items-center gap-2 animate-pulse">
                      <MessageCircle size={20} /> Connect on WhatsApp
                    </Button>
                  </a>

                  <Button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:opacity-90 px-6 py-3 rounded-xl flex items-center gap-2">
                    Apply Now
                  </Button>
                </div>
              </>
            ) : (
              <>
                <XCircle size={48} className="text-white animate-shake" />
                <p>⚠️ Sorry! Based on your answers, you are not eligible for Chevening this year.</p>
              </>
            )}
          </motion.div>
        )}

        {/* Commonwealth Scholarship Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white shadow-2xl rounded-2xl hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8 text-center flex flex-col items-center gap-4">
              <Info size={40} className="text-yellow-300 animate-bounce" />
              <h2 className="text-2xl font-bold">Know About Commonwealth Scholarship</h2>
              <p className="text-gray-100 text-base max-w-md">
                Explore details, eligibility, and application process for Commonwealth Scholarships directly on our resource page.
              </p>
              <a href="https://commonwealthuk.netlify.app/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold hover:opacity-90 px-6 py-3 rounded-xl mt-4">
                  Learn More
                </Button>
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
