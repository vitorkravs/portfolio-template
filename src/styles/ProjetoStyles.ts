import { darken } from "polished";
import styled from "styled-components";

export const ProjetoContainer= styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    >main{
        margin: 2rem 0;
        width: 100%;
        padding: 0 5rem;


        p{
            color: ${({theme}) => theme.textSecondary};
            font-size: 1.5rem;
            font-weight: 300;
            text-align: justify;
        }

        button{
            background: ${({theme}) => theme.primary};
            margin-top: 2rem;
            padding: 0.8rem 3rem;
            border-radius: 0.5rem;
            border: none;
            transition: .5s;

            &:hover{
                background: ${({theme}) => darken(0.05, theme.primary)};
            }

            a{
                color: ${({theme}) => theme.secondary};
                text-transform: uppercase;
                font-size: 1rem;
                font-weight: 300;
            }
        }
    }

`