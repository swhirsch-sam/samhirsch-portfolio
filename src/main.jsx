import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const data = {
  name: "SAM HIRSCH",
  title: "Market Research & Consumer Insights",
  tagline: "Uncovering the 'why' behind consumer behavior through data analytics and AI-driven insights.",
  about: "I am a specialist in market research and consumer insights, dedicated to uncovering the 'why' behind consumer behavior. Based in Pittsburgh, I leverage data analytics to translate complex datasets into actionable business strategies.",
  skills: {
    technical: ["SQL", "Tableau", "Power BI", "R", "Excel (Advanced)", "Python", "JavaScript", "Google Apps Script", "AWS QuickSight", "Google Analytics", "SPSS", "ArcGIS"],
    analytical: ["Predictive Analytics", "Data Modeling", "Forecasting", "Survey Design", "Dashboard Development", "Conjoint/MaxDiff Analysis", "Sentiment Analysis", "Social Listening", "AI-Powered App Development", "LLM Integration", "A/B Testing"]
  },
  experience: [
    { company: "Burson", role: "Associate Analyst, Insights, Data & Intelligence", description: "Tracking brand sentiment and digital conversation across social media, news, and online platforms for clients including Coca-Cola, Google, Verizon, and Ford. Translating social and digital intelligence into PR and marketing strategy across three dimensions: promoting what's resonating, protecting against emerging risks, and predicting market opportunities." },
    { company: "First Insight Inc", role: "Insight Specialist", description: "Led consumer research programs for Under Armour, Li & Fung, and Marks & Spencer. Used AI-powered predictive analytics to sharpen demand forecasting." },
    { company: "Kantar", role: "Data Strategy and Operations Intern", description: "Built 19 Power BI models for enterprise retail and CPG clients. Published AI implementation research reaching 66 clients." },
    { company: "M@C Discount", role: "Analytics Intern", description: "Analyzed purchasing behavior and promotional systems across 26 warehouse locations." },
    { company: "Slice Consulting", role: "Student Consultant", description: "Pro-bono analytics and consulting for the YMCA of Central New York, diagnosing low donor retention." },
    { company: "Syracuse Jewish Family Service", role: "Student Researcher", description: "Led data collection and analysis of referral sources for a geriatric care nonprofit." },
    { company: "Allegheny County Department of Human Services", role: "Student Intern", description: "Supported the Community Choice Demonstration, a HUD-facilitated housing voucher program." }
  ],
  intelligenceTools: [
    { title: "Brand Pulse Check", description: "A social intelligence tool that understands brand sentiment across 4 social media platforms.", link: "https://brandpulsecheck.streamlit.app/", tags: ["Python", "Streamlit", "NLP"] },
    { title: "News Intelligence", description: "An analytics tool designed to track and quantify brand sentiment across global news outlets.", link: "https://newsbpc.streamlit.app/", tags: ["Data Scraping", "Sentiment Analysis"] }
  ],
  sportsTools: [
    { title: "FIFA World Cup 2026 — Bracket Predictor", description: "Probabilistic forecasts from 1,000 full-tournament Monte Carlo simulations built on 49,000+ historical matches, Elo ratings, betting market odds, Polymarket prices, and FIFA rankings.", link: "https://fifaworldcup26.streamlit.app/", tags: ["Monte Carlo", "Elo Ratings", "Python"], inProgress: true },
    { title: "Fantasy Football Auction Draft Board", description: "A personal auction draft tool for a 16-team full PPR league. Pulls live ESPN and Sleeper projections, calculates VORP/VOLS, tracks inflation, and surfaces per-dollar value in real time.", link: "https://fafootball.streamlit.app/", tags: ["Python", "Streamlit", "ESPN API"], inProgress: true }
  ],
  portfolio: [
    { title: "Analytical Athletics", description: "A blog providing data-driven insights to sports fans, merging complex performance metrics with storytelling.", tags: ["Data Visualization", "Sports Analytics"] },
    { title: "Politics In America", description: "A research paper examining the deep-seated implications of demographics on modern political views.", tags: ["Demographic Research", "Statistical Analysis"] },
    { title: "Food Insecurity", description: "An assessment of the root causes and effects of global food insecurity utilizing data trends.", tags: ["Global Trends", "Policy Research"] },
    { title: "Tableau Public", description: "A professional collection of interactive data visualizations utilizing Tableau Desktop and Prep.", tags: ["Tableau", "BI Dashboarding"] }
  ],
  writing: [
    { title: "The Shift in Consumer Demand Signals", description: "A deep dive into how modern brands are interpreting digital demand signals to stay ahead of consumer behavior.", link: "https://substack.com/@samwhirsch/p-197761529", tags: ["Substack", "Featured"] },
    { title: "Why Buy New? Inside the $78 Billion Secondhand Boom", description: "An exploration of the resale economy's explosive growth and what it signals about shifting consumer values and brand strategy.", link: "https://substack.com/@samwhirsch/p-200896197", tags: ["Substack", "New"] },
    { title: "A Tale of Two Seasons: A Kenny Pickett Data Driven Analysis", description: "A data-driven evaluation of Kenny Pickett's rookie season with the Pittsburgh Steelers, using EPA, QBR, and accuracy metrics to uncover the story behind the numbers.", link: "https://substack.com/@samwhirsch/note/p-203446728", tags: ["Substack", "Sports"], year: "2023" },
    { title: "Catching Fire: How the Miami Heat Made the 2023 NBA Finals", description: "A statistical breakdown of the Miami Heat's improbable run to the 2023 NBA Finals as an 8th seed — examining how elite coaching and suffocating defense overcame a last-place offense.", link: "https://substack.com/@samwhirsch/p-203445462", tags: ["Substack", "Sports"], year: "2023" },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/samwhirsch",
    email: "samwhirsch@gmail.com",
    substack: "https://substack.com/@samwhirsch"
  }
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
    <div className="h-0.5 bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-500" />
    <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
      <Link to="/" className="font-semibold text-lg tracking-tight text-slate-900">{data.name}</Link>
      <div className="flex items-center gap-8 text-sm font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `pb-0.5 border-b-2 transition-colors ${isActive ? 'text-blue-600 border-blue-600' : 'text-slate-500 border-transparent hover:text-blue-600 hover:border-blue-300'}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            `pb-0.5 border-b-2 transition-colors ${isActive ? 'text-blue-600 border-blue-600' : 'text-slate-500 border-transparent hover:text-blue-600 hover:border-blue-300'}`
          }
        >
          Portfolio
        </NavLink>
        <a href={data.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
          LinkedIn
        </a>
      </div>
    </div>
  </nav>
);

