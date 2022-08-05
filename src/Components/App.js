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
       //.then(data => (console.log("DATA", data.results.url)))
       .catch(err => this.setState({ error: "Something went wrong, please try again"}))
 };

 updateSection = (section) => {
  fetchType(section)
  .then((data) => this.setState(
    {allArticles: data.results}))
 };


//  goToCategory = (data) => {
//   // fetchType(section)
//   // .then(data => {
//     this.setState({allArticles: '', types: this.state.types})
//   }

 


 
 render() {
   return (
     <main>
      <section>
       <NavBar 
       //handleCategoryChange={this.state.allArticles}
       updateSection={this.updateSection}
       //goToCategory={this.goToCategory}
       />
       <Routes>
        <Route exact path="/" element={
          <AllArticlesContainer
           allArticlesData={this.state.allArticles}
          />
         }/>
         {/* <Route exact path="/${section}"
         element={() => 
          <ArticleTypeContainer
          typesData={this.state.${section}}
          //goToCategory={this.goToCategory}
          /> */}

        </Routes>
      </section>
     </main>
   )
 }
 
}
 
 
 
export default App;
