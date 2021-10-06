import styled from 'styled-components';

export const Navigation = styled.div`
  position: fixed;
  width: 100%;
  background-color: #252836;
  height: 150px;
  margin: 0px;
  padding: 0px;
  border-bottom: 1px solid #393C49;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 6;
  @media only screen and (min-width: 800px){
    height: 70px;
  }
`;

export const NavigationInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media only screen and (min-width: 800px){
      flex-direction: row;
      width: 60%;
      margin-left: -100px;
      justify-content: space-between;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-family: 'Bitter', serif;
  cursor: pointer;
`;

export const LinkSection = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
`;

export const NavLink = styled.h4`
  color: #fff;
  font-family: 'Bitter', serif;
  cursor: pointer;
  margin: 10px;
`;

export const SearchSection = styled.div`
  display: flex;
  align-items: center;
  @media only screen and(min-width: 800px){
    margin-left: -100px;
  }
`;

export const Input = styled.input`
  color: #ABBBC2;
  height: 30px;
  width: 230px;
  background: #2D303E;
  border-radius: 6px;
  border: 1px solid #393C49;
  outline: none;
  font-size: 16px;
  font-family: 'Nunito', sans-serif;
`;
