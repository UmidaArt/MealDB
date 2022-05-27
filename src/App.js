import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import AppPages from "./Pages/Api/ApiPages";
import MealInfo from "./Pages/MealInfo";
import NameIngredient from "./Pages/NameIngredient";
import NotFound from "./Pages/NotFound";
import Browse from "./Pages/Browse";

function App() {
  return (
    <BrowserRouter>
        <div className="header">
            <div className="container">
                <Header/>
            </div>
        </div>
        <div className="container">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AppPages/>}/>
                <Route path="/meals/:id" element={<MealInfo/>}/>
                <Route path="/ingredients/:nameMeal" element={<NameIngredient/>}/>
                <Route path="/browse/:name" element={<Browse/>}/>
                <Route path=""/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
