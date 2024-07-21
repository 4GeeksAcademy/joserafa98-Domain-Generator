/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "a", "you"];
  let adj = ["big", "small", "first", "last"];
  let noun = ["racoon", "house", "phone"];
  let results = "";

  function DomainGenerator() {
    results = "";
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

  document.querySelector("#botonResultado").addEventListener("click", () => {
    let resultado = document.querySelector("#domain");
    resultado.innerHTML = DomainGenerator();
  });

  function addWordTo(array) {
    let newWord = document.querySelector("#newWord").value;
    if (newWord) {
      array.push(newWord);
      document.querySelector("#newWord").value = "";
    }
  }

  function deleteWordFrom(array) {
    let newWord = document.querySelector("#newWord").value;
    if (newWord) {
      let index = array.indexOf(newWord);
      if (index > -1) {
        array.splice(index, 1);
      }
      document.querySelector("#newWord").value = "";
    }
  }

  document
    .querySelector("#addToPronoun")
    .addEventListener("click", () => addWordTo(pronoun));
  document
    .querySelector("#addToAdj")
    .addEventListener("click", () => addWordTo(adj));
  document
    .querySelector("#addToNoun")
    .addEventListener("click", () => addWordTo(noun));

  document
    .querySelector("#deleteFromPronoun")
    .addEventListener("click", () => deleteWordFrom(pronoun));
  document
    .querySelector("#deleteFromAdj")
    .addEventListener("click", () => deleteWordFrom(adj));
  document
    .querySelector("#deleteFromNoun")
    .addEventListener("click", () => deleteWordFrom(noun));
};
