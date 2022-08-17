import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2``;
const Info = styled.div``;

export const Card = () => {
  return (
    <Container>
      <Image src="../img/logo.png" />
      <Details>
        <ChannelImage />
        <Texts>
          <Title></Title>
          <ChannelName />
          <Info />
        </Texts>
      </Details>
    </Container>
  );
};
