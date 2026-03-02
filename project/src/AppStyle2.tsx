import { useState } from 'react';
import { ChevronDown, Star, Check, Shield, ChevronRight, ExternalLink, ThumbsUp, ThumbsDown, Lightbulb, AlertTriangle, Quote, Mail, Linkedin } from 'lucide-react';

function AppStyle2() {
  const [tocOpen, setTocOpen] = useState(false);
  const [introExpanded, setIntroExpanded] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const topItems = [
    { rank: 1, title: "Premium Choice", subtitle: "Best Overall Option", features: ["Excellent features", "Best value", "Top rated"], ctaText: "VISIT", ctaLink: "#" },
    { rank: 2, title: "Budget-Friendly Option", subtitle: "Best for Beginners", features: ["Affordable pricing", "Easy setup", "Great support"], ctaText: "VISIT", ctaLink: "#" },
    { rank: 3, title: "Advanced Professional", subtitle: "Best for Experts", features: ["Advanced features", "Max performance", "Pro support"], ctaText: "VISIT", ctaLink: "#" },
    { rank: 4, title: "Beginner-Friendly", subtitle: "Easiest to Use", features: ["Intuitive UI", "Great tutorials", "Quick start"], ctaText: "VISIT", ctaLink: "#" },
    { rank: 5, title: "Versatile All-Rounder", subtitle: "Most Flexible", features: ["Highly flexible", "Customizable", "Regular updates"], ctaText: "VISIT", ctaLink: "#" }
  ];

  const faqItems = [
    { question: "How long does it take to see results?", answer: "Most users see meaningful results within 2-4 weeks of consistent implementation. Timeline varies based on your situation and commitment level." },
    { question: "Is this suitable for beginners?", answer: "Yes! This guide is designed for all skill levels with clear explanations, step-by-step instructions, and examples." },
    { question: "What if I need additional support?", answer: "We offer support through email, live chat, and an extensive knowledge base. Premium users get priority support." },
    { question: "Can I switch plans later?", answer: "Yes, upgrade or downgrade anytime. Changes take effect immediately with prorated billing." },
    { question: "What makes this different from competitors?", answer: "Our approach focuses on simplicity, effectiveness, and proven results backed by extensive research." }
  ];

  const getRankStyle = (rank: number) => {
    if (rank === 1) return 'bg-gradient-to-r from-amber-500 to-orange-500 text-white';
    if (rank === 2) return 'bg-gradient-to-r from-slate-400 to-slate-500 text-white';
    if (rank === 3) return 'bg-gradient-to-r from-amber-700 to-amber-800 text-white';
    return 'bg-slate-700 text-white';
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center text-white font-black text-sm">
                G
              </div>
              <span className="text-lg font-bold text-white tracking-tight">GuideHub</span>
            </div>
            <button className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-900 font-bold rounded-lg text-xs uppercase tracking-wider transition-all min-h-[44px]">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-4">
        <article itemScope itemType="https://schema.org/Article">

          <header className="mb-4">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
              <div className="relative p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-wider rounded-full">
                    Expert Guide
                  </span>
                  <span className="px-3 py-1 bg-slate-700 text-slate-300 text-xs font-medium rounded-full">
                    Updated Dec 2024
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-white mb-3 leading-tight" itemProp="headline">
                  Complete Guide: Everything You Need to Know in 2024
                </h1>
                <div className={`overflow-hidden transition-all ${introExpanded ? '' : 'max-h-12'}`}>
                  <p className="text-slate-400 leading-relaxed text-sm" itemProp="description">
                    This comprehensive guide covers everything you need to know about the topic, with expert insights, detailed comparisons, and actionable steps to help you make informed decisions. Whether you're a complete beginner or an experienced professional looking to expand your knowledge, our team of experts has compiled the most up-to-date information.
                  </p>
                </div>
                <button
                  onClick={() => setIntroExpanded(!introExpanded)}
                  className="text-teal-400 hover:text-teal-300 text-xs font-semibold mt-2 min-h-[44px] inline-flex items-center gap-1"
                  aria-expanded={introExpanded}
                  aria-label={introExpanded ? 'Collapse description' : 'Expand description'}
                >
                  {introExpanded ? 'Show less' : 'Show more'}
                  <ChevronDown className={`w-3 h-3 transition-transform ${introExpanded ? 'rotate-180' : ''}`} />
                </button>

                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-700">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
                      alt="Sarah Mitchell"
                      className="w-9 h-9 rounded-full object-cover ring-2 ring-teal-500"
                    />
                    <div>
                      <p className="text-white text-sm font-semibold">Sarah Mitchell</p>
                      <p className="text-slate-500 text-xs">Senior Analyst</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-slate-700">
                    <Shield className="w-4 h-4 text-teal-500" />
                    <span className="text-slate-400 text-xs">Expert Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="mb-4" id="top-options">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-6 bg-gradient-to-b from-teal-400 to-cyan-500 rounded-full"></div>
              <h2 className="text-lg font-bold text-white">Top 5 Best Options for 2024</h2>
            </div>
            <div className="space-y-2">
              {topItems.map((item) => (
                <div key={item.rank} className="group bg-slate-800 border border-slate-700 rounded-lg hover:border-teal-500/50 transition-all">
                  <div className="flex items-center gap-3 p-3">
                    <div className={`w-10 h-10 ${getRankStyle(item.rank)} rounded-lg flex items-center justify-center font-black text-sm flex-shrink-0`}>
                      {item.rank}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-white font-bold text-sm">{item.title}</p>
                        {item.rank === 1 && <Star className="w-4 h-4 text-amber-400 fill-amber-400" />}
                      </div>
                      <p className="text-slate-500 text-xs">{item.subtitle}</p>
                    </div>
                    <a
                      href={item.ctaLink}
                      className="flex items-center gap-1 px-4 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold rounded-lg text-xs uppercase transition-colors min-h-[44px]"
                    >
                      {item.ctaText}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <nav className="mb-4" aria-label="Table of contents">
            <button
              onClick={() => setTocOpen(!tocOpen)}
              className="w-full flex items-center justify-between p-3 bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-lg transition-colors min-h-[48px]"
              aria-expanded={tocOpen}
              aria-controls="toc-list"
            >
              <span className="font-bold text-white text-sm">Table of Contents</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${tocOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {tocOpen && (
              <div id="toc-list" className="mt-2 p-4 bg-slate-800 border border-slate-700 rounded-lg">
                <div className="grid grid-cols-2 gap-2">
                  {['Introduction', 'Understanding Basics', 'Weighing Options', 'How to Start', 'Comparison', 'Quick Start', 'Expert Insights', 'FAQ'].map((item, i) => (
                    <a key={i} href={`#section-${i}`} className="flex items-center gap-2 text-slate-400 hover:text-teal-400 text-sm py-2 min-h-[44px] transition-colors">
                      <ChevronRight className="w-3 h-3" />
                      {i + 1}. {item}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </nav>

          <div itemProp="articleBody" className="space-y-4">
            <section className="bg-slate-800 border border-slate-700 rounded-xl p-5" id="section-0">
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-teal-500/20 text-teal-400 rounded-lg flex items-center justify-center text-sm font-black">1</span>
                Introduction
              </h2>
              <p className="text-slate-400 leading-relaxed text-sm mb-4">
                Welcome to this comprehensive guide. In this article, we'll explore everything you need to know about this topic, providing you with expert insights, practical advice, and actionable information that you can implement immediately.
              </p>

              <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-teal-400" />
                  <p className="text-teal-400 font-bold text-sm">Key Takeaways</p>
                </div>
                <ul className="space-y-2">
                  {["Learn fundamentals and best practices from industry experts", "Compare top options with detailed feature breakdowns", "Get step-by-step guidance for implementation", "Avoid common mistakes with expert insights"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="bg-slate-800 border border-slate-700 rounded-xl p-5" id="section-2">
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-teal-500/20 text-teal-400 rounded-lg flex items-center justify-center text-sm font-black">3</span>
                Weighing Your Options
              </h2>

              <div className="grid sm:grid-cols-2 gap-3 mb-4">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <ThumbsUp className="w-4 h-4 text-emerald-400" />
                    <p className="text-emerald-400 font-bold text-sm">Pros</p>
                  </div>
                  <ul className="space-y-2">
                    {["Comprehensive feature set", "Easy to learn", "Strong community support", "Cost-effective solution"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                        <Check className="w-3 h-3 text-emerald-500 flex-shrink-0 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-rose-500/10 border border-rose-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <ThumbsDown className="w-4 h-4 text-rose-400" />
                    <p className="text-rose-400 font-bold text-sm">Cons</p>
                  </div>
                  <ul className="space-y-2">
                    {["Initial setup complexity", "Learning curve for advanced features", "May be overkill for simple use cases"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span className="w-3 h-3 text-rose-500 flex-shrink-0 mt-1">-</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative bg-slate-900 border-l-4 border-teal-500 rounded-r-lg p-4">
                <Quote className="absolute top-3 right-3 w-8 h-8 text-slate-700" />
                <p className="text-slate-300 italic text-sm leading-relaxed mb-2">
                  "The best choice aligns with your specific needs and long-term goals. Don't follow trends—make informed decisions based on your unique requirements."
                </p>
                <p className="text-teal-400 text-xs font-semibold">— Dr. Michael Chen, Industry Consultant</p>
              </div>
            </section>

            <section className="bg-slate-800 border border-slate-700 rounded-xl p-5" id="section-3">
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-teal-500/20 text-teal-400 rounded-lg flex items-center justify-center text-sm font-black">4</span>
                How to Get Started
              </h2>
              <p className="text-slate-400 text-sm mb-4">Follow this step-by-step guide to get up and running quickly.</p>

              <div className="space-y-3">
                {[
                  { name: "Initial Setup", text: "Begin by gathering all necessary materials and preparing your workspace." },
                  { name: "Configuration", text: "Configure your settings according to your specific needs." },
                  { name: "Implementation", text: "Start implementing the solution following best practices." },
                  { name: "Testing", text: "Test your implementation thoroughly to ensure everything works." },
                  { name: "Optimization", text: "Fine-tune your setup for optimal performance." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 p-3 bg-slate-900 rounded-lg border border-slate-700">
                    <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{step.name}</p>
                      <p className="text-slate-400 text-sm">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-slate-800 border border-slate-700 rounded-xl p-5" id="section-4">
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-teal-500/20 text-teal-400 rounded-lg flex items-center justify-center text-sm font-black">5</span>
                Detailed Comparison
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-3 text-slate-400 font-semibold">Feature</th>
                      <th className="text-left py-3 px-3 text-slate-400 font-semibold">Option A</th>
                      <th className="text-left py-3 px-3 text-slate-400 font-semibold">Option B</th>
                      <th className="text-left py-3 px-3 text-slate-400 font-semibold">Option C</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { Feature: "Price", A: "$99/mo", B: "$149/mo", C: "$199/mo" },
                      { Feature: "Performance", A: "Good", B: "Excellent", C: "Outstanding" },
                      { Feature: "Support", A: "Email", B: "Email + Chat", C: "24/7 Premium" },
                      { Feature: "Storage", A: "100GB", B: "500GB", C: "Unlimited" },
                      { Feature: "Users", A: "5", B: "25", C: "Unlimited" }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-3 px-3 text-white font-medium">{row.Feature}</td>
                        <td className="py-3 px-3 text-slate-300">{row.A}</td>
                        <td className="py-3 px-3 text-slate-300">{row.B}</td>
                        <td className="py-3 px-3 text-teal-400 font-semibold">{row.C}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="bg-slate-800 border border-slate-700 rounded-xl p-5" id="section-6">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-teal-500/20 text-teal-400 rounded-lg flex items-center justify-center text-sm font-black">7</span>
                Expert Insights
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 p-4 bg-slate-900 rounded-lg border border-slate-700">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="Sarah Mitchell"
                  className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-white font-bold">Sarah Mitchell</p>
                  <p className="text-teal-400 text-sm mb-2">Senior Industry Analyst</p>
                  <p className="text-slate-400 text-sm mb-3">
                    Sarah has written over 300 articles on industry trends and best practices since 2018. She holds certifications in multiple disciplines.
                  </p>
                  <div className="flex items-center gap-3">
                    <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors" aria-label="Email">
                      <Mail className="w-4 h-4" />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors" aria-label="LinkedIn">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-amber-400 font-bold text-sm mb-1">Pro Tip</p>
                    <p className="text-slate-300 text-sm">The most successful implementations start with a clear plan and realistic goals. Take time to understand your needs.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-slate-800 border border-slate-700 rounded-xl p-5" id="section-7">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-teal-500/20 text-teal-400 rounded-lg flex items-center justify-center text-sm font-black">8</span>
                Frequently Asked Questions
              </h2>

              <div className="space-y-2">
                {faqItems.map((item, i) => (
                  <div key={i} className="border border-slate-700 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                      className="w-full flex items-center justify-between p-4 bg-slate-900 hover:bg-slate-850 text-left min-h-[48px] transition-colors"
                      aria-expanded={faqOpen === i}
                    >
                      <span className="text-white font-medium text-sm pr-4">{item.question}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${faqOpen === i ? 'rotate-180' : ''}`} />
                    </button>
                    {faqOpen === i && (
                      <div className="px-4 pb-4 bg-slate-900">
                        <p className="text-slate-400 text-sm leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 rounded-xl p-5">
              <h2 className="text-lg font-bold text-white mb-2">Final Thoughts</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-2">
                Making the right choice requires careful consideration of your specific needs, budget, and long-term goals. This guide has provided the information needed to make an informed decision.
              </p>
              <p className="text-slate-400 text-sm">
                Success comes from consistent action and continuous learning. Start with basics, build gradually, and seek help when needed.
              </p>
            </section>
          </div>
        </article>
      </main>

      <footer className="bg-slate-800 border-t border-slate-700 mt-8" role="contentinfo">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center text-white font-black text-xs">G</div>
                <span className="font-bold text-white">GuideHub</span>
              </div>
              <p className="text-slate-400 text-sm">Your trusted source for expert guides.</p>
            </div>
            <div>
              <p className="font-semibold text-white text-sm mb-3">Navigation</p>
              <ul className="space-y-2">
                <li><a href="#top-options" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Top Options</a></li>
                <li><a href="#section-4" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Comparison</a></li>
                <li><a href="#section-7" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white text-sm mb-3">Resources</p>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Documentation</a></li>
                <li><a href="#" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Support</a></li>
                <li><a href="#" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white text-sm mb-3">Legal</p>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-4">
            <p className="text-center text-slate-500 text-sm">© 2024 GuideHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AppStyle2;
