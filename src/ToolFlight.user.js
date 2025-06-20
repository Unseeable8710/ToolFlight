// ==UserScript==
// @name         ToolFlight
// @namespace    Unseeable's Noteflight Tools
// @version      1.0.0-b1r0
// @description  A set of tools and features for the online notation platform called Noteflight.
// @author       Colton Stone
// @homepage     https://github.com/Unseeable8710/ToolFlight
// @license      GPL-3.0-or-later
// @tag          productivity
// @tag          utilities
// @match        https://www.noteflight.com/*
// @require      https://raw.githubusercontent.com/Unseeable8710/JSVL/refs/heads/main/src/jsvl.js
// @icon         https://www.google.com/s2/favicons?sz=32&domain=noteflight.com
// @grant        unsafeWindow
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
  function searchUserScores(name = false) {
    if (name) {
      open(`https://noteflight.com/music/search?term=${name}`);
    } else {
      name = prompt("Enter the username of the person whose scores you want to find:");
      open(`https://noteflight.com/music/search?term=${name}`);
    }
  }
  GM_registerMenuCommand("Search scores by user", searchUserScores(), {
    accessKey: "u",
    title: "Searches for scores by a specific user. This can be handy if their scores aren't displayed on their profile."
  });
})();
