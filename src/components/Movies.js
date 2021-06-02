import React from "react";
import styled from "styled-components";

import imageOne from "../images/star-wars-bad.jpg";

const Container = styled.div`
  margin-bottom: 40px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  border: 4px solid rgba(255, 255, 255, 0);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s !important;

  &:hover {
    border: 4px solid rgba(255, 255, 255, 0.8);
    transform: scale(1.05);
  }

  img {
    border-radius: 6px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.div`
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Movies = () => {
  return (
    <Container>
      <Title>Recommended for You</Title>
      <Content>
        <Wrap>
          <a href="/detail">
            <img alt="one" src={imageOne}></img>
          </a>
        </Wrap>
        <Wrap>
          <a href="/detail">
            <img alt="one" src={imageOne}></img>
          </a>
        </Wrap>
        <Wrap>
          <a href="/detail">
            <img alt="one" src={imageOne}></img>
          </a>
        </Wrap>
        <Wrap>
          <a href="/detail">
            <img alt="one" src={imageOne}></img>
          </a>
        </Wrap>
      </Content>
    </Container>
  );
};

export default Movies;
