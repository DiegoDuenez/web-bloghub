import {React, Component } from "react";
import './navbar.css';
import { Link } from "react-router-dom"; 

class Navbar extends Component{

    render(){
        return (
        <nav className="navbar">
            <a>
                <Link className="navbar__link" to="/categories">Categorías</Link>
            </a>
            <a>
                <Link className="navbar__link" to="/administrator">Administrador</Link>
            </a>

            <div className="navbar__input-group">
                <input type="search" name="" id="" className="navbar__input" placeholder="Buscar..."/>
                <button type="submit" className="navbar__button">Buscar</button>
            </div>

            <div className="navbar__image">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="" />
                <a className="navbar__link" href="#">
                    Diego
                </a>
            </div>
        </nav>)
    }

}


export default Navbar;