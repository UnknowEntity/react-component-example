import React from "react"
import DisplayButtonsBorderColor from "../../molecules/displayButtonsBorderColor"
import DisplayButtonsColor from "../../molecules/displayButtonsColor"
import DisplayButtonsFade from "../../molecules/displayButtonsFade"
import DisplayButtonsSize from "../../molecules/displayButtonsSize"
import DisplayButtonsStraight from "../../molecules/displayButtonStraight"
import DisplayButtonsDisabled from "../../molecules/displayButtonsDisabled"
import "./style.css"

export default function ButtonsDisplay() {
  return (
    <div className="root">
      <div className="row">
        <table>
          <DisplayButtonsColor />
          <DisplayButtonsBorderColor />
          <DisplayButtonsStraight />
          <DisplayButtonsSize />
          <DisplayButtonsFade />
          <DisplayButtonsDisabled />
        </table>
      </div>
    </div>
  )
}
