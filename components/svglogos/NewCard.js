import * as React from "react"
import Svg, { Defs, G, Circle, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */
const NewCard = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
    <Defs></Defs>
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
        d="M387.881 300.224h-.79v-.79a.766.766 0 1 0-1.532 0v.79h-.79a.766.766 0 0 0 0 1.532h.79v.79a.766.766 0 0 0 1.532 0v-.79h.79a.766.766 0 0 0 0-1.532Z"
        style={{
          fill: "#f1f3f4",
        }}
        transform="translate(-576.6 24.064)"
      />
      <Path
        d="M-189.509 317.518a2.407 2.407 0 0 0-2.281-2.517h-10.929a2.407 2.407 0 0 0-2.281 2.517.2.2 0 0 0 .187.207h15.113a.2.2 0 0 0 .191-.207ZM-189.509 319.413v.936a.415.415 0 0 1-.424.436 4.1 4.1 0 0 0-4.138 4.567.422.422 0 0 1-.4.468h-8.248a2.407 2.407 0 0 1-2.281-2.515v-3.89a.2.2 0 0 1 .187-.21h15.113a.2.2 0 0 1 .191.208Z"
        className="c"
      />
    </G>
  </Svg>
);
export default NewCard;
