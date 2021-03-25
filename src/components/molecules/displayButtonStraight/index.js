import React from "react"
import Button, { ButtonColor, ButtonTheme } from "../../atoms/buttons"
import "./style.css"

const DisplayButtonsStraight = () => {
  return (
    <tr>
      <td>
        <b>Straight</b>
      </td>
      <td>
        <Button theme={ButtonTheme.STRAIGHT}>Blue</Button>
      </td>
      <td>
        <Button theme={ButtonTheme.STRAIGHT} color={ButtonColor.RED}>
          Red
        </Button>
      </td>
      <td>
        <Button theme={ButtonTheme.STRAIGHT} color={ButtonColor.YELLOW}>
          Yellow
        </Button>
      </td>
      <td>
        <Button theme={ButtonTheme.STRAIGHT} color={ButtonColor.GREEN}>
          Green
        </Button>
      </td>
    </tr>
  )
}

export default DisplayButtonsStraight
