import React from "react"
import "./style.css"

/**
 *
 * @param {{children: React.Node, className: String}} props
 * @returns
 */
const Board = props => {
  const { children, size } = props
  return <div className={`board`}>{children}</div>
}

export default Board
