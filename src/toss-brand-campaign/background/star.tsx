/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Tween } from "react-gsap";

interface StarProps {
  progress?: number;
}

const style = css`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200%;
  margin: 0 auto;
`;

const Star: React.FC<StarProps> = ({ progress = 0 }) => {
  return (
    <Tween
      from={{ opacity: 0, transfrom: "translate3d(0px, 0px, 0px)" }}
      to={{ opacity: 1, transfrom: "translate3d(0px, 1337.41px, 0px)" }}
      totalProgress={progress}
      paused
    >
      <img css={style} src="res/newstar.png" />
    </Tween>
  );
};

export default Star;
