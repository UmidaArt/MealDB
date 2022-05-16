import React from 'react';
import "./BrowseNavigation.css"
import {Link} from "react-router-dom";

const BrowseNavigation = () => {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    return (
        <div className="navigation">
            <h3 className="navigationTitle">Browse By Name</h3>
            {
                alphabet.map(item => (
                    <Link to={`/browse/${item}`} key={item}><span className="spanBrowse"> / </span>{item.toUpperCase()} </Link>
                ))
            }
        </div>
    );
};

export default BrowseNavigation;