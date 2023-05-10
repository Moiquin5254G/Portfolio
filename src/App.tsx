import { About } from "./pages/about";
import { Experience } from "./pages/experience";
import { Portfolio } from "./pages/portfolio";
import { Technologies } from "./pages/technologies";

function App() {
  return (
    <>
      <nav className="navbar-vertical" id="main-navbar" >
        <ul className="navbar-vertical-container" >
          <li className="navbar-vertical-item" >
            <img className="profile-image" src="assets/STIVEN MOICA.jpg" alt="Foto de Perfil" />
          </li>
          <li className="navbar-vertical-item" >
            <a href="#about">Sobre Mí</a>
          </li>
          <li className="navbar-vertical-item" >
            <a href="#experience">Experiencia</a>
          </li>
          <li className="navbar-vertical-item" >
            <a href="#technologies">Tecnologías</a>
          </li>
          <li className="navbar-vertical-item" >
          <a href="#portfolio">Portafolio</a>
          </li>
        </ul>
      </nav>

      <section className="main-section" data-bs-spy="scroll" data-bs-target="#main-navbar" >
        <section className="resume-section" id="about" >
          <div className="resume-section-content">
            <About />
          </div>
        </section>
        <hr />
        <section className="resume-section" id="experience" >
        <div className="resume-section-content">
            <Experience />
          </div>
        </section>
        <hr />
        <section className="resume-section" id="technologies" >
        <div className="resume-section-content">
            <Technologies />
          </div>
        </section>
        <hr />
        <section className="resume-section" id="portfolio" >
        <div className="resume-section-content">
            <Portfolio />
          </div>
        </section>
        <hr />
      </section>
    </>
  );
}

export default App;
