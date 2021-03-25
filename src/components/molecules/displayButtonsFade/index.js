import React from "react"
import Button, { ButtonTheme } from "../../atoms/buttons"
import "./style.css"

const DisplayButtonsFade = () => {
  return (
    <tr>
      <td>
        <b>Fade</b>
      </td>
      <td>
        <Button theme={ButtonTheme.FADE}>Fade</Button>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  )
}

export default DisplayButtonsFade
