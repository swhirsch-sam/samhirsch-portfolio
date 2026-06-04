import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const data = {
  name: "SAM HIRSCH",
  title: "Market Research and Consumer Insights",
  tagline: "Business Intelligence | Consumer Research and Insights | Data Analytics",
  about: "I am a specialist in market research and consumer insights, dedicated to uncovering the 'why' behind consumer behavior. Based in Pittsburgh, I leverage data analytics to translate complex datasets into actionable business strategies.",
  skills: {
    technical: ["SQL", "Tableau", "Power BI", "R", "Excel (Advanced)", "AWS QuickSight", "Google Analytics", "SPSS", "ArcGIS"],
    analytical: ["Predictive Analytics", "Data Modeling", "Forecasting", "Survey Design", "Dashboard Development"]
  },
  experience: [
    { company: "First Insight Inc", role: "Insight Specialist" },
    { company: "Kantar", role: "Data Strategy and Operations Intern" },
    { company: "M@C Discount", role: "Analytics Intern" },
    { company: "Syracuse Jewish Family Service", role: "Student Researcher" },
    { company: "Allegheny County Department of Human Services", role: "Student Intern" }
  ],
  portfolio: [
    { 
      title: "Analytical Athletics", 
      description: "A blog providing data-driven insights to sports fans, merging complex athletic performance metrics with accessible storytelling.",
      tags: ["Data Visualization", "Sports Analytics"]
    },
    { 
      title: "Politics In America", 
      description: "A comprehensive research paper examining the deep-seated implications of demographics on modern political views and voting behavior.",
      tags: ["Demographic Research", "Statistical Analysis"]
    },
    { 
      title: "Food Insecurity", 
      description: "An assessment of the root causes and effects of global food insecurity, utilizing data to highlight systemic challenges in supply chains.",
      tags: ["Global Trends", "Policy Research"]
    },
    { 
      title: "Tableau Public", 
      description: "A professional collection of interactive data visualizations utilizing Tableau Desktop and Prep to solve business intelligence problems.",
      tags: ["Tableau", "BI Dashboarding"]
    }
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/samwhirsch",
    email: "mailto:samwhirsch@gmail.com"
  }
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
    <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl tracking-tighter text-black uppercase">{data.name}</Link>
      <div className="space-x-8 text-sm font-bold uppercase tracking-widest text-gray-600">
        <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
        <Link to="/portfolio" className="hover:text-blue-600 transition-colors">Portfolio</Link>
        <a href={data.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors text-blue-500">LinkedIn</a>
      </div>
    </div>
  </nav>
);

const Home = () => (
  <div className="max-w-5xl mx-auto px-6 pt-40 pb-20">
    <div className="max-w-3xl">
      <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-6 text-black leading-none">
        SAM<br/><span className="text-blue-600">HIRSCH.</span>
      </h1>
      <h2 className="text-2xl md:text-3xl text-gray-800 mb-8 font-medium italic">{data.title}</h2>
      <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-xl">{data.tagline}</p>
      <div className="flex flex-wrap gap-4">
        <Link to="/portfolio" className="px-10 py-4 bg-black text-white rounded-full font-bold hover:bg-blue-600 transition-all shadow-xl hover:-translate-y-1">
          View Portfolio
        </Link>
        <Link to="/about" className="px-10 py-4 border-2 border-gray-200 rounded-full font-bold hover:border-black transition-all hover:-translate-y-1">
          About Me
        </Link>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
      <div className="lg:col-span-2">
        <h2 className="text-5xl font-black mb-8 uppercase tracking-tight">The <span className="text-blue-600">Why</span> Behind the Data</h2>
        <p className="text-xl text-gray-600 leading-relaxed mb-12">{data.about}</p>
        
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <span className="w-8 h-1 bg-blue-600"></span> Professional Experience
        </h3>
        <div className="space-y-8">
          {data.experience.map((exp, i) => (
            <div key={i} className="group relative pl-8 border-l-2 border-gray-100 hover:border-blue-600 transition-colors">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-gray-200 rounded-full group-hover:border-blue-600 transition-colors"></div>
              <h4 className="font-bold text-xl">{exp.company}</h4>
              <p className="text-blue-600 font-medium">{exp.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        <section className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Technical Tools</h3>
          <div className="flex flex-wrap gap-2">
            {data.skills.technical.map(skill => (
              <span key={skill} className="px-3 py-1.5 bg-white text-gray-800 rounded-lg text-xs font-bold border border-gray-200 shadow-sm">{skill}</span>
            ))}
          </div>
        </section>

        <section className="px-4">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Capabilities</h3>
          <ul className="space-y-4 text-gray-700 font-medium">
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
  <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">
    <div className="mb-16">
      <h2 className="text-5xl font-black mb-4 uppercase tracking-tight">Portfolio</h2>
      <p className="text-gray-500 text-xl">Selected case studies and research projects.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {data.portfolio.map((item, i) => (
        <div key={i} className="group p-10 bg-white border border-gray-200 rounded-[2rem] hover:border-blue-600 transition-all duration-500 shadow-sm hover:shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex gap-2 mb-6">
              {item.tags.map(tag => (
                <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed mb-8">{item.description}</p>
          </div>
          <div className="inline-flex items-center font-black text-xs uppercase tracking-[0.2em] text-black cursor-pointer group-hover:gap-4 transition-all gap-2">
            Explore Project 
            <svg className="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <footer className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-100 mt-20 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <p className="font-bold text-lg mb-1">© 2026 {data.name}</p>
          <p className="text-gray-400 text-sm italic">{data.title}</p>
        </div>
        <div className="flex gap-8 font-bold text-sm uppercase tracking-widest">
          <a href={data.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600">LinkedIn</a>
          <a href={data.links.email} className="hover:text-blue-600">Email</a>
        </div>
      </footer>
    </div>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);