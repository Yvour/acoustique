import React from "react";
import ReactDOM from "react-dom";
import ArticleSystem from "./ArticleSystem";

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    React.createElement(ArticleSystem),
    document.getElementById("article-system")
  );
});
