import { Button } from 'components/core/button/button';
import { CenteredSectionHeader } from 'components/core/headers/headers';
import { Icon } from 'components/core/icon/icon';
import { SVGComponent } from 'components/core/icon/svgComponents';
import { TransitionItem } from 'components/core/transition/transition';
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
  fab?: boolean;
  selectNewProject: (newProject: number) => void;
}

export interface IProjectNavState {
  fixPosition: boolean;
  projectNavFabVisible: boolean;
  projectNavFabOpen: boolean;
  projectNavOffsetY: number;
}

const ProjectNavComponent = styled.div`
  position: relative;
  background: ${Styles.Colors.primaryWhite};
  height: 124px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
    margin-top: 9.5px;
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

const ProjectNavFab = styled.div`
  position: fixed;
  cursor: pointer;
  bottom: 24px;
  right: 20px;
  height: 70px;
  width: 70px;
  background-color: ${Styles.Colors.textGHPurple};
  fill: ${Styles.Colors.primaryWhite};
  border-radius: 50%;
  box-shadow: ${Styles.Shadows.imageShadow};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectNavFabList = styled.ul`
  position: fixed;
  bottom: 100px;
  right: 20px;
`;

const ProjectNavFabItem = styled.li`
  display: flex;
  justify-content: flex-end;
`;

const ProjectNavFabItemLabel = styled.div`
  text-align: center;
  vertical-align: middle;
  padding: ${Styles.Spaces.spacing2};
  background: ${Styles.Colors.primaryWhite};
  margin-right: ${Styles.Spaces.spacing4};
`;

export class ProjectNav extends React.Component<IProjectNavProps, {}> {
  public state = {
    fixPosition: false,
    projectNavFabOpen: false,
    projectNavFabVisible: false,
  };

  private projectNavRef;
  private projectNavOffsetY: number;

  constructor(props) {
    super(props);
    this.projectNavRef = React.createRef();
  }

  public render() {
    const { fab, selectNewProject } = this.props;
    const { fixPosition, projectNavFabOpen, projectNavFabVisible } = this.state;
    const { projectNavRef } = this;

    if (fab) {
      return (
        <div>
          {fixPosition ? (
            <TransitionItem timeout={250} transitionType="fade">
              <ProjectNavFab onClick={this.toggleProjectNavFabList}>
                <Icon
                  icon="buffer"
                  width={32}
                  height={32}
                  fill={Styles.Colors.primaryWhite}
                />
              </ProjectNavFab>
            </TransitionItem>
          ) : null}

          {projectNavFabOpen
            ? this.renderProjectNavFabList(selectNewProject)
            : null}
        </div>
      );
    }

    return (
      <ProjectNavComponent id="project-nav-component" ref={projectNavRef}>
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

  public renderProjectNavFabList(
    selectNewProject: (newProject: number) => void,
  ) {
    return (
      <ProjectNavFabList>
        <ProjectNavFabItem>
          <ProjectNavFabItemLabel>Dashi-Gatsby</ProjectNavFabItemLabel>
          <NavButton
            onClick={() => {
              selectNewProject(1);
            }}
          >
            <AnimatedIcon icon="GatsbyIcon" />
          </NavButton>
        </ProjectNavFabItem>
        <ProjectNavFabItem>
          <ProjectNavFabItemLabel>City Page</ProjectNavFabItemLabel>
          <NavButton
            onClick={() => {
              selectNewProject(2);
            }}
          >
            <AnimatedIcon icon="CityIcon" />
          </NavButton>
        </ProjectNavFabItem>
      </ProjectNavFabList>
    );
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

  public toggleProjectNavFabList = () => {
    this.setState((prevState: IProjectNavState) => ({
      projectNavFabOpen: !prevState.projectNavFabOpen,
    }));
  }
}
