import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const data = {
  name: "SAM HIRSCH",
  title: "Data Analytics & Market Research",
  tagline: "Translating complex data into actionable business strategy."
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
