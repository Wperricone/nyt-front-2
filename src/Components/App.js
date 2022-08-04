import React, { Component } from "react";
//import styled from "styled-components";
import { Route, Routes } from 'react-router-dom';
import { fetchAllArticles, fetchType } from './apiCalls';
import AllArticlesContainer from './AllArticlesContainer';
import NavBar from "./NavBar";
import ArticleTypeContainer from "./ArticleTypeContainer";
 
class App extends Component {
 constructor() {
   super();
   this.state = {
     allArticles: [],
     types: [],
     errors: false
   }
 };
 
 componentDidMount () {
   fetchAllArticles()
     .then((data) => this.setState(
       {allArticles: data.results}))
       .catch(err => this.setState({ error: "Something went wrong, please try again"}))
 };

 goToCategory = (section) => {
  fetchType(section)
  .then(data => {
    this.setState({allArticles: data.results})
  })
  .catch(err => this.setState({ error: "Something went wrong, please try again" }))
 };


 
 render() {
   return (
     <main>
      <section>
       <NavBar 
       handleCategoryChange={this.state.allArticles}
       />
       <Routes>
        <Route exact path="/" element={
          <AllArticlesContainer
           allArticlesData={this.state.allArticles}
          />
         }/>
         {/* <Route exact path="/"
         element={() => 
          <ArticleTypeContainer
          typesData={this.state.allArticles}
          goToCategory={this.goToCategory}
          />
        }/> */}
        </Routes>
      </section>
     </main>
   )
 }
 
}
 
 
 
export default App;
