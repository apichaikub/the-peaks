import React from "react"
import { render, screen } from "../../test-utils"
import Button from "../../../components/Base/Button"

describe("Button", () => {
  it("should render the button", () => {
    render(<Button>View BOOKMARK</Button>)
    const button = screen.getByText('View BOOKMARK')
    expect(button).toBeInTheDocument()
  })
})