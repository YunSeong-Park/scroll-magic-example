/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Tween } from "react-gsap";

const style = css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
`;

interface MoonProps {
  progress?: number;
  opacity?: number;
  scale?: { x: number; y: number };
}

const Moon: React.FC<MoonProps> = ({ progress }) => {
  return (
    <Tween
      from={{ opacity: 0, transform: "scale( 0.8, 0.8 )" }}
      to={{ opacity: 1, transform: "scale( 1, 1 )" }}
      paused
      totalProgress={progress}
    >
      <img css={style} src="res/moon.png" />
    </Tween>
  );
};

export default Moon;
