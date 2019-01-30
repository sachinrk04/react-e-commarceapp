import styled from "styled-components";

export const ButtonContainer = styled.button `
        text-transform: capitalize;
        font-size: 20px;
        background: transparent;
        border: 1px solid var(--lightBlue);
        border-color: ${props =>
                        props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
        color: ${props => 
                  props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
        border-radius:8px;
        padding: 5px 10px;
        cursor: pointer;
        margin:2px 5px 2px 0px; 
        transtition: all 0.5s ease-in-out;
        &:hover {
            background: ${props => 
                          props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
            color: var(--mainBlue);
        }
        &:focus {
            outline: none;
        }
    `;