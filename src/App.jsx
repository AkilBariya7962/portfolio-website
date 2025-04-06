import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Homepage from './assets/components/Homepage';
import Intro from './assets/components/Intro';
import Footer from './assets/components/Footer';
import MySection from './assets/components/Project';
import EducationSection from './assets/components/Eduction';
import About from './assets/components/Intro'
import ContactForm from './assets/components/Contact';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Homepage />
                <Intro />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<MySection />} />
            <Route path="/education" element={<EducationSection />} />
            <Route path="/contact" element={<ContactForm />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;