import React from 'react';
import mealImg from "../../assets/images/meal-icon.png"
import paypal from "../../assets/images/PayPal_logo.png"
import "./HomePage.css"
import MainInformation from "../../Components/MainInformation";
import LatestMeals from "../../Components/LatestMeals";
import RandomMeals from "../../Components/RandomMeals";
import BrowseNavigation from "../BrowseNavigation";

const HomePage = () => {
    return (
        <>
            <div className="row">
                <div className="colImg">
                    <img src={mealImg} alt="meal"/>
                </div>
                <div className="colText">
                    <h1>Welcome to TheMealDB</h1>
                    <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.</p>
                    <p>We also offer a
                        <a href="#" className="jsonLink"> free JSON API </a>
                        for anyone wanting to use it, with additional features for subscribers.
                    </p>
                    <button className="btnPayPal"><img src={paypal} alt="paypal" width="50px" className="btnImg"/>Подписатся</button>
                    <p>Click to Support $2 per month (cancel anytime)</p>
                    <p>Currently 750 supporters</p>
                </div>
                <div className="colImg colImgDel">
                    <img src={mealImg} alt="meal"/>
                </div>
            </div>
            <hr/>
            <MainInformation/>
            <LatestMeals/>
            <RandomMeals/>
            <BrowseNavigation/>
        </>
    );
};

export default HomePage;