const Home = () => (
  <PageWrapper>
    {/* Hero */}
    <div className="relative max-w-5xl mx-auto px-6 pt-40 pb-10 overflow-hidden">
      <div className="absolute -top-10 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute top-72 right-32 w-48 h-48 bg-indigo-50 rounded-full blur-2xl opacity-50 pointer-events-none" />
      <div className="relative max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-5"
        >
          Market Research & Consumer Insights
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-6xl md:text-7xl font-bold tracking-tight mb-6 text-slate-900 leading-none"
        >
          Sam<br /><span className="text-blue-600">Hirsch.</span>
        </motion.h1>
        <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-xl">
          Associate Analyst, Insights, Data & Intelligence at <a href="https://www.burson.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Burson</a>. Market research and consumer insights specialist working at the intersection of social intelligence, PR strategy, and data analytics.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/portfolio" className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-sm hover:shadow-md">
            View Portfolio <span>→</span>
          </Link>
          <Link to="/about" className="px-8 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:border-slate-900 transition-all">
            About Me
          </Link>
        </div>
      </div>
    </div>

    {/* Currently At strip */}
    <div className="max-w-5xl mx-auto px-6 pb-8">
      <div className="bg-slate-50 border border-slate-200 rounded-2xl px-8 py-6 flex flex-wrap items-center gap-8">
        <div className="shrink-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Currently At</p>
          <p className="text-xl font-bold text-slate-900">Burson</p>
          <p className="text-sm text-blue-600 font-medium">Associate Analyst, Insights, Data & Intelligence</p>
        </div>
        <div className="hidden md:block w-px h-12 bg-slate-200" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Client</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-white text-slate-600 rounded-lg text-xs font-medium border border-slate-200">Google</span>
          </div>
        </div>
        <div className="hidden md:block w-px h-12 bg-slate-200" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Tools</p>
          <div className="flex flex-wrap gap-2">
            {["Brandwatch", "Sprinklr"].map(t => (
              <span key={t} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-100">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Skills + Portfolio grid */}
    <div className="max-w-5xl mx-auto px-6 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Core Skills */}
        <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-5">Core Skills</h3>
          <div className="flex flex-wrap gap-2">
            {["SQL", "Tableau", "Power BI", "Python", "R", "Google Analytics"].map(s => (
              <span key={s} className="px-3 py-1.5 bg-slate-50 text-slate-700 rounded-md text-xs font-medium border border-slate-200">{s}</span>
            ))}
            {["Social Listening", "Sentiment Analysis", "Predictive Analytics", "Survey Design"].map(s => (
              <span key={s} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md text-xs font-medium border border-blue-100">{s}</span>
            ))}
          </div>
        </div>

        {/* Featured Writing */}
        <motion.a
          href={data.writing[0].link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4 }}
          className="group bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:border-blue-500 hover:shadow-md transition-all block"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 rounded px-2 py-0.5 mb-3">Featured</span>
          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">{data.writing[0].title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-4">{data.writing[0].description}</p>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Read on Substack →</span>
        </motion.a>

        {/* Intelligence Tool */}
        <motion.a
          href={data.intelligenceTools[0].link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4 }}
          className="group bg-blue-50 border border-blue-100 rounded-2xl p-7 hover:border-blue-500 hover:shadow-md transition-all block"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">Intelligence Tool</p>
          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">{data.intelligenceTools[1].title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">{data.intelligenceTools[1].description}</p>
          <div className="flex items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {data.intelligenceTools[1].tags.map(tag => (
                <span key={tag} className="text-xs text-blue-600 bg-blue-100 border border-blue-200 rounded px-2 py-0.5">{tag}</span>
              ))}
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 shrink-0 ml-4">Launch App →</span>
          </div>
        </motion.a>

        {/* Second Writing */}
        <motion.a
          href={data.writing[1].link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4 }}
          className="group bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:border-blue-500 hover:shadow-md transition-all block"
        >
          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">{data.writing[1].title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-4">{data.writing[1].description}</p>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Read on Substack →</span>
        </motion.a>

      </div>
    </div>
  </PageWrapper>
);

