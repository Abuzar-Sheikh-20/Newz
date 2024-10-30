import React from "react";
import { Link } from "react-router-dom";

const NavBar = ()=> {
  
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{position: 'fixed', width: '100%', top:'0', zIndex: '1000', boxShadow: '3px 0 8px'}}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Newz
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/general">
                    Home
                  </Link>
                </li>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "absolute",
                    right: "40px",
                  }}
                >
                  <li className="nav-item">
                    <Link className="nav-link" to="/general">
                      General
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/business">
                      Business
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/entertainment">
                      Entertainment
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/health">
                      Health
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/science">
                      Science
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sports">
                      Sports
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/technology">
                      Technology
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default NavBar;
