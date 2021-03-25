import React from "react"
import Button, { ButtonColor } from "../../atoms/buttons"
import "./style.css"

const DisplayButtonsBorderColor = () => {
  return (
    <tr>
      <td>
        <b>Border</b>
      </td>
      <td>
        <Button color={ButtonColor.BLUE} border={true}>
          Blue
        </Button>
      </td>
      <td>
        <Button color={ButtonColor.RED} border={true}>
          Red
        </Button>
      </td>
      <td>
        <Button color={ButtonColor.YELLOW} border={true}>
          Yellow
        </Button>
      </td>
      <td>
        <Button color={ButtonColor.GREEN} border={true}>
          Green
        </Button>
      </td>
    </tr>
  )
}

export default DisplayButtonsBorderColor
