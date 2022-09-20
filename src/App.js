import logo from "./GC_Logo_Vertical_FullCol.png"
import Dictionary from "./Dictionary.js";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <h1>DICTIONARY</h1>
< br/>
        <Dictionary defaultKeyword="smile"/>
      </main>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <footer className="App-footer">
              <small>
                Coded by{" "}
                <a
                  href="https://polite-cassata-f5e2ec.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Giorgia Francesca Costantino
                </a>{" "}
                and{" "}
                <a
                  href="https://github.com/Jofoxter/react-dictionary-project"
                  ttarget="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  open source on GitHub
                </a>
              </small>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}


