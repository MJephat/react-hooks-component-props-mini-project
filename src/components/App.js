import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import data from "../data/blog";
console.log(blogData);

function App() {
  return (
    <div className="App">
       <Header name="Underrated"/>
       <main>
      <About imagePath="https://via.placeholder.com/215" text="A blog about learning React" imageAlt="blog logo"/>
      <ArticleList articles={data.posts}/>
      </main>
      
      
    </div>
  );
}

export default App;
