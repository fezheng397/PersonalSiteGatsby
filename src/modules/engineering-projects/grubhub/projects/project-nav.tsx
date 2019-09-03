import { Button } from 'components/core/button/button';
import { CenteredSectionHeader } from 'components/core/headers/headers';
import { SVGComponent } from 'components/core/icon/svgComponents';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  checkRelativePosition,
  getCurrentWindowPosition,
  scrollTo,
  WindowUtil,
} from 'utilities/window-util';
import { Styles } from 'vars';

export interface IProjectNavProps {
  navPosFixed: (fixed: boolean) => void;
  selectNewProject: (newProject: number) => void;
}

export interface IProjectNavState {
  fixPosition: boolean;
  projectNavOffsetY: number;
}

const ProjectNavComponent = styled.div`
  ${(props: { fixPosition?: boolean }) =>
    props.fixPosition
      ? `position: fixed; top: 0; box-shadow: ${Styles.Shadows.imageShadow};`
      : 'position: relative'}
  background: ${Styles.Colors.primaryWhite};
  height: 124px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9000;



`;

const NavItems = styled.ul`
  list-style: none;
  text-align: center;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;

const NavItem = styled.li``;

const NavButton = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 ${Styles.Spaces.spacing16};
  color: ${Styles.Colors.textLightBlack};

  ${Styles.MediaQuery.md} {
    margin-top: 10px;
    padding: 0 ${Styles.Spaces.spacing10};
  }

  &:hover,
  &:focus,
  &:active {
    color: ${Styles.Colors.textOffBlack};

    #autocomplete-icon-rotated_svg__IPhone {
      transform: rotate(-10deg) scale(1.3);
      transform-origin: 50% 50%;
      transition: all 0.25s ease-out;
    }

    #autocomplete-icon-rotated_svg__Search {
      transform: rotate(6deg) translateY(3px) scale(1.3);
      transform-origin: 50% 50%;
      transition: all 0.25s ease-out;
    }

    #project-icon__background {
      transform: scale(0.9);
      transform-origin: 50% 50%;
      transition: all 0.25s ease-out;
    }

    #get-the-app-icon_svg__grubhub {
      transform: scale(1.8);
      transform-origin: 50% 50%;
      transition: all 0.25s ease-out;
    }

    #get-the-app-icon_svg__google-play {
      transform: rotate(15deg) scale(0.9) translateX(15px);
      transform-origin: 50% 50%;
      transition: all 0.25s ease-out;
    }

    #get-the-app-icon_svg__apple-appstore {
      transform: rotate(-15deg) scale(0.9) translateX(-15px);
      transform-origin: 50% 50%;
      transition: all 0.25s ease-out;
    }

    #get-the-app-icon_svg__IPhone {
      transform: scale(1.3);
      transform-origin: 50% 50%;
      transition: all 0.25s ease-out;
    }

    #gatsby-icon_svg__logo {
      transform: scale(1.25);
      transform-origin: 50% 50%;
      transition: all 0.25s ease-out;
    }

    #city-icon_svg__restaurant {
      transform: scale(1.3) translateY(7px);
      transform-origin: 50% 50%;
      transition: all 0.25s ease-out;
    }

    #city-icon_svg__building {
      transform: scale(1.2);
      transform-origin: 50% 50%;
      transition: all 0.25s ease-out;
    }
  }
`;

const AnimatedIcon = styled(SVGComponent)`
  width: 75px;
  height: 75px;
  margin-bottom: ${Styles.Spaces.spacing2};

  #autocomplete-icon-rotated_svg__IPhone {
    transform: rotate(0) scale(1);
    transform-origin: 50% 50%;
    transition: all 0.25s ease-out;
  }

  #autocomplete-icon-rotated_svg__Search {
    transform: rotate(0) translateY(0) scale(1);
    transform-origin: 50% 50%;
    transition: all 0.25s ease-out;
  }

  #project-icon__background {
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: all 0.25s ease-out;
  }

  #get-the-app-icon_svg__grubhub {
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: all 0.25s ease-out;
  }

  #get-the-app-icon_svg__google-play {
    transform: rotate(0) scale(1);
    transform-origin: 50% 50%;
    transition: all 0.25s ease-out;
  }

  #get-the-app-icon_svg__apple-appstore {
    transform: rotate(0) scale(1);
    transform-origin: 50% 50%;
    transition: all 0.25s ease-out;
  }

  #get-the-app-icon_svg__IPhone {
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: all 0.25s ease-out;
  }

  #gatsby-icon_svg__logo {
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: all 0.25s ease-out;
  }

  #city-icon_svg__restaurant {
    transform: scale(1) translateY(0);
    transform-origin: 50% 50%;
    transition: all 0.25s ease-out;
  }
  #city-icon_svg__building {
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: all 0.25s ease-out;
  }
`;

export class ProjectNav extends React.Component<IProjectNavProps, {}> {
  public state = {
    fixPosition: false,
  };

  private projectNavRef;
  private projectNavOffsetY: number;

  constructor(props) {
    super(props);
    this.projectNavRef = React.createRef();
  }

  public render() {
    const { selectNewProject } = this.props;
    const { fixPosition } = this.state;
    const { projectNavRef } = this;

    return (
      <ProjectNavComponent
        id="project-nav-component"
        ref={projectNavRef}
        fixPosition={fixPosition}
      >
        <NavItems>
          <NavItem>
            <NavButton
              onClick={() => {
                selectNewProject(1);
              }}
            >
              <AnimatedIcon icon="GatsbyIcon" />
              <div>Dashi-Gatsby</div>
            </NavButton>
          </NavItem>
          <NavItem>
            <NavButton
              onClick={() => {
                selectNewProject(2);
              }}
            >
              <AnimatedIcon icon="CityIcon" />
              <div>City Page</div>
            </NavButton>
          </NavItem>
          <NavItem>
            <NavButton
              onClick={() => {
                selectNewProject(3);
              }}
            >
              <AnimatedIcon icon="AutocompleteIcon" />
              <div>Autocomplete</div>
            </NavButton>
          </NavItem>
          <NavItem>
            <NavButton
              onClick={() => {
                selectNewProject(4);
              }}
            >
              <AnimatedIcon icon="GetTheAppIcon" />
              <div>Get the App</div>
            </NavButton>
          </NavItem>
        </NavItems>
      </ProjectNavComponent>
    );
  }

  public componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
    this.projectNavOffsetY = document.getElementById(
      'project-nav-component',
    ).offsetTop;
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  public handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop >= this.projectNavOffsetY) {
      this.setState({ fixPosition: true });
      this.props.navPosFixed(true);
    } else {
      this.setState({ fixPosition: false });
      this.props.navPosFixed(false);
    }
  }
}
