import { Button } from 'components/core/button/button';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

const ProjectNavComponent = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NavItems = styled.ul`
  list-style: none;
  text-align: center;
  display: flex;
  align-items: center;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;

const NavItem = styled.li``;

const NavButton = styled(Button)`
  color: ${Styles.Colors.textSubHeader};
  padding: ${Styles.Spaces.spacing4} ${Styles.Spaces.spacing16};

  &:hover,
  &:active {
    color: ${Styles.Colors.textOffBlack};
  }
`;

export function ProjectNav() {
  return (
    <ProjectNavComponent>
      <NavItems>
        {' '}
        <NavItem>
          <NavButton placeholder="Dashi-Gatsby" />
        </NavItem>
        <NavItem>
          <NavButton placeholder="City Page" />
        </NavItem>
        <NavItem>
          <NavButton placeholder="Autocomplete" />
        </NavItem>
        <NavItem>
          <NavButton placeholder="Homepage Hero" />
        </NavItem>
      </NavItems>
    </ProjectNavComponent>
  );
}