const About = () => (
  <PageWrapper>
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <h2 className="text-4xl font-bold mb-6 tracking-tight text-slate-900">About</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-14">{data.about}</p>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-8">Experience</h3>
          <div className="space-y-10">
            {data.experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative pl-8 border-l border-slate-200"
              >
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-white border-2 border-slate-300 rounded-full group-hover:border-blue-600 transition-colors" />
                <h4 className="font-semibold text-lg text-slate-900">{exp.company}</h4>
                <p className="text-blue-600 font-medium text-sm mb-2">{exp.role}</p>
                <p className="text-slate-500 leading-relaxed text-[15px]">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-5">Technical Tools</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.technical.map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-white text-slate-700 rounded-md text-xs font-medium border border-slate-200">{skill}</span>
              ))}
            </div>
          </div>
          <div className="bg-blue-50 p-7 rounded-2xl border border-blue-100">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-5">Analytical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.analytical.map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-white text-blue-700 rounded-md text-xs font-medium border border-blue-200">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
);

const Portfolio = () => (
  <PageWrapper>
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-20">

      {/* Writing */}
      <div>
        <h2 className="text-3xl font-bold mb-8 tracking-tight text-slate-900">Writing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.writing.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className={`group p-7 bg-white border border-slate-200 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all shadow-sm ${i === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                {item.tags.includes("Featured") && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 rounded px-2 py-0.5">Featured</span>
                )}
                {item.tags.includes("New") && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-2 py-0.5">New</span>
                )}
                {item.tags.includes("Sports") && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 rounded px-2 py-0.5">Sports</span>
                )}
                {item.year && <span className="text-xs text-slate-400">{item.year}</span>}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
              <p className="text-slate-500 mb-5 text-[15px] leading-relaxed">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 bg-slate-50 border border-slate-200 rounded px-2 py-0.5">Substack</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 shrink-0 ml-4">Read on Substack →</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Intelligence Tools */}
      <div>
        <h2 className="text-3xl font-bold mb-8 tracking-tight text-slate-900">Intelligence Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.intelligenceTools.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="group p-7 bg-blue-50 border border-blue-100 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
              <p className="text-slate-600 mb-5 text-[15px] leading-relaxed">{item.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-xs text-blue-600 bg-blue-100 border border-blue-200 rounded px-2 py-0.5">{tag}</span>
                  ))}
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 shrink-0 ml-4">Launch App →</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Sports Tools */}
      <div>
        <h2 className="text-3xl font-bold mb-8 tracking-tight text-slate-900">Sports Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.sportsTools.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="group p-7 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                {item.inProgress && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-orange-700 bg-orange-50 border border-orange-200 rounded px-2 py-0.5">In Progress</span>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
              <p className="text-slate-600 mb-5 text-[15px] leading-relaxed">{item.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-xs text-slate-500 bg-white border border-slate-200 rounded px-2 py-0.5">{tag}</span>
                  ))}
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 shrink-0 ml-4">Launch App →</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

    </div>
  </PageWrapper>
);

const App = () => {
  const location = useLocation();
  const [copyStatus, setCopyStatus] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </AnimatePresence>

      <footer className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200 mt-20 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} {data.name}</p>
        <div className="flex gap-6">
          <a href={data.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
          <a href={data.links.substack} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Substack</a>
          <button
            onClick={() => { navigator.clipboard.writeText(data.links.email); setCopyStatus(true); setTimeout(() => setCopyStatus(false), 2000); }}
            className="hover:text-blue-600 transition-colors"
          >
            {copyStatus ? "Email Copied!" : "Email"}
          </button>
        </div>
      </footer>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}
