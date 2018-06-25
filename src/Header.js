import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
    active = {
        backgroundColor: "#212F3D",
        color: "white",
        fontWeight: "bold"
    };
    header = {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly"
    };
    render() {
        return (
            <div style={this.header}>
                <NavLink exact to="/" activeStyle={this.active}>
                Home
                </NavLink>
                <NavLink to="/2017-2018/dcs/dev_22/client_app/BookByRank" activeStyle={this.active}>
                Book By Rank
                </NavLink> 
                <NavLink to="/2017-2018/dcs/dev_22/client_app/BookByRankAuthor" activeStyle={this.active}>
                Book By Rank <b>&</b> Author_Rank
                </NavLink>
            </div>
);}}
export default Header;