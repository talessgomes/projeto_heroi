import React from "react";
import { Header } from "../../components/Header/Header";
import {Personagens} from "../../components/Personagens/Personagens"
import {Footer} from "../../components/Footer/Footer"
import {HomePageCointainer} from "./styled"
export const HomePage = () => {
    return (
        <HomePageCointainer>
            <Header/>
            <Personagens/>
            <Footer/>
        </HomePageCointainer>
    )
}