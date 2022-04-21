import React from "react";
import { BrowserRouter as Router, Route, Navigate } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";

import "./App.css";

import { ContextController } from "./context";

const App = () => {
  return (
    <ContextController>
      <Router>
        <>
          <Navbar />
          <div className="container">
            <Navigate>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Navigate>
          </div>
        </>
      </Router>
    </ContextController>
  );
};

export default App;