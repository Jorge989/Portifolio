import { useState } from "react";
// import "./App.css";
import "../../css/main.css";
function About() {
  const [show, setShow] = useState(false);

  function toggleMenu() {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  return (
    <body class="light">
      <header class="header-desktop">
        <nav>
          <input type="checkbox" id="check" />
          <label for="check" class="checkbtn">
            <a href="#!" onClick={toggleMenu}>
              {show ? (
                <i class="fa fa-bars"></i>
              ) : (
                <a href="#!">
                  <i class="fa fa-times"></i>
                </a>
              )}
            </a>
          </label>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">Sobre</a>
            </li>
            <li>
              <a href="/projetos">Meus Projetos</a>
            </li>
            <li>
              <a href="/contato">Contate-me</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section class="about">
          <div class="about__bio-image">
            <h2 class="text-secondary-bio">BIO</h2>

            <p>
              Programador full-stack, apaixonado pelas melhores tecnologias
              <br /> de desenvolvimento back-end, front-end e mobile,
            </p>
            <p class="software">
              “Antes do software poder ser reutilizável ele primeiro tem de ser
              utilizável.”
            </p>
          </div>
          <div class="jobs">
            <div class="jobs__job">
              <h1 class="tecnologias">TECNOLOGIAS</h1>
              <h2 class="text-front">FRONT END</h2>
              <h3 class="text-frontec">
                ReactJS JavaScript HTML5 CSS3 SASS Bootstrap Styled Components
              </h3>
            </div>
            <div class="jobs__job">
              <h2 class="text-back">BACK END</h2>
              <h3 class="text-backtec">
                NodeJS JavaScript Express Typeorm JWT
              </h3>
            </div>
          </div>
          <div class="social-icons">
            <a href="#!">
              <i class="fab fa-github fa 2x"></i>
            </a>
            <a href="#!">
              <i class="fab fa-linkedin fa 2x"></i>
            </a>
          </div>
          <footer>&copy; Copyright 2021</footer>
        </section>
      </main>
    </body>
  );
}

export default About;
