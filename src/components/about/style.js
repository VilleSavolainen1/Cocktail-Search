import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-top: 100px;
    padding: 20px;
    background-color: #1F1D2B;
    justify-content: center;
    border-radius: 6px;
    @media only screen and (min-width: 800px){
        width: 40%;
    }
`;

export const Header = styled.h1`
    font-family: 'Bitter', serif;
    color: #fff;
`;
