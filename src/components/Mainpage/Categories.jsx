import React from 'react'
import './category.css'

function Categories() {
    const data = [
        {
            cateImg: "../images/category/fashion.png",
            cateName: "Fashion",
        },
        {
            cateImg: "../images/category/fashion.png",
            cateName: "Electronics",
        },
        {
            cateImg: "../images/category/fashion.png",
            cateName: "Home & Garden",
        },
        {
            cateImg: "../images/category/fashion.png",
            cateName: "Beauty & Personal Care",
        },
        {
            cateImg: "../images/category/fashion.png",
            cateName: "Sports & Outdoors",
        },
        {
            cateImg: "../images/category/fashion.png",
            cateName: "Books & Media",
        },
        {
            cateImg: "../images/category/fashion.png",
            cateName: "Toys & Games",
        },
        {
            cateImg: "../images/category/fashion.png",
            cateName: "Health & Wellness",
        },
        {
            cateImg: "../images/category/fashion.png",
            cateName: "Automotive",
        },
        {
            cateImg: "../images/category/fashion.png",
            cateName: "Pets & Animals",
        },
        {
            cateImg: "../images/category/fashion.png",
            cateName: "Food & Beverages",
        }
    ];
    
  return (
    <>
    <div className='category'>
        <myFunction/>
        {data.map((value, index)=>{
            return(
                <div className='box f_flex' key={index}> 
                <img src={require("../images/category/garden.png")} alt="" />
                <span>{value.cateName}</span>
                </div>
            )
        })

        }
    </div>
    </>
  )
}

export default Categories