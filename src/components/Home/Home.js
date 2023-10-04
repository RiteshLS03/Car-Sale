import React, { useState } from "react";
import { resultData } from "../../config";
import "./style.css";
import {AiOutlineSearch,AiOutlineDown} from "react-icons/ai"
import Cards from "../Cards/Cards";



function Home() {

    function filterData(searchText,filteredCarCards){
        const data = filteredCarCards.filter((car)=>{
           return car?.CarName?.toLowerCase()?.includes?.(searchText.toLowerCase())  })
           return data

    }

    const[searchText,setSearchText] = useState("");
    const[filteredCarCards,setFilteredCarCards] = useState(resultData)

  return (
    <div id="main">
        {/* Searchbar */}
      <div id="search">
        <input type="text" id="searchbar" placeholder="search..." value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}>

          </input>
          <AiOutlineSearch className="search-img" onClick={()=>{
            const resData = filterData(searchText,resultData);
            console.log(resData);
            setFilteredCarCards(resData);

        }}></AiOutlineSearch> 
        <h5>Relevance </h5><AiOutlineDown className="search_scroll-down_img"></AiOutlineDown>
        <h5>All brands </h5><AiOutlineDown className="search_scroll-down_img"></AiOutlineDown>
      </div>

      
      {/* Cards List */}
      <div id="cars-list">
        {filteredCarCards.map((car) => {
        return (
            <div className="cards"z>
            <Cards filteredCarCards={...car} />
            </div>
        );
      })}
      </div>
    </div>
  );
};

export default Home;
