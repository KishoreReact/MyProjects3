import React from 'react'
import Head from '../../common/header/Head';
import Search from '../../common/header/Search';
import Navbar from '../../common/header/Navbar';
import Home from '../../components/Mainpage/Home';

function Landing() {
  return (
    <div>
         <Head/>
         <Search/>
         <Navbar/>
         <Home/>
         </div>
  )
}

export default Landing