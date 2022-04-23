/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

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
  opacity?: number;
  scale?: { x: number; y: number };
}

const Moon: React.FC<MoonProps> = ({ opacity = 1, scale = { x: 1, y: 1 } }) => {
  const { x, y } = scale;
  return (
    <img
      css={style}
      src="res/moon.png"
      style={{ opacity, transform: `scale( ${x}, ${y} )` }}
    />
  );
};

export default Moon;
