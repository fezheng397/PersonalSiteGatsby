import { Container } from 'components/core/container/container';
import { Icon } from 'components/core/icon/icon';
import { StyledLink } from 'components/core/link/link-styles';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface INavbarProps {}

export interface INavbarState {}

const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
  height: 72px;
  width: 100%;
  background: ${Styles.Colors.primaryWhite};
  z-index: ${Styles.Dimensions.baseZ + 5};
`;

const NavbarLogo = styled(StyledLink)`
  position: absolute;
  top: 0;
  height: 72px;
  font-family: ${Styles.Fonts.fontLogo};
  font-size: 20px;
  color: ${Styles.Colors.textLightBlack};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  letter-spacing: 2.75px;
`;

const LogoImage = styled.img`
  height: 40px;
  width: 40px;
`;

export class Navbar extends React.Component {
  public render() {
    return (
      <NavbarContainer>
        <Container size="lg">
          <NavbarLogo to="/">Felix Zheng</NavbarLogo>
        </Container>
      </NavbarContainer>
    );
  }
}
