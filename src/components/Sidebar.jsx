import React, { Component, useState } from "react";

import { Container, Row, Button } from "react-bootstrap";

import useApi from "../hooks/useApi";

export default function Sidebar() {
  //  Load news
  const url =
    "https://newsapi.org/v2/everything?q=videogames&pageSize=5&sortBy=popularity&apiKey=33670a8619134e64bae86e09a7d9d57c";
  const { loading, data } = useApi(url);

  //   const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=33670a8619134e64bae86e09a7d9d57c';
  //     const { loading, data } = useApi(url)

  return (
    <div className="sidebar">
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
