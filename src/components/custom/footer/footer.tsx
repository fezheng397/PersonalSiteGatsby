import React from "react";
import styled from "styled-components";
import { Styles } from "vars";

export interface IFooterProps {}

export interface IFooterState {}

const FooterComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${Styles.Colors.bgGray};
`;

const FooterContainer = styled.div`
  padding: ${Styles.Spaces.section16} 0;
`;

export class Footer extends React.Component {
  public render() {
    return (
      <FooterComponent>
        <FooterContainer>
          <h1>Footer</h1>
        </FooterContainer>
      </FooterComponent>
    );
  }
}
