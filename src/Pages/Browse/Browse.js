import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import "./Browse.css"

const Browse = () => {

    const {name} = useParams()
    const [browse, setBrowse] = useState([])

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
            .then(({data}) => setBrowse(data.meals))
    },[name])

    return (
        <div className="row">
            {
                browse.map((meal) => (
                    <div className="col-3" key={meal.id} >
                        <img src={meal.strMealThumb} alt="meals" width="200px"/>
                        <h4 className="meals">{meal.strMeal}</h4>
                    </div>
                ))
            }
        </div>
    );
};

export default Browse;