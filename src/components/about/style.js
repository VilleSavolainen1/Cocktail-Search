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
    margin-top: 160px;
    padding: 20px;
    justify-content: center;
    border-radius: 6px;
    @media only screen and (min-width: 800px){
        width: 40%;
    }
`;

export const Header = styled.h1`
    font-family: 'Bitter', serif;
    color: #fff;
    font-size: 42px;
`;
