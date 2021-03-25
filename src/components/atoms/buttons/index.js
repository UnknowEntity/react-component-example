import React from "react"
import "./style.css"

export const ButtonTheme = {
  DEFAULT: "",
  STRAIGHT: "straight",
  FADE: "fade",
}

export const ButtonSize = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
}

export const ButtonColor = {
  BLUE: "blue",
  RED: "red",
  GREEN: "green",
  YELLOW: "yellow",
}

/**
 *
 * @param {{color: string, theme: string, size: string, onClick: Function, children: React.Node, disabled: boolean, border: boolean}} props
 * @returns
 */
const Button = props => {
  const { color, onClick, children, theme, size, disabled, border } = props
  let disable = disabled ? "disabled" : ""
  let isBorder = border ? "border" : ""
  const classProps = `${color} ${theme} ${size} ${disable} ${isBorder}`

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classProps}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  color: ButtonColor.BLUE,
  theme: ButtonTheme.DEFAULT,
  size: ButtonSize.MEDIUM,
  onClick: () => {},
  disabled: false,
  border: false,
}

export default Button
