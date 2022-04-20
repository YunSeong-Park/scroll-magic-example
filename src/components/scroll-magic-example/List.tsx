/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Controller, Scene } from "react-scrollmagic";
import { Back } from "gsap";
import { Tween, Timeline } from "react-gsap";

const listStyle = css`
  overflow: hidden;
  .section {
    height: 70vh;
  }
  .devs,
  .devs2 {
    perspective: 4000px;
    left: 400px;
    position: relative;
    & li {
      font-size: 30px;
    }
  }
`;

const List = () => (
  <div css={listStyle}>
    <div className="section" />
    <Controller>
      <Scene duration={300} offset={300} pin>
        <Tween
          wrapper={<ul className="devs" />}
          from={{
            opacity: 0,
            cycle: {
              rotationX: [-90, 90],
              transformOrigin: ["50% top -100", "50% bottom 100"],
            },
          }}
          stagger={0.1}
        >
          <li>Rich Harris</li>
          <li>Dan Abramov</li>
          <li>Kyle Simpson</li>
          <li>Gregory Brown</li>
          <li>Addy Osmani</li>
          <li>Evan You</li>
          <li>Axel Rauschmayer</li>
          <li>Sarah Drasner</li>
          <li>André Staltz</li>
        </Tween>
      </Scene>
      <div className="section" />
      <Scene duration={300} offset={300} pin>
        <Tween
          wrapper={<ul className="devs2" />}
          from={{
            opacity: 0,
            cycle: {
              x: (i: number) => (i + 1) * 50,
            },
            ease: Back.easeOut,
          }}
          stagger={0.1}
        >
          <li>Rich Harris</li>
          <li>Dan Abramov</li>
          <li>Kyle Simpson</li>
          <li>Gregory Brown</li>
          <li>Addy Osmani</li>
          <li>Evan You</li>
          <li>Axel Rauschmayer</li>
          <li>Sarah Drasner</li>
          <li>André Staltz</li>
        </Tween>
      </Scene>
    </Controller>
    <div className="section" />
  </div>
);

export default List;
