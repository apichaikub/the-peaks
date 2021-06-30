import React from "react"
import { render, screen } from "../../../test-utils"
import ButtonIconBookmark, { Props } from "../../../../components/Combine/ButtonIconBookmark"

describe("<ButtonIconBookmark/>", () => {
  it("should render button component and show an active icon", () => {
    const props : Props = {
      active: true,
      text: 'ADD BOOKMARK'
    }
    render(<ButtonIconBookmark { ...props } />)

    const buttonElement = screen.getByTestId('t-btn')
    const buttonText = screen.getByText('ADD BOOKMARK')
    const imgElement = screen.getByTestId('t-img')
    const imgRole = screen.getByRole('active')

    expect(buttonElement).toBeInTheDocument()
    expect(buttonText).toHaveTextContent('ADD BOOKMARK')
    expect(imgElement).toBeInTheDocument()
    expect(imgRole).toBeInTheDocument()
  })

  it("should render button component and show an inactive icon", () => {
    const props : Props = {
      active: false,
      text: 'REMOVE BOOKMARK'
    }
    render(<ButtonIconBookmark { ...props } />)

    const buttonElement = screen.getByTestId('t-btn')
    const buttonText = screen.getByText('REMOVE BOOKMARK')
    const imgElement = screen.getByTestId('t-img')
    const imgRole = screen.getByRole('inactive')

    expect(buttonElement).toBeInTheDocument()
    expect(buttonText).toHaveTextContent('REMOVE BOOKMARK')
    expect(imgElement).toBeInTheDocument()
    expect(imgRole).toBeInTheDocument()
  })
})