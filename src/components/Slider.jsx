import React, { Component } from "react";
import Slide from "react-slick";

export default function Slider({ news }) {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slide {...settings}>
      {news?.map((value) => (
        <div key={value.title} className="post-preview picture big gaming-news">
          <div className="post-preview-img-wrap">
            <figure
              className="post-preview-img liquid imgLiquid_bgSize imgLiquid_ready"
              style={{
                backgroundImage: `url(${value.urlToImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img
                src={value.urlToImage}
                alt="post-17"
                style={{ display: "none" }}
              />
            </figure>

            <div className="post-preview-img-overlay" />

            <div className="post-preview-overlay">
              <span className="tag-ornament">{value.source.name}</span>

              <p className="post-preview-title">{value.title}</p>

              <p className="post-preview-text">
                {value.description.length < 400
                  ? `${value.description}`
                  : `${value.description.substring(0, 400)}...`}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slide>
  );
}
