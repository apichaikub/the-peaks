import Container from "../Base/Container"
import ListNews from "../Combine/ListNews"
import Sidebar from "../Combine/Sidebar"
import H2 from "../Base/H2"
import { NewsItem } from "../../constants/news"
import NotFoundData from "../Base/NotFoundData"

export type Props = {
  title: String;
  items: NewsItem[];
}

const News = ({ title, items = [] } : Props) => {
  return (
    <>
      <Sidebar padding="20px 0 30px 0">
        <H2 data-testid="t-title">{ title }</H2>
      </Sidebar>
      <Container>
        { items.length
        ? <ListNews
            items={items}
          />
        : <NotFoundData data-testid="t-not-found-data">Not found data 😵</NotFoundData> }
      </Container>
    </>
  )
}

export default News