import React from 'react'
import PropTypes from 'prop-types'
// import App from '../App'
import {
    Link,
} from "react-router-dom";
export default function Navbar(props) {
    return (
        <div><nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutTextify}</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    {/* <div className={`custom-control custom-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-3 mr-4`}>
                        <input type="checkbox" className="custom-control-input " onClick={props.toggleMode} id="customSwitch1" />
                        <label className="custom-control-label mx-1" htmlFor="customSwitch1">Dark Mode</label>

                    </div> */}
                    {/* <!-- Rounded switch --> */}
                    <div className={`darkModeContainer text-${props.mode === 'light' ? 'dark' : 'light'} mx-3 mr-4`}>
                        <label className="switch">
                            <input type="checkbox" onClick={props.toggleMode} />
                            <span className="slider round"></span>
                        </label>
                        <div className='dark'>Dark Mode</div>
                    </div>
                </div>
            </div>
        </nav></div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutTextify: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutTextify: 'About Textify',
}