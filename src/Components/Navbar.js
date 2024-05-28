import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-${props.mode} bg-${props.mode} navbar-expand-lg`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.brand}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.aboutText}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.contactText}</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>
                </div>

                <div className={`form-check form-switch mx-4 text-${props.mode === 'light'? 'dark': 'light'}`}>
                    <input className="form-check-input" type="checkbox" onChange={props.togglemode} role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'dark' ? ' Enable Light Mode':'Enable Dark Mode'}</label>
                </div>
            </div>
            h3
        </nav>
    )
}

Navbar.prototype = {
    aboutText: PropTypes.string.isRequired,
    contactText: PropTypes.string.isRequired,
};
