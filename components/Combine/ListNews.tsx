import styled from "styled-components"
import { NewsItem } from "../../constants/news"
import Container from "../Base/Container"
import CardNews from "../Combine/CardNews"
import { TStyles } from '../Combine/CardNews'

const Wrapper = styled.div`
  margin-left: -15px;
  margin-right: -15px;

  @media (min-width: 0px) and (max-width: 991.98px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

const Item = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;
`

const style : TStyles = {
  body: {
    height: 345,
  },
  footer: {
    height: 130,
    backgroundColor: 'rgba(9, 53, 123, 0.9)',
    borderColor: '#388E3C',
    title: {
      fontSize: 20,
      limitLines: 2,
      lineHeight: 29,
    },
    summary: {
      fontSize: 14,
      limitLines: 2,
      lineHeight: 20,
    },
  },
}

type Props = {
  items: NewsItem[];
}

const ListNews = ({ items = [] } : Props) => {
  return (
    <Wrapper data-testid="t-news-items">
      { items.map((item, index) => (
        <Item key={index} data-testid="t-news-item">
          <CardNews
            id={item.id}
            cover={item.cover}
            title={item.title}
            summary={item.summary}
            styles={style}
          />
        </Item>
      )) }
    </Wrapper>
  )
}

export default ListNews