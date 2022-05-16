import React, {useEffect, useState} from 'react';
import "./LatestMeals.css"
import axios from "axios";
import {Link} from "react-router-dom";

const LatestMeals = () => {

    const [latest, setLatest] = useState([])

    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/latest.php')
            .then((res) => {
                setLatest(res.data.meals)
            })
    },[])

    return (
        <>
            <div className="latest">
                <h3>Latest Meals</h3>
                <div className="row">
                    {
                        latest.map((meal) => (
                            <div className="col-3" key={meal.idMeal}>
                                <Link to={`/meals/${meal.idMeal}`}>
                                    <div className="meal">
                                        <img src={meal.strMealThumb} alt="meal"/>
                                        <h2 className="mealTitle">{meal.strMeal}</h2>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            <hr/>
        </>
    );
};

export default LatestMeals;