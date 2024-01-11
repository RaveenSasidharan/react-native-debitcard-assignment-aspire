import * as React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function NewCard(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      {...props}
    >
      <G transform="translate(213 -305)">
        <Circle
          cx={16}
          cy={16}
          r={16}
          transform="translate(-213 305)"
          fill="#325baf"
        />
        <Path
          d="M17.73 94.622h-.79v-.79a.766.766 0 10-1.532 0v.79h-.79a.766.766 0 000 1.532h.79v.79a.766.766 0 001.532 0v-.79h.79a.766.766 0 000-1.532z"
          transform="translate(-206.449 229.666)"
          fill="#f1f3f4"
        />
        <Path
          d="M16.94 87.852a2.407 2.407 0 00-2.281-2.517H3.73a2.407 2.407 0 00-2.281 2.517.2.2 0 00.187.207h15.113a.2.2 0 00.191-.207zM16.94 89.747v.936a.415.415 0 01-.424.436 4.1 4.1 0 00-4.138 4.567.422.422 0 01-.4.468H3.73a2.407 2.407 0 01-2.281-2.515v-3.89a.2.2 0 01.187-.21h15.113a.2.2 0 01.191.208z"
          transform="translate(-206.449 229.666)"
          fill="#9ac0fa"
        />
      </G>
    </Svg>
  );
}

export default NewCard;
