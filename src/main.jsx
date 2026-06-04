import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const data = {
  name: "SAM HIRSCH",
  title: "Market Research & Consumer Insights",
  about: "I am a specialist in market research and consumer insights, dedicated to uncovering the 'why' behind consumer behavior. Based in Pittsburgh, I leverage data analytics to translate complex datasets into actionable business strategies.",
  skills: {
    technical: ["SQL", "Tableau", "Power BI", "R", "Excel (Advanced)", "Python", "AWS QuickSight", "Google Analytics", "SPSS", "ArcGIS"],
    analytical: ["Predictive Analytics", "Data Modeling", "Forecasting", "Survey Design", "Dashboard Development"]
  },
  experience: [
    {
      company: "First Insight Inc",
      role: "Insight Specialist",
      description: "Led consumer research programs for Under Armour, Li & Fung, and Marks & Spencer. Used AI-powered predictive analytics to sharpen demand forecasting, optimize assortments, and guide go-to-market decisions."
    },
    {
      company: "Kantar",
      role: "Data Strategy and Operations Intern",
      description: "Built 19 Power BI models for enterprise retail and CPG clients. Published AI implementation research reaching 66 clients and analyzed macroeconomic forecast data for 30 unique client decks."
    },
    {
      company: "M@C Discount",
      role: "Analytics Intern",
      description: "Analyzed purchasing behavior and promotional systems across 26 warehouse locations. Delivered consumer and operational insights touching 1,500 employees and 3,500 customers to support retention and promotional planning."
    },
    {
      company: "Slice Consulting",
      role: "Student Consultant",
      description: "Pro-bono analytics and consulting across three semesters at Syracuse. For the YMCA of Central New York, diagnosed low donor retention through survey design and mixed-methods analysis, then developed a newsletter strategy tying specific donations to real community impact."
    },
    {
      company: "Syracuse Jewish Family Service",
      role: "Student Researcher",
      description: "Led data collection, analysis, and presentation of referral sources for a geriatric care nonprofit. Translated findings into actionable insights supporting marketing strategy and client relations."
    },
    {
      company: "Allegheny County Department of Human Services",
      role: "Student Intern",
      description: "Supported the Community Choice Demonstration, a HUD-facilitated housing voucher program helping low-income families relocate to opportunity neighborhoods. Contributed through survey design, research, and report writing."
    }
  ],
  intelligenceTools: [
    {
      title: "Brand Pulse Check",
      description: "A social intelligence tool that understands brand sentiment across 6 social media platforms.",
      link: "https://brandpulsecheck.streamlit.app/",
      tags: ["Python", "Streamlit", "NLP"]
    },
    {
      title: "News Intelligence - Brand Pulse Check",
      description: "An analytics tool designed to track and quantify brand sentiment across global news outlets.",
      link: "https://newsbpc.streamlit.app/",
      tags: ["Data Scraping", "Sentiment Analysis"]
    }
  ],
  portfolio: [
    {
      title: "Analytical Athletics",
      description: "A blog providing data-driven insights to sports fans, merging complex athletic performance metrics with accessible storytelling.",
      tags: ["Data Visualization", "Sports Analytics"]
    },
    {
      title: "Politics In America",
      description: "A comprehensive research paper examining the deep-seated implications of demographics on modern political views.",
      tags: ["Demographic Research", "Statistical Analysis"]
    },
    {
      title: "Food Insecurity",
      description: "An assessment of the root causes and effects of global food insecurity, utilizing data to highlight systemic challenges.",
      tags: ["Global Trends", "Policy Research"]
    },
    {
      title: "Tableau Public",
      description: "A professional collection of interactive data visualizations utilizing Tableau Desktop and Prep.",
      tags: ["Tableau", "BI Dashboarding"]
    }
  ],
  writing: [
    {
      title: "The Shift in Consumer Demand Signals",
      description: "Featured Article: A deep dive into how modern brands are interpreting digital demand.",
      link: "https://substack.com/@samwhirsch/p-197761529",
      tags: ["Substack", "Featured"]
    },
    {
      title: "Strategic Insights Blog",
      description: "My full collection of posts exploring the intersection of data and consumer behavior.",
      link: "https://substack.com/@samwhirsch/posts",
      tags: ["Writing", "Strategy"]
    }
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/samwhirsch",
    email: "samwhirsch@gmail.com", // Changed to raw string for clipboard use
    substack: "https://substack.com/@samwhirsch"
  }
};

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
  <div className="max-w-5xl mx-auto px-6 pt-40 pb-24">
    <div className="max-w-3xl">
      <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 text-slate-900 leading-none">
        Sam<br/><span className="text-blue-600">Hirsch.</span>
      </h1>
      <h2 className="text-2xl md:text-3xl text-slate-700 mb-6 font-medium">{data.title}</h2>
      <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-xl">{data.tagline}</p>
      <div className="flex flex-wrap gap-4">
        <Link to="/portfolio" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-sm hover:shadow-md">
          View Portfolio
        </Link>
        <Link to="/about" className="px-8 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:border-slate-900 hover:text-slate-900 transition-all">
          About Me
        </Link>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
      <div className="lg:col-span-2">
        <h2 className="text-4xl font-bold mb-6 tracking-tight text-slate-900">About</h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-14">{data.about}</p>

        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-8">
          Professional Experience
        </h3>
        <div className="space-y-10">
          {data.experience.map((exp, i) => (
            <div key={i} className="group relative pl-8 border-l border-slate-200 hover:border-blue-600 transition-colors">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-white border-2 border-slate-300 rounded-full group-hover:border-blue-600 transition-colors"></div>
              <h4 className="font-semibold text-lg text-slate-900">{exp.company}</h4>
              <p className="text-blue-600 font-medium text-sm mb-2">{exp.role}</p>
              {exp.description && (
                <p className="text-slate-500 leading-relaxed text-[15px]">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-10">
        <section className="bg-slate-50 p-7 rounded-2xl border border-slate-200">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-5">Technical Tools</h3>
          <div className="flex flex-wrap gap-2">
            {data.skills.technical.map(skill => (
              <span key={skill} className="px-3 py-1.5 bg-white text-slate-700 rounded-md text-xs font-medium border border-slate-200">{skill}</span>
            ))}
          </div>
        </section>

        <section className="px-1">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-5">Capabilities</h3>
          <ul className="space-y-3 text-slate-600 text-[15px]">
            {data.skills.analytical.map(cap => (
              <li key={cap} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                {cap}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  </div>
);

const Portfolio = () => (
  <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
    {/* Writing Section */}
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-8 tracking-tight text-slate-900">Writing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.writing.map((item, i) => (
          <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" 
             className="group p-7 bg-white border border-slate-200 rounded-2xl hover:border-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
            <p className="text-slate-500 mb-5 text-[15px] leading-relaxed">{item.description}</p>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Read on Substack →</span>
          </a>
        ))}
      </div>
    </div>

    {/* Brand Intelligence Tools Section */}
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-8 tracking-tight text-slate-900">Intelligence Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.intelligenceTools.map((item, i) => (
          <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" 
             className="group p-7 bg-blue-50 border border-blue-100 rounded-2xl hover:border-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
            <p className="text-slate-600 mb-5 text-[15px] leading-relaxed">{item.description}</p>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Launch App →</span>
          </a>
        ))}
      </div>
    </div>

    {/* Case Studies Section */}
    <div>
      <h2 className="text-3xl font-bold mb-8 tracking-tight text-slate-900">Selected Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.portfolio.map((item, i) => (
          <div key={i} 
               className="group p-8 bg-white border border-slate-200 rounded-2xl hover:border-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-[15px]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const App = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [copyStatus, setCopyStatus] = useState(false);

  // Scroll to top logic
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Copy email logic
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.links.email);
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white relative">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-2xl transition-all duration-300 z-50 hover:bg-blue-700 ${showScroll ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
        </button>

        <footer className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200 mt-20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-semibold text-base mb-1 tracking-tight">SH<span className="text-blue-600">.</span></p>
            <p className="text-slate-400 text-sm">{data.title}</p>
          </div>
          <div className="flex gap-8 font-medium text-sm text-slate-500 items-center">
            <a href={data.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
            <a href={data.links.substack} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Substack</a>
            
            <div className="relative">
                <button 
                  onClick={handleCopyEmail} 
                  className="hover:text-blue-600 transition-colors flex items-center gap-1"
                >
                  Email
                </button>
                {copyStatus && (
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">
                    Copied to clipboard!
                  </span>
                )}
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);