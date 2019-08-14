import styled from 'styled-components';
import { Styles } from 'vars';

export const HeadshotImg = styled.img`
  height: 100%;
`;

export const HeadshotImgContainer = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
  border: 4px rgba(0, 0, 0, 0.02) solid;
`;

export const HeroBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const HomepageHeroContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Titles = styled.div`
  margin-top: 2rem;
`;
