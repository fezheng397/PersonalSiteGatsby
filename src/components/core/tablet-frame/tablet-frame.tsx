import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface ITabletFrameProp {
  caption?: string;
  imageAlt: string;
  imageSrc: string;
}

export const StyledTabletFrame = styled.img`
  width: 500px;
  height: 400px;
  border-radius: 25px;
  border: 5px #f6f6f6 solid;
  box-shadow: ${Styles.Shadows.imageShadow};
  ${(props: { isCaption?: boolean }) =>
    props.isCaption ? `margin-bottom: ${Styles.Spaces.section8};` : null}

  ${Styles.MediaQuery.sm} {
    width: 272px;
    height: 240px;
  }
`;

export const TabletFrameContainer = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  margin: ${Styles.Spaces.section8};

  ${Styles.MediaQuery.md} {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const TabletFrameCaption = styled.h5`
  color: ${Styles.Colors.textLightBlack};
  font-weight: ${Styles.Fonts.weightBold};
`;

export const TabletFrameRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${Styles.MediaQuery.md} {
    flex-direction: column;
  }
`;

export function TabletFrame({ caption, imageAlt, imageSrc }: ITabletFrameProp) {
  return (
    <TabletFrameContainer>
      <StyledTabletFrame
        alt={imageAlt}
        isCaption={caption ? true : false}
        src={imageSrc}
      />
      {caption ? <TabletFrameCaption>{caption}</TabletFrameCaption> : null}
    </TabletFrameContainer>
  );
}
