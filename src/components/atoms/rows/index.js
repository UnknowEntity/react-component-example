import React from "react"
import "./style.css"

/**
 *
 * @param {{children: React.Node, className: String}} props
 * @returns
 */
const Rows = props => {
  const { children, className } = props
  return <div className={`rows ${className}`}>{children}</div>
}

export default Rows
