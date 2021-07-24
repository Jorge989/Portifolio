import { useState } from "react";
// import "./App.css";
import "../../css/main.css";
function Home() {
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
            <a onClick={toggleMenu}>
              {!show ? (
                <i class="fa fa-bars"></i>
              ) : (
                <a>
                  <i class="fa fa-times"></i>
                </a>
              )}
            </a>
          </label>

          <ul>
            <li>
              <a href="#">Home</a>
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
        <section class="home">
          <h2>Ola! Meu Nome é</h2>
          <h1 class="home__name">
            Jorge Luis<span class="home__name--last"> Attie</span>
          </h1>
          <h2 id="full-stack">Full stack Developer Programmer</h2>
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

export default Home;
