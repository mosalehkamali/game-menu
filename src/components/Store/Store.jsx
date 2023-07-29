import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ImageSlider from "./ImageSlider";

function Store() {
  const slides = [
    { image: "/images/bhlogo.png", 
    title: "Bhlogo",
    body: "click on ❱ for start " },
  ];


  fetchData();
      
      function fetchData() {
        fetch("https://blackhill360.ir/blog2/post/")
        .then((response) => response.json())
        .then((data) => {
          handleData(data);
        });
      }
      


      function handleData(data) {
        data.map((slidedata) => {
          if (slidedata.id > 12){ slides.push(slidedata);
        }
        });}


  const containerStyles = {
    width: "100%",
    height: "90vh",
    margin: "0 auto",
    background: "linear-gradient(to bottom, #80B3FF 80%, transparent)",
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default Store;
