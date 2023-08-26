import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-default navbar-transparent navbar-fixed-top" role="navigation">
      <div className="container">
        <div className="navbar-header page-scroll">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand page-scroll" href="/"><b>Smart Diagnosis</b></a>
        </div>
        {/* Collect the nav links, forms, and other content for toggling */}
        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav navbar-left">
            {/* Hidden li included to remove active class from about link when scrolled up past about section */}
            <li className="hidden">
              <a className="page-scroll" href="#intro" />
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/survey">Survey</Link>
            </li>
            <li>
              <Link to="/treatment">Treatment</Link>
            </li>
          </ul>
        </div>
        {/* /.navbar-collapse */}
      </div>
      {/* /.container */}
    </nav>
  );
}

export default Navbar;