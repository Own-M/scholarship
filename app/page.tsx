"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Globe, BookOpen, CheckCircle, Sparkles, PhoneCall, Info, FileText, Users, FileCheck, ClipboardList, Send, Briefcase } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";


// Roadmap Steps Data
const roadmapSteps = [
  { title: "Apply to 5 UK Universities", description: "We carefully apply to five top universities in the UK on your behalf, maximizing your chances of admission.", icon: GraduationCap },
  { title: "Write Statement of Purpose", description: "Craft a compelling SOP that highlights your strengths, goals, and vision for the future.", icon: FileText },
  { title: "Recommendation Letter", description: "Provide professional recommendation letters that strengthen your application.", icon: Users },
  { title: "International Formatted CV", description: "Design a CV tailored to international standards that speaks for your achievements.", icon: Briefcase },
  { title: "Development Impact Document", description: "Highlight your potential impact and contributions with a professional development document.", icon: ClipboardList },
  { title: "Fillout & Submit Application", description: "We help you fill out, review, and submit your applications seamlessly with your contribution.", icon: Send },
  { title: "Manage Conditional & Unconditional Offer Letters", description: "We assist you in handling and managing both conditional and unconditional offer letters efficiently.", icon: FileCheck },
];

export default function ScholarshipLanding() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert("Thank you! Our team will contact you soon."); };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-blue-900 to-blue-800 text-white overflow-hidden">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
          Chevening Scholarship 2025
        </motion.h1>
        <p className="text-lg md:text-xl max-w-3xl text-gray-200">
          Fully Funded Scholarship Assistance Program by <span className="text-yellow-400 font-semibold">Gainers Future</span>. Unlock opportunities, explore eligibility, and begin your UK journey today!
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:scale-105 transition-transform duration-300">Apply Now</Button>
          <Link href="/eligibility"><Button className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:scale-105 transition-transform duration-300">Check Eligibility</Button></Link>
          <Link href="https://wa.me/8801XXXXXXXXX" target="_blank"><Button className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl flex items-center gap-2 hover:scale-105 transition-transform duration-300"><PhoneCall size={18} /> Connect on WhatsApp</Button></Link>
        </div>
      </section>

      {/* Features Carousel Section */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white drop-shadow-lg">Why Choose Chevening?</h2>
        <Swiper spaceBetween={30} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="pb-8">
          {[
            { icon: <GraduationCap size={50} />, title: "Full Tuition Fees", desc: "Complete tuition fee coverage for a UK Master's." },
            { icon: <Globe size={50} />, title: "Global Networking", desc: "Join a prestigious Chevening alumni community." },
            { icon: <BookOpen size={50} />, title: "Guided Application", desc: "Step-by-step SOP, LOR, and essay support." },
            { icon: <CheckCircle size={50} />, title: "Visa & Travel Covered", desc: "Receive monthly stipend, visa and travel costs." },
            { icon: <Sparkles size={50} />, title: "Career Boost", desc: "Chevening opens doors to global leadership." },
          ].map((f, i) => (
            <SwiperSlide key={i}>
              <motion.div whileHover={{ scale: 1.08, y: -5 }} transition={{ type: 'spring', stiffness: 300 }} className="bg-gradient-to-br from-indigo-700 to-purple-600 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center cursor-pointer">
                <div className="mb-4 text-yellow-400 drop-shadow-lg animate-bounce">{f.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-md">{f.title}</h3>
                <p className="text-gray-200 text-base leading-relaxed">{f.desc}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Roadmap Section */}
<section className="bg-gradient-to-br from-white via-blue-50 to-blue-100 py-20 px-6 md:px-20">
  <motion.h2
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-4xl md:text-5xl font-extrabold text-center text-[#1D4ED8] mb-16 drop-shadow-sm"
  >
    How Gainers Future Will Help You
  </motion.h2>

  <div className="relative border-l-4 border-[#1D4ED8] ml-6">
    {roadmapSteps.map((step, index) => {
      const Icon = step.icon;
      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="mb-12 ml-6 relative"
        >
          {/* Timeline dot */}
          <div className="absolute -left-10 top-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#1D4ED8] to-blue-400 flex items-center justify-center shadow-lg">
            <Icon className="text-white w-5 h-5" />
          </div>

          {/* Step Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow-xl border hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-[#1D4ED8] mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{step.description}</p>
          </motion.div>
        </motion.div>
      );
    })}
  </div>

  {/* Call to Action Buttons */}
  <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-16">
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href="https://forms.gle/Md1sa3RTGMRRiQFr9"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 text-lg"
    >
      Talk With Gainers Future
    </motion.a>

    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href="https://api.whatsapp.com/send?phone=8801813106421"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 text-lg flex items-center gap-2"
    >
      Connect on WhatsApp
    </motion.a>
  </div>
</section>

      {/* Commonwealth Scholarship Card */}
      <section className="py-12 px-6 md:px-20">
        <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 rounded-3xl shadow-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2"><Info /> Know About Commonwealth Scholarship</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Discover another fully funded pathway to study in the UK with the prestigious Commonwealth Scholarship program.</p>
          <Link href="https://commonwealthuk.netlify.app/" target="_blank"><Button className="bg-white text-purple-700 font-semibold px-8 py-4 rounded-2xl hover:scale-105 transition-transform duration-300">Explore Now</Button></Link>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="bg-blue-800 py-12 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-8 text-yellow-300">Application Timeline</h2>
        <div className="grid md:grid-cols-5 gap-6 text-center">
          {[
            { time: "5 Aug 2025", step: "Applications Open" },
            { time: "7 Oct 2025", step: "Deadline" },
            { time: "Feb 2026", step: "Interviews" },
            { time: "Jun 2026", step: "Final Results" },
            { time: "Sep 2026", step: "UK Journey Begins" },
          ].map((t, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-6 bg-white/10 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold text-yellow-300">{t.time}</h3>
              <p>{t.step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
<section className="py-16 px-6 md:px-20 bg-gradient-to-b from-gray-50 to-gray-100">
  <h2 className="text-4xl font-extrabold text-center mb-10 text-[#1D4ED8] drop-shadow-sm">
    Chevening Scholarship – FAQ
  </h2>
  <Accordion type="single" collapsible className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6">
    <AccordionItem value="q1">
      <AccordionTrigger className="text-lg font-semibold text-gray-800">
        What is the Chevening Scholarship?
      </AccordionTrigger>
      <AccordionContent className="text-gray-600 leading-relaxed">
        Chevening is a UK Government fully funded scholarship offered for one-year Master’s degrees in the UK.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="q2">
      <AccordionTrigger className="text-lg font-semibold text-gray-800">
        Who can apply?
      </AccordionTrigger>
      <AccordionContent className="text-gray-600 leading-relaxed">
        Must be a citizen of Bangladesh (or eligible Chevening country), hold a bachelor’s degree, have at least 2,800 hours of work experience, and return to your home country for at least 2 years after the scholarship.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="q3">
      <AccordionTrigger className="text-lg font-semibold text-gray-800">
        For which degrees can I apply?
      </AccordionTrigger>
      <AccordionContent className="text-gray-600 leading-relaxed">
        Only full-time, one-year Master’s programs in the UK.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="q4">
      <AccordionTrigger className="text-lg font-semibold text-gray-800">
        How many courses should I apply to?
      </AccordionTrigger>
      <AccordionContent className="text-gray-600 leading-relaxed">
        You must apply to three different Master’s courses at three different UK universities and secure at least one unconditional offer.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="q5">
      <AccordionTrigger className="text-lg font-semibold text-gray-800">
        What documents are required?
      </AccordionTrigger>
      <AccordionContent className="text-gray-600 leading-relaxed">
        Bachelor’s degree certificate & transcripts, proof of work experience, two reference letters, CV/Resume, valid passport, and proof of English proficiency (if required).
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="q6">
      <AccordionTrigger className="text-lg font-semibold text-gray-800">
        Is IELTS/TOEFL mandatory?
      </AccordionTrigger>
      <AccordionContent className="text-gray-600 leading-relaxed">
        Chevening itself does not require IELTS/TOEFL, but most UK universities may require an English test score.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="q7">
      <AccordionTrigger className="text-lg font-semibold text-gray-800">
        What benefits does Chevening provide?
      </AccordionTrigger>
      <AccordionContent className="text-gray-600 leading-relaxed">
        Full tuition fees, monthly living allowance, travel to and from the UK, visa cost, arrival allowance, and access to the global Chevening Alumni Network.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="q8">
      <AccordionTrigger className="text-lg font-semibold text-gray-800">
        When can I apply?
      </AccordionTrigger>
      <AccordionContent className="text-gray-600 leading-relaxed">
        Applications usually open between August–October each year. If you miss the deadline, you must wait until the following year.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="q9">
      <AccordionTrigger className="text-lg font-semibold text-gray-800">
        Who can be my referees?
      </AccordionTrigger>
      <AccordionContent className="text-gray-600 leading-relaxed">
        Your professional supervisor, academic lecturer, or mentor who can comment on your leadership, skills, and character.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="q10">
      <AccordionTrigger className="text-lg font-semibold text-gray-800">
        Does Chevening cover all expenses?
      </AccordionTrigger>
      <AccordionContent className="text-gray-600 leading-relaxed">
        Yes – tuition, travel, visa, and allowance are covered. However, personal expenses (leisure, extra travel, hobbies, etc.) are not included.
      </AccordionContent>
    </AccordionItem>
  </Accordion>

</section>

    

      {/* Footer */}
      <footer className="text-center py-8 text-sm bg-blue-950">© 2025 <span className="text-yellow-400 font-semibold">Gainers Future</span> – Empowering Dreams with Chevening</footer>
    </div>
  );
}
