import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BlockedNormal = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <Path
      d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8ZM2 8a5.961 5.961 0 0 1 1.115-3.471l8.356 8.356A5.99 5.99 0 0 1 2 8Zm10.885 3.471L4.529 3.115a5.991 5.991 0 0 1 8.356 8.356Z"
      style={{
        fill: "#9ac0fa",
      }}
    />
  </Svg>
);
export default BlockedNormal;
