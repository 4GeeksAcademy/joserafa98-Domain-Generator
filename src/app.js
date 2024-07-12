/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function DomainGenerator() {
    let pronoun = ["the", "our", "a", "you"];
    let adj = ["great", "big", "small", "ugly", "beauty", "first", "last"];
    let noun = ["jogger", "racoon", "apple", "house", "phone", "kitty"];

    function RandomizetheDomain(array) {
      let results = Math.floor(Math.random() * array.length);
      return results;
    }

    let DomainGenerator =
      pronoun[RandomizetheDomain(pronoun)] +
      adj[RandomizetheDomain(adj)] +
      noun[RandomizetheDomain(noun) + ".com"];
    return DomainGenerator;
  }
  document.querySelector("#botonresultado").addEventListener("click", () => {
    let resultado = document.querySelector("#domain");
    resultado.innerHTML = DomainGenerator();
  });
};
// pasos a resolver:
//1. establecer mis variables
//2.
