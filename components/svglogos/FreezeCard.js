import * as React from "react";
import Svg, { Defs, ClipPath, Path, G, Circle } from "react-native-svg";
const FreezeCard = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
    <Defs>
      <ClipPath id="a">
        <Path
          d="M0 0h25v8H0z"
          style={{
            fill: "#fff",
          }}
          transform="translate(-209 321)"
        />
      </ClipPath>
    </Defs>
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
        d="M17 7.437h-2.264L15.759 5.9l-1.768-1.175-1.809 2.712h-2.62V4.376l2.6-1.3-.949-1.9L9.562 2V0H7.437v2l-1.65-.824-.949 1.9 2.6 1.3v3.061h-2.62L3.009 4.725 1.241 5.9l1.023 1.537H0v2.125h2.265L1.241 11.1l1.768 1.179 1.81-2.716h2.619v2.619l-2.715 1.811L5.9 15.761l1.535-1.024V17h2.127v-2.264l1.538 1.025 1.18-1.768-2.718-1.812V9.563h2.619l1.81 2.716 1.768-1.179-1.024-1.538H17Z"
        style={{
          fill: "#9ac0fa",
        }}
        transform="rotate(45 -471.51 -83.62)"
      />
      <G
        style={{
          clipPath: "url(#a)",
        }}
      >
        <Path
          d="M17 7.437h-2.264L15.759 5.9l-1.768-1.175-1.809 2.712h-2.62V4.376l2.6-1.3-.949-1.9L9.562 2V0H7.437v2l-1.65-.824-.949 1.9 2.6 1.3v3.061h-2.62L3.009 4.725 1.241 5.9l1.023 1.537H0v2.125h2.265L1.241 11.1l1.768 1.179 1.81-2.716h2.619v2.619l-2.715 1.811L5.9 15.761l1.535-1.024V17h2.127v-2.264l1.538 1.025 1.18-1.768-2.718-1.812V9.563h2.619l1.81 2.716 1.768-1.179-1.024-1.538H17Z"
          style={{
            fill: "#f1f3f4",
          }}
          transform="rotate(45 -471.51 -83.62)"
        />
      </G>
    </G>
  </Svg>
);
export default FreezeCard;
