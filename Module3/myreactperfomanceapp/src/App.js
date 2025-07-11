import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader';
import Items from './pages/ItemsPage';

const AboutPage = lazy(()=>import("./pages/AboutPage"));
const ContactPage = lazy(()=>import("./pages/ContactPage"));
const CountPage = lazy(()=>import("./pages/CountPage"));


function App() {

  return (
    <div className="App">

      <Router>

        <Suspense fallback={<Loader/>}>

        <Navbar />

        <Routes>

        
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/count" element={<CountPage/>} />
        <Route path="/items" element={<Items/>} />

        </Routes>

        </Suspense>
        
      </Router>

      
    </div>
  );
}

export default App;
