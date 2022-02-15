import React from "react";
import {HeaderContainer} from "./styled"

export const Header = () => {
    return (
        <HeaderContainer>
            <input
            placeholder="Nome do Personagem"
            />
            <button>Buscar</button>
        </HeaderContainer>
    )
}