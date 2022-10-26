import React from "react";
import { Link } from "react-router-dom";
import './style.css'

export function Menu(){
    return(
        <div className="menu">
            <Link to="/" className="item"> Home </Link>
            <Link to="/episodies" className="item"> Episodios </Link>
            <Link to="/about" className="item"> Sobre </Link>
            <Link to="/locations" className="item"> Localizações </Link>
        </div>
    )
}