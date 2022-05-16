import React, {useEffect, useState} from 'react';
import "./MealInfo.css"
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import "./MealInfo.css"

const MealInfo = () => {

    const {id} = useParams()
    const [meal, setMeal] = useState({})
    const [ingredients, setIngredients] = useState([])

    const getIngredients = (meal) => {
        let result = []
        for (let i = 0; i <20; i++) {
            if (meal[`strIngredient${i + 1}`]) {
                result = [...result, meal[`strIngredient${i + 1}`]]
            }
        }
        setIngredients(result)
    }

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((res) => {
                setMeal(res.data.meals[0])
                getIngredients(res.data.meals[0])
            })

    },[id])

    return (
        <div className="mealInfo">
            <div className="mealImg">
                <h2 className="titleInfo">{meal.strMeal}</h2>
                <img src={meal.strMealThumb} alt="mealImg" width="300px"/>
            </div>
            <div className="ingredients">
                <h2 className="titleInfo">Ingredients</h2>
                <div className="row">
                    {
                        ingredients.map((ingredient) => (
                            <Link to="/ingredients/name">
                                <div className="col-3" key={ingredient.id} >
                                    <img src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`} alt="ingredient"
                                         width="100px"/>
                                    <h4 className="nameIngredient">{ingredient}</h4>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MealInfo;