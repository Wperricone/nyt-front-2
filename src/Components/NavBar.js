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
    const possibleCategories = [ 'home', 'Arts', 'Automobiles', 'Books', 'Business', 'Fashion', 'Food', 'Health', 'Home', 'Insider', 'Magazine', 'Movies', 'NY Region', 'Obituaries', 'Opinion', 'Politics', 'Real Estate', 'Science', 'Sports', 'Sunday Review', 'Technology', 'Theater', 'T-Magazine', 'Travel', 'Upshot', 'US' ];
    const categoryButtons = possibleCategories.map(category => {
      return (
        <Button key={category} name={category} onClick={event => this.handleCategoryChange(event)}>
          {category}
        </Button>
      )
    })
  
  
  return (
      <NavBarDiv className="nav-bar">
    <div>
      <h1>New York Times Top Stories</h1>
      </div>
        <ButtonsDiv>


        {/* <Button className="home" onClick={event => this.handleCategoryChange(event)}>Top Stories</Button> */}
        { categoryButtons }
        </ButtonsDiv>


    </NavBarDiv>
  )
}
};


export default NavBar;

const Button = styled.button`
align-self: center;
margin: 1%;
width: 100%
border-radius: 25px;
`;
const ButtonSection = styled.section`
border: solid pink 3px;
`
const NavBarDiv = styled.div`

`
const ButtonsDiv = styled.div`
display: grid;
grid-template-columns: repeat(9, 1fr);
grid-gap: 10px;
`
//align-items: center;
// display: flex;
// flex-direction: row;
// justify-content: center;