import { useState } from "react";
import Project1 from "../../assets/aircnc.png";
import Project2 from "../../assets/rock.png";
import Project3 from "../../assets/nike.png";
import Project4 from "../../assets/star.png";
import Project5 from "../../assets/google.png";
import Project6 from "../../assets/poke.png";
// import "./App.css";
import "../../css/main.css";
function Projects() {
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
        <section class="projects">
          <div class="projects__bio-image">
            <h1 class="text-secondary">Meus Projetos</h1>
          </div>
          <div class="projects__items">
            <div class="projects__item">
              <img src={Project1} alt="Projeto1" class="projeto1"></img>
              <div class="projects__btns">
                <a
                  href="https://front-end-aircnc.vercel.app/"
                  class="projects__btn"
                >
                  <i class="fa fa-eye"></i> Visualizar
                </a>
                <a
                  href="https://github.com/Jorge989/front-end-aircnc"
                  class="projects__btn"
                >
                  <i class="fa fa-github"></i> Github
                </a>
              </div>
            </div>
            <div class="projects__item">
              <img src={Project2} alt="Projeto1" class="projeto1"></img>
              <div class="projects__btns">
                <a href="https://play-rock.vercel.app/" class="projects__btn">
                  <i class="fa fa-eye"></i> Visualizar
                </a>
                <a
                  href="https://github.com/Jorge989/PlayRock/tree/master/src"
                  class="projects__btn"
                >
                  <i class="fa fa-github"></i> Github
                </a>
              </div>
            </div>
            <div class="projects__item">
              <img src={Project3} alt="Projeto1" class="projeto1"></img>
              <div class="projects__btns">
                <a href="https://nikeshoes.vercel.app/" class="projects__btn">
                  <i class="fa fa-eye"></i> Visualizar
                </a>
                <a
                  href="https://github.com/Jorge989/Nikeshoes"
                  class="projects__btn"
                >
                  <i class="fa fa-github"></i> Github
                </a>
              </div>
            </div>
            <div class="projects__item">
              <img src={Project4} alt="Projeto1" class="projeto1"></img>
              <div class="projects__btns">
                <a
                  href="https://starbucks-rho.vercel.app/"
                  class="projects__btn"
                >
                  <i class="fa fa-eye"></i> Visualizar
                </a>
                <a
                  href="https://github.com/Jorge989/Starbucks"
                  class="projects__btn"
                >
                  <i class="fa fa-github"></i> Github
                </a>
              </div>
            </div>
            <div class="projects__item">
              <img src={Project5} alt="Projeto1" class="projeto1"></img>
              <div class="projects__btns">
                <a href="https://googleclone.vercel.app/" class="projects__btn">
                  <i class="fa fa-eye"></i> Visualizar
                </a>
                <a
                  href="https://github.com/Jorge989/Googleclone"
                  class="projects__btn"
                >
                  <i class="fa fa-github"></i> Github
                </a>
              </div>
            </div>
            <div class="projects__item">
              <img src={Project6} alt="Projeto1" class="projeto1"></img>
              <div class="projects__btns">
                <a
                  href="https://pokedex-jet-two.vercel.app/"
                  class="projects__btn"
                >
                  <i class="fa fa-eye"></i> Visualizar
                </a>
                <a
                  href="https://github.com/Jorge989/Pokedex"
                  class="projects__btn"
                >
                  <i class="fa fa-github"></i> Github
                </a>
              </div>
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

export default Projects;
