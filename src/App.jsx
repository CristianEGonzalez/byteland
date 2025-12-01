import './App.css'
import { Navigate, Route, Routes } from "react-router-dom"
import Home from './pages/Home.jsx'
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/privacidad" element={ <Privacy /> } />
        <Route path="/terminos" element={ <Terms /> } />
        <Route path="/*" element={ <Navigate to="/" /> } />
      </Routes>
      <Footer />
    </>
  );
};

export default App
