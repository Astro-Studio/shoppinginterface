import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";

import { AnimatePresence } from "framer-motion";

function App({ current }) {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <AnimatePresence>
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/cart" component={Cart} />
            {!current ? (
              <Redirect to="/" />
            ) : (
              <Route exact path="/product/:id" component={SingleItem} />
            )}
          </Switch>
        </AnimatePresence>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
