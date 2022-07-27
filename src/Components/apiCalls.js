
import React, { Component } from "react";
 
const fetchAllArticles = () => {
 return fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=TeAGxzYhts7jlgMweEAJNMLSRC9AbcfR')
   .then(res => {
     if(!res.ok) {
       throw new Error("Something went wrong")
     }
     return res.json();
   })
};
 
const fetchType = (section) => {
 return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=TeAGxzYhts7jlgMweEAJNMLSRC9AbcfR`)
   .then(res => {
     if(!res.ok) {
       throw new Error("Something went wrong")
     }
     return res.json();
   })
};
 
 
export {fetchAllArticles, fetchType}