import React from "react";
import {useState} from "react";
import { BrowserRouter as Router, Routes, Switch, Route,  Link } from "react-router-dom";
import Inicio from "./Components/Inicio"
import Contacto from "./Components/Contacto"
import Work from "./Components/Work"
import Game from "./Components/Game"
import Formacion from "./Components/Formacion";
import ParticleBackground from "./ParticleBackground";


//Importamos todos los Componentes que hemos creado o vamos a usar
//React Router proporciona un <Link> componente para crear enlaces en su aplicación. 
//Donde sea que renderice un <Link>, se representará un ancla <a> en su documento HTML.
function App() {

  const [page, setPage] = useState('about')

  return(
    <Router>
      <ParticleBackground />
      <div className="container">
        <header className="header">
          <div className="btn-group">
            <Link className="btn btn-dark btn-sm" to="/inicio" onClick={() => setPage('inicio')}>
              Inicio
            </Link>
            <Link className="btn btn-dark btn-sm" to="/formacion" onClick={() => setPage('formacion')}>
              Formacion
            </Link>
            <Link className="btn btn-dark btn-sm" to="/portfolio">
              Work
            </Link>
            <Link className="btn btn-dark btn-sm" to="/contacto">
              Contacto
            </Link>
            <Link className="btn btn-dark btn-sm" to="/game">
              Snake Game
            </Link>
          </div>
        </header>

        <hr />
        <Routes>
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/portfolio" element={<Work />} />
          <Route path="/game" element={<Game />} />
          <Route path="/inicio" element={<Inicio />} />
        </Routes>

      </div>
      <footer className="footer">
        <ul className='footer ul1'>
          <li className="footer li"><a href="#" className="nav-link px-2">Email: amadocesar02@gmail.com</a></li>
          <li className="footer li"><a href="#" className="nav-link px-2 ">Phone: +34 601 314 076</a></li>
          <li className="footer li"><a href="https://www.linkedin.com/in/césar-amado-096087232/" className="nav-link px-2">LinkedIn: https://www.linkedin.com/in/césar-amado-096087232/</a></li>
        </ul>
        <ul className="footer ul2">
          <li className="footer li">
            <Link className="nav-link px-2 text-muted" to="/">
              Inicio
            </Link></li>
          <li className="footer li">
            <Link className="nav-link px-2 text-muted" to="/formacion">
              Formacion
            </Link></li>
          <li className="footer li">
            <Link className="nav-link px-2 text-muted" to="/portfolio">
              Work
            </Link></li>
          <li className="footer li">
            <Link className="nav-link px-2 text-muted" to="/contacto">
              Contacto
            </Link></li>
          <li className="footer li">
            <Link className="nav-link px-2 text-muted" to="/game">
              Game
            </Link></li>
        </ul>

      </footer>
      
      
    </Router>
      
  );
}


export default App;
