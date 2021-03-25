import React from "react"
import Button, { ButtonColor } from "../../atoms/buttons"
import "./style.css"

const DisplayButtonsColor = () => {
  return (
    <tr>
      <td>
        <b>Color</b>
      </td>
      <td>
        <Button>Blue</Button>
      </td>
      <td>
        <Button color={ButtonColor.RED}>Red</Button>
      </td>
      <td>
        <Button color={ButtonColor.YELLOW}>Yellow</Button>
      </td>
      <td>
        <Button color={ButtonColor.GREEN}>Green</Button>
      </td>
    </tr>
  )
}

export default DisplayButtonsColor
