import React, { useState } from "react";
import "./style.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaUsers, FaRupeeSign } from "react-icons/fa";
import { BsFillFuelPumpFill, BsSpeedometer } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";

const Cards = ({ filteredCarCards }) => {

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
    </div>
  );
};

export default Cards;
