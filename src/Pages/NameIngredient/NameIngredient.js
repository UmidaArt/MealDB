import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

const NameIngredient = () => {

    const {nameMeal} = useParams()
    const [nameIngredient, setNameIngredient] = useState({})

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v2/1/filter.php?i=${nameMeal}`)
            .then((res) => {
                setNameIngredient(res.data.meals[0])
                console.log(res.data.meals[0])
            })
    },[nameMeal])
    return (
        <div>
            
        </div>
    );
};

export default NameIngredient;