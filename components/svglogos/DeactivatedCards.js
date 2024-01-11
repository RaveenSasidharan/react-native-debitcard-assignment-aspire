import * as React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";
const DeactivatedCards = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
    <G transform="translate(213 -305)">
      <Circle
        cx={16}
        cy={16}
        r={16}
        style={{
          fill: "#325baf",
        }}
        transform="translate(-213 305)"
      />
      <Path
        d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8ZM2 8a5.961 5.961 0 0 1 1.115-3.471l8.356 8.356A5.99 5.99 0 0 1 2 8Zm10.885 3.471L4.529 3.115a5.991 5.991 0 0 1 8.356 8.356Z"
        style={{
          fill: "#9ac0fa",
        }}
        transform="translate(-205 313)"
      />
      <Path
        d="M0 0h11.8v2H0z"
        style={{
          fill: "#f1f3f4",
        }}
        transform="rotate(45 -481.81 -83.958)"
      />
    </G>
  </Svg>
);
export default DeactivatedCards;
