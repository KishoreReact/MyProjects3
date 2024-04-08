import React from 'react'
import KMC from '../../components/images/KMC.png'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./Header.css"
import "./Search.css"

const Search = () => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active",window.scrollY > 100)
  })
  return (
    <Router>
<>
<section className='search'>
  <div className='container c_flex'>
    <div className='kmc width'>
      <img src={KMC} 
      alt=''
      className='kmc'/>
    </div>

    <div className='search-box f_flex'>
      <i className='fa fa-search'></i>
      <input type='text' placeholder='search and hit enter'/>
      <span>All Category</span>
    </div>

    <div className='icon f_flex width'>
      <i className='icon-circle fa fa-user '></i>
      <div className='cart'>
        <Link to = "/cart"></Link>
        <i className='fa fa-shopping-bag icon-circle'></i>
      </div>
    </div>
  </div>
</section>
</>  
</Router>
)
}

export default Search