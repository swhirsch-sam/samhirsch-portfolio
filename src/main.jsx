import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const data = {
  name: "SAM HIRSCH",
  title: "Market Research and Consumer Insights",
  tagline: "Business Intelligence | Consumer Research | Data Analytics",
  about: "I am a specialist in market research and consumer insights, dedicated to uncovering the 'why' behind consumer behavior. Based in Pittsburgh, I leverage data analytics to translate complex datasets into actionable business strategies.",
  skills: {
    technical: ["SQL", "Tableau", "Power BI", "R", "Excel (Advanced)", "Python" "AWS QuickSight", "Google Analytics", "SPSS", "ArcGIS"],
    analytical: ["Predictive Analytics", "Data Modeling", "Forecasting", "Survey Design", "Dashboard Development"]
  },
  experience: [
    { company: "First Insight Inc", role: "Insight Specialist" },
    { company: "Kantar", role: "Data Strategy and Operations Intern" },
    { company: "M@C Discount", role: "Analytics Intern" },
    { company: "Syracuse Jewish Family Service", role: "Student Researcher" },
    { company: "Allegheny County Department of Human Services", role: "Student Intern" }
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
    email: "mailto:samwhirsch@gmail.com",
    substack: "https://substack.com/@samwhirsch/posts"
  }
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
    <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl tracking-tighter text-black uppercase">{data.name}</Link>
      <div className="space-x-8 text-sm font-bold uppercase tracking-widest text-gray-600">
        <Link to="/about" className="hover:text-blue-600 transition-colors text-blue-500">About</Link>
        <Link to="/portfolio" className="hover:text-blue-600 transition-colors text-blue-500">Portfolio</Link>
        <a href={data.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
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
        <h2 className="text-5xl font-black mb-8 uppercase tracking-tight text-blue-600">About</h2>
        <p className="text-xl text-gray-600 leading-relaxed mb-12">{data.about}</p>
        
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-black underline decoration-blue-600 decoration-4 underline-offset-8">
          Professional Experience
        </h3>
        <div className="space-y-8">
          {data.experience.map((exp, i) => (
            <div key={i} className="group relative pl-8 border-l-2 border-gray-100 hover:border-blue-600 transition-colors">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-gray-200 rounded-full group-hover:border-blue-600 transition-colors"></div>
              <h4 className="font-bold text-xl text-black">{exp.company}</h4>
              <p className="text-blue-600 font-medium">{exp.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        <section className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-6">Technical Tools</h3>
          <div className="flex flex-wrap gap-2">
            {data.skills.technical.map(skill => (
              <span key={skill} className="px-3 py-1.5 bg-white text-blue-800 rounded-lg text-xs font-bold border border-blue-200 shadow-sm">{skill}</span>
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
    {/* Substack/Writing Section */}
    <div className="mb-20">
      <h2 className="text-4xl font-black mb-8 uppercase tracking-tight text-blue-600">Strategic Writing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.writing.map((item, i) => (
          <a key={i} href={item.link} target="_blank" rel="noreferrer" className="group p-8 bg-white border border-gray-100 rounded-3xl hover:border-blue-600 transition-all shadow-sm">
            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600">{item.title}</h3>
            <p className="text-gray-500 mb-6">{item.description}</p>
            <span className="text-xs font-black uppercase tracking-widest text-blue-600">Read on Substack →</span>
          </a>
        ))}
      </div>
    </div>

    {/* Brand Intelligence Tools Section */}
    <div className="mb-20">
      <h2 className="text-4xl font-black mb-8 uppercase tracking-tight text-blue-600">Brand Intelligence Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.intelligenceTools.map((item, i) => (
          <a key={i} href={item.link} target="_blank" rel="noreferrer" className="group p-8 bg-blue-50 border border-blue-100 rounded-3xl hover:border-blue-600 transition-all shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-blue-900 group-hover:text-blue-600">{item.title}</h3>
            <p className="text-blue-800/60 mb-6">{item.description}</p>
            <span className="text-xs font-black uppercase tracking-widest text-blue-600 underline">Launch Streamlit App →</span>
          </a>
        ))}
      </div>
    </div>

    {/* Classic Portfolio Section */}
    <div>
      <h2 className="text-4xl font-black mb-8 uppercase tracking-tight text-blue-600">Selected Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {data.portfolio.map((item, i) => (
          <div key={i} className="group p-10 bg-white border border-gray-200 rounded-[2rem] hover:border-blue-600 transition-all duration-500 shadow-sm hover:shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex gap-2 mb-6">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
              <h3 className="text-3xl font-bold mb-4 text-black group-hover:text-blue-600">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-8">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
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
          <p className="font-bold text-lg mb-1 uppercase tracking-tighter italic">SH<span className="text-blue-600">.</span></p>
          <p className="text-gray-400 text-sm">{data.title}</p>
        </div>
        <div className="flex gap-8 font-bold text-sm uppercase tracking-widest text-blue-600">
          <a href={data.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={data.links.substack} target="_blank" rel="noreferrer">Substack</a>
          <a href={data.links.email}>Email</a>
        </div>
      </footer>
    </div>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);