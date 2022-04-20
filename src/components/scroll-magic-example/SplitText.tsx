/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, SplitLetters, SplitChars } from "react-gsap";

const splitTextStyle = css`
  overflow: hidden;
  text-align: center;

  .section {
    height: 100vh;
  }
  .textContainer {
    position: relative;
    display: inline-block;
    transform-origin: center;
  }
  .text,
  .text2 {
    position: relative;
    font-size: 80px;
    font-weight: bold;
    display: inline-block;
  }
`;

const SplitText = () => (
  <div css={splitTextStyle}>
    <div className="section" />
    <Controller>
      <Scene pin={false} reverse={true} duration={500} offset={-300}>
        <Tween
          wrapper={<div className="textContainer" />}
          from={{
            left: -1000,
            rotation: -720,
            opacity: 0,
            color: "#ff0000",
            ease: "Expo.easeOut",
          }}
          stagger={0.15}
          onCompleteAll={() => {
            console.log("on complete all");
          }}
        >
          <SplitChars wrapper={<span className="text"></span>}>
            AIIIGHT
          </SplitChars>
        </Tween>
      </Scene>
      <div className="section" />
    </Controller>
    <div className="section" />
  </div>
);

export default SplitText;
