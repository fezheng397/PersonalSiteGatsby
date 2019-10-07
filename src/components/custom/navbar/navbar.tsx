import Burger from '@animated-burgers/burger-rotate';
import '@animated-burgers/burger-rotate/dist/styles.css';
import { Container } from 'components/core/container/container';
import { Icon } from 'components/core/icon/icon';
import { StyledLink } from 'components/core/link/link-styles';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface INavbarProps {}

export interface INavbarState {}

const NavbarComponent = styled.div`
  height: 72px;
  width: 100%;

  background: ${Styles.Colors.primaryWhite};
  z-index: ${Styles.Dimensions.baseZ + 5};
`;

const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLogo = styled(StyledLink)`
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

const HamburgerMenuContainer = styled.div`
  position: relative;
  height: 32px;
  width: 32px;
`;

const HamburgerMenu = styled(Burger)``;

export class Navbar extends React.Component {
  public render() {
    return (
      <NavbarComponent>
        <NavbarContainer size="lg">
          <NavbarLogo to="/">Felix Zheng</NavbarLogo>
        </NavbarContainer>
      </NavbarComponent>
    );
  }
}
