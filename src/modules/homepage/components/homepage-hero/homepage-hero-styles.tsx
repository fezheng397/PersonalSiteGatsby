import styled from "styled-components";
import { Styles } from "vars";
import { Container } from "components/core/container/container";

export const HeadshotImg = styled.img`
  height: 100%;
`;

export const HeadshotImgContainer = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
  border: 4px rgba(0, 0, 0, 0.02) solid;
`;

export const HeroBanner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${Styles.Spaces.spacing8} ${Styles.Spaces.spacing6};
`;

export const HomepageHeroContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${Styles.Colors.bgGray};
`;

export const Titles = styled.div`
  margin-top: 2rem;
`;
