import { useState } from "react";

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
              <a href="contato">Contate-me</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section class="contact">
          <h2>Contate Me..</h2>
          <div class="contact__list">
            <div class="contact__email">
              <i class="fa fa-envelope"></i> Email
              <div class="text-secondary">email@email.com</div>
              <div class="contact__email">
                <i class="fa fa-phone"></i> Telefone
                <div class="text-secondary">(11)93028-1989</div>
              </div>
              <div class="contact__email">
                <i class="fa fa-linkedin"></i> Linkedin
                <div class="text-secondary">
                  https://www.linkedin.com/in/jorge-attie-791522182/
                </div>
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
