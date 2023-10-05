import React, { useState } from "react";
import { resultData } from "../../config";
import "./style.css";
import {AiOutlineSearch,AiOutlineDown} from "react-icons/ai"
import Cards from "../Cards/Cards";
import ReactPaginate from "react-paginate";


const items = resultData;


function Home() {

    function filterData(searchText,filteredCarCards){
        const data = filteredCarCards.filter((car)=>{
           return car?.CarName?.toLowerCase()?.includes?.(searchText.toLowerCase())  })
           return data

    }

    const[searchText,setSearchText] = useState("");
    const[filteredCarCards,setFilteredCarCards] = useState(items)

    // Pagination code


    const [itemOffSet, setItemOffset] = useState(0);

    const itemsPerPage = 6;
    const endOffset = itemOffSet + itemsPerPage;
    const currentItems = items.slice(itemOffSet, endOffset);
    const pageCount = Math.ceil(items.length/itemsPerPage)

    // function of handle page change

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset)
    }

   


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
      </div>
      {filteredCarCards &&
        filteredCarCards.map((car)=>{
          <div>
            <Cards filteredCarCards={...car} />
          </div>
        })
      }
      <div >     
        <Items currentItems={currentItems} itemsPerPage={itemsPerPage}/>
         <ReactPaginate 
         className={'car-sale_pagination'}
         previousLabel={'< Pre'}
         breakLabel="..."
         nextLabel={'Next >'}
         pageCount={pageCount}
         marginPagesDisplayed={"2"}
         onPageChange={handlePageClick}
         />
      </div>
    </div>
  );
};

export  function Items({currentItems}){
  currentItems && currentItems.map((item) => {
    <>
       <div className="cards">
       <Cards filteredCarCards={...item} />
       </div>
       </>
 }
)}

export default Home;
