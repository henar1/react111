// # React function bsed componenets
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default function header(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                        {/* {/* turnary operater (booleanvalue?, means True)what to display after true or false condition is after : "within this"} */}
                        { props.searchBar? <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>: "" }
                    </div>
                </div>
            </nav>
        </div>
    )
}
// for defaultprops, if nothing is defined as parent Component, then it will pick by default from defaultprops
header.defaultProps = {
    title: "Your Title is Here",
    searchBar: false
// props types will help the code to be most robust, when we do the inspection of any pageXOffset, 
// it will throw perfect result about type of the title, serachbar or other componenets pass
}
header.propTypes =  {
    title: PropTypes.string,
    searchBar: PropTypes.bool
}
