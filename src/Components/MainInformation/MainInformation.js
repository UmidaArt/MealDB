import React from 'react';
import search from "../../assets/images/search.png"
import meal from "../../assets/images/total-meal.png"
import ingredients from "../../assets/images/total-ing.png"
import imgTotal from "../../assets/images/total-img.png"
import "./MainInformation.css"


const MainInformation = () => {
    return (
        <>
            <div className="mainSearchInfo">
                <form className="form">
                    <input type="text" className="inputSearch" placeholder="Search for a Meal ... "/>
                    <button className="searchBtn">
                        <img src={search} alt="search" width="15px"/>
                    </button>
                </form>
                <div className="total">
                    <div className="totalMeals">
                        <img src={meal} alt="meal"/>
                        <p>Total Meals: 283</p>
                    </div>
                    <div className="totalIngredients">
                        <img src={ingredients} alt="ingredients"/>
                        <p>Total Ingredients: 574</p>
                    </div>
                    <div className="totalImg">
                        <img src={imgTotal} alt="img"/>
                        <p>Images: 283</p>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    );
};

export default MainInformation;