import React, { useState } from "react";
import "./style.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaUsers, FaRupeeSign } from "react-icons/fa";
import { BsFillFuelPumpFill, BsSpeedometer } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";

const Cards = ({ filteredCarCards }) => {

  // // from react pagenate
  // // Here we use item offsets; we could also use page offsets
  // // following the API or data you're working with.
  // const [itemOffset, setItemOffset] = useState(0);
  // const itemsPerPage = 6;

  // // Simulate fetching items from another resources.
  // // (This could be items from props; or items loaded in a local state
  // // from an API endpoint with useEffect and useState)
  // const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  // const currentItems = items.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil(items.length / itemsPerPage);

  // // Invoke when user click to request another page.
  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % items.length;
  //   console.log(
  //     `User requested page number ${event.selected}, which is offset ${newOffset}`
  //   );
  //   setItemOffset(newOffset);
  // };

  // Main Data

  const [clicked, setClicked] = useState(true);
  const {
    Price,
    GearBox,
    Km,
    Fuel,
    MakeYear,
    MakeName,RootName,
    OriginalImgPath,
    ProfileId,
  } = filteredCarCards;
  return (
    <div className="car-cards">
      <div key={ProfileId} className="car-cards_info">
        <img
          className="car-cards_info_img"
          src={OriginalImgPath}
          alt="car_images"
        />
        <div className="car-info">
          <h3 className="car-cards_info_name">{MakeName+" "+RootName}</h3>
          <h4 className="car-cards_info_year">{MakeYear}</h4>
        </div>
        <div className="car-cards_sub-info">
          <div className="car-cards_sub-info_upper">
            <p>
              <FaUsers style={{color:"#4899EC"}}/> 4 People
            </p>
            <p>
              <BsFillFuelPumpFill style={{color:"#4899EC"}}/> {Fuel}
            </p>
          </div>
          <div className="car-cards_sub-info_lower">
            <p>
              <BsSpeedometer style={{color:"#4899EC"}}/>{Km+" kms"}
            </p>
            <p>
              <TbManualGearbox style={{color:"#4899EC"}}/>
              {GearBox}
            </p>
          </div>
        </div>
        <div className="car-cards_sub-info_Buy">
          <div className="car-cards_sub-info_Buy-price">
            <h3>
              <FaRupeeSign />
              {Price}
            </h3>
          </div>
          <div className="car-cards_sub-info_Buy-Now">
          {
            clicked ? 
            <button className="favorite" onClick={()=>setClicked(false)}><AiOutlineHeart className="favorite-img" style={{color:"#4999ED"}}/></button> 
            : <button className="favorite" onClick={()=>setClicked(true)}><AiFillHeart className="favorite-img" style={{color:"#4999ED"}}/></button> 
            }
            <button  className="car-cards_sub-info_rent-btn">Rent Now</button>
          </div>
        </div>
      </div>
      {/* <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </> */}
    </div>
  );
};

export default Cards;
