import styled from 'styled-components';

export const Navigation = styled.div`
  position: sticky;
  margin: 10px;
  border-bottom: 1px solid #393C49;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const NavigationInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (min-width: 800px){
      width: 50%;
      margin-left: -90px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-family: 'Bitter', serif;
`;

export const SearchSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  color: #ABBBC2;
  height: 25px;
  background: #2D303E;
  border-radius: 6px;
  border: 1px solid #393C49;
  outline: none;
  font-size: 16px;
  font-family: 'Nunito', sans-serif;
`;
