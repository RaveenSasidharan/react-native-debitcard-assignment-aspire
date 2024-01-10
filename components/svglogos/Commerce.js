import * as React from "react"
import Svg, { Defs, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */
const Commerce = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17.047}
    height={12.375}
    {...props}
  >
    <Defs></Defs>
    <Path
      d="M387.881 300.224h-.79v-.79a.766.766 0 1 0-1.532 0v.79h-.79a.766.766 0 0 0 0 1.532h.79v.79a.766.766 0 0 0 1.532 0v-.79h.79a.766.766 0 0 0 0-1.532Z"
      style={{
        fill: "#f1f3f4",
      }}
      transform="translate(-371.6 -290.937)"
    />
    <Path
      d="M15.491 2.517A2.407 2.407 0 0 0 13.21 0H2.281A2.407 2.407 0 0 0 0 2.517a.2.2 0 0 0 .187.207H15.3a.2.2 0 0 0 .191-.207ZM15.491 4.412v.936a.415.415 0 0 1-.424.436 4.1 4.1 0 0 0-4.138 4.567.422.422 0 0 1-.4.468H2.281A2.407 2.407 0 0 1 0 8.304v-3.89a.2.2 0 0 1 .187-.21H15.3a.2.2 0 0 1 .191.208Z"
      className="b"
    />
  </Svg>
);
export default Commerce;
