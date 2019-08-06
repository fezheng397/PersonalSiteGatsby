import React from 'react';
import styled from 'styled-components';
import 'styles/pages/homepage.scss';
import { HomepageHero } from './homepage-hero/homepage-hero';

export class Homepage extends React.Component {
  public render() {
    return (
      <div className="container-lg homepage-hero">
        <HomepageHero />
      </div>
    );
  }
}
