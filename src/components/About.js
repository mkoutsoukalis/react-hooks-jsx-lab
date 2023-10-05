import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>Getting started with React has been a total blast, I can't wait to dive even deeper!</p>
    <img src={image} alt="I made this"></img>
  </div>
  )
}

export default About;
