import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const data = {
  name: "SAM HIRSCH",
  title: "Market Research and Consumer Insights",
  tagline: "Bridging the gap between raw data and brand strategy through advanced consumer intelligence.",
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
  intelligenceTools: [
    {
      title: "Social Sentiment Pulse",
      description: "Real-time brand sentiment analysis across social media platforms using NLP.",
      link: "https://brandpulsecheck.streamlit.app/",
      type: "Social Intelligence"
    },
    {
      title: "News Insight Engine",
      description: "Analyzes global news cycles to understand brand reputation and media impact.",
      link: "https://newsbpc.streamlit.app/",
      type: "Media Intelligence"
    }
  ],
  writing: [
    {
      title: "The Shift in Consumer Demand Signals",
      description: "A deep dive into how modern brands are misinterpreting digital demand.",
      link: "https://substack.com/@samwhirsch/p-197761529",
      date: "Featured Article"
    },
    {
      title: "Coming Soon: The Future of Analytics",
      description: "Exploring the intersection of AI and traditional market research methodologies.",
      link: "https://substack.com/@samwhirsch/posts",
      date: "Upcoming"
    }
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/samwhirsch",
    substack: "https://substack.com/@samwhirsch/posts",
    email: "mailto:samwhirsch@gmail.com"
  }
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl z-50 border-b border-blue-50">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <Link to="/" className="font-black text-2xl tracking-tighter text-blue-900 uppercase italic">SH<span className="text-blue-500">.</span></Link>
      <div className="hidden md:flex space-x-10 text-[10px] font-black uppercase tracking-[0.2em] text-blue-900/60">
        <Link to="/" className="hover:text-blue-500 transition-colors">Intelligence</Link>
        <Link to="/about" className="hover:text-blue-500 transition-colors">Expertise</Link>
        <Link to="/portfolio" className="hover:text-blue-500 transition-colors">Case Studies</Link>
        <a href={data.links.substack} target="_blank" rel="noreferrer" className="text-blue-500">Substack</a>
      </div>
      <a href={data.links.linkedin} className="bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">Connect</a>
    </div>
  </nav>
);

const Home = () => (
  <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
    {/* Hero Section */}
    <header className="mb-24">
      <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
        Consumer Research & Intelligence
      </div>
      <h1 className="text-6xl md:text-8xl font-black text-blue-950 tracking-tighter leading-[0.85] mb-8">
        DECIPHERING <br/> THE <span className="text-blue-500 italic">MARKET.</span>
      </h1>
      <p className="text-xl md:text-2xl text-blue-900/60 leading-relaxed max-w-2xl font-medium mb-10">
        {data.tagline}
      </p>
    </header>

    {/* Brand Intelligence Tools Section */}
    <section className="mb-32">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.3em] mb-2">Internal Tools</h2>
          <h3 className="text-4xl font-bold text-blue-950 tracking-tight">Market Intelligence Suite</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.intelligenceTools.map((tool, i) => (
          <a key={i} href={tool.link} target="_blank" rel="noreferrer" className="group p-10 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-[2.5rem] hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{tool.type}</span>
            <h4 className="text-3xl font-black text-blue-900 mt-4 mb-4 flex items-center gap-3">
              {tool.title}
              <svg className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </h4>
            <p className="text-blue-900/50 font-medium leading-relaxed mb-6">{tool.description}</p>
            <div className="text-blue-600 font-black text-xs uppercase tracking-widest">Launch App →</div>
          </a>
        ))}
      </div>
    </section>

    {/* Substack Featured Writing */}
    <section>
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.3em] mb-2">Substack</h2>
          <h3 className="text-4xl font-bold text-blue-950 tracking-tight">Strategic Insights</h3>
        </div>
        <a href={data.links.substack} className="text-blue-600 font-bold hover:underline">Read all posts</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.writing.map((post, i) => (
          <a key={i} href={post.link} target="_blank" rel="noreferrer" className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-blue-300 transition-all group">
            <p className="text-xs font-bold text-gray-400 mb-4">{post.date}</p>
            <h4 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{post.description}</p>
          </a>
        ))}
      </div>
    </section>
  </div>
);

