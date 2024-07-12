/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "a", "you"];
  let adj = ["great", "big", "small", "ugly", "beauty", "first", "last"];
  let noun = ["jogger", "racoon", "apple", "house", "phone", "kitty"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        console.log(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }
};
