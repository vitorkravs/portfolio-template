import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;

    > section{
        margin-top: 8rem;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8rem;

        @media (max-width: 1000px){
            gap: 5rem;
        }

        @media (max-width: 700px){
            gap: 3rem;
            flex-wrap: wrap;
            margin-top: 5rem;
        }


    }
`;

export const ConhecimentoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    p {
        text-transform: uppercase;
        font-weight: 300;
        font-size: 1.3rem;
        color: ${({theme}) => theme.primary};
    }

    svg {
        width: 5rem;
        height: 5rem;
        color: ${({theme}) => theme.secondary};
        transition: 0.3s;
    }

    &:hover{
        svg{
            color: ${({theme}) => theme.primary};
            transform: scale(0.90);
        }
    }

    @media (max-width: 1100px){
        p{
            font-size: 1rem;
        }

        svg{
            width: 5rem;
            height: 5rem;
        }
    }

    @media (max-width: 790px){
        svg{
            width: 3.8rem;
            height: 3.8rem;
        }
    }
`;