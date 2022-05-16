import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import "./RandomMeals.css"

const RandomMeals = () => {

    const [randomMeals, setRandomMeals] = useState([])

    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then((res) => {
                setRandomMeals(res.data.meals)
            })
    },[])
    return (
        <div className="random">
            <h3>Random Meals</h3>
            <div className="row">
                {
                    randomMeals.map((meal) => (
                        <div className="col-3" key={meal.idMeal}>
                            <Link to={`/meals/${meal.idMeal}`}>
                                <div className="meal">
                                    <img src={meal.strMealThumb} alt="random"/>
                                    <h2 className="mealTitle">{meal.strMeal}</h2>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default RandomMeals;