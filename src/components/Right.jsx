import React, { useRef } from "react";
import { Container, Row, Button } from "react-bootstrap";
import useApi from "../hooks/useApi";
import { TwitchChat, TwitchEmbed } from "react-twitch-embed";

export default function Right() {
  const url =
    "https://newsapi.org/v2/everything?q=nintendo&pageSize=5&sortBy=relevance&apiKey=33670a8619134e64bae86e09a7d9d57c";
  const { loading, data } = useApi(url);

  return (
    <div className="widget-sidebar">
      <div className="section-title-wrap blue">
        <h2 className="section-title medium">Popular Posts</h2>
        <div className="section-title-separator"></div>
      </div>{" "}
      <br />
      {/* Popular Posts */}
      {data?.map((value) => (
        <div key={value.title} className="sidebar-news-box mb-5">
          <div className="sidebar-image mb-2">
            <img src={value.urlToImage} />
            <span className="sidebar-image-author">{value.source.name}</span>
          </div>

          <h3 className="sidebar-news-title"> {value.title}</h3>
          <p className="sidebar-news-meta">
            By: <strong className="blue">{value.author}</strong> |{" "}
            {value.publishedAt}
          </p>
        </div>
      ))}
    </div>
  );
}
