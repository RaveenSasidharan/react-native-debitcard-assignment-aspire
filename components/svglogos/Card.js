import * as React from "react";
import Svg, { Defs, Path } from "react-native-svg";
const Card = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Defs></Defs>
    <Path
      d="M0 0h24v24H0z"
      style={{
        fill: "transparent",
      }}
    />
    <Path
      d="M23.5 11H.5a.474.474 0 0 0-.5.5v7.053a2.485 2.485 0 0 0 2.5 2.519h19a2.485 2.485 0 0 0 2.5-2.519V11.5a.474.474 0 0 0-.5-.5Zm-20 4.03h4a.504.504 0 0 1 0 1.008h-4a.504.504 0 0 1 0-1.008Zm7 3.023h-7a.504.504 0 0 1 0-1.008h7a.504.504 0 0 1 0 1.008Zm8.5 0a1.68 1.68 0 0 1-1-.3 1.68 1.68 0 0 1-1 .3 2.015 2.015 0 0 1 0-4.03 1.68 1.68 0 0 1 1 .3 1.68 1.68 0 0 1 1-.3 2.015 2.015 0 0 1 0 4.03ZM21.5 3h-19C1.1 3 0 4.378 0 6.132v1.253c0 .376.2.626.5.626h23c.3 0 .5-.251.5-.626V6.132C24 4.378 22.9 3 21.5 3Z"
      className="b"
    />
  </Svg>
);
export default Card;
