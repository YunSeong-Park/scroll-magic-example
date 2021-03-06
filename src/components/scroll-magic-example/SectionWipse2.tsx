/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const sectionWipes2Style = css`
  position: relative;
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100%;
    position: absolute;
    text-align: center;
  }
  .panel span {
    position: relative;
    display: block;
    top: 50%;
    font-size: 80px;
  }

  .panel.blue {
    background-color: #3883d8;
  }

  .panel.turqoise {
    background-color: #38ced7;
  }

  .panel.green {
    background-color: #22d659;
  }

  .panel.bordeaux {
    background-color: #953543;
  }
`;

const SectionWipes2 = () => (
  <div css={sectionWipes2Style}>
    <Controller>
      <Scene triggerHook="onLeave" duration="300%" pin>
        <Timeline wrapper={<div id="pinContainer" />}>
          <section className="panel blue">
            <span>Panel</span>
          </section>
          <Tween from={{ x: "-100%" }} to={{ x: "0%" }}>
            <section className="panel turqoise">
              <span>Panel</span>
            </section>
          </Tween>
          <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
            <section className="panel green">
              <span>Panel</span>
            </section>
          </Tween>
          <Tween from={{ y: "-100%" }} to={{ y: "0%" }}>
            <section className="panel bordeaux">
              <span>Panel</span>
            </section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  </div>
);

export default SectionWipes2;
