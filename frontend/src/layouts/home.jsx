import React, { useEffect } from "react";
import Carousol from "../components/Main/Home/Carousol";
import GameCart from "../components/Main/Home/GameCart";
import NavBar from "./NavBar";
import Footer from "../components/Main/Footer";
import { increaseVisitors } from '../Api/visitors';

const Home = () => {
    useEffect(() => {
        increaseVisitors()
      }, [])
    return (
        <>
            <NavBar />
            <Carousol />
            <GameCart />
            <Footer />
        </>
    )
}
export default Home