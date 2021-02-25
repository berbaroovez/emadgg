import styled from "styled-components";
import Head from "next/head";
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>EmadGG | Streamer</title>
        <link rel="stylesheet" href="https://use.typekit.net/xft4ciz.css" />
      </Head>
      <HeroBanner>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </HeroBanner>
      <PageContainer>
        {/* <EmadLogo src="./EmadGGLogo.png" /> */}
        <div>
          <h2>EmadGG</h2>
          <h3>
            GG's <span className="onlyText">Only</span>
          </h3>
        </div>

        <EmadBody src="./EmadBody.png" />
      </PageContainer>
    </>
  );
}

const HeroBanner = styled.div`
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 70vh;
  background-color: #0093e9;
  background-image: linear-gradient(116deg, #04a2ff 0%, #80d0c7 100%);
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  transform: skewY(-8deg);
  transform-origin: 0;

  span:nth-child(1) {
    background: #139ce4;
    grid-column: 1/3;
  }
  span:nth-child(2) {
    background: #3eb8e5;
    grid-column: 3/5;
  }
  span:nth-child(3) {
    background: #3eb8e5;
    grid-column: 4/6;
    grid-row: 3;
  }
  span:nth-child(4) {
    background: #54c0db;
    grid-column: 4/7;
    grid-row: 4;
  }
  span:nth-child(5) {
    background: #26adeb;
    grid-column: 2/4;
    grid-row: 6;
  }
`;
const PageContainer = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 100px;
  max-width: 950px;
  color: white;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* border: 10px solid red;  */

  div {
    text-align: center;
  }
  h2 {
    /* padding-left: 80px; */
    margin-bottom: -20px;
    font-family: omnes-pro, sans-serif;
    font-weight: 800;
    font-style: italic;
    font-size: 80px;
  }
  h3 {
    margin-top: 0;
    font-family: omnes-pro, sans-serif;
    font-weight: 600;
    font-style: italic;
    font-size: 60px;

    span {
      color: #1bdcfb;
      -webkit-text-stroke: 1px white;
    }
  }

  @media (min-width: 850px) {
    justify-content: space-between;
    align-items: center;
    div {
      transform: translateX(50px);
    }
  }
`;
const EmadLogo = styled.img`
  position: absolute;

  height: 200px;
  width: 200px;
  -webkit-filter: invert(100%); /* Safari/Chrome */
  filter: invert(100%);
`;

const EmadBody = styled.img`
  /* grid-column: 1/2; */
  width: 300px;

  @media (min-width: 850px) {
    transform: translateX(-50px);
  }
`;
