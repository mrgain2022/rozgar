import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import constant from "./constant";
import Header from "./Components/common/Header";
import Footer from "./Components/common/Footer";
import AboutUs from "./Components/AboutUs/aboutus";
import blog from "./Components/Blog/blog";
import blogDetails from "./Components/Blog/blogDetails";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <>
            <Header />
            <Component {...rest} />
            <Footer />
        </>
    );
};


const Router = () => {
    return (
        <Routes>
            <Route
                exact
                path={constant.component.homePage.url}
                element={<PrivateRoute component={HomePage} />}
            />
            <Route
                exact
                path={constant.component.aboutUs.url}
                element={<PrivateRoute component={AboutUs} />}
            />
            <Route
                exact
                path={constant.component.Blog.url}
                element={<PrivateRoute component={blog} />}  
            />
            <Route
                exact
                path="/"
                element={<PrivateRoute component={HomePage} />}
            />

            <Route
                exact
                path={constant.component.blogDetails.url}
                element={<PrivateRoute component={blogDetails} />}
            />
        </Routes>
    )
}

export default Router;