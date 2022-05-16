import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import logo from "../../assets/images/logo-small.png"
import {twitter} from "../../assets/images/tw.png"
import './Headers.css'

const Header = () => {

    let navigate = useNavigate()
    const [search, setSearch] = useState('')
    const handleChange = (e) => setSearch(e.target.value)
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            navigate(`/browse/${search}`)
            setSearch('')
        }
    }

    return (
        <div className="headerItem">
            <Link to="/">
                <div className="headerLogo">
                    <img src={logo} className="logo" alt="logoMeal"/>
                </div>
            </Link>
            <div className="headerNav">
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/app">
                        <li>App</li>
                    </Link>
                    <Link to="/forum">
                        <li>Forum</li>
                    </Link>

                </ul>
            </div>
            <input className="headerInput" placeholder="Search" onChange={handleChange} onKeyPress={handleSearch} value={search}/>
        </div>
    );
};

export default Header;