const About = () => (
  <div className="max-w-6xl mx-auto px-6 pt-40 pb-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div>
        <h2 className="text-5xl font-black text-blue-950 mb-8 tracking-tighter uppercase italic">The Methodology<span className="text-blue-500">.</span></h2>
        <p className="text-xl text-blue-900/60 leading-relaxed mb-12 font-medium">{data.about}</p>
        
        <div className="space-y-12">
          {data.experience.map((exp, i) => (
            <div key={i} className="flex gap-6 items-start group">
              <div className="text-blue-200 font-black text-4xl group-hover:text-blue-500 transition-colors">0{i+1}</div>
              <div>
                <h4 className="font-black text-xl text-blue-950">{exp.company}</h4>
                <p className="text-blue-600 font-bold text-sm tracking-wide">{exp.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-950 text-white p-12 rounded-[3rem] shadow-2xl shadow-blue-900/20">
        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-blue-400 mb-10">Intelligence Stack</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <section>
            <h4 className="text-blue-200 text-xs font-black uppercase mb-6 tracking-widest">Technical Tools</h4>
            <div className="flex flex-wrap gap-2">
              {data.skills.technical.map(skill => (
                <span key={skill} className="px-3 py-1 bg-white/10 text-white rounded-lg text-[10px] font-bold uppercase tracking-wider">{skill}</span>
              ))}
            </div>
          </section>
          <section>
            <h4 className="text-blue-200 text-xs font-black uppercase mb-6 tracking-widest">Capabilities</h4>
            <ul className="space-y-3">
              {data.skills.analytical.map(cap => (
                <li key={cap} className="text-sm font-bold text-blue-50 flex items-center gap-2 italic">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> {cap}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
);

const Portfolio = () => (
  <div className="max-w-6xl mx-auto px-6 pt-40 pb-20 text-center">
    <h2 className="text-5xl font-black text-blue-950 mb-12 tracking-tight uppercase">Strategic Portfolio</h2>
    <p className="text-blue-900/50 mb-20 max-w-xl mx-auto">Selected research papers and data-driven narratives focused on politics, sports, and socio-economic trends.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
      {/* Re-using your portfolio projects here with better styling */}
      {[
        { title: "Analytical Athletics", tag: "Sports Insights" },
        { title: "Politics In America", tag: "Demographics" },
        { title: "Food Insecurity", tag: "Socio-Economics" },
        { title: "Tableau Public", tag: "Visualizations" }
      ].map((item, i) => (
        <div key={i} className="border-b-2 border-blue-50 pb-12 group cursor-pointer">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">{item.tag}</span>
          <h3 className="text-4xl font-bold text-blue-950 mt-4 group-hover:text-blue-600 transition-colors">{item.title}</h3>
          <p className="mt-4 text-gray-500 font-medium">Detailed project documentation available upon request.</p>
        </div>
      ))}
    </div>
  </div>
);

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen bg-white text-blue-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <footer className="max-w-6xl mx-auto px-6 py-20 border-t border-blue-50 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <p className="font-black text-2xl mb-4 italic tracking-tighter uppercase">SH<span className="text-blue-500">.</span></p>
          <p className="text-blue-900/40 text-sm font-medium leading-relaxed">Leveraging data intelligence to understand the modern consumer landscape.</p>
        </div>
        <div className="grid grid-cols-2 gap-16">
          <div className="space-y-4">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-blue-300">Links</h5>
            <div className="flex flex-col gap-2 font-bold text-sm">
              <a href={data.links.linkedin} className="hover:text-blue-500">LinkedIn</a>
              <a href={data.links.substack} className="hover:text-blue-500">Substack</a>
            </div>
          </div>
          <div className="space-y-4">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-blue-300">Contact</h5>
            <a href={data.links.email} className="font-bold text-sm block hover:text-blue-500">Email Me</a>
          </div>
        </div>
      </footer>
    </div>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
