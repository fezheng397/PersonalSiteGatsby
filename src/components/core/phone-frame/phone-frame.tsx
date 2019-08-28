import React from 'react';
import styled from 'styled-components';
import { Styles } from 'vars';

export interface IPhoneFrameProp {
  caption?: string;
  imageAlt: string;
  imageSrc: string;
}

export const StyledPhoneFrame = styled.img`
  width: 265px;
  height: 500px;
  border-radius: 25px;
  border: 5px #f6f6f6 solid;
  box-shadow: ${Styles.Shadows.imageShadow};
  ${(props: { isCaption?: boolean }) =>
    props.isCaption ? `margin-bottom: ${Styles.Spaces.section8};` : null}

  ${Styles.MediaQuery.md} {
    width: 220px;
    height: 415px;
  }
`;

export const PhoneFrameContainer = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  margin: ${Styles.Spaces.section8};

  ${Styles.MediaQuery.md} {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const PhoneFrameCaption = styled.h5`
  color: ${Styles.Colors.textLightBlack};
  font-weight: 600;
`;

export function PhoneFrame({ caption, imageAlt, imageSrc }: IPhoneFrameProp) {
  return (
    <PhoneFrameContainer>
      <StyledPhoneFrame
        alt={imageAlt}
        isCaption={caption ? true : false}
        src={imageSrc}
      />
      {caption ? <PhoneFrameCaption>{caption}</PhoneFrameCaption> : null}
    </PhoneFrameContainer>
  );
}
