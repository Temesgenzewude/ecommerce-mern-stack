import React from "react";

import { useEffect } from "react";

import { Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./containers/Home/Home";
import Signup from "./containers/Signup/Signup";
import Login from "./containers/Login/Login";
import PrivateRoutes from "./components/HOC/privateRoutes";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions/auth.actions";
import Products from "./containers/Products/Products.container";
import Orders from "./containers/Orders/Orders.container";
import Category from "./containers/Categories/CategoryContainer";
import { getAllCategories } from "./actions";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    dispatch(getAllCategories());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/" exact />
          <Route element={<Products />} path="/products" />

          <Route element={<Orders />} path="/orders" />
          <Route element={<Category />} path="/categories" />
        </Route>

        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
