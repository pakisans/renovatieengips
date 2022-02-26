import React from "react";
import strings from "../../../localization";
import './navigation.scss'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaBars } from "react-icons/fa";

const Navigation2 = () => {
    return (
        <header id="header">
            <div className="header-items">
                <a href="/" className="brand">
                    <img src='images/logo.png' alt='logo'/>
                </a>
                <nav className="nav-primary">
                    <div className="menu-container">
                        <ul className="menu-menu">
                            <li>
                            <NavLink to="/"><a>{strings.navigation.home}</a></NavLink>
                            </li>
                            
                            <li>
                            <NavLink to="/services"><a>{strings.navigation.services}</a></NavLink>
                            </li>
                            <li>
                            <NavLink to="/projects"><a>{strings.navigation.project}</a></NavLink>
                            </li>
                            <li>
                            <NavLink to="/about-us"><a>{strings.navigation.referecnes}</a></NavLink>
                            </li>
                            <li>
                            <NavLink to="/contact"><a>{strings.navigation.contact}</a></NavLink>
                            </li>
                        </ul>
                    </div>
                    <span className="icons">
                            <img onClick={() => strings.setLanguage('nl')}
                                className="iconFr"
                                alt="Netherlands"
                                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/NL.svg"/>
                            <img onClick={strings.setLanguage('fr')}
                                className="iconFr"
                                alt="France"
                                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"/>
                            <img onClick={strings.setLanguage('en')}
                                className="iconFr"
                                alt="English"
                                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"/>
                    </span>
                    <div className="menu-button">
                        <FaBars size={20} className="bars" />
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navigation2;