import styled from 'styled-components';
import { Styles } from 'vars';

export const HeroHeader = styled.h1`
  font-size: 2.5rem;
`;

export const SubHeader = styled.h3`
  color: ${Styles.Colors.textSubHeader};
`;

export const SectionHeader2 = styled.h2`
  margin: ${Styles.Spaces.spacing8} 0;
`;

export const CenteredSectionHeader2 = styled(SectionHeader2)`
  text-align: center;
`;

export const SectionHeader = styled.h1`
  margin: ${Styles.Spaces.spacing8} 0;
`;

export const CenteredSectionHeader = styled(SectionHeader)`
  text-align: center;
`;

export const GHSectionHeader = styled(CenteredSectionHeader)`
  color: ${Styles.Colors.textGHPurple};
`;

export const SectionHeaderMajor = styled(CenteredSectionHeader)`
  font-size: 2.5em;
  padding: ${Styles.Spaces.spacing8} 0;

  &:after {
    content: "";
    border-bottom: solid 2px #e6e6e6;
    display: block;
    width: ${Styles.Spaces.spacing16};
    margin: ${Styles.Spaces.spacing8} auto 0 auto;
  }
`;

export const SectionSubHeader3 = styled.h3`
  font-weight: 400;
`;

export const SectionSubHeader4 = styled.h4`
  text-transform: uppercase;
  font-weight: 700;
`;

export const SectionSubHeader5 = styled.h5`
  text-transform: uppercase;
  font-weight: 700;
`;
