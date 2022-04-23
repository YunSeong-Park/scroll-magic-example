/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface StarProps {
  opacity?: number;
  translate3d?: {
    x: number;
    y: number;
    z: number;
  };
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

const Star: React.FC<StarProps> = ({
  opacity = 1,
  translate3d = { x: 0, y: 0, z: 0 },
}) => {
  const { x, y, z } = translate3d;
  return (
    <img
      css={style}
      src="res/newstar.png"
      style={{ opacity, transform: `translate3d( ${x}px, ${y}px, ${z}px )` }}
    />
  );
};

export default Star;
