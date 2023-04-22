import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";

console.log(blogData);

function App() {
  return (
    <div className="App">
       <Header name="Underrated"/>
      <About imagePath="https://via.placeholder.com/215" text="A blog about learning React" imageAlt="blog logo"/>
      
      <ArticleList/>
      <Article/>
      
    </div>
  );
}

export default App;
