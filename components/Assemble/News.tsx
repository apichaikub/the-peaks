import Container from "../Base/Container"
import ListNews from "../Combine/ListNews"
import Sidebar from "../Combine/Sidebar"
import H2 from "../Base/H2"
import { NewsItem } from "../../constants/news"

type Props = {
  title: String;
  items: NewsItem[];
}

const News = ({ title, items = [] } : Props) => {
  return (
    <>
      <Sidebar padding="20px 0 30px 0">
        <H2>{ title }</H2>
      </Sidebar>
      <Container>
        <ListNews
          items={items}
        />
      </Container>
    </>
  )
}

export default News