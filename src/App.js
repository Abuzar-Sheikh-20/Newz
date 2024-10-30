import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const App = ()=> {
  const pageSize = 10;
  const country = "us";
  // const apikey = process.env.REACT_APP_NEWS_API


    return (
      <div>
        <Router>
          <NavBar/>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News 
                  pageSize={pageSize} 
                  country={country}
                  category="general"
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/business"
              element={
                <News 
                  key="business"
                  pageSize={pageSize} 
                  country={country}
                  category="business"
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News 
                  key="entertainment"
                  pageSize={pageSize} 
                  country={country}
                  category="entertainment"
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/general"
              element={
                <News 
                  key="general"
                  pageSize={pageSize} 
                  country={country}
                  category="general"
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/health"
              element={
                <News 
                  key="health"
                  pageSize={pageSize} 
                  country={country}
                  category="health"
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/science"
              element={
                <News 
                  key="science"
                  pageSize={pageSize} 
                  country={country}
                  category="science"
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/sports"
              element={
                <News 
                  key="sports"
                  pageSize={pageSize} 
                  country={country}
                  category="sports"
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/technology"
              element={
                <News 
                  key="technology"
                  pageSize={pageSize} 
                  country={country}
                  category="technology"
                />
              }
            >
              {" "}
            </Route>
          </Routes>
        </Router>
      </div>
    );
}

export default App