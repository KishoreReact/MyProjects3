import React from 'react'
import { Button } from '@mui/material';
import './category.css'
import Sdata from './Sdata'

function Slidecard() {
  const Sdata = [
    {
        id: 1,
        title: "Fashion",
        desc: "Discover the latest trends in clothing, shoes, and accessories.",
        cover: "../images/category/fashion.png"
    },
    {
        id: 2,
        title: "Electronics",
        desc: "Explore a wide range of electronic devices, gadgets, and appliances.",
        cover: "../images/category/electr.jpg"
    },
    {
        id: 3,
        title: "Home & Garden",
        desc: "Enhance your living space with furniture, decor, and gardening essentials.",
        cover: "../images/category/garden.jpg"
    },
    {
        id: 4,
        title: "Beauty & Personal Care",
        desc: "Find the perfect beauty products and personal care items for your needs.",
        cover: "../images/category/health.jpg"
    },
    {
        id: 5,
        title: "Sports & Outdoors",
        desc: "Gear up for your favorite outdoor activities with sports equipment and gear.",
        cover: "../images/category/cat5.png"
    },
    {
        id: 6,
        title: "Books & Media",
        desc: "Immerse yourself in a world of books, movies, music, and more.",
        cover: "../images/category/cat6.png"
    },
    {
        id: 7,
        title: "Toys & Games",
        desc: "Find fun and entertaining toys and games for all ages.",
        cover: "../images/category/cat7.png"
    },
    {
        id: 8,
        title: "Health & Wellness",
        desc: "Prioritize your well-being with health products and wellness essentials.",
        cover: "../images/category/cat8.png"
    },
    {
        id: 9,
        title: "Automotive",
        desc: "Equip your vehicle with automotive parts, accessories, and tools.",
        cover: "../images/category/cat9.png"
    },
    {
        id: 10,
        title: "Pets & Animals",
        desc: "Spoil your furry friends with pet supplies and accessories.",
        cover: "../images/category/cat10.png"
    },
    {
        id: 11,
        title: "Food & Beverages",
        desc: "Satisfy your cravings with a variety of delicious food and beverages.",
        cover: "../images/category/cat11.png"
    }
];

  return (
    <>
    {Sdata.map((value,index)=>{
  return(
    <div className='box d_flex top' key={index}>
      <div className='left'>
        <h2>{value.title}</h2>
        <p>{value.desc}</p>
        <Button className='btn-primary'>Visit {value.title}</Button>
      </div>
      <div className='right'>
        <img src={require("../images/category/garden.png")} alt="" className='img'/>
      </div>
    </div>
  )
})}

    </>
  )
}

export default Slidecard