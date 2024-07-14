/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function DomainGenerator() {
    let pronoun = ["the", "a", "you"];
    let adj = ["big", "small", "first", "last"];
    let noun = ["racoon", "house", "phone"];
    let results = " ";

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          let domain = pronoun[i] + adj[j] + noun[k] + ".com";
          console.log(domain);
          results += domain + "<br>";
        }
      }
    }
    return results;
  }
  document.querySelector("#botonresultado").addEventListener("click", () => {
    let resultado = document.querySelector("#domain");
    resultado.innerHTML = DomainGenerator();
  });
};
