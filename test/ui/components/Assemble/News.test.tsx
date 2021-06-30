import React from "react"
import { render, screen } from "../../../test-utils"
import News, { Props } from "../../../../components/Assemble/News"
import { NewsItem } from "../../../../constants/news"

describe("<News/>", () => {
  it("should render news component and show not found data", () => {
    const props : Props = {
      title: "Top stories",
      items: [],
    }
    render(<News { ...props }/>)

    const headingElement = screen.getByTestId('t-title')
    const notFoundElement = screen.getByTestId('t-not-found-data')

    expect(headingElement).toBeInTheDocument()
    expect(headingElement).toHaveTextContent('Top stories')

    expect(notFoundElement).toBeInTheDocument()
    expect(notFoundElement).toHaveTextContent('Not found data 😵')
  })

  it("should render news component and show list of news to equal 1", async () => {
    const items : NewsItem[] = [
      {
        id: 'technology/2021/jun/25/google-starts-warning-users-if-search-results-are-likely-to-be-poor',
        title: 'Google starts warning users if search results are likely to be poor',
        summary: 'New message warns that results are ‘changing quickly’ and may not yet include reliable sources',
        cover: '',  
      }
    ]
    const props : Props = {
      title: "Top stories",
      items,
    }
    render(<News { ...props }/>)

    const listingElement = screen.getByTestId('t-news-items')
    const itemsElements = screen.queryAllByTestId('t-news-items')

    expect(listingElement).toBeInTheDocument()
    expect(itemsElements.length).toEqual(1)
  })
})