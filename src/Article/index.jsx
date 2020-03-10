import React, { useState, useEffect } from "react";
import "./styles.css";
import ReactHtmlParser from "react-html-parser";

function Article(props) {
  const [content, setContent] = useState(null);
  const { path, origin } = props;
  const url = origin + path;
  useEffect(() => {
    fetch(url)
      .then(result => result.json())
      .then(content => {
        setContent(content);
      });
  }, [url]);

  return content ? (
    <article className="article">
      <img
        className="article_image"
        src={
          origin +
          content.elements.mainImage.value.leadImage.renditions.card.url
        }
        width={content.elements.mainImage.value.leadImage.renditions.card.width}
        height={
          content.elements.mainImage.value.leadImage.renditions.card.height
        }
      />
      <heading className="article_header">
        {content.elements.heading.value}
      </heading>

      <author className="article_author">
        {content.elements.author.value}
      </author>
      <time className="article_date" datetime={content.elements.date.value}>
        {(function(date) {
          const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          };
          return new Date(date).toLocaleDateString("en-US", options);
        })(content.elements.date.value)}
      </time>
      {content.elements.body.values.map(htmlString =>
        ReactHtmlParser(htmlString)
      )}
    </article>
  ) : null;
}
export default Article;
