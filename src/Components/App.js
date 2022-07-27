import React, { Component } from "react";
//import styled from "styled-components";
import { Route, Routes } from 'react-router-dom';
import { fetchAllArticles, fetchType } from './apiCalls';
import AllArticlesContainer from './AllArticlesContainer';
 
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
 
 render() {
   return (
     <main>
      <section>
       <h1>NYT!</h1>
       <Routes>
        <Route exact path="/" element={
          <AllArticlesContainer
           allArticlesData={this.state.allArticles}
          />
         }/>
        </Routes>
      </section>
     </main>
   )
 }
 
}
 
 
 
export default App;
