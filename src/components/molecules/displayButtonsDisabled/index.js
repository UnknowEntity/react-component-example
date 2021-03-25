import React from "react"
import Button from "../../atoms/buttons"
import "./style.css"

const DisplayButtonsFade = () => {
  return (
    <tr>
      <td>
        <b>Disabled</b>
      </td>
      <td>
        <Button disabled={true}>Disabled</Button>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  )
}

export default DisplayButtonsFade
