import React from "react"
import Button, { ButtonSize } from "../../atoms/buttons"
import "./style.css"

const DisplayButtonsSize = () => {
  return (
    <tr>
      <td>
        <b>Size</b>
      </td>
      <td>
        <Button size={ButtonSize.SMALL}>Small</Button>
      </td>
      <td>
        <Button size={ButtonSize.MEDIUM}>Medium</Button>
      </td>
      <td>
        <Button size={ButtonSize.LARGE}>Large</Button>
      </td>
      <td></td>
    </tr>
  )
}

export default DisplayButtonsSize
