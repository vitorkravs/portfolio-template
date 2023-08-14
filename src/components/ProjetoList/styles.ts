import { darken } from 'polished';
import styled from 'styled-components';

interface ContainerProps{
    imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
    > a{
        position: relative;
        width:100%;
        height: 10rem;
        padding: 1.5rem;
        background: url(${props => props.imgUrl}) no-repeat center;
        background-size: cover;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        border-radius: .5rem;
        border: 1px solid ${({theme}) => theme.border};
        transition: .5s;
        cursor: pointer;
        overflow: hidden;

        &:hover{
            border-color: ${({theme}) => theme.primary};

            >div.overlay{
                opacity: .5;
            }
        }

        > section{
            z-index: 2;
            h1{
                color: white;
            }
            p{
                color: white;
            }
        }

        > div.overlay {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background: ${({theme}) => theme.gradientSecondary};
            opacity: .7;
            transition: 0.5s;
        }
    }

`;