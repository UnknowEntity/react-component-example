import React from "react"
import Button, { ButtonColor, ButtonTheme, ButtonSize } from "./atoms/buttons"

export default function Header(props) {
  return (
    <>
      <Button
        size={ButtonSize.MEDIUM}
        theme={ButtonTheme.DEFAULT}
        color={ButtonColor.RED}
      >
        Yeah!
      </Button>
      <Button
        size={ButtonSize.MEDIUM}
        theme={ButtonTheme.DEFAULT}
        color={ButtonColor.BLUE}
      >
        Yeah!
      </Button>
      <Button
        size={ButtonSize.MEDIUM}
        theme={ButtonTheme.DEFAULT}
        color={ButtonColor.YELLOW}
      >
        Yeah!
      </Button>
      <Button
        size={ButtonSize.MEDIUM}
        theme={ButtonTheme.DEFAULT}
        color={ButtonColor.GREEN}
      >
        Yeah!
      </Button>
      <Button
        size={ButtonSize.MEDIUM}
        theme={ButtonTheme.DEFAULT}
        color={ButtonColor.RED}
        border={true}
      >
        Yeah!
      </Button>
      <Button
        size={ButtonSize.MEDIUM}
        theme={ButtonTheme.DEFAULT}
        color={ButtonColor.BLUE}
        border={true}
      >
        Yeah!
      </Button>
      <Button
        size={ButtonSize.MEDIUM}
        theme={ButtonTheme.DEFAULT}
        color={ButtonColor.YELLOW}
        border={true}
      >
        Yeah!
      </Button>
      <Button
        size={ButtonSize.MEDIUM}
        theme={ButtonTheme.DEFAULT}
        color={ButtonColor.GREEN}
        border={true}
      >
        Yeah!
      </Button>
      <Button
        size={ButtonSize.MEDIUM}
        theme={ButtonTheme.STRAIGHT}
        color={ButtonColor.RED}
      >
        Yeah!
      </Button>
      <Button
        size={ButtonSize.MEDIUM}
        theme={ButtonTheme.FADE}
        color={ButtonColor.RED}
      >
        Yeah!
      </Button>
    </>
  )
}
