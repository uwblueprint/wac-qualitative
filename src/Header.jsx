import React, { Component } from 'react';
import logo from './logo.png';
import './styles/header.css';

class Header extends Component {
    render() {
        return <div className="header-container">
            <div className="container">
                <div>
                    <h2 className="text header">Dataset Bias Assessment Tool</h2>
                </div>
                <div>
                    <img className="logo" src={logo} alt="" />
                </div>
            </div>
            <p className="text subheader">Section 1/8</p>
            <h1 className="text title">Progress Title</h1>
        </div>

    }
}
export default Header;
