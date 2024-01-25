import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import About from "./About";
import Work from "./Work";
import {useNavigate} from 'react-router-dom';


const Home = () => {
const navigate=useNavigate();
  function handlechange(){
      navigate('/food');
  }
  return (
    <div className="home-container">
     
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <div>
           <button className="secondary-button" onClick={handlechange}>
            Order Now <FiArrowRight />
          </button>
          </div>
         
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      <About />
      <Work />
    </div>
  
  );
};

export default Home;