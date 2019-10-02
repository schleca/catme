import styled from 'styled-components';

export const CatContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CatNameContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const CatNameImage = styled.img`
  width: 350px;
  padding-top: 130px;
  margin-right: -100px;
  @media (max-width: 768px) {
    padding-top: 20px;
    margin-bottom: -230px;
    z-index: 1;
    width: 250px;
  }
  @media (min-width: 768px) and (max-width: 1050px) {
    width: 200px;
  }
`;

export const CatTvContainer = styled.div`
  flex-grow: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;

  background-size: 78% 43%;
  background-position: center center;
  @media (min-width: 800px) {
    background-size: 300px 270px;
  }
`;

export const CatTvImage = styled.img`
  width: 100%;
  @media (min-width: 800px) {
    width: 475px;
  }
`;

export const CatRemoteContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-grow: 1;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;
export const CatRemoteImage = styled.img`
  width: 200px;
  margin-bottom: 0px;
  &:hover {
    margin-bottom: -15px;
  }
  @media (max-width: 768px) {
    margin-bottom: 0px;
    margin-top: -170px;
    width: 40%;
  }
  @media (min-width: 768px) and (max-width: 1050px) {
    margin-left: -300px;
  }

`
