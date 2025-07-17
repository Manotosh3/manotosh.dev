import React from "react";
import Header from './assets/Header'
import Home from './assets/Home'
import About from './assets/About'
 import GitCal from './assets/Git'
// import Projects from './assets/Projects'
// import Skills from './assets/Skills'
// import Contact from './assets/Contact'
import Footer from './assets/Footer'

function App() {
   return ( 
    <div className="min-h-screen bg-[#4a4a4a]">
      <Header />
      <Home />
      <About />
      <GitCal />
      <Footer />
    </div>
  );
}

export default App
