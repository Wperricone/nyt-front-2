import { render } from "@testing-library/react";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { fetchType } from "./apiCalls";


class NavBar extends Component {
  constructor() {
    super();
    //this.props = props;
    this.state = {
      allArticles: [],
      //types: []
    
  }
};
handleCategoryChange = event => {
    // this.setState({[event.target.name]: event.target.value})
    console.log("HERE", event.target.name)
    // console.log("VALUE", event.target.value)
    const section = event.target.name
    this.props.updateSection(section)

    // fetchType(section)
    // .then(console.log("SECTION", section))
    // // .then((data) => this.setState(
    // //   {allArticles: data.results}))
    // //.then(data => this.props.goToCategory(data))
    // //.then(console.log("DATA", data))
    //   .catch(err => this.setState({ error: "Something went wrong, please try again"}))
};

   

  render() {
    const possibleCategories = ['Arts', 'Automobiles', 'Books', 'Business', 'Fashion', 'Food', 'Health', 'Home', 'Insider', 'Magazine', 'Movies', 'NY Region', 'Obituaries', 'Opinion', 'Politics', 'Real Estate', 'Science', 'Sports', 'Sunday Review', 'Technology', 'Theater', 'T-Magazine', 'Travel', 'Upshot', 'US' ];
    const categoryButtons = possibleCategories.map(category => {
      return (
        <button key={category} name={category} onClick={event => this.handleCategoryChange(event)}>
          {category}
        </button>
      )
    })
  
  
  return (
    <div className="nav-bar">
      <h1>New York Times Top Stories</h1>
      <div>
        
      </div>

        <button className="home" onClick={event => this.handleCategoryChange(event)}>Top Stories</button>
        { categoryButtons }

        {/* // <button className="categories">Arts</button>
        // <button className="categories">Automobiles</button>
        // <button className="categories">Books</button>
        // <button className="categories">Business</button>
        // <button className="categories">Fashion</button>
        // <button className="categories">Food</button>
        // <button className="categories">Health</button>
        // <button className="categories">Insider</button>
        // <button className="categories">Magazine</button>
        // <button className="categories">Movies</button>
        // <button className="categories">NY Region</button>
        // <button className="categories">Obituaries</button>
        // <button className="categories">Opinion</button>
        // <button className="categories">Politics</button>
        // <button className="categories">Real Estate</button>
        // <button className="categories">Science</button>
        // <button className="categories">Sports</button>
        // <button className="categories">Sunday Review</button>
        // <button className="categories">Technology</button>
        // <button className="categories">Theater</button>
        // <button className="categories">T-Magazine</button>
        // <button className="categories">Travel</button>
        // <button className="categories">Upshot</button>
        // <button className="categories">US</button>
        // <button className="categories">World</button> */}

    </div>
  )
}
};


export default NavBar;