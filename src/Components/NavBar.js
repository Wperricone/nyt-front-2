import { render } from "@testing-library/react";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


class NavBar extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      allArticles: []
    
  }
}

  handleCategoryChange = event => {
    this.setState({[event.target.name]: event.target.value})
    console.log("HERE", event.target.value)
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

        <button className="home">Top Stories</button>
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