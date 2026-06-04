import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const data = {
  name: "SAM HIRSCH",
  title: "Data Analytics & Market Research",
  tagline: "Translating complex data into actionimport React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const data = {
  name: "SAM HIRSCH",
  title: "Market Research & Consumer Insights",
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
    { title: "Analytical Athletics", description: "A blog providing data-driven insights to sports fans." },
    { title: "Politics In America", description: "A research paper examining implications of demographics on political views." },
    { title: "Food Insecurity", description: "A research paper assessing the root causes and effects of global food insecurity." },
    { title: "Tableau Public", description: "A collection of data visualizations utilizing Tableau Desktop and Prep." }
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/samwhirsch",
    email: "mailto:samwhirsch@gmail.com"
  }
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
    <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl tracking-tight text-black">{data.name}</Link>
      <div className="space-x-8 text-sm font-medium text-gray-600">
        <Link to="/about" className="hover:text-black transition-colors">About</Link>
        <Link to="/portfolio" className="hover:text-black transition-colors">Portfolio</Link>
        <a href={data.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
      </div>
    </div>
  </nav>
);

const Home = () => (
  <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">
    <div className="max-w-3xl">
      <h1 className="text-6xl font-extrabold tracking-tight mb-6 text-black">{data.name}</h1>
      <h2 className="text-3xl text-gray-600 mb-8 font-medium">{data.title}</h2>
      <p className="text-xl text-gray-500 leading-relaxed mb-10">{data.tagline}</p>
      <div className="flex gap-4">
        <Link to="/portfolio" className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">View Portfolio</Link>
        <Link to="/about" className="px-8 py-3 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-colors">About Me</Link>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">
    <h2 className="text-4xl font-bold mb-12 text-black">About</h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
      <div className="lg:col-span-2 space-y-12">
        <section>
          <p className="text-xl text-gray-600 leading-relaxed">{data.about}</p>
        </section>
        
        <section>
          <h3 className="text-2xl font-bold mb-6 text-black">Professional Experience</h3>
          <div className="space-y-6">
            {data.experience.map((exp, i) => (
              <div key={i} className="border-l-2 border-gray-100 pl-6">
                <h4 className="font-bold text-lg">{exp.company}</h4>
                <p className="text-gray-600">{exp.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="space-y-10">
        <section>
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Technical Tools</h3>
          <div className="flex flex-wrap gap-2">
            {data.skills.technical.map(skill => (
              <span key={skill} className="px-3 py-1 bg-gray-50 text-gray-600 rounded-md text-sm border border-gray-100">{skill}</span>
            ))}
          </div>
        </section>
        <section>
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Analytical Capabilities</h3>
          <ul className="space-y-2 text-gray-600">
            {data.skills.analytical.map(cap => (
              <li key={cap} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
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
    <h2 className="text-4xl font-bold mb-12 text-black">Portfolio</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {data.portfolio.map((item, i) => (
        <div key={i} className="group p-8 bg-white border border-gray-100 rounded-3xl hover:border-black transition-all duration-300 shadow-sm hover:shadow-xl">
          <h3 className="text-2xl font-bold mb-4 group-hover:text-black transition-colors">{item.title}</h3>
          <p className="text-gray-500 leading-relaxed mb-6">{item.description}</p>
          <div className="inline-flex items-center font-bold text-sm uppercase tracking-wider text-black cursor-pointer">
            Learn More 
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-gray-100 text-sm text-gray-400 flex justify-between items-center">
        <p>© 2026 {data.name}</p>
        <div className="space-x-6">
          <a href={data.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
          <a href={data.links.email} className="hover:text-black transition-colors">Email</a>
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
able business strategy."
};

const Home = () => (
  <div className="max-w-4xl mx-auto px-6 pt-32">
    <h1 className="text-8xl font-black tracking-tighter mb-4">
      {data.name.split(' ')[0]}<br/>
      <span className="text-blue-600">{data.name.split(' ')[1]}</span>
    </h1>
    <p className="text-2xl text-gray-600 mb-8">{data.title}</p>
    <p className="text-xl max-w-xl leading-relaxed text-gray-500 mb-10">{data.tagline}</p>
    <div className="flex gap-4">
      <Link to="/portfolio" className="bg-black text-white px-8 py-4 rounded-full font-bold">View Portfolio</Link>
      <Link to="/about" className="border border-gray-300 px-8 py-4 rounded-full font-bold">About Me</Link>
    </div>
  </div>
);

const App = () => (
  <BrowserRouter>
    <nav className="p-6 flex justify-between items-center fixed w-full bg-white/80 backdrop-blur-md">
      <Link to="/" className="font-bold text-xl">SH.</Link>
      <div className="space-x-6 text-sm font-bold uppercase">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<div className="pt-32 px-6">Portfolio Page Coming Next...</div>} />
      <Route path="/about" element={<div className="pt-32 px-6">About Page Coming Next...</div>} />
    </Routes>
  </BrowserRouter>
)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
