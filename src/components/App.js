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
      <About imagePath="https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80" text="A blog about learning React" imageAlt="blog logo"/>
      <ArticleList articles={data.posts}/>
      </main>
      
      
    </div>
  );
}

export default App;
