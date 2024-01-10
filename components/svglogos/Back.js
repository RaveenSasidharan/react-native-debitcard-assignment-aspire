import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Back(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={24}
      viewBox="0 -960 960 960"
      width={24}
      {...props}
    >
      <Path d="M640-80L240-480l400-400 71 71-329 329 329 329-71 71z" 
       fill="#FFFFFF"/>
    </Svg>
  )
}

export default Back