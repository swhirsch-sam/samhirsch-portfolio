import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const data = {
  name: "SAM HIRSCH",
  title: "Market Research & Consumer Insights",
  tagline: "Uncovering the 'why' behind consumer behavior through data analytics and AI-driven insights.",
  about: "I am a specialist in market research and consumer insights, dedicated to uncovering the 'why' behind consumer behavior. Based in Pittsburgh, I leverage data analytics to translate complex datasets into actionable business strategies.",
  skills: {
    technical: ["SQL", "Tableau", "Power BI", "R", "Excel (Advanced)", "Python", "AWS QuickSight", "Google Analytics", "SPSS", "ArcGIS"],
    analytical: ["Predictive Analytics", "Data Modeling", "Forecasting", "Survey Design", "Dashboard Development", "Conjoint/MaxDiff Analysis", "Sentiment Analysis", "Social Listening", "AI-Powered App Development","LLM Integration","A/B Testing"]
  },
  experience: [
    { company: "First Insight Inc", role: "Insight Specialist", description: "Led consumer research programs for Under Armour, Li & Fung, and Marks & Spencer. Used AI-powered predictive analytics to sharpen demand forecasting." },
    { company: "Kantar", role: "Data Strategy and Operations Intern", description: "Built 19 Power BI models for enterprise retail and CPG clients. Published AI implementation research reaching 66 clients." },
    { company: "M@C Discount", role: "Analytics Intern", description: "Analyzed purchasing behavior and promotional systems across 26 warehouse locations." },
    { company: "Slice Consulting", role: "Student Consultant", description: "Pro-bono analytics and consulting for the YMCA of Central New York, diagnosing low donor retention." },
    { company: "Syracuse Jewish Family Service", role: "Student Researcher", description: "Led data collection and analysis of referral sources for a geriatric care nonprofit." },
    { company: "Allegheny County Department of Human Services", role: "Student Intern", description: "Supported the Community Choice Demonstration, a HUD-facilitated housing voucher program." }
  ],
  intelligenceTools: [
    { title: "Brand Pulse Check", description: "A social intelligence tool that understands brand sentiment across 6 social media platforms.", link: "https://brandpulsecheck.streamlit.app/", tags: ["Python", "Streamlit", "NLP"] },
    { title: "News Intelligence", description: "An analytics tool designed to track and quantify brand sentiment across global news outlets.", link: "https://newsbpc.streamlit.app/", tags: ["Data Scraping", "Sentiment Analysis"] }
  ],
  portfolio: [
    { title: "Analytical Athletics", description: "A blog providing data-driven insights to sports fans, merging complex performance metrics with storytelling.", tags: ["Data Visualization", "Sports Analytics"] },
    { title: "Politics In America", description: "A research paper examining the deep-seated implications of demographics on modern political views.", tags: ["Demographic Research", "Statistical Analysis"] },
    { title: "Food Insecurity", description: "An assessment of the root causes and effects of global food insecurity utilizing data trends.", tags: ["Global Trends", "Policy Research"] },
    { title: "Tableau Public", description: "A professional collection of interactive data visualizations utilizing Tableau Desktop and Prep.", tags: ["Tableau", "BI Dashboarding"] }
  ],
  writing: [
    { title: "The Shift in Consumer Demand Signals", description: "Featured Article: A deep dive into how modern brands are interpreting digital demand.", link: "https://substack.com/@samwhirsch/p-197761529", tags: ["Substack", "Featured"] },
    { title: "Strategic Insights Blog", description: "My full collection of posts exploring the intersection of data and consumer behavior.", link: "https://substack.com/@samwhirsch/posts", tags: ["Writing", "Strategy"] }
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
    <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
      <Link to="/" className="font-semibold text-lg tracking-tight text-slate-900">{data.name}</Link>
      <div className="space-x-8 text-sm font-medium text-slate-500">
        <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
        <Link to="/portfolio" className="hover:text-blue-600 transition-colors">Portfolio</Link>
        <a href={data.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
      </div>
    </div>
  </nav>
);

const Home = () => (
  <PageWrapper>
    <div className="max-w-5xl mx-auto px-6 pt-40 pb-24">
      <div className="max-w-3xl">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-6xl md:text-7xl font-bold tracking-tight mb-6 text-slate-900 leading-none"
        >
          Sam<br/><span className="text-blue-600">Hirsch.</span>
        </motion.h1>
        <h2 className="text-2xl md:text-3xl text-slate-700 mb-6 font-medium">{data.title}</h2>
        <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-xl">{data.tagline}</p>
        <div className="flex flex-wrap gap-4">
          <Link to="/portfolio" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-sm">
            View Portfolio
          </Link>
          <Link to="/about" className="px-8 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:border-slate-900 transition-all">
            About Me
          </Link>
        </div>
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
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-white border-2 border-slate-300 rounded-full group-hover:border-blue-600"></div>
                <h4 className="font-semibold text-lg text-slate-900">{exp.company}</h4>
                <p className="text-blue-600 font-medium text-sm mb-2">{exp.role}</p>
                <p className="text-slate-500 leading-relaxed text-[15px]">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="space-y-10">
          <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-5">Technical Tools</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.technical.map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-white text-slate-700 rounded-md text-xs font-medium border border-slate-200">{skill}</span>
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
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 tracking-tight text-slate-900">Writing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.writing.map((item, i) => (
            <motion.a key={i} href={item.link} target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }} className="group p-7 bg-white border border-slate-200 rounded-2xl hover:border-blue-600 transition-all shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-blue-600">{item.title}</h3>
              <p className="text-slate-500 mb-5 text-[15px] leading-relaxed">{item.description}</p>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Read on Substack →</span>
            </motion.a>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8 tracking-tight text-slate-900">Intelligence Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.intelligenceTools.map((item, i) => (
            <motion.a key={i} href={item.link} target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }} className="group p-7 bg-blue-50 border border-blue-100 rounded-2xl hover:border-blue-600 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-blue-600">{item.title}</h3>
              <p className="text-slate-600 mb-5 text-[15px] leading-relaxed">{item.description}</p>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Launch App →</span>
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
           <a href={data.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn</a>
           <button onClick={() => { navigator.clipboard.writeText(data.links.email); setCopyStatus(true); setTimeout(() => setCopyStatus(false), 2000); }} className="hover:text-blue-600">
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