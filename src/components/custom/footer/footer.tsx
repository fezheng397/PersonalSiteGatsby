import { Icon } from 'components/core/icon/icon';
import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IFooterProps {}

export interface IFooterState {
  linkedInIconFill: string;
  instagramIconFill: string;
  githubIconFill: string;
  mailIconFill: string;
}

const FooterComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${Styles.Colors.bgGray};
`;

const FooterContainer = styled.div`
  text-align: center;
  padding: ${Styles.Spaces.section16} 0;
`;

const FooterIconRow = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterIconContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  transition: all 0.3s ease-in-out;
  margin: 0 ${Styles.Spaces.spacing4};

  &:hover {
    background: ${(props: { iconBGColor: string }) => props.iconBGColor};
  }
`;

const FooterIcon = styled(Icon)`
  z-index: ${Styles.Dimensions.baseZ};
`;

const iconDefaultFills = {
  linkedIn: '#0077b5',
  instagram: '#e1306c',
  github: '#24292e',
  mail: '#5ec3df',
};

const FooterHeader = styled.h2`
  color: ${Styles.Colors.textLightBlack};
  margin-bottom: ${Styles.Spaces.spacing4};
`;

const FooterHeaderContainer = styled.div`
  margin-bottom: ${Styles.Spaces.spacing8};
`;

export class Footer extends React.Component<IFooterProps, IFooterState> {
  public state = {
    githubIconFill: iconDefaultFills.github,
    linkedInIconFill: iconDefaultFills.linkedIn,
    instagramIconFill: iconDefaultFills.instagram,
    mailIconFill: iconDefaultFills.mail,
  };

  public render() {
    const {
      githubIconFill,
      instagramIconFill,
      linkedInIconFill,
      mailIconFill,
    } = this.state;

    return (
      <FooterComponent>
        <FooterContainer>
          <FooterHeaderContainer>
            <FooterHeader>Say hi!</FooterHeader>
            <p>I'm always down for coffee or a quick chat (:</p>
          </FooterHeaderContainer>

          <FooterIconRow>
            <li>
              <a
                href='https://www.linkedin.com/in/felixzheng3/'
                target='_blank'
              >
                <FooterIconContainer
                  iconBGColor={iconDefaultFills.linkedIn}
                  onMouseEnter={() => {
                    this.setState({
                      linkedInIconFill: Styles.Colors.primaryWhite,
                    });
                  }}
                  onMouseLeave={() => {
                    this.setState({
                      linkedInIconFill: iconDefaultFills.linkedIn,
                    });
                  }}
                >
                  <FooterIcon
                    icon='linkedin'
                    height={24}
                    width={24}
                    fill={linkedInIconFill}
                  />
                </FooterIconContainer>
              </a>
            </li>
            <li>
              <a href='https://github.com/fezheng397' target='_blank'>
                <FooterIconContainer
                  iconBGColor={iconDefaultFills.github}
                  onMouseEnter={() => {
                    this.setState({
                      githubIconFill: Styles.Colors.primaryWhite,
                    });
                  }}
                  onMouseLeave={() => {
                    this.setState({
                      githubIconFill: iconDefaultFills.github,
                    });
                  }}
                >
                  <FooterIcon
                    icon='github'
                    height={24}
                    width={24}
                    fill={githubIconFill}
                  />
                </FooterIconContainer>
              </a>
            </li>
            <li>
              <a href='mailto:fezheng397@gmail.com' target='_blank'>
                <FooterIconContainer
                  iconBGColor={iconDefaultFills.mail}
                  onMouseEnter={() => {
                    this.setState({
                      mailIconFill: Styles.Colors.primaryWhite,
                    });
                  }}
                  onMouseLeave={() => {
                    this.setState({
                      mailIconFill: iconDefaultFills.mail,
                    });
                  }}
                >
                  <FooterIcon
                    icon='envelope'
                    height={24}
                    width={24}
                    fill={mailIconFill}
                  />
                </FooterIconContainer>
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/ferix397/' target='_blank'>
                <FooterIconContainer
                  iconBGColor={iconDefaultFills.instagram}
                  onMouseEnter={() => {
                    this.setState({
                      instagramIconFill: Styles.Colors.primaryWhite,
                    });
                  }}
                  onMouseLeave={() => {
                    this.setState({
                      instagramIconFill: iconDefaultFills.instagram,
                    });
                  }}
                >
                  <FooterIcon
                    icon='instagram'
                    height={24}
                    width={24}
                    fill={instagramIconFill}
                  />
                </FooterIconContainer>
              </a>
            </li>
          </FooterIconRow>
        </FooterContainer>
      </FooterComponent>
    );
  }
}
