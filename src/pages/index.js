import React, { useState, useEffect } from "react";
import { Script } from "gatsby";
import { motion } from "framer-motion";
import { CheckCircle2, Anchor, HeartHandshake, Target, Calendar, ArrowRight, MessageCircle, Instagram, Mail, Phone, BookOpen, Sparkles } from "lucide-react";
import logoImage from "../images/evolve-logo.png";
import honeycombBg from "../images/honeycomb.svg";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
// import 'bootstrap/dist/css/bootstrap.min.css';

// Simple brand tokens
const brand = {
  name: "Evolve Mindset Coaching",
  slogan: "Trust Your Wings",
  phone: "613-298-1522",
  email: "lucas@evolvemindsetcoaching.com",
  hashtags: ["#evolvewithlucas", "#evolvemindsetcoaching", "#mindset", "#benicetoyourself", "#trustyourwings"],
};

const navItems = [
  { id: "home", label: "Home" },
  { id: "programs", label: "Programs" },
  { id: "speaking", label: "Speaking" },
  { id: "resources", label: "Resources" },
  { id: "testimonials", label: "Praise" },
  { id: "contact", label: "Contact" },
];

export default function Website() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // Dev-only smoke tests (won't run on server)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (process.env.NODE_ENV !== "production") {
      console.assert(!!document.getElementById("home"), "Smoke test: #home section should exist");
      console.assert(!!document.getElementById("programs"), "Smoke test: #programs section should exist");
      console.assert(!!document.getElementById("contact"), "Smoke test: #contact section should exist");
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Sticky Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black text-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.img
              src={logoImage}
              alt={`${brand.name} logo`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="h-10 w-10 object-cover shadow-lg"
            />
            <div>
              <div className="font-semibold leading-tight text-xl">{brand.name}</div>
              <div className="text-xs -mt-0.5">{brand.slogan}</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm hover:text-slate-600 transition">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl border-2 border-white px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black">Book a Session</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="hero relative overflow-hidden text-white bg-black">
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-black/80 via-black/70 to-black/60" />
        <div className="pointer-events-none absolute inset-0 -z-10 flex justify-end items-end">
          <div
            style={{
              width: "500px",
              height: "650px",
              backgroundImage: `url(${honeycombBg})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              opacity: 0.9
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Become your own <span className="inline-flex items-center gap-2">anchor <Anchor className="w-8 h-8"/></span> in any storm
            </h1>
            <p className="mt-5 text-lg max-w-xl">
              I help entrepreneurs break through overwhelm and fear of change—so you can move with clarity, courage, and calm.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact">Start Your Clarity Call</a>
              <a href="#programs">Explore Programs</a>
            </div>
            <div className="mt-6 text-sm flex flex-wrap gap-2">
              {brand.hashtags.map((h) => (
                <span key={h} className="px-3 py-1 rounded-full bg-slate-100">{h}</span>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.05 }} className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl blur-2xl opacity-30 bg-gradient-to-br from-cyan-400 to-indigo-500"/>
            <div class="card">
              <div class="card-body">
                <h2 class="card-title">What we’ll build together</h2>
                <p class="card-text">Simple tools. Strong habits. Sustainable change.</p>
                <div>
                  {[
                  { icon: Target, title: "Goals with a spine", desc: "Yearly goals broken into 4 steps you can actually do." },
                  { icon: HeartHandshake, title: "Resilient mindset", desc: "Reframe setbacks into opportunities that fuel momentum." },
                  { icon: Calendar, title: "Weekly rhythm", desc: "Anchored routines to keep you consistent, not perfect." },
                  { icon: BookOpen, title: "Practical tools", desc: "Workbooks, video modules, and checklists you’ll reuse." },
                ].map((f) => (
                  <div key={f.title} className="flex gap-3">
                    <f.icon className="w-6 h-6 shrink-0"/>
                    <div>
                      <div className="font-medium">{f.title}</div>
                      <p className="text-sm text-slate-600">{f.desc}</p>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Programs</h2>
              <p className="text-slate-600 mt-2 max-w-2xl">Choose a focused path or bundle them for a full reboot. Every option includes a kickoff Clarity Call.</p>
            </div>
            <a href="#contact">Book a Clarity Call</a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* {[
              {
                title: "4-Week Goal-Setting Accelerator",
                subtitle: "Trust Your Wings Framework",
                bullets: [
                  "Week 1: Health + Personal Growth",
                  "Week 2: Environment + Relationships",
                  "Week 3: Adventure + Spiritual",
                  "Week 4: Career + Financial",
                ],
                cta: "Get the Accelerator",
              },
              {
                title: "From Setback to Strength",
                subtitle: "Mastering the Art of Mindset Shifts",
                bullets: [
                  "Reframing tools for real life",
                  "Calm-under-pressure practices",
                  "Bounce-back planning",
                  "Workbook + video modules",
                ],
                cta: "Join the Course",
              },
              {
                title: "1:1 Coaching for Entrepreneurs",
                subtitle: "Break through overwhelm, lead with calm",
                bullets: [
                  "Weekly or bi-weekly sessions",
                  "Accountability + action plans",
                  "Message support between sessions",
                  "Custom tools for your business",
                ],
                cta: "Apply for Coaching",
              },
            ].map((p, i) => (
              <Card key={p.title} className="rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-xl">{p.title}</CardTitle>
                  <CardDescription>{p.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-slate-700"><CheckCircle2 className="w-5 h-5 mt-0.5"/> {b}</li>
                    ))}
                  </ul>
                  <p className="w-full rounded-2xl">
                    {p.cta} <ArrowRight className="w-4 h-4 ml-2"/>
                  </p>
                </CardContent>
              </Card>
            ))} */}
          </div>
        </div>
      </section>

      {/* Speaking */}
      <section id="speaking" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Speaking: Be Your Own Anchor</h2>
            <p className="text-slate-600 mt-2 max-w-3xl">Keynotes and workshops that help teams stay grounded in chaotic times. Real stories. Actionable tools. A calm, confident spark that lasts beyond the event.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* {[
              { title: "Anchor Yourself in Any Storm", desc: "Practical anchors for uncertainty and change." },
              { title: "From Mask to Mastery", desc: "Courage, vulnerability, and leadership without burnout." },
              { title: "Trust Your Wings", desc: "Build belief, set bold goals, take the first step." },
            ].map((s) => (
              <Card key={s.title} className="rounded-3xl">
                <CardHeader>
                  <CardTitle>{s.title}</CardTitle>
                  <CardDescription>{s.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a className="rounded-2xl w-full">Inquire for Events</a>
                </CardContent>
              </Card>
            ))} */}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Free Resources</h2>
              <p className="text-slate-600 mt-2 max-w-2xl">Grab checklists, templates, and quick videos to boost your mindset and momentum.</p>
            </div>
            <a className="rounded-2xl">Get the Starter Pack</a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* {[
              { title: "Morning Anchor Routine", desc: "5-minute reset to meet the day with calm." },
              { title: "Reframe Cheatsheet", desc: "Turn common setbacks into traction in 3 steps." },
              { title: "Quarterly Goal Map", desc: "Break big goals into weekly moves." },
            ].map((r) => (
              <Card key={r.title} className="rounded-3xl">
                <CardHeader>
                  <CardTitle>{r.title}</CardTitle>
                  <CardDescription>{r.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a className="rounded-2xl w-full" download>Download</a>
                </CardContent>
              </Card>
            ))} */}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">What Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* {[
              {
                quote: "I stopped spiraling and started shipping. My team noticed the calm right away.",
                name: "A. Nguyen",
                role: "Startup Founder",
              },
              {
                quote: "The 4-step goals changed how I plan my week. I actually finish what matters.",
                name: "M. Singh",
                role: "Realtor",
              },
              {
                quote: "Lucas helped me turn a painful setback into a defining win. Life-changing.",
                name: "J. Garcia",
                role: "Entrepreneur",
              },
            ].map((t) => (
              <Card key={t.name} className="rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-lg">“{t.quote}”</CardTitle>
                  <CardDescription className="mt-2">— {t.name}, {t.role}</CardDescription>
                </CardHeader>
              </Card>
            ))} */}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Book a Clarity Call</h2>
              <p className="text-slate-600 mt-2">Tell me where you feel stuck. We’ll map your next right moves.</p>
              <div className="mt-6 space-y-3 text-slate-700">
                <p className="flex items-center gap-2"><Phone className="w-5 h-5"/> <a href={`tel:${brand.phone}`} className="hover:underline">{brand.phone}</a></p>
                <p className="flex items-center gap-2"><Mail className="w-5 h-5"/> <a href={`mailto:${brand.email}`} className="hover:underline">{brand.email}</a></p>
                <p className="flex items-center gap-2"><Instagram className="w-5 h-5"/> <a href="#" className="hover:underline">@evolvemindsetcoaching</a></p>
                <p className="flex items-center gap-2"><MessageCircle className="w-5 h-5"/> Prefer SMS? Text me to get started.</p>
              </div>
            </div>
            {/* <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>I’ll reply with available times within one business day.</CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="p-6 rounded-2xl bg-green-50 border border-green-200">
                    <p className="font-medium">Thanks! Your message is saved locally in this demo.</p>
                    <p className="text-sm text-slate-600 mt-1">In production, connect this form to your email, a CRM, or a booking link.</p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-4">
                    <input required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-2xl"/>
                    <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-2xl"/>
                    <textarea required placeholder="How can I help?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="rounded-2xl min-h-[140px]"/>
                    <a type="submit" className="rounded-2xl w-full">Send</a>
                  </form>
                )}
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 items-center">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <div className="flex md:justify-end gap-4 text-sm">
            <a href="#home" className="hover:underline">Back to top</a>
            <a href="#programs" className="hover:underline">Programs</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
