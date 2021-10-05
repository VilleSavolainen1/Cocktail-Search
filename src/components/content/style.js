import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const InnerContainer = styled.div`
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    margin-top: 100px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background: #1F1D2B;
    border-radius: 6px;
    padding: 10px;
    color: #fff;
    cursor: pointer;
`;
