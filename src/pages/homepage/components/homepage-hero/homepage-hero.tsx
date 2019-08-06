import React from 'react';
import styled from 'styled-components';
import {
  HeadshotImg,
  HeadshotImgContainer,
  HeroBanner,
  HeroHeader,
  SubHeader,
  Titles,
} from './homepage-hero-styles';

export class HomepageHero extends React.Component {
  public render() {
    return (
      <HeroBanner>
        <HeadshotImgContainer>
          <HeadshotImg src={require('assets/pro-pic-min.png')} />
        </HeadshotImgContainer>
        <SubHeader>Hey, I'm</SubHeader>
        <HeroHeader>Felix Zheng</HeroHeader>
        <Titles>
          <SubHeader>Software Engineer</SubHeader>
          <SubHeader>Music Producer</SubHeader>
          <SubHeader>Entrepreneur</SubHeader>
        </Titles>
      </HeroBanner>
    );
  }
}
