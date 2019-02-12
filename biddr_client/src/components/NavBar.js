import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => {
    const { currentUser, onSignOut = () => {} } = props;

    const handleSignOutClick = event => {
        event.preventDefault();
        onSignOut();
    };

    return(
        <nav>
            <NavLink exact to="/"> Home </NavLink>
            <NavLink exact to="/"> Auctions </NavLink>
            {currentUser ? (
            <>
            <span>💲{currentUser.full_name}💲</span>
            <a href="#not-used" onClick={handleSignOutClick}>
            Sign Out
            </a>
            </>
            ) : (
            <NavLink exact to="/sign_in">
            Sign In
            </NavLink>
            )}
        </nav>
    )
}

export default NavBar;