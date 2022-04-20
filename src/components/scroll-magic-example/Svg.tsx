/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, PlayState } from "react-gsap";

const svgStyle = css`
  overflow: hidden;
  .section {
    height: 70vh;
  }
  #polygon {
    stroke: yellowgreen;
    stroke-width: 8;
    stroke-linejoin: round;
    fill: black;
  }
  svg {
    display: block;
    height: 280px;
    width: 320px;
    margin: auto;
    overflow: visible;
  }
`;

const Svg = () => (
  <div css={svgStyle}>
    <div className="section" />
    <Controller>
      <Scene
        duration={100}
        pin={false}
        reverse={true}
        indicators={true}
        offset={140}
      >
        {(progress: any, event: { type: string; scrollDirection: string }) => {
          //console.log(event);

          return (
            <svg>
              <Tween
                duration={2}
                to={{
                  attr: {
                    points:
                      "264,115 183,103 150,30 116,103 36,115 93,172 80,249 150,215 219,249 208,171",
                  },
                  fill: "purple",
                  ease: "Elastic.easeInOut",
                }}
                paused
                playState={
                  event.type === "enter" && event.scrollDirection === "FORWARD"
                    ? PlayState.play
                    : event.type === "enter" &&
                      event.scrollDirection === "REVERSE"
                    ? PlayState.reverse
                    : undefined
                }
              >
                <polygon
                  id="polygon"
                  points="240,220 240,182 240,145 240,70 155,70 112,70 70,70 70,145 70,220 155,220"
                />
              </Tween>
            </svg>
          );
        }}
      </Scene>
      <div className="section" />
    </Controller>
    <div className="section" />
  </div>
);

export default Svg;
