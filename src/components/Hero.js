import React from "react";

import PropTypes from "prop-types";

import styled, { css } from "styled-components";

import { breakAt, BreakPointSizes } from "styles/BreakPoints";

const colorYellow = "#ffc107";

const Root = styled.div`
  color: #fff;
  padding: 100px 0;

  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
    /* configura imagem com a cor do fundo */
  `}
`;

const Content = styled.div`
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li::before {
    content: "\\2713\\0020";
    /* código para o check na lista */
    color: ${colorYellow};
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakPointSizes.sm)} {
    padding: 0 16px;
  }

  ${breakAt(BreakPointSizes.lg)} {
    width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
`;

const Hero = ({ image, children }) => (
  <Root image={image} data-testid="hero">
    <Container>
      <Content>{children}</Content>
    </Container>
  </Root>
);

Hero.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
  // node = aceita qualquer nó de elementos react
  // se o component aceitar somente um filho coloca o "element"
};

export default Hero;
