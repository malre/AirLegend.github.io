 /*
import React, { Component } from 'react';
import { Spring } from 'react-spring';
import styled from 'styled-components';

const ScreenSizes = {
    DESKTOP: 992,
    TABLET: 768,
    PHONE: 576
  }
  const sizes = {
    desktop: ScreenSizes.DESKTOP,
    tablet: ScreenSizes.TABLET,
    phone: ScreenSizes.PHONE
  }
  // iterate through sizes and create a media template
 const media = 
   Object
     .keys(sizes)
    .reduce((acc, label) => {
        acc[label] = (...args) => css`
         @media (max-width: ${sizes[label] / 16}em) {
          ${css(...args)}
         }
        `
  return acc
  }, {});
  // use media methods with styled-component instead of raw @media queries
  const StyledContent = styled.div`
    width: 100%
     ${media.desktop`
       padding: 10px;
     `}
     ${media.tablet`
       padding: 15px;
       max-width: 700px;
     `}
     ${media.phone`
       padding: 20px;
       max-width: 900px;
     `}
  `;
  export class StyledCompCss extends React.Component {
    render() {
      return (
        <StyledContent>
          { this.children }
        </StyledContent>
      );
    }
  }
